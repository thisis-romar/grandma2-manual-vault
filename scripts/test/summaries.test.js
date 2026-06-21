/**
 * Tests for the summary-derivation helper.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { summaryFromBody } from '../derive-summaries.js';

test('prefers the first prose line under a Description heading', () => {
  const body = [
    '# Store',
    '> [!source]- Source',
    'Version 3.9',
    '# Store Keyword',
    'To go to the Store keyword, press Store.',
    '## Description',
    'The store keyword, stores functions in the show file.',
    'More detail here.',
  ].join('\n');
  assert.equal(summaryFromBody(body), 'The store keyword, stores functions in the show file.');
});

test('falls back to the first prose sentence, skipping boilerplate', () => {
  const body = [
    '# Title',
    '> [!source]- Source',
    'Version 3.9',
    '![](../../img/x.png)',
    'This page explains how presets work. And more.',
  ].join('\n');
  assert.equal(summaryFromBody(body), 'This page explains how presets work.');
});

test('strips inline markdown and wikilinks', () => {
  const body =
    '## Description\nUse the **[[Keywords/Store|Store]]** keyword to save a [cue](key_x.html).';
  assert.equal(summaryFromBody(body), 'Use the Store keyword to save a cue.');
});

test('returns empty when there is no usable prose', () => {
  assert.equal(summaryFromBody('# Only a heading\n\n![](img.png)'), '');
});
