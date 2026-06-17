/**
 * audit.js
 * Read-only conformance audit of the vault against the SOP (CLAUDE.md):
 *   (a) Links       — every [[wikilink]] resolves to a real note
 *   (b) Structure   — required folders + MOC files exist; type matches location
 *   (c) Frontmatter — required fields present per `type`
 *   (d) Conventions — source callout + nav footer present
 *
 * Does NOT modify any file. Exits non-zero on hard failures
 * (unresolved links, missing folders/MOC, type/location mismatch).
 *
 * Usage: node audit.js [vault-root]
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const VAULT_ROOT = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const IGNORE_DIRS = new Set(['.git', '.github', 'node_modules', 'scripts', '.obsidian', '_quartz']);
// Root-level docs that are not vault notes:
const NON_NOTES = new Set(['README.md', 'CLAUDE.md']);

const REQUIRED_FOLDERS = ['Sections', 'Pages', 'Keywords', 'Keys', 'QuickStart'];
const REQUIRED_MOC = ['000 Map of Content.md', '000 Keyword Index.md', '000 Key Index.md'];

const TYPE_LOCATION = {
  section: 'Sections/',
  page: 'Pages/',
  keyword: 'Keywords/',
  key: 'Keys/',
  'quick-start': 'QuickStart/',
};

const REQUIRED_FIELDS = {
  _all: ['type', 'slug', 'url', 'tags'],
  page: ['section', 'ma2_section', 'section_ref', 'depth'],
  keyword: ['keyword', 'keyword_type'],
  key: ['key_label'],
  section: ['page_count', 'pages'],
  'quick-start': [],
  moc: ['tags'], // MOC index files intentionally have no slug/url
};

// Fields required for a given type (MOC is exempt from the _all slug/url set).
function requiredFor(type) {
  if (type === 'moc') return REQUIRED_FIELDS.moc;
  return [...REQUIRED_FIELDS._all, ...((REQUIRED_FIELDS[type]) || [])];
}

async function collect(dir, rel, out) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      if (e.name.startsWith('.') || IGNORE_DIRS.has(e.name)) continue; // skip hidden dirs
      await collect(full, r, out);
    } else if (e.name.endsWith('.md') && !NON_NOTES.has(r)) {
      out.push(r); // include note files even if they start with '.' (e.g. ". Key.md")
    }
  }
}

function lineOf(content, index) {
  return content.slice(0, index).split('\n').length;
}

export async function auditVault(root = VAULT_ROOT) {
  const files = [];
  await collect(root, '', files);

  // Build resolution indexes (key = relpath without .md, forward-slashed)
  const exact = new Map();        // "Pages/Presets/Create Presets" -> relpath
  const ciMap = new Map();        // lowercased relpath -> [relpaths]
  for (const f of files) {
    const noExt = f.replace(/\.md$/, '');
    exact.set(noExt, f);
    const lc = noExt.toLowerCase();
    if (!ciMap.has(lc)) ciMap.set(lc, []);
    ciMap.get(lc).push(f);
  }

  const findings = {
    brokenLinks: [],      // unresolvable even case-insensitively (target note absent)
    caseLinks: [],        // resolve only case-insensitively (broken on case-sensitive FS / github-browse)
    structure: [],        // missing folder/MOC or type/location mismatch
    frontmatter: [],      // missing required fields
    conventions: [],      // missing source callout / nav footer
  };

  let linkTotal = 0;

  // (b) structure: required folders + MOC files
  const topNames = files.map((f) => f.split('/')[0]);
  for (const folder of REQUIRED_FOLDERS) {
    if (!topNames.includes(folder)) findings.structure.push(`MISSING FOLDER: ${folder}/`);
  }
  for (const moc of REQUIRED_MOC) {
    if (!files.includes(moc)) findings.structure.push(`MISSING MOC FILE: ${moc}`);
  }

  // Lazy inner match so targets containing single ] (bracketed special-char
  // keyword names) are scanned too — a [^\]]+ class silently skips them.
  const wikiRe = /\[\[(.+?)\]\]/g;

  for (const f of files) {
    const raw = await fs.readFile(path.join(root, f), 'utf8');
    let parsed;
    try { parsed = matter(raw); } catch { parsed = { data: {}, content: raw }; }
    const data = parsed.data || {};
    const type = data.type;

    // (c) frontmatter
    if (type) {
      const need = requiredFor(type);
      let missing = need.filter((k) => !(k in data));
      // A section with no child pages legitimately has no `pages` list.
      if (type === 'section' && Number(data.page_count) === 0) missing = missing.filter((k) => k !== 'pages');
      if (missing.length) findings.frontmatter.push(`${f}  [${type}] missing: ${missing.join(', ')}`);

      // (b) type vs location
      const expectPrefix = TYPE_LOCATION[type];
      if (expectPrefix && !f.startsWith(expectPrefix)) {
        findings.structure.push(`TYPE/LOCATION: ${f} has type=${type} (expected under ${expectPrefix})`);
      }
      if (type === 'moc' && (f.includes('/') || !f.startsWith('000 '))) {
        findings.structure.push(`TYPE/LOCATION: ${f} has type=moc (expected root "000 *.md")`);
      }
    }

    // (d) conventions (notes only, skip moc index files)
    if (type && type !== 'moc') {
      if (!raw.includes('> [!source]')) findings.conventions.push(`${f}  no source callout`);
      if (!/Part of \[\[/.test(raw)) findings.conventions.push(`${f}  no nav footer ("Part of [[…]]")`);
    }

    // (a) links — resolve every wikilink
    let m;
    while ((m = wikiRe.exec(raw)) !== null) {
      linkTotal++;
      const inner = m[1].split('|')[0].split('#')[0].trim();
      if (!inner) continue;
      const ln = lineOf(raw, m.index);
      const loc = `${f}:${ln}  [[${inner}]]`;
      if (exact.has(inner)) continue;
      const ci = ciMap.get(inner.toLowerCase());
      if (ci && ci.length) { findings.caseLinks.push(`${loc} -> ${ci[0]}`); continue; }
      findings.brokenLinks.push(loc);
    }
  }

  return { root, files, linkTotal, findings };
}

/** Print the audit report; returns the hard-failure count. */
export function printReport({ root, files, linkTotal, findings }) {
  const show = (arr, n = 15) => arr.slice(0, n).map((x) => `    ${x}`).join('\n') + (arr.length > n ? `\n    … +${arr.length - n} more` : '');

  console.log(`\n=== Vault audit: ${root} ===`);
  console.log(`Notes scanned: ${files.length} · wikilinks: ${linkTotal}\n`);

  console.log(`(a) LINKS`);
  console.log(`  exact-resolved:        ${linkTotal - findings.caseLinks.length - findings.brokenLinks.length}`);
  console.log(`  case-only (FS-broken): ${findings.caseLinks.length}  (resolve case-insensitively; break on github-browse)`);
  if (findings.caseLinks.length) console.log(show(findings.caseLinks));
  console.log(`  UNRESOLVABLE:          ${findings.brokenLinks.length}  (target note does not exist)`);
  if (findings.brokenLinks.length) console.log(show(findings.brokenLinks));

  console.log(`\n(b) STRUCTURE — ${findings.structure.length} issue(s)`);
  if (findings.structure.length) console.log(show(findings.structure, 30));

  console.log(`\n(c) FRONTMATTER — ${findings.frontmatter.length} note(s) missing required fields`);
  if (findings.frontmatter.length) {
    const byMissing = {};
    for (const x of findings.frontmatter) {
      const key = x.split('missing: ')[1] || x;
      byMissing[key] = (byMissing[key] || 0) + 1;
    }
    for (const [k, v] of Object.entries(byMissing).sort((a, b) => b[1] - a[1])) console.log(`    ${v}×  missing: ${k}`);
    console.log('  examples:');
    console.log(show(findings.frontmatter, 8));
  }

  console.log(`\n(d) CONVENTIONS — ${findings.conventions.length} issue(s)`);
  if (findings.conventions.length) {
    const noSrc = findings.conventions.filter((x) => x.includes('source')).length;
    const noNav = findings.conventions.filter((x) => x.includes('nav')).length;
    console.log(`    no source callout: ${noSrc} · no nav footer: ${noNav}`);
    console.log(show(findings.conventions, 8));
  }

  const hardFail = findings.brokenLinks.length + findings.caseLinks.length +
    findings.structure.length + findings.frontmatter.length;
  console.log(`\n=== ${hardFail ? `FAIL — ${hardFail} hard issue(s)` : 'PASS'} ===\n`);
  return hardFail;
}

// Run as CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  auditVault()
    .then((result) => process.exit(printReport(result) ? 1 : 0))
    .catch((e) => { console.error(e); process.exit(2); });
}
