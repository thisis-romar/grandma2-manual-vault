/**
 * Tests for extract.js pure helpers: slug→section mapping, filename
 * sanitisation, and canonical filename derivation.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sectionFromSlug, sanitizeFilename, computeFileName } from '../extract.js';

test('sectionFromSlug maps known prefixes', () => {
  assert.equal(sectionFromSlug('key_presets_create'), 'Presets');
  assert.equal(sectionFromSlug('key_network_dhcp'), 'Networking');
  assert.equal(sectionFromSlug('key_adv_exec_ch_pages'), 'Advanced Executor Functionality');
});

test('sectionFromSlug falls back to title-cased first segment', () => {
  assert.equal(sectionFromSlug('key_foobar_baz'), 'Foobar');
});

test('sanitizeFilename strips path-illegal characters but keeps brackets', () => {
  assert.equal(sanitizeFilename('A/B:C'), 'A-B-C');
  assert.equal(sanitizeFilename('a*b?c"d<e>f|g'), 'a-b-c-d-e-f-g');
  assert.equal(sanitizeFilename('+ [Plus] keyword'), '+ [Plus] keyword');
  assert.equal(sanitizeFilename('  spaced   out  '), 'spaced out');
});

test('computeFileName prefers content title for pages', () => {
  const entry = { type: 'page', slug: 'key_presets_create', title: 'create presets' };
  assert.equal(computeFileName(entry, { title: 'Create Presets' }), 'Create Presets');
});

test('computeFileName uses sectionFromSlug for sections (ignores title)', () => {
  const entry = { type: 'section', slug: 'key_presets', title: 'What Are Presets?' };
  assert.equal(computeFileName(entry, { title: 'What Are Presets?' }), 'Presets');
});

test('computeFileName strips [bracket] labels for keys', () => {
  const entry = { type: 'key', slug: 'key_key_store', title: '[Store] key' };
  assert.equal(computeFileName(entry, { title: 'Store Key' }), 'Store Key');
});

test('computeFileName falls back to entry.title when content is missing', () => {
  const entry = { type: 'quick-start', slug: 'key_13_making_presets', title: 'Making presets' };
  assert.equal(computeFileName(entry, null), 'Making presets');
});
