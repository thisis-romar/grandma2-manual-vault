/**
 * semantics.js — MA2 command-syntax extraction (the MA2 refactor of the
 * LinkedIn extractor's transcript "semantics" feature).
 *
 * Instead of CLI commands / code / file paths from video transcripts, this
 * pulls grandMA2 command-line syntax out of the manual note bodies:
 *   - prompt examples     e.g.  [Channel]> Store Preset 2.1 Please
 *   - inline code commands e.g. `Store Preset N /global /overwrite /noconfirm`
 *   - flags               e.g.  /global  /overwrite  /noconfirm
 *   - keyword usages      (mentions of known CLI keywords)
 *
 * Usage:
 *   node semantics.js            # extract across the vault, write analytics/
 * Exports: extractSemantics(text, keywordSet), runSemantics(root)
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadVault, byType, stripBoilerplate, VAULT_ROOT_DEFAULT } from './lib/vault.js';

const PROMPT_RE = /\[[^\]\n]*\]>\s*([^\n`]+)/g; // [Channel]> Store …
const FLAG_RE = /(?:^|\s)(\/[A-Za-z][\w-]*)/g; // /global, /overwrite
const CODE_RE = /`([^`\n]+)`/g; // inline `code`

/**
 * Extract MA2 semantic content from one note body.
 * @param {string} text
 * @param {Set<string>} keywordSet  lowercase known CLI keywords
 */
export function extractSemantics(text, keywordSet = new Set()) {
  const prompts = [];
  const commands = [];
  const flags = new Set();
  const keywords = new Set();

  let m;
  PROMPT_RE.lastIndex = 0;
  while ((m = PROMPT_RE.exec(text)) !== null) {
    const cmd = m[1].trim();
    if (cmd) prompts.push(cmd);
  }

  // Inline code spans that begin with a known keyword are command syntax.
  CODE_RE.lastIndex = 0;
  while ((m = CODE_RE.exec(text)) !== null) {
    const span = m[1].trim();
    const first = span.split(/\s+/)[0].toLowerCase();
    if (keywordSet.has(first)) commands.push(span);
  }

  // Flags appear in both prose and code.
  FLAG_RE.lastIndex = 0;
  while ((m = FLAG_RE.exec(text)) !== null) flags.add(m[1].toLowerCase());

  // Known keyword usages (whole-word, case-insensitive).
  for (const kw of keywordSet) {
    if (kw.length < 2) continue;
    const re = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (re.test(text)) keywords.add(kw);
  }

  return {
    prompts,
    commands,
    flags: [...flags].sort(),
    keywords: [...keywords].sort(),
  };
}

export async function runSemantics(root = VAULT_ROOT_DEFAULT) {
  const vault = await loadVault(root);

  // Known keywords from the Keywords/ notes (display name, lowercased).
  const keywordSet = new Set(
    byType(vault.notes, 'keyword')
      .map((n) => (n.data.keyword || n.key.split('/').pop()).toLowerCase())
      .filter(Boolean),
  );

  const perNote = [];
  const flagFreq = new Map();
  const keywordFreq = new Map();
  let totalPrompts = 0;
  let totalCommands = 0;

  for (const note of vault.notes) {
    if (!['page', 'keyword', 'quick-start', 'section'].includes(note.type)) continue;
    // Strip the per-note template so keyword frequencies reflect real usage.
    const sem = extractSemantics(stripBoilerplate(note.body), keywordSet);
    if (sem.prompts.length || sem.commands.length || sem.flags.length) {
      perNote.push({ note: note.path, ...sem });
    }
    totalPrompts += sem.prompts.length;
    totalCommands += sem.commands.length;
    for (const f of sem.flags) flagFreq.set(f, (flagFreq.get(f) || 0) + 1);
    for (const k of sem.keywords) keywordFreq.set(k, (keywordFreq.get(k) || 0) + 1);
  }

  const top = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
  const report = {
    generated: new Date().toISOString(),
    notesWithSyntax: perNote.length,
    totalPrompts,
    totalCommands,
    topFlags: top(flagFreq, 25).map(([flag, count]) => ({ flag, count })),
    topKeywords: top(keywordFreq, 25).map(([keyword, count]) => ({ keyword, count })),
    perNote,
  };

  const outDir = path.join(root, 'analytics');
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'semantics.json'), JSON.stringify(report, null, 2), 'utf8');

  console.log(`\nMA2 command-syntax semantics`);
  console.log(`════════════════════════════`);
  console.log(`  notes with syntax: ${report.notesWithSyntax}`);
  console.log(`  prompt examples:   ${totalPrompts}`);
  console.log(`  code commands:     ${totalCommands}`);
  console.log(`\n  Top flags:`);
  for (const { flag, count } of report.topFlags.slice(0, 12))
    console.log(`    ${String(count).padStart(4)}  ${flag}`);
  console.log(`\n  Top keywords:`);
  for (const { keyword, count } of report.topKeywords.slice(0, 12))
    console.log(`    ${String(count).padStart(4)}  ${keyword}`);
  console.log(`\n  → analytics/semantics.json`);
  return report;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runSemantics().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
