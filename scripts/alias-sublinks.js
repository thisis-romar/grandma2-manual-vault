/**
 * alias-sublinks.js
 * One-shot migration: give every path-qualified BODY wikilink a display alias,
 * so `[[Keywords/Assign keyword]]` reads as "Assign keyword" in Obsidian and on
 * the github-browse branch instead of leaking the full vault path.
 *
 * Body-only: frontmatter is preserved byte-for-byte — its typed-relation
 * wikilinks (section_ref, prev_page/next_page, related_key/_keyword, pages) must
 * stay bare. Shares aliasPathWikilinks() with extract.js + audit.js (one source
 * of truth). Idempotent (already-aliased links are skipped).
 *
 * Usage: node alias-sublinks.js [vault-root] [--dry-run]
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { aliasPathWikilinks, WIKILINK_RE, IGNORE_DIRS, SKIP_FILES } from './lib/internal-links.js';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const rootArg = args.find((a) => !a.startsWith('--'));
const VAULT_ROOT = rootArg
  ? path.resolve(rootArg)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Split a note into its leading frontmatter block (kept verbatim) and body.
const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---\r?\n?)([\s\S]*)$/;
function splitFrontmatter(raw) {
  const m = raw.match(FRONTMATTER_RE);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: raw };
}

async function processVault() {
  console.log(
    `Aliasing path-qualified body wikilinks in: ${VAULT_ROOT}${dryRun ? '  (dry-run)' : ''}`,
  );
  let scanned = 0;
  let changed = 0;
  let aliasedTotal = 0;
  let skippedTotal = 0;
  const skippedExamples = new Set();

  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const relPath = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.') && !IGNORE_DIRS.has(e.name)) await walk(full, relPath);
      } else if (e.name.endsWith('.md') && !SKIP_FILES.has(relPath)) {
        scanned++;
        const raw = await fs.readFile(full, 'utf8');
        const { fm, body } = splitFrontmatter(raw);
        const { text, aliased, skipped } = aliasPathWikilinks(body);
        if (skipped) {
          skippedTotal += skipped;
          for (const mm of body.matchAll(WIKILINK_RE)) {
            const inner = mm[1];
            if (inner.includes('|')) continue;
            const note = inner.split('#')[0].trim();
            if (
              note.includes('/') &&
              /[[\]|]/.test(note.split('/').pop()) &&
              skippedExamples.size < 20
            )
              skippedExamples.add(inner);
          }
        }
        if (aliased) {
          aliasedTotal += aliased;
          changed++;
          if (!dryRun) await fs.writeFile(full, fm + text, 'utf8');
        }
      }
    }
  }

  await walk(VAULT_ROOT, '');
  console.log(`  Notes scanned:      ${scanned}`);
  console.log(`  Notes changed:      ${changed}`);
  console.log(`  Links aliased:      ${aliasedTotal}`);
  console.log(`  Links skipped (un-aliasable basename): ${skippedTotal}`);
  if (skippedExamples.size)
    console.log(`  Skipped examples:\n    ${[...skippedExamples].join('\n    ')}`);
  if (dryRun) console.log('  (dry-run — no files written)');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  processVault().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
