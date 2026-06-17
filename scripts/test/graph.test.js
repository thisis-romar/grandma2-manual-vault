/**
 * Tests for the in-memory graph engine: full-text search + Cypher export.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { search, toCypher } from '../graph.js';

function mkVault(specs) {
  const byKey = new Map();
  const notes = specs.map((s) => {
    const n = {
      path: `${s.key}.md`,
      key: s.key,
      type: s.type,
      title: s.title || s.key,
      body: s.body || '',
      links: new Set(s.links || []),
      backlinks: new Set(),
    };
    byKey.set(s.key, n);
    return n;
  });
  return { notes, byKey };
}

const vault = mkVault([
  {
    key: 'Pages/Presets/Create Presets',
    type: 'page',
    body: 'A preset with the Store keyword. Presets are great.',
  },
  {
    key: 'Pages/Cues/Store a cue',
    type: 'page',
    body: 'A cue stores playback state. Store it. Store again, Store more.',
  },
  {
    key: 'Keywords/Store',
    type: 'keyword',
    body: 'The Store keyword saves data.',
    links: ['Keys/Store Key'],
  },
  { key: '000 Map of Content', type: 'moc', body: 'index store everything' },
]);

test('search ranks by query-term frequency and skips MOC notes', () => {
  const res = search(vault, 'store');
  assert.ok(res.length >= 3);
  // "Store a cue" mentions store 4× → outranks the single-mention notes.
  assert.equal(res[0].note, 'Pages/Cues/Store a cue.md');
  assert.ok(res[0].score >= res[1].score);
  assert.ok(!res.some((r) => r.note.includes('Map of Content')));
});

test('search returns empty for no matches', () => {
  assert.deepEqual(search(vault, 'zzzznomatch'), []);
});

test('search produces a snippet', () => {
  const [top] = search(vault, 'preset');
  assert.ok(top.snippet.length > 0);
});

test('toCypher emits node + relationship statements with escaped quotes', () => {
  const v = mkVault([
    { key: "Keys/O'Brien", type: 'key', title: "O'Brien", links: ['Keywords/Store'] },
    { key: 'Keywords/Store', type: 'keyword' },
  ]);
  const out = toCypher(v);
  assert.match(out, /CREATE \(:Note \{key:'Keys\/O\\'Brien'/);
  assert.match(out, /:LINKS_TO\]->/);
  assert.match(out, /MATCH \(n\) DETACH DELETE n;/);
});
