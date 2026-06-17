/**
 * lib/vault.js — load and model the generated vault.
 *
 * Shared by the analytics / semantics / viz / graph tooling. Parses every note
 * once into a model with frontmatter, body, and the wikilink graph (out-links
 * and back-links), so the MA2-domain features don't each re-walk the disk.
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

export const VAULT_ROOT_DEFAULT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const IGNORE_DIRS = new Set(['.git', '.github', 'node_modules', 'scripts', '.obsidian', '_quartz']);
const NON_NOTES = new Set(['README.md', 'CLAUDE.md']);

// Lazy inner match — captures targets containing single ] (bracketed names).
const WIKI_RE = /\[\[(.+?)\]\]/g;

async function collect(dir, rel, out) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      if (e.name.startsWith('.') || IGNORE_DIRS.has(e.name)) continue;
      await collect(full, r, out);
    } else if (e.name.endsWith('.md') && !NON_NOTES.has(r)) {
      out.push(r);
    }
  }
}

/** Extract unique wikilink targets (note name only, alias/anchor stripped). */
export function wikilinkTargets(text) {
  const out = [];
  let m;
  WIKI_RE.lastIndex = 0;
  while ((m = WIKI_RE.exec(text)) !== null) {
    const target = m[1].split('|')[0].split('#')[0].trim();
    if (target) out.push(target);
  }
  return out;
}

/**
 * Load the whole vault into a model.
 * @returns {{ notes: Note[], byKey: Map, byPath: Map }}
 *   Note = { path, key, type, slug, title, data, body, links:Set, backlinks:Set }
 */
export async function loadVault(root = VAULT_ROOT_DEFAULT) {
  const files = [];
  await collect(root, '', files);

  const notes = [];
  const byKey = new Map();   // "Sections/Networking" -> Note
  const byPath = new Map();

  for (const rel of files) {
    const raw = await fs.readFile(path.join(root, rel), 'utf8');
    let parsed;
    try { parsed = matter(raw); } catch { parsed = { data: {}, content: raw }; }
    const data = parsed.data || {};
    const key = rel.replace(/\.md$/, '');
    const note = {
      path: rel,
      key,
      type: data.type || 'unknown',
      slug: data.slug || null,
      title: data.title_str || data.keyword || data.key_label || data.section || key.split('/').pop(),
      data,
      body: parsed.content || '',
      links: new Set(),
      backlinks: new Set(),
    };
    notes.push(note);
    byKey.set(key, note);
    byKey.set(key.toLowerCase(), note); // case-insensitive fallback
    byPath.set(rel, note);
  }

  // Resolve links + backlinks across the whole note (frontmatter + body).
  for (const note of notes) {
    const raw = `${JSON.stringify(note.data)}\n${note.body}`;
    for (const target of wikilinkTargets(raw)) {
      const dest = byKey.get(target) || byKey.get(target.toLowerCase());
      if (dest && dest !== note) {
        note.links.add(dest.key);
        dest.backlinks.add(note.key);
      }
    }
  }

  return { notes, byKey, byPath };
}

export const byType = (notes, type) => notes.filter((n) => n.type === type);
