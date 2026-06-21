/**
 * internal-links.js — shared logic for repairing raw internal links.
 *
 * The extractor (turndown) leaves internal MA-help links as raw markdown
 * `[text](key_*.html)`. Those resolve to nothing in Obsidian and 404 on the
 * github-browse branch. This module rewrites them to `[[wikilinks]]`.
 *
 * Consumed by:
 *   - migrate-internal-links.js  (slug index built from existing frontmatter)
 *   - extract.js                 (slug index built in-memory from entries)
 *   - audit.js                   (regex only — to flag any raw internal link)
 */

import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// A markdown link whose destination is an internal `.html` page — no URL scheme
// (the `> [!source]` https links are excluded by the lookahead). The display
// group tolerates escaped brackets (`\[Plus\]`); the destination may be wrapped
// in <…> (CommonMark, for anchors with spaces), carry `../`/`./`/`subdir/`
// (cross-doc-set) prefixes, and use mixed-case / `@` / hyphen / UUID slugs.
// The basename (minus `.html` + any #anchor) is the slug (resolved case-insensitively).
// Groups: 1=display text, 2=slug.
export const INTERNAL_HTML_LINK_RE =
  /\[((?:[^\]\\]|\\.)*)\]\(<?(?!\w+:\/\/)(?:[a-z0-9_]+\/|\.{1,2}\/)*([A-Za-z0-9][A-Za-z0-9_@+-]*)\.html(?:#[^>)]*)?>?\)/g;

// Directories that never contain vault notes.
export const IGNORE_DIRS = new Set([
  '.git',
  '.github',
  'node_modules',
  'scripts',
  '.obsidian',
  '_quartz',
]);
// Root docs with illustrative (non-note) content.
export const SKIP_FILES = new Set(['README.md', 'CLAUDE.md']);

/**
 * Walk the vault and map each note's frontmatter `slug` → its relpath without
 * `.md` (forward-slashed). This is the authoritative resolver: link targets are
 * matched by slug, never by reconstructing a path from the slug string.
 */
export async function buildSlugIndex(vaultRoot) {
  const index = new Map();
  async function walk(dir, rel) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) {
        if (!e.name.startsWith('.') && !IGNORE_DIRS.has(e.name))
          await walk(path.join(dir, e.name), r);
      } else if (e.name.endsWith('.md')) {
        const raw = await fs.readFile(path.join(dir, e.name), 'utf8');
        let data;
        try {
          data = matter(raw).data;
        } catch {
          data = {};
        }
        if (data && data.slug) index.set(String(data.slug).toLowerCase(), r.replace(/\.md$/, ''));
      }
    }
  }
  await walk(vaultRoot, '');
  return index;
}

/**
 * Rewrite raw internal `.html` links in `body` to `[[wikilinks]]`, resolving
 * each slug via `slugIndex` (Map<slug, relPathWithoutMd>). Unresolved slugs
 * degrade to plain display text (never a dead link) and invoke `onUnresolved`.
 * Anchors are dropped — MA-help in-page anchors are not Obsidian headings, so
 * linking to the note itself is the safe, non-broken result. Pure (no I/O).
 */
export function rewriteInternalLinks(body, slugIndex, { onUnresolved } = {}) {
  let resolved = 0;
  let unresolved = 0;
  const text = body.replace(INTERNAL_HTML_LINK_RE, (_full, display, slug) => {
    const target = slugIndex.get(slug.toLowerCase());
    const disp = (display || '').trim();
    if (!target) {
      unresolved++;
      if (onUnresolved) onUnresolved(slug, disp);
      return disp; // degrade to plain text
    }
    resolved++;
    const baseName = target.split('/').pop();
    // Use an alias only when the display text is meaningful and can't break the
    // wikilink ([, ] or | in an alias would corrupt it — fall back to bare link).
    const safeAlias = disp && disp !== baseName && !/[[\]|]/.test(disp);
    return safeAlias ? `[[${target}|${disp}]]` : `[[${target}]]`;
  });
  return { text, resolved, unresolved };
}

// Matches a wikilink; lazy inner so targets containing a single `]` (bracketed
// special-char note names) are captured, not truncated — mirrors audit.js.
export const WIKILINK_RE = /\[\[(.+?)\]\]/g;

/**
 * Add a display alias to every path-qualified body wikilink that lacks one, so
 * `[[Keywords/Assign keyword]]` renders its clean basename ("Assign keyword")
 * instead of leaking the full vault path on the github-browse branch.
 *
 * Pure (no I/O). Operates on a BODY string only — never pass frontmatter, whose
 * typed-relation wikilinks must stay bare. Skips:
 *   - already-aliased links (`[[…|…]]`),
 *   - bare root links with no `/` (`[[000 Map of Content]]` — render fine),
 *   - links whose basename contains `[`, `]` or `|` (aliasing would corrupt the
 *     wikilink; left bare and exempt). Any `#anchor` is preserved on the target.
 */
export function aliasPathWikilinks(body) {
  let aliased = 0;
  let skipped = 0;
  const text = body.replace(WIKILINK_RE, (full, inner) => {
    if (inner.includes('|')) return full; // already aliased
    const [noteOnly, anchor] = inner.split('#');
    const note = noteOnly.trim();
    if (!note.includes('/')) return full; // bare root link — out of scope
    const baseName = note.split('/').pop();
    if (/[[\]|]/.test(baseName)) {
      skipped++; // un-aliasable basename
      return full;
    }
    aliased++;
    return `[[${note}${anchor !== undefined ? `#${anchor}` : ''}|${baseName}]]`;
  });
  return { text, aliased, skipped };
}
