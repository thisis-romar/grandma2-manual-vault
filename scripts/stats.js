/**
 * stats.js — print vault statistics
 * node stats.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const VAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function countDir(p) {
  try {
    const files = await fs.readdir(p, { recursive: true });
    return files.filter(f => f.endsWith('.md')).length;
  } catch { return 0; }
}

const [sections, pages, keywords, keys, qs] = await Promise.all([
  countDir(path.join(VAULT_ROOT, 'Sections')),
  countDir(path.join(VAULT_ROOT, 'Pages')),
  countDir(path.join(VAULT_ROOT, 'Keywords')),
  countDir(path.join(VAULT_ROOT, 'Keys')),
  countDir(path.join(VAULT_ROOT, 'QuickStart')),
]);

const total = sections + pages + keywords + keys + qs;

console.log(`
grandMA2 Manual Vault — Stats
═══════════════════════════
  Sections   ${sections}
  Pages      ${pages}
  Keywords   ${keywords}
  Keys       ${keys}
  QuickStart ${qs}
  ─────────────────
  Total      ${total}
`);
