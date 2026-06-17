/**
 * convert-links.js
 * Converts Obsidian [[wikilinks]] → relative markdown links [text](path)
 * for the github-browse branch.
 *
 * Resolution order (Obsidian-compatible):
 *   1. exact vault-root-relative path  ([[Sections/Networking]] -> Sections/Networking.md)
 *   2. case-insensitive path match     ([[…/Executor pages]] -> …/Executor Pages.md)
 * Unresolved links are logged (so broken vault data is visible) and emitted as a
 * best-effort dead link rather than silently mangled.
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

// Build vault-root-relative path indexes (key = path without .md, forward-slashed).
// Path-qualified wikilinks ([[Sections/Networking]]) and bare root links
// ([[000 Map of Content]]) both resolve against these.
async function buildIndex(vaultRoot) {
  const exact = new Map(); // "Sections/Networking" -> "Sections/Networking.md"
  const ci = new Map();    // lowercased key -> relPath (first occurrence wins)
  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const relPath = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.')) await walk(path.join(dir, e.name), relPath);
      } else if (e.name.endsWith('.md')) {
        const key = relPath.replace(/\.md$/, '');
        exact.set(key, relPath);
        const lc = key.toLowerCase();
        if (!ci.has(lc)) ci.set(lc, relPath);
      }
    }
  }
  await walk(vaultRoot, '');
  return { exact, ci };
}

// Root docs that contain illustrative [[wikilink]] examples, not real links.
const SKIP_FILES = new Set(['README.md', 'CLAUDE.md']);

let unresolved = 0;

function convertWikilinks(content, currentRelPath, index) {
  const currentDir = path.dirname(currentRelPath);

  // Lazy inner match so targets containing single ] (e.g. "+ [Plus] keyword",
  // "Square Brackets [ ] Character") are captured, not truncated at the first ].
  return content.replace(/\[\[(.+?)\]\]/g, (match, inner) => {
    // [[Note|Alias]] and [[Note#Heading]] handling
    const [rawNote, alias] = inner.split('|');
    const [noteOnly, anchor] = rawNote.split('#');
    const note = noteOnly.trim();
    const displayText = (alias || rawNote).trim();

    let target = index.exact.get(note) || index.ci.get(note.toLowerCase());
    if (!target) {
      unresolved++;
      console.warn(`  [warn] unresolved: ${currentRelPath} -> [[${inner}]]`);
      return `[${displayText}](./${note}.md${anchor ? `#${anchor}` : ''})`; // best-effort
    }

    let relTarget = path.relative(currentDir, target).replace(/\\/g, '/');
    if (anchor) relTarget += `#${anchor}`;
    return `[${displayText}](${relTarget})`;
  });
}

async function processVault() {
  console.log(`Converting wikilinks in: ${VAULT_ROOT}`);
  const index = await buildIndex(VAULT_ROOT);
  console.log(`  Index built: ${index.exact.size} notes`);

  let count = 0;

  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const fullPath = path.join(dir, e.name);
      const relPath = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.')) await walk(fullPath, relPath);
      } else if (e.name.endsWith('.md') && !SKIP_FILES.has(relPath)) {
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
  if (unresolved) console.log(`  ${unresolved} unresolved wikilink(s) emitted as best-effort dead links (see warnings; run "npm run audit").`);
}

processVault().catch(e => { console.error(e); process.exit(1); });
