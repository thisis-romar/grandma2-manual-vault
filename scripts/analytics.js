/**
 * analytics.js — catalog analytics over the vault model (the MA2 refactor of
 * the LinkedIn extractor's `analytics` commands).
 *
 * MA2 mapping: courses→pages, topics→sections, "similar by topic overlap"→
 * similar notes by shared wikilink neighbours (Jaccard). Runs in-memory — at
 * ~841 notes there is no need for the SQLite layer the LinkedIn tool used.
 *
 * Subcommands: summary | topics | similar <note> | orphans
 */
import { fileURLToPath } from 'url';
import { loadVault, byType, VAULT_ROOT_DEFAULT } from './lib/vault.js';

export function summary(vault) {
  const { notes } = vault;
  const counts = {};
  let totalLinks = 0;
  for (const n of notes) {
    counts[n.type] = (counts[n.type] || 0) + 1;
    totalLinks += n.links.size;
  }
  const mostLinked = [...notes]
    .sort((a, b) => b.backlinks.size - a.backlinks.size)
    .slice(0, 10)
    .map((n) => ({ note: n.path, backlinks: n.backlinks.size }));
  return {
    notes: notes.length,
    counts,
    totalLinks,
    avgLinksPerNote: +(totalLinks / notes.length).toFixed(2),
    orphans: notes.filter((n) => n.backlinks.size === 0).length,
    mostLinked,
  };
}

/** Distribution of pages across sections (MA2 "topics") + keyword types. */
export function topics(vault) {
  const sectionDist = {};
  for (const n of byType(vault.notes, 'page')) {
    const s = n.data.section || 'Uncategorized';
    sectionDist[s] = (sectionDist[s] || 0) + 1;
  }
  const keywordTypeDist = {};
  for (const n of byType(vault.notes, 'keyword')) {
    const t = n.data.keyword_type || 'unknown';
    keywordTypeDist[t] = (keywordTypeDist[t] || 0) + 1;
  }
  return {
    bySection: Object.entries(sectionDist).sort((a, b) => b[1] - a[1]),
    byKeywordType: Object.entries(keywordTypeDist).sort((a, b) => b[1] - a[1]),
  };
}

/** Neighbour set = out-links ∪ back-links, excluding ubiquitous MOC indexes. */
function neighbours(note, vault) {
  const out = new Set();
  for (const k of [...note.links, ...note.backlinks]) {
    const n = vault.byKey.get(k);
    if (n && n.type !== 'moc') out.add(k);
  }
  return out;
}

export function jaccard(a, b) {
  if (!a.size && !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

/** Notes most similar to `key` by shared neighbours (Jaccard). */
export function similar(vault, key, limit = 10) {
  const target = vault.byKey.get(key) || vault.byKey.get(key.toLowerCase());
  if (!target) return null;
  const tn = neighbours(target, vault);
  if (!tn.size) return [];
  return vault.notes
    .filter((n) => n !== target && n.type !== 'moc')
    .map((n) => ({ note: n.path, score: +jaccard(tn, neighbours(n, vault)).toFixed(3) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/** Content notes with no inbound links (excludes index/MOC notes). */
export function orphans(vault) {
  return vault.notes
    .filter((n) => n.type !== 'moc' && n.backlinks.size === 0)
    .map((n) => n.path)
    .sort();
}

// ── CLI ───────────────────────────────────────────────────────────────────
async function main() {
  const [sub, arg] = process.argv.slice(2);
  const vault = await loadVault(VAULT_ROOT_DEFAULT);

  switch (sub) {
    case 'summary': {
      const s = summary(vault);
      console.log('\nVault summary\n═════════════');
      console.log(
        `  notes: ${s.notes}  ·  links: ${s.totalLinks}  ·  avg ${s.avgLinksPerNote}/note  ·  orphans: ${s.orphans}`,
      );
      console.log(
        '  by type:',
        Object.entries(s.counts)
          .map(([k, v]) => `${k}=${v}`)
          .join('  '),
      );
      console.log('\n  Most-linked notes:');
      for (const m of s.mostLinked)
        console.log(`    ${String(m.backlinks).padStart(4)}  ${m.note}`);
      break;
    }
    case 'topics': {
      const t = topics(vault);
      console.log('\nPages per section (topic)\n═════════════════════════');
      for (const [s, c] of t.bySection) console.log(`  ${String(c).padStart(4)}  ${s}`);
      console.log('\n  Keyword types:', t.byKeywordType.map(([k, v]) => `${k}=${v}`).join('  '));
      break;
    }
    case 'similar': {
      if (!arg) {
        console.error('usage: analytics similar <note-key>  e.g. "Keywords/Store"');
        process.exit(2);
      }
      const res = similar(vault, arg);
      if (!res) {
        console.error(`note not found: ${arg}`);
        process.exit(2);
      }
      console.log(`\nSimilar to ${arg}\n`);
      for (const r of res) console.log(`  ${r.score.toFixed(3)}  ${r.note}`);
      break;
    }
    case 'orphans': {
      const o = orphans(vault);
      console.log(`\nOrphan notes (no inbound links): ${o.length}\n`);
      for (const p of o.slice(0, 50)) console.log(`  ${p}`);
      if (o.length > 50) console.log(`  … +${o.length - 50} more`);
      break;
    }
    default:
      console.error('usage: node analytics.js <summary|topics|similar <note>|orphans>');
      process.exit(2);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
