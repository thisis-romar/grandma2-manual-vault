# Contributing to the grandMA2 Manual Vault

Thanks for helping improve the vault. This repo is a **passive, self-contained
knowledge resource** — an Obsidian vault of the grandMA2 User Manual as typed,
interlinked notes. The most valuable contributions improve **manual coverage and
accuracy**: fixing an incorrect note, filling a gap, tightening a cross-link, or
correcting a keyword/key reference.

Please read [`CLAUDE.md`](CLAUDE.md) first — it is the standing operating
procedure for structure, conventions, and tooling.

## What to contribute

- **Corrections** — a note that misstates console behaviour, an out-of-date
  command flag, a wrong count or reference.
- **Coverage** — a manual page or keyword that has no note yet, or a thin note
  that should be expanded from the source.
- **Linking** — missing or broken `[[wikilinks]]`, a page missing its
  prev/next nav footer or `> [!source]-` source callout.

Content changes should stay faithful to the source manual at
<https://help.malighting.com/grandMA2/en/help/>. This is a reference vault, not a
place for original tutorials or opinion.

## Conventions (must pass audit)

- Internal links are **always** `[[wikilinks]]`, path-qualified for notes
  (`[[Sections/Networking]]`, `[[Pages/.../Note]]`); bare only for the root
  `[[000 …]]` index files.
- Each note carries the required **frontmatter** for its `type`
  (`section` / `page` / `keyword` / `key` / `quick-start` / `moc`) — see the
  "Frontmatter fields" table in `CLAUDE.md`.
- Pages use the source callout (`> [!source]- Source` + canonical MA help URL)
  and the nav footer (`← [[prev]] | [[next]] →` then
  `Part of [[Section]] · [[000 Map of Content]]`).
- Do not create links to notes that don't exist.

## Before you open a PR

```bash
npm install
npm test          # link-conversion, internal-link repair, slug/filename, audit logic
npm run audit     # read-only conformance check — must report PASS
```

CI (`.github/workflows/ci.yml`) runs `npm test` + `npm run audit` on every push
and PR to `main`; broken links or frontmatter will fail the gate.

If your change touches note counts, run `npm run stats` (updates `README.md`) and
`npm run moc` (regenerates the indexes) so generated files stay in sync.

Commits follow **Conventional Commits** (enforced by commitlint), e.g.
`docs: fix Store /global note` or `fix(links): repair Networking prev/next`.

## Licensing of contributions

By contributing, you agree that your original contributions (structure, linking,
curation) are licensed under **CC BY 4.0**, consistent with the [`LICENSE`](LICENSE).
Note that the underlying grandMA2 manual **content** remains © MA Lighting and is
not relicensed by this project — contribute faithful references to it, not
re-copyrighted reproductions. See [`LICENSE`](LICENSE) for the full split.
