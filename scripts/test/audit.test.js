/**
 * Integration test for auditVault(): build a tiny fixture vault on disk and
 * assert the link/structure findings.
 */
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { auditVault } from '../audit.js';

let root;

before(async () => {
  root = await fs.mkdtemp(path.join(os.tmpdir(), 'ma2-audit-'));
  await fs.mkdir(path.join(root, 'Sections'), { recursive: true });
  await fs.mkdir(path.join(root, 'Pages/Networking'), { recursive: true });

  await fs.writeFile(
    path.join(root, 'Sections/Networking.md'),
    '---\ntype: "section"\n---\n# Networking\n> [!source] x\nPart of [[000 Map of Content]]\n',
  );

  await fs.writeFile(
    path.join(root, 'Pages/Networking/Page A.md'),
    '---\ntype: "page"\n---\n# Page A\n> [!source] x\n' +
      'Links: [[Sections/Networking]] [[sections/networking]] [[Sections/Ghost]]\n' +
      'A raw [ButtonPage](key_keyword_buttonpage.html) link.\n' +
      'Part of [[Sections/Networking]]\n',
  );
});

after(async () => {
  await fs.rm(root, { recursive: true, force: true });
});

test('detects a broken link to a non-existent note', async () => {
  const { findings } = await auditVault(root);
  assert.ok(findings.brokenLinks.some((l) => /Sections\/Ghost/.test(l)));
});

test('flags a case-only mismatch separately from broken links', async () => {
  const { findings } = await auditVault(root);
  assert.equal(findings.caseLinks.length, 1);
  assert.match(findings.caseLinks[0], /sections\/networking/);
});

test('reports missing required folders and MOC files in structure', async () => {
  const { findings } = await auditVault(root);
  const joined = findings.structure.join('\n');
  assert.match(joined, /MISSING FOLDER: Keywords\//);
  assert.match(joined, /MISSING MOC FILE: 000 Map of Content\.md/);
});

test('flags a raw internal .html link', async () => {
  const { findings } = await auditVault(root);
  assert.equal(findings.rawLinks.length, 1);
  assert.match(findings.rawLinks[0], /key_keyword_buttonpage\.html/);
});

test('an exact path-qualified link is not flagged', async () => {
  const { findings, linkTotal } = await auditVault(root);
  assert.ok(linkTotal >= 4);
  // [[Sections/Networking]] appears twice and must resolve exactly both times.
  assert.ok(!findings.brokenLinks.some((l) => /\[\[Sections\/Networking\]\]/.test(l)));
});

test('flags unaliased path body links; exempts frontmatter, aliased, bracketed and bare-root', async () => {
  const r = await fs.mkdtemp(path.join(os.tmpdir(), 'ma2-audit-alias-'));
  await fs.mkdir(path.join(r, 'Sections'), { recursive: true });
  await fs.mkdir(path.join(r, 'Keywords'), { recursive: true });
  await fs.mkdir(path.join(r, 'Pages/Networking'), { recursive: true });
  await fs.writeFile(path.join(r, 'Sections/Networking.md'), '---\ntype: "section"\n---\n# N\n');
  await fs.writeFile(path.join(r, 'Keywords/Store.md'), '---\ntype: "keyword"\n---\n# Store\n');
  await fs.writeFile(
    path.join(r, 'Pages/Networking/P.md'),
    '---\ntype: "page"\nsection_ref: "[[Sections/Networking]]"\n---\n# P\n> [!source] x\n' +
      'Bare path link [[Keywords/Store]] here.\n' + // flagged
      'Aliased [[Keywords/Store|Store]] and bracketed [[Keywords/+ [Plus] keyword]] and root [[000 Map of Content]].\n' + // none flagged
      'Part of [[Sections/Networking]]\n', // flagged
  );

  const { findings } = await auditVault(r);
  const hits = findings.unaliasedPathLinks.filter((l) => /Pages\/Networking\/P\.md/.test(l));
  assert.equal(hits.length, 2);
  assert.ok(hits.some((l) => /\[\[Keywords\/Store\]\]/.test(l)));
  assert.ok(hits.some((l) => /\[\[Sections\/Networking\]\]/.test(l)));
  // frontmatter section_ref (line 2) must NOT be flagged
  assert.ok(!findings.unaliasedPathLinks.some((l) => /P\.md:2\b/.test(l)));
  await fs.rm(r, { recursive: true, force: true });
});
