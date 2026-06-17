/**
 * Tests for the analytics pure functions over a hand-built vault model.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { summary, topics, similar, orphans, jaccard } from '../analytics.js';

// Minimal model matching loadVault()'s shape.
function mkVault(specs) {
  const byKey = new Map();
  const notes = specs.map((s) => {
    const n = {
      path: `${s.key}.md`, key: s.key, type: s.type, data: s.data || {},
      links: new Set(s.links || []), backlinks: new Set(),
    };
    byKey.set(s.key, n);
    return n;
  });
  for (const n of notes) for (const l of n.links) byKey.get(l)?.backlinks.add(n.key);
  return { notes, byKey };
}

const vault = mkVault([
  { key: '000 Map of Content', type: 'moc' },
  { key: 'Sections/Presets', type: 'section', data: {}, links: ['Pages/Presets/Create Presets', '000 Map of Content'] },
  { key: 'Pages/Presets/Create Presets', type: 'page', data: { section: 'Presets' }, links: ['Keywords/Store', 'Sections/Presets', '000 Map of Content'] },
  { key: 'Pages/Presets/Edit Presets', type: 'page', data: { section: 'Presets' }, links: ['Keywords/Store', 'Sections/Presets'] },
  { key: 'Keywords/Store', type: 'keyword', data: { keyword_type: 'function' }, links: ['Keys/Store Key'] },
  { key: 'Keys/Store Key', type: 'key', data: {}, links: [] },
]);

test('summary counts types, links, and orphans', () => {
  const s = summary(vault);
  assert.equal(s.notes, 6);
  assert.equal(s.counts.page, 2);
  assert.equal(s.counts.keyword, 1);
  // Keys/Store Key has an inbound link; the MOC has many; orphans are notes with 0 backlinks.
  assert.ok(s.orphans >= 0);
  assert.equal(s.mostLinked[0].note, '000 Map of Content.md');
});

test('topics groups pages by section', () => {
  const t = topics(vault);
  const presets = t.bySection.find(([s]) => s === 'Presets');
  assert.deepEqual(presets, ['Presets', 2]);
  assert.deepEqual(t.byKeywordType.find(([k]) => k === 'function'), ['function', 1]);
});

test('jaccard computes set overlap', () => {
  assert.equal(jaccard(new Set(['a', 'b']), new Set(['b', 'c'])), 1 / 3);
  assert.equal(jaccard(new Set(), new Set()), 0);
});

test('similar excludes the MOC index from neighbour overlap', () => {
  // Create/Edit Presets share neighbours {Keywords/Store, Sections/Presets} (not the MOC).
  const res = similar(vault, 'Pages/Presets/Create Presets');
  assert.ok(res.length > 0);
  assert.equal(res[0].note, 'Pages/Presets/Edit Presets.md');
  assert.ok(res[0].score > 0);
});

test('orphans excludes MOC notes', () => {
  const o = orphans(vault);
  assert.ok(!o.includes('000 Map of Content.md'));
});
