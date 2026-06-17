/**
 * db.js — SQLite analytics layer (the MA2 refactor of the LinkedIn extractor's
 * `analytics import` + SQLite catalog). Builds analytics/vault.db from the
 * vault model: a notes table, a links edge table, and an FTS5 full-text index
 * over note bodies.
 *
 * Subcommands: import | summary | search <q> | similar <note> | orphans
 * Exports buildDb / dbSummary / dbSearch / dbSimilar / dbOrphans for testing
 * (pass a better-sqlite3 Database; tests use an in-memory ':memory:' db).
 */
import path from 'path';
import { fileURLToPath } from 'url';
import Database from 'better-sqlite3';
import { loadVault, stripBoilerplate, VAULT_ROOT_DEFAULT } from './lib/vault.js';

const DB_REL = 'analytics/vault.db';

/** Create the schema and load every note + link + FTS row from the vault model. */
export function buildDb(vault, db) {
  db.pragma('journal_mode = WAL');
  db.exec(`
    DROP TABLE IF EXISTS notes;
    DROP TABLE IF EXISTS links;
    DROP TABLE IF EXISTS notes_fts;
    CREATE TABLE notes (key TEXT PRIMARY KEY, type TEXT, slug TEXT, title TEXT, section TEXT, path TEXT);
    CREATE TABLE links (src TEXT, dst TEXT);
    CREATE VIRTUAL TABLE notes_fts USING fts5(key UNINDEXED, body);
  `);
  const insNote = db.prepare(
    'INSERT INTO notes (key,type,slug,title,section,path) VALUES (?,?,?,?,?,?)',
  );
  const insLink = db.prepare('INSERT INTO links (src,dst) VALUES (?,?)');
  const insFts = db.prepare('INSERT INTO notes_fts (key,body) VALUES (?,?)');
  const load = db.transaction((notes) => {
    for (const n of notes) {
      insNote.run(n.key, n.type, n.slug, n.title, n.data.section || null, n.path);
      insFts.run(n.key, stripBoilerplate(n.body));
      for (const l of n.links) insLink.run(n.key, l);
    }
  });
  load(vault.notes);
  return db;
}

export function dbSummary(db) {
  const counts = db
    .prepare('SELECT type, COUNT(*) c FROM notes GROUP BY type ORDER BY c DESC')
    .all();
  const totalLinks = db.prepare('SELECT COUNT(*) c FROM links').get().c;
  const orphans = db
    .prepare(
      "SELECT COUNT(*) c FROM notes WHERE type!='moc' AND key NOT IN (SELECT dst FROM links)",
    )
    .get().c;
  const mostLinked = db
    .prepare(
      'SELECT dst note, COUNT(*) backlinks FROM links GROUP BY dst ORDER BY backlinks DESC LIMIT 10',
    )
    .all();
  return { counts, totalLinks, orphans, mostLinked };
}

/** FTS5 full-text search; user terms are quoted so punctuation can't break the query. */
export function dbSearch(db, query, limit = 15) {
  const terms = (query.toLowerCase().match(/[a-z0-9]+/g) || []).map((t) => `"${t}"`);
  if (!terms.length) return [];
  const match = terms.join(' OR ');
  return db
    .prepare(
      `SELECT f.key note, snippet(notes_fts,1,'[',']','…',8) snippet, bm25(notes_fts) rank
     FROM notes_fts f WHERE notes_fts MATCH ? ORDER BY rank LIMIT ?`,
    )
    .all(match, limit);
}

/** Notes sharing the most link-neighbours with `key`. */
export function dbSimilar(db, key, limit = 10) {
  return db
    .prepare(
      `WITH nb AS (
       SELECT dst n FROM links WHERE src = @k
       UNION SELECT src FROM links WHERE dst = @k
     )
     SELECT l.src note, COUNT(*) shared
     FROM links l JOIN nb ON l.dst = nb.n
     WHERE l.src != @k AND l.src NOT LIKE '000 %'
     GROUP BY l.src ORDER BY shared DESC, note LIMIT @lim`,
    )
    .all({ k: key, lim: limit });
}

export function dbOrphans(db) {
  return db
    .prepare(
      "SELECT key FROM notes WHERE type!='moc' AND key NOT IN (SELECT dst FROM links) ORDER BY key",
    )
    .all()
    .map((r) => r.key);
}

async function main() {
  const [sub, ...rest] = process.argv.slice(2);
  const dbPath = path.join(VAULT_ROOT_DEFAULT, DB_REL);

  if (sub === 'import') {
    const { promises: fs } = await import('fs');
    await fs.mkdir(path.dirname(dbPath), { recursive: true });
    const vault = await loadVault(VAULT_ROOT_DEFAULT);
    const db = new Database(dbPath);
    buildDb(vault, db);
    const n = db.prepare('SELECT COUNT(*) c FROM notes').get().c;
    db.close();
    console.log(`Imported ${n} notes → ${DB_REL}`);
    return;
  }

  const db = new Database(dbPath, { readonly: true, fileMustExist: true });
  try {
    switch (sub) {
      case 'summary': {
        const s = dbSummary(db);
        console.log('\nSQLite summary\n══════════════');
        console.log('  by type:', s.counts.map((r) => `${r.type}=${r.c}`).join('  '));
        console.log(`  links: ${s.totalLinks}  ·  orphans: ${s.orphans}`);
        console.log('\n  Most-linked:');
        for (const m of s.mostLinked)
          console.log(`    ${String(m.backlinks).padStart(4)}  ${m.note}`);
        break;
      }
      case 'search': {
        const res = dbSearch(db, rest.join(' '));
        console.log(`\n${res.length} result(s)\n`);
        for (const r of res) console.log(`  ${r.note}\n        …${r.snippet}…`);
        break;
      }
      case 'similar':
        for (const r of dbSimilar(db, rest[0] || ''))
          console.log(`  ${String(r.shared).padStart(3)}  ${r.note}`);
        break;
      case 'orphans': {
        const o = dbOrphans(db);
        console.log(`Orphans: ${o.length}`);
        for (const k of o.slice(0, 50)) console.log(`  ${k}`);
        break;
      }
      default:
        console.error(
          'usage: node db.js <import | summary | search <q> | similar <note> | orphans>',
        );
        process.exit(2);
    }
  } finally {
    db.close();
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(
      e.message.includes('fileMustExist') || e.code === 'SQLITE_CANTOPEN'
        ? 'No analytics/vault.db — run `npm run db -- import` first.'
        : e,
    );
    process.exit(1);
  });
}
