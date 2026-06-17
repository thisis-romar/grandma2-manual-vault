/**
 * stats.js — compute vault statistics, print them, and write them into
 * README.md (the Map of Content stats table is filled by generate-moc.js).
 *
 * Usage: node stats.js   (prints + updates README.md)
 * Exports: computeStats(root), updateReadme(root, stats)
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const VAULT_ROOT_DEFAULT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function countDir(p) {
  try {
    const files = await fs.readdir(p, { recursive: true });
    return files.filter((f) => f.endsWith('.md')).length;
  } catch {
    return 0;
  }
}

export async function computeStats(root = VAULT_ROOT_DEFAULT) {
  const [sections, pages, keywords, keys, quickStart] = await Promise.all([
    countDir(path.join(root, 'Sections')),
    countDir(path.join(root, 'Pages')),
    countDir(path.join(root, 'Keywords')),
    countDir(path.join(root, 'Keys')),
    countDir(path.join(root, 'QuickStart')),
  ]);
  const total = sections + pages + keywords + keys + quickStart;
  return { sections, pages, keywords, keys, quickStart, total };
}

/** Replace the count cell in a `| Label | … |` markdown table row. */
function setRow(md, label, count) {
  const re = new RegExp(`(\\|\\s*${label}\\s*\\|)[^|\\n]*(\\|)`);
  return re.test(md) ? md.replace(re, `$1 ${count} $2`) : md;
}

export async function updateReadme(root = VAULT_ROOT_DEFAULT, stats) {
  const s = stats || (await computeStats(root));
  const readmePath = path.join(root, 'README.md');
  let md;
  try {
    md = await fs.readFile(readmePath, 'utf8');
  } catch {
    return false;
  }
  md = setRow(md, 'Sections', s.sections);
  md = setRow(md, 'Pages', s.pages);
  md = setRow(md, 'Keywords', s.keywords);
  md = setRow(md, 'Keys', s.keys);
  md = setRow(md, 'Quick Start', s.quickStart);
  await fs.writeFile(readmePath, md, 'utf8');
  return true;
}

function printStats(s) {
  console.log(`
grandMA2 Manual Vault — Stats
═══════════════════════════
  Sections   ${s.sections}
  Pages      ${s.pages}
  Keywords   ${s.keywords}
  Keys       ${s.keys}
  QuickStart ${s.quickStart}
  ─────────────────
  Total      ${s.total}
`);
}

// Run as CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const stats = await computeStats();
  printStats(stats);
  const wrote = await updateReadme(VAULT_ROOT_DEFAULT, stats);
  console.log(wrote ? '  README.md stats table updated.' : '  README.md not found — skipped.');
}
