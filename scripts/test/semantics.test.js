/**
 * Tests for MA2 command-syntax extraction.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractSemantics } from '../semantics.js';

const keywords = new Set(['store', 'preset', 'assign', 'fixture', 'if', 'at']);

test('captures command-line prompt examples', () => {
  const text = 'Type:\n\n[Channel]> Store Preset 2.1 Please\n\nthen\n\n[LiveSetup/Layers 4]> CD Fixture 1\n';
  const s = extractSemantics(text, keywords);
  assert.deepEqual(s.prompts, ['Store Preset 2.1 Please', 'CD Fixture 1']);
});

test('captures inline code commands that start with a known keyword', () => {
  const text = 'Use `Store Preset N /global /overwrite /noconfirm` to save.';
  const s = extractSemantics(text, keywords);
  assert.deepEqual(s.commands, ['Store Preset N /global /overwrite /noconfirm']);
});

test('does not treat non-keyword code spans as commands', () => {
  const text = 'The file `config.xml` is loaded.';
  const s = extractSemantics(text, keywords);
  assert.deepEqual(s.commands, []);
});

test('collects flags (lowercased, deduped, sorted)', () => {
  const text = 'Store Preset 1 /global /Overwrite /noconfirm and again /global';
  const s = extractSemantics(text, keywords);
  assert.deepEqual(s.flags, ['/global', '/noconfirm', '/overwrite']);
});

test('detects known keyword usages whole-word and case-insensitively', () => {
  const text = 'Press Store, then Assign the fixture. Storeroom should not count store-keyword oddly.';
  const s = extractSemantics(text, keywords);
  assert.ok(s.keywords.includes('store'));
  assert.ok(s.keywords.includes('assign'));
  assert.ok(s.keywords.includes('fixture'));
});
