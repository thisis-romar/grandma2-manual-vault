/**
 * migrate-internal-links.js — one-shot corrective pass that rewrites raw
 * internal `[text](key_*.html)` links in note bodies to `[[wikilinks]]`,
 * resolving each slug against the vault's own frontmatter.
 *
 * Usage: node migrate-internal-links.js [vault-root] [--dry-run]
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  buildSlugIndex,
  rewriteInternalLinks,
  IGNORE_DIRS,
  SKIP_FILES,
} from './lib/internal-links.js';

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const rootArg = args.find((a) => !a.startsWith('--'));
const VAULT_ROOT = rootArg
  ? path.resolve(rootArg)
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function run() {
  const slugIndex = await buildSlugIndex(VAULT_ROOT);
  console.log(`Slug index: ${slugIndex.size} notes${DRY_RUN ? '  (dry run)' : ''}`);

  let scanned = 0;
  let changed = 0;
  let rewritten = 0;
  const unresolved = new Map(); // slug -> count

  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.') && !IGNORE_DIRS.has(e.name))
          await walk(path.join(dir, e.name), r);
      } else if (e.name.endsWith('.md') && !SKIP_FILES.has(r)) {
        scanned++;
        const full = path.join(dir, e.name);
        const raw = await fs.readFile(full, 'utf8');
        const { text, resolved } = rewriteInternalLinks(raw, slugIndex, {
          onUnresolved: (slug) => unresolved.set(slug, (unresolved.get(slug) || 0) + 1),
        });
        rewritten += resolved;
        if (text !== raw) {
          changed++;
          if (!DRY_RUN) await fs.writeFile(full, text, 'utf8');
        }
      }
    }
  }
  await walk(VAULT_ROOT, '');

  const degraded = [...unresolved.values()].reduce((a, b) => a + b, 0);
  console.log(
    `\nNotes scanned: ${scanned}  ·  changed: ${changed}  ·  links rewritten: ${rewritten}  ·  degraded (unresolved): ${degraded}`,
  );
  if (unresolved.size) {
    console.log(`\nUnresolved slugs (${unresolved.size}):`);
    for (const [slug, n] of [...unresolved].sort((a, b) => b[1] - a[1]).slice(0, 30))
      console.log(`  ${String(n).padStart(3)}  ${slug}`);
  }
  if (DRY_RUN) console.log('\n(dry run — no files written)');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
