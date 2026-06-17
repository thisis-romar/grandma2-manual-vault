/**
 * convert-links.js
 * Converts Obsidian [[wikilinks]] → relative markdown links [text](path)
 * for the github-browse branch.
 *
 * Usage: node convert-links.js [vault-root]
 * Called by .github/workflows/sync.yml on push to main.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const VAULT_ROOT = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Build a filename → relative path index from vault root
async function buildIndex(vaultRoot) {
  const index = new Map(); // "Note Title" → "Folder/Note Title.md"
  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(dir, e.name);
      const relPath = path.join(rel, e.name);
      if (e.isDirectory()) {
        if (!e.name.startsWith('.')) await walk(fullPath, relPath);
      } else if (e.name.endsWith('.md')) {
        const key = e.name.replace('.md', '');
        index.set(key, relPath);
      }
    }
  }
  await walk(vaultRoot, '');
  return index;
}

function convertWikilinks(content, currentRelPath, index) {
  const currentDir = path.dirname(currentRelPath);

  return content.replace(/\[\[([^\]]+)\]\]/g, (match, inner) => {
    // Handle [[Note|Alias]] syntax
    const [note, alias] = inner.split('|');
    const displayText = alias || note;

    const target = index.get(note.trim());
    if (!target) return `[${displayText}](./${note.trim()}.md)`; // best-effort

    const relTarget = path.relative(currentDir, target).replace(/\\/g, '/');
    return `[${displayText}](${relTarget})`;
  });
}

async function processVault() {
  console.log(`Converting wikilinks in: ${VAULT_ROOT}`);
  const index = await buildIndex(VAULT_ROOT);
  console.log(`  Index built: ${index.size} notes`);

  let count = 0;

  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(dir, e.name);
      const relPath = path.join(rel, e.name);
      if (e.isDirectory()) {
        if (!e.name.startsWith('.')) await walk(fullPath, relPath);
      } else if (e.name.endsWith('.md')) {
        const raw = await fs.readFile(fullPath, 'utf8');
        const converted = convertWikilinks(raw, relPath, index);
        if (converted !== raw) {
          await fs.writeFile(fullPath, converted, 'utf8');
          count++;
        }
      }
    }
  }

  await walk(VAULT_ROOT, '');
  console.log(`  Converted ${count} files with wikilinks.`);
}

processVault().catch(e => { console.error(e); process.exit(1); });
