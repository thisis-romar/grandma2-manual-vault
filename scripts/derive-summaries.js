/**
 * derive-summaries.js — add a 1-line `summary:` to each note's frontmatter,
 * sourced from the note's own body (its `## Description` line, or first prose
 * sentence). This is a retrieval aid for an external brain indexer; the text is
 * the manual's own words, not generated.
 *
 * The summary is inserted as a single line just before the closing frontmatter
 * `---` — no YAML re-serialization, so existing frontmatter formatting is
 * untouched. Idempotent (skips notes that already have `summary:`) and skips MOC
 * index pages.
 *
 * Usage: node derive-summaries.js [vault-root] [--dry-run]
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const IGNORE_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  'scripts',
  '.obsidian',
  '_quartz',
  '.brain',
]);
const SKIP_FILES = new Set(['README.md', 'CLAUDE.md']);

/** Strip inline markdown to readable plain text. */
function cleanInline(s) {
  return s
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1') // [[a|b]] -> b
    .replace(/\[\[([^\]]+)\]\]/g, (_m, t) => t.split('/').pop()) // [[a/b]] -> b
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // [t](u) -> t
    .replace(/[*_`]/g, '')
    .replace(/\\([[\]()+@.#>-])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Derive a one-line summary from a note body, or '' if none is suitable. */
export function summaryFromBody(body) {
  const lines = body.split('\n');

  // Prefer the first prose line under a `## Description` heading.
  const descIdx = lines.findIndex((l) => /^#{1,6}\s+Description\s*$/i.test(l));
  const scan = (start) => {
    for (let i = start; i < lines.length; i++) {
      const raw = lines[i];
      const l = raw.trim();
      if (!l) continue;
      if (/^#{1,6}\s/.test(l)) {
        if (i === start - 1) continue; // the heading itself
        if (start > 0) break; // hit next heading inside Description block
        continue;
      }
      if (l.startsWith('>')) continue; // source callout / blockquote
      if (l.startsWith('![')) continue; // image
      if (l.startsWith('|')) continue; // table
      if (/^version\s+[\d.]+$/i.test(l)) continue; // "Version 3.9"
      const cleaned = cleanInline(l.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, ''));
      if (cleaned.length >= 12) return cleaned;
    }
    return '';
  };

  let text = descIdx >= 0 ? scan(descIdx + 1) : '';
  if (!text) text = scan(0);
  if (!text) return '';

  // First sentence, capped.
  const m = text.match(/^(.+?[.!?])(\s|$)/);
  let out = m ? m[1] : text;
  if (out.length > 240) out = out.slice(0, 237).replace(/\s+\S*$/, '') + '…';
  return out;
}

/** Escape a string for a YAML double-quoted scalar. */
const yamlDQ = (s) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

async function run() {
  const args = process.argv.slice(2);
  const DRY_RUN = args.includes('--dry-run');
  const rootArg = args.find((a) => !a.startsWith('--'));
  const VAULT_ROOT = rootArg
    ? path.resolve(rootArg)
    : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

  let scanned = 0;
  let added = 0;
  let skippedHas = 0;
  let noText = 0;
  const samples = [];

  async function walk(dir, rel) {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.') && !IGNORE_DIRS.has(e.name))
          await walk(path.join(dir, e.name), r);
        continue;
      }
      if (!e.name.endsWith('.md') || SKIP_FILES.has(r)) continue;
      const full = path.join(dir, e.name);
      const raw = await fs.readFile(full, 'utf8');
      const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
      if (!fm) continue;
      const front = fm[1];
      const type = (front.match(/^type:\s*"?([a-z-]+)"?/m) || [])[1];
      if (!type || type === 'moc') continue;
      scanned++;
      if (/^summary:/m.test(front)) {
        skippedHas++;
        continue;
      }
      const body = raw.slice(fm[0].length);
      const summary = summaryFromBody(body);
      if (!summary) {
        noText++;
        continue;
      }
      if (samples.length < 8) samples.push(`${r}\n      → ${summary}`);
      if (!DRY_RUN) {
        const insert = `summary: ${yamlDQ(summary)}\n`;
        const next = raw.replace(/^(---\n[\s\S]*?\n)(---\n?)/, `$1${insert}$2`);
        await fs.writeFile(full, next, 'utf8');
      }
      added++;
    }
  }
  await walk(VAULT_ROOT, '');

  console.log(
    `Notes: ${scanned}  ·  summaries ${DRY_RUN ? 'to add' : 'added'}: ${added}  ·  already had: ${skippedHas}  ·  no usable text: ${noText}`,
  );
  console.log('\nSamples:');
  for (const s of samples) console.log(`  ${s}`);
  if (DRY_RUN) console.log('\n(dry run — no files written)');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
