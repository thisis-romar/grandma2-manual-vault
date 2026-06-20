/**
 * Tests for the internal-link repair helper.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  INTERNAL_HTML_LINK_RE,
  rewriteInternalLinks,
  aliasPathWikilinks,
} from '../lib/internal-links.js';

const index = new Map([
  ['key_keyword_buttonpage', 'Keywords/ButtonPage keyword'],
  ['key_patch_stage', 'Pages/Patching/Stage View'],
  ['key_first_steps', 'Sections/First Steps'],
  ['key_key_v1-v10', 'Keys/V1 - V10 Keys'],
  ['key_keyword_rotate3d', 'Keywords/Rotate3D'],
  ['key_keyword_at_@', 'Keywords/At keyword'],
  ['key_technical_data', 'Pages/Appendix/Technical Data'],
]);

test('resolves a mixed-case slug case-insensitively', () => {
  const { text } = rewriteInternalLinks('[Rotate3D](key_keyword_rotate3D.html)', index);
  assert.equal(text, '[[Keywords/Rotate3D]]');
});

test('resolves a slug containing @', () => {
  const { text } = rewriteInternalLinks('[At](key_keyword_at_@.html)', index);
  assert.equal(text, '[[Keywords/At keyword|At]]');
});

test('handles an angle-bracketed destination with a spaced anchor', () => {
  const { text } = rewriteInternalLinks(
    '[replay](<key_technical_data.html#grandMA2 replay unit>)',
    index,
  );
  assert.equal(text, '[[Pages/Appendix/Technical Data|replay]]');
});

test('resolves a ../-relative-prefixed link', () => {
  const { text } = rewriteInternalLinks('[First step topics](../key_first_steps.html)', index);
  assert.equal(text, '[[Sections/First Steps|First step topics]]');
});

test('resolves a hyphenated slug', () => {
  const { text } = rewriteInternalLinks('[V-key](key_key_v1-v10.html)', index);
  assert.equal(text, '[[Keys/V1 - V10 Keys|V-key]]');
});

test('emits a bare wikilink when the display text has brackets (would corrupt an alias)', () => {
  const idx = new Map([['key_keyword_plus', 'Keywords/+ [Plus] keyword']]);
  const { text } = rewriteInternalLinks('[\\+ \\[Plus\\]](key_keyword_plus.html)', idx);
  assert.equal(text, '[[Keywords/+ [Plus] keyword]]');
});

test('degrades a subdir-prefixed cross-doc-set link (not in this vault) to plain text', () => {
  const { text, unresolved } = rewriteInternalLinks(
    '[Pixel Mapper](ma_vpu/key_pixelmapper.html)',
    index,
  );
  assert.equal(text, 'Pixel Mapper');
  assert.equal(unresolved, 1);
});

test('rewrites a resolved internal link to an aliased wikilink', () => {
  const { text, resolved } = rewriteInternalLinks(
    'see the [ButtonPage command](key_keyword_buttonpage.html).',
    index,
  );
  assert.equal(text, 'see the [[Keywords/ButtonPage keyword|ButtonPage command]].');
  assert.equal(resolved, 1);
});

test('omits the alias when display text equals the note base name', () => {
  const { text } = rewriteInternalLinks('[Stage View](key_patch_stage.html)', index);
  assert.equal(text, '[[Pages/Patching/Stage View]]');
});

test('drops the anchor and links to the note itself', () => {
  const { text } = rewriteInternalLinks('[x](key_patch_stage.html#section)', index);
  assert.equal(text, '[[Pages/Patching/Stage View|x]]');
});

test('degrades an unresolved slug to plain text and reports it', () => {
  const seen = [];
  const { text, unresolved } = rewriteInternalLinks('the [>>>](key_key_skipplus.html) key', index, {
    onUnresolved: (slug) => seen.push(slug),
  });
  assert.equal(text, 'the >>> key');
  assert.equal(unresolved, 1);
  assert.deepEqual(seen, ['key_key_skipplus']);
});

test('leaves external (scheme) links and images untouched', () => {
  const src =
    '> [MA Help](https://help.malighting.com/grandMA2/en/help/key_keyword_buttonpage.html)\n![](../../img/x.png)';
  assert.equal(rewriteInternalLinks(src, index).text, src);
});

test('INTERNAL_HTML_LINK_RE matches a raw internal link but not a scheme URL', () => {
  assert.match('[a](key_foo.html)', new RegExp(INTERNAL_HTML_LINK_RE.source));
  assert.doesNotMatch('[a](https://x/key_foo.html)', new RegExp(INTERNAL_HTML_LINK_RE.source));
});

// ─── aliasPathWikilinks (sublink display fix) ────────────────────────────────

test('aliasPathWikilinks adds a basename alias to a bare path-qualified link', () => {
  const { text, aliased } = aliasPathWikilinks('see [[Keywords/Assign keyword]] now');
  assert.equal(text, 'see [[Keywords/Assign keyword|Assign keyword]] now');
  assert.equal(aliased, 1);
});

test('aliasPathWikilinks leaves an already-aliased link unchanged', () => {
  const src = '[[Keywords/Label|Label keyword]]';
  assert.equal(aliasPathWikilinks(src).text, src);
  assert.equal(aliasPathWikilinks(src).aliased, 0);
});

test('aliasPathWikilinks leaves a bare root link (no slash) unchanged', () => {
  const src = 'Part of [[000 Map of Content]]';
  assert.equal(aliasPathWikilinks(src).text, src);
});

test('aliasPathWikilinks leaves an un-aliasable bracketed basename bare', () => {
  const src = 'see [[Keywords/+ [Plus] keyword]] x';
  const { text, skipped } = aliasPathWikilinks(src);
  assert.equal(text, src);
  assert.equal(skipped, 1);
});

test('aliasPathWikilinks preserves an anchor on the target, aliasing to the basename', () => {
  const { text } = aliasPathWikilinks('[[Pages/Patching/Stage View#Setup]]');
  assert.equal(text, '[[Pages/Patching/Stage View#Setup|Stage View]]');
});
