/**
 * Tests for the SQLite analytics layer, using an in-memory database.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import Database from 'better-sqlite3';
import { buildDb, dbSummary, dbSearch, dbSimilar, dbOrphans } from '../db.js';

function mkVault(specs) {
  return {
    notes: specs.map((s) => ({
      key: s.key,
      type: s.type,
      slug: s.slug || null,
      title: s.title || s.key,
      data: { section: s.section || null },
      path: `${s.key}.md`,
      body: s.body || '',
      links: new Set(s.links || []),
    })),
  };
}

function db() {
  const vault = mkVault([
    {
      key: 'Pages/Presets/Create Presets',
      type: 'page',
      section: 'Presets',
      body: 'Store a preset using the Store keyword.',
      links: ['Keywords/Store', '000 Map of Content'],
    },
    {
      key: 'Pages/Presets/Edit Presets',
      type: 'page',
      section: 'Presets',
      body: 'Edit an existing preset.',
      links: ['Keywords/Store'],
    },
    { key: 'Keywords/Store', type: 'keyword', body: 'The Store keyword saves data.', links: [] },
    { key: '000 Map of Content', type: 'moc', body: 'index of everything', links: [] },
  ]);
  return buildDb(vault, new Database(':memory:'));
}

test('buildDb + dbSummary counts types, links, orphans, most-linked', () => {
  const s = dbSummary(db());
  assert.equal(s.counts.find((r) => r.type === 'page').c, 2);
  assert.equal(s.totalLinks, 3);
  assert.equal(s.orphans, 2); // the two pages have no inbound links; MOC excluded
  assert.equal(s.mostLinked[0].note, 'Keywords/Store'); // linked from both pages
  assert.equal(s.mostLinked[0].backlinks, 2);
});

test('dbSearch (FTS5) finds notes by body term', () => {
  const res = dbSearch(db(), 'store');
  const keys = res.map((r) => r.note);
  assert.ok(keys.includes('Keywords/Store'));
  assert.ok(keys.includes('Pages/Presets/Create Presets'));
});

test('dbSearch tolerates punctuation in the query', () => {
  assert.doesNotThrow(() => dbSearch(db(), 'store/preset (global)'));
});

test('dbSimilar ranks by shared neighbours, excluding 000 indexes', () => {
  const res = dbSimilar(db(), 'Pages/Presets/Create Presets');
  assert.equal(res[0].note, 'Pages/Presets/Edit Presets');
  assert.ok(!res.some((r) => r.note.startsWith('000 ')));
});

test('dbOrphans lists content notes with no inbound links', () => {
  assert.deepEqual(dbOrphans(db()), ['Pages/Presets/Create Presets', 'Pages/Presets/Edit Presets']);
});
