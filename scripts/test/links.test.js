/**
 * Tests for the wikilink → relative-markdown-link conversion.
 * Locks in the bugs fixed during the vault rebuild: path-qualified targets,
 * case-insensitive resolution, bracketed names, and URL-encoded destinations.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convertWikilinks } from '../convert-links.js';

// Build the { exact, ci } index convertWikilinks expects from a list of relpaths.
function mkIndex(paths) {
  const exact = new Map();
  const ci = new Map();
  for (const p of paths) {
    const k = p.replace(/\.md$/, '');
    exact.set(k, p);
    const lc = k.toLowerCase();
    if (!ci.has(lc)) ci.set(lc, p);
  }
  return { exact, ci };
}

const index = mkIndex([
  'Sections/Networking.md',
  'Pages/Networking/How to create a session.md',
  'Pages/Advanced Executor Functionality/Executor Pages.md',
  'Keywords/+ [Plus] keyword.md',
  'Keys/B.O. (Blackout) Key.md',
  '000 Map of Content.md',
]);

test('path-qualified link resolves to a relative path', () => {
  const out = convertWikilinks('See [[Sections/Networking]].', 'Pages/Networking/How to create a session.md', index);
  assert.equal(out, 'See [Sections/Networking](../../Sections/Networking.md).');
});

test('bare root link resolves with correct ../ depth (spaces encoded)', () => {
  const out = convertWikilinks('Part of [[000 Map of Content]]', 'Pages/Networking/How to create a session.md', index);
  assert.equal(out, 'Part of [000 Map of Content](../../000%20Map%20of%20Content.md)');
});

test('case-insensitive fallback resolves title-case drift', () => {
  const out = convertWikilinks('[[Pages/Advanced Executor Functionality/Executor pages]]', '000 Map of Content.md', index);
  assert.match(out, /\(Pages\/Advanced%20Executor%20Functionality\/Executor%20Pages\.md\)/);
});

test('alias is preserved as display text', () => {
  const out = convertWikilinks('[[Sections/Networking|Net]]', '000 Map of Content.md', index);
  assert.equal(out, '[Net](Sections/Networking.md)');
});

test('bracketed target name is captured and encoded', () => {
  const out = convertWikilinks('[[Keywords/+ [Plus] keyword]]', '000 Map of Content.md', index);
  assert.equal(out, '[Keywords/+ [Plus] keyword](Keywords/+%20%5BPlus%5D%20keyword.md)');
});

test('parentheses in destination are percent-encoded', () => {
  const out = convertWikilinks('[[Keys/B.O. (Blackout) Key]]', '000 Map of Content.md', index);
  assert.equal(out, '[Keys/B.O. (Blackout) Key](Keys/B.O.%20%28Blackout%29%20Key.md)');
});

test('unresolved link falls back to a best-effort dead link', () => {
  const out = convertWikilinks('[[Does Not Exist]]', '000 Map of Content.md', index);
  assert.equal(out, '[Does Not Exist](./Does%20Not%20Exist.md)');
});

test('multiple links on one line each convert', () => {
  const out = convertWikilinks('[[Sections/Networking]] and [[000 Map of Content]]', '000 Map of Content.md', index);
  assert.equal(out, '[Sections/Networking](Sections/Networking.md) and [000 Map of Content](000%20Map%20of%20Content.md)');
});
