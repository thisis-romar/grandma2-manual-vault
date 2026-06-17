/**
 * Tests for topic extraction (nlp) and graph building (viz).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractTopics } from '../nlp.js';
import { buildGraph } from '../viz.js';

test('extractTopics drops stopwords and ranks by frequency', () => {
  const text = 'The fixture and the fixture are patched. Patch the fixture into the universe.';
  const { terms } = extractTopics(text, new Set(), 3);
  assert.equal(terms[0], 'fixture'); // most frequent non-stopword
  assert.ok(!terms.includes('the'));
  assert.ok(!terms.includes('and'));
});

test('extractTopics tags known MA2 keywords', () => {
  const { keywords } = extractTopics(
    'Press Store then Assign the executor.',
    new Set(['store', 'assign', 'preset']),
  );
  assert.deepEqual(keywords, ['assign', 'store']);
});

test('buildGraph emits typed, coloured nodes and link edges', () => {
  const vault = {
    notes: [
      {
        key: 'Sections/Presets',
        type: 'section',
        links: new Set(['Pages/Presets/Create Presets']),
        backlinks: new Set(),
      },
      {
        key: 'Pages/Presets/Create Presets',
        type: 'page',
        links: new Set(),
        backlinks: new Set(['Sections/Presets']),
      },
    ],
  };
  const g = buildGraph(vault);
  assert.equal(g.nodes.length, 2);
  assert.equal(g.edges.length, 1);
  assert.deepEqual(g.edges[0], { from: 'Sections/Presets', to: 'Pages/Presets/Create Presets' });
  const section = g.nodes.find((n) => n.group === 'section');
  assert.equal(section.color, '#4E79A7');
});
