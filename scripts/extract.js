/**
 * grandma2-manual-extractor / extract.js
 *
 * Scrapes https://help.malighting.com/grandMA2/en/help/ and generates
 * an Obsidian vault in the parent directory.
 *
 * Usage: node extract.js [--section presets] [--limit 20] [--dry-run]
 *
 * Output layout:
 *   ../Sections/{SectionName}.md
 *   ../Pages/{SectionName}/{PageTitle}.md
 *   ../Keywords/{Keyword}.md
 *   ../Keys/{KeyLabel}.md
 *   ../QuickStart/{Title}.md
 */

import { load } from 'cheerio';
import TurndownService from 'turndown';
import pLimit from 'p-limit';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ─── Config ──────────────────────────────────────────────────────────────────

const BASE_URL = 'https://help.malighting.com/grandMA2/en/help';
const INDEX_URL = `${BASE_URL}/index.html`;
const VAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONCURRENCY = 4;          // parallel fetches — be polite to MA servers
const RETRY_LIMIT = 3;
const FETCH_DELAY_MS = 300;     // ms between each fetch batch

// CLI flags
const args = process.argv.slice(2);
const DRY_RUN   = args.includes('--dry-run');
const LIMIT_VAL = (() => { const i = args.indexOf('--limit'); return i >= 0 ? +args[i+1] : null; })();
const SECTION_F = (() => { const i = args.indexOf('--section'); return i >= 0 ? args[i+1] : null; })();

// ─── Turndown (HTML → Markdown) ───────────────────────────────────────────────

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

// Preserve <code> inline
td.addRule('code', {
  filter: ['code'],
  replacement: (c) => `\`${c}\``
});

// Convert <pre><code> blocks
td.addRule('pre', {
  filter: (n) => n.nodeName === 'PRE',
  replacement: (c) => `\n\`\`\`\n${c.replace(/`/g, '')}\n\`\`\`\n`
});

// Strip MA-specific nav/chrome divs before conversion
const STRIP_SELECTORS = [
  '.sidenav', '#sidenav', 'nav', '.TOCTree', '#TOCTree',
  '.MCBreadcrumbsBox', '.MCBreadcrumbs', '.MCFooterContent',
  '.MCRelatedTopics', '.HeadingRunIn', '.MadCap_miniTOC',
  'script', 'style', 'header', 'footer'
];

// ─── Slug type detection ──────────────────────────────────────────────────────

/**
 * Infer note type and metadata from a slug like "key_presets_create"
 */
function detectSlugMeta(slug) {
  // Strip leading "key_" prefix
  const inner = slug.replace(/^key_/, '');

  if (inner.startsWith('keyword_')) {
    return { type: 'keyword', name: inner.replace('keyword_', '') };
  }
  if (inner.startsWith('key_')) {
    // console key pages: key_key_store → type=key, name=store
    return { type: 'key', name: inner.replace('key_', '') };
  }

  // Quick Start Guide prefix detection (handled via parent doc set in TOC)
  // Will be overridden by TOC hierarchy

  return { type: null, name: inner }; // resolve via TOC depth later
}

// ─── Section slug → display name map ─────────────────────────────────────────

// Maps the first path component after key_ to a friendly section name.
// Built from the TOC index page first visit; this is the fallback.
const SECTION_SLUG_MAP = {
  'introduction':         'Introduction',
  'safety_information':   'Safety Information',
  'device_overview':      'Device Overview',
  'so':                   'System Overview',
  'first_steps':          'First Steps',
  'fs':                   'First Steps',
  'keys_and_buttons':     'Keys and Buttons',
  'keys':                 'Keys and Buttons',
  'keyboard':             'Keys and Buttons',
  'workspace':            'Workspace',
  'ws':                   'Workspace',
  'widget':               'Workspace',
  'windows':              'Windows',
  'command_syntax':       'Command Syntax and Keywords',
  'cs':                   'Command Syntax and Keywords',
  'backup_menu':          'Backup Menu',
  'single_multi':         'Single and Multi User Systems',
  'network':              'Networking',
  'networking':           'Networking',
  'patch':                'Patching',
  'basic_fixture':        'Basic Fixture Types',
  'operate_fixtures':     'Operate Fixtures',
  'of':                   'Operate Fixtures',
  'pools':                'Pools',
  'groups':               'Groups',
  'presets':              'Presets',
  'cues_and_sequences':   'Cues and Sequences',
  'cues':                 'Cues and Sequences',
  'exec':                 'Executors',
  'adv_seq':              'Advanced Sequence Functionality',
  'adv_exec':             'Advanced Executor Functionality',
  'clone':                'Clone',
  'search_replace':       'Search and Replace',
  'image':                'Image Pool',
  'imag':                 'Image Pool',
  'layouts':              'Layouts',
  'wfm':                  'Worlds Filters and Masks',
  'matricks':             'MAtricks',
  'chaser':               'Chasers',
  'effects':              'Effects',
  'bitmapfixture':        'Bitmap Fixture',
  'xyz':                  'XYZ',
  'remote_control':       'Remote Control',
  'timecode':             'Timecode',
  'timer':                'Timer',
  'timers':               'Timer',
  'agenda':               'Agenda',
  'macro':                'Macros',
  'plugins':              'Plugins',
  'psr':                  'Partial Show Read',
  'rdm':                  'RDM',
  'dmx_profiles':         'DMX Profiles',
  'ost':                  'Other System Tools',
  'message_center':       'Other System Tools',
  'ei':                   'Export and Import',
  'export_and_import':    'Export and Import',
  'update':               'Update the Software',
  'advanced_fixture':     'Advanced Fixture Types',
  'adv_fixture':          'Advanced Fixture Types',
  'onpc_details':         'grandMA2 onPC Details',
  'onpc':                 'grandMA2 onPC Details',
  'control_ma_ndp':       'Control MA NDPs',
  'control_ndp':          'Control MA NDPs',
  'control_ma_switch':    'Control MA Network Switch',
  'control_ma_xport':     'Control MA xPort Nodes',
  'control_node':         'Control MA xPort Nodes',
  'console_settings':     'Console Settings',
  'window':               'Console Settings',
  'local_settings':       'Console Settings',
  'date_time':            'Console Settings',
  'shut_down':            'Shut Down',
  'error_messages':       'Error Messages',
  'technical_data':       'Technical Data',
  'glossary':             'Glossary',
  'new_in_the_manual':    'New in the Manual',
};

function sectionFromSlug(slug) {
  const inner = slug.replace(/^key_/, '');
  const parts = inner.split('_');
  // Try progressively longer prefixes
  for (let len = parts.length; len >= 1; len--) {
    const candidate = parts.slice(0, len).join('_');
    if (SECTION_SLUG_MAP[candidate]) return SECTION_SLUG_MAP[candidate];
  }
  // Fallback: title-case the first segment
  return parts[0].replace(/^\w/, c => c.toUpperCase());
}

// ─── Fetch with retry ─────────────────────────────────────────────────────────

async function fetchPage(url, retries = RETRY_LIMIT) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'grandma2-manual-extractor/1.0 (Obsidian vault generator)' }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      return await res.text();
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}

// ─── Parse TOC from index page ────────────────────────────────────────────────

/**
 * Returns flat array of TOC entries with hierarchy info.
 * Each entry: { url, slug, title, depth, parentUrl, docSet, index }
 */
async function parseTOC() {
  console.log('Fetching TOC from index page...');
  const html = await fetchPage(INDEX_URL);
  const $ = load(html);

  const entries = [];
  let index = 0;

  // The TOC is a nested <ul> inside the sidenav.
  // Each <a> has an href to the page.
  // We track depth via nesting level.

  /**
   * Three doc sets are in the nav:
   *   grandMA2 User Manual
   *   grandMA3 Mode2
   *   grandMA2 Quick Start Guide
   */
  const DOC_SET_ROOTS = {
    'index.html': 'user-manual',
    'grandma3_mode2/index.html': 'mode2',
    'grandma2_quick_start_guide/index.html': 'quick-start',
  };

  let currentDocSet = 'user-manual';

  function walkList($list, depth, parentUrl) {
    $list.children('li').each((_, li) => {
      const $li = $(li);
      const $a = $li.children('a').first();
      if (!$a.length) return;

      const href = $a.attr('href') || '';
      const title = $a.text().trim();
      if (!href || !title) return;

      // Resolve URL
      let url = href.startsWith('http') ? href
                : `${BASE_URL}/${href.replace(/^.*\/help\//, '')}`;
      url = url.split('#')[0]; // strip anchors

      // Detect doc set changes
      for (const [root, ds] of Object.entries(DOC_SET_ROOTS)) {
        if (href.includes(root)) { currentDocSet = ds; break; }
      }

      // Derive slug from URL
      const slug = url.split('/').pop().replace('.html', '');

      // Detect type override from slug
      const slugMeta = detectSlugMeta(slug);
      let type = slugMeta.type;
      if (!type) {
        if (currentDocSet === 'quick-start') type = 'quick-start';
        else if (currentDocSet === 'mode2') type = 'page';
        else type = depth === 1 ? 'section' : 'page';
      }

      const entry = {
        url, slug, title, depth,
        parentUrl: parentUrl || null,
        docSet: currentDocSet,
        type,
        index: index++,
      };
      entries.push(entry);

      // Recurse into children
      const $sublist = $li.children('ul').first();
      if ($sublist.length) {
        walkList($sublist, depth + 1, url);
      }
    });
  }

  // Find the top-level nav list
  const $navList = $('nav ul, .sidenav ul, #sidenav ul, ul').first();
  walkList($navList, 1, null);

  // Deduplicate by URL
  const seen = new Set();
  const deduped = entries.filter(e => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });

  console.log(`TOC parsed: ${deduped.length} entries`);
  return deduped;
}

// ─── Extract page content ─────────────────────────────────────────────────────

/**
 * Fetches a page and returns { title, meta, bodyMarkdown, links }.
 * MadCap Flare pages put content in .Body or .Content div.
 * The nav/TOC is in the same document but stripped before conversion.
 */
async function extractPageContent(url) {
  const html = await fetchPage(url);
  const $ = load(html);

  // Extract meta tags
  const metaKeywords = ($('meta[name="meta-keywords"]').attr('content') || '').trim();
  const metaSearchwords = ($('meta[name="meta-searchwords"]').attr('content') || '').trim();
  const title = $('title').text().trim()
    || $('h1').first().text().trim()
    || '';

  // Strip navigation chrome
  for (const sel of STRIP_SELECTORS) {
    $(sel).remove();
  }

  // Find the content area.  Flare typically uses .Body, .Content, or .bodyText
  // Fall back to <main> or <article>, then to full <body>
  let $content = $('.Body, .Content, .bodyText, .MCBody').first();
  if (!$content.length) $content = $('main, article').first();
  if (!$content.length) $content = $('body');

  // Convert to markdown
  const bodyMarkdown = td.turndown($content.html() || '').trim();

  // Extract all internal links for wikilink cross-refs
  const links = [];
  $content.find('a[href]').each((_, a) => {
    const href = $(a).attr('href') || '';
    if (href.includes('help.malighting.com') || href.match(/key_.*\.html/)) {
      const linkSlug = href.split('/').pop().replace('.html', '');
      if (linkSlug) links.push(linkSlug);
    }
  });

  return { title, metaKeywords, metaSearchwords, bodyMarkdown, links };
}

// ─── Note generators ──────────────────────────────────────────────────────────

function sanitizeFilename(name) {
  return name
    .replace(/[\/\\:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Build YAML frontmatter string */
function buildFrontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (v === null || v === undefined) continue;
    if (Array.isArray(v)) {
      if (v.length === 0) continue;
      lines.push(`${k}:`);
      v.forEach(item => lines.push(`  - "${item}"`));
    } else {
      const val = typeof v === 'string' ? `"${v.replace(/"/g, '\\"')}"` : v;
      lines.push(`${k}: ${val}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

/** Generate aliases from meta tags */
function buildAliases(metaKeywords, metaSearchwords, title) {
  const raw = [metaKeywords, metaSearchwords]
    .filter(Boolean)
    .join(', ')
    .split(/,\s*/)
    .map(s => s.trim())
    .filter(s => s && s.toLowerCase() !== title.toLowerCase());
  return [...new Set(raw)].slice(0, 10); // cap at 10
}

/** keyword note */
function buildKeywordNote(entry, content) {
  const { title, metaKeywords, metaSearchwords, bodyMarkdown } = content;
  const keywordName = entry.slug.replace('key_keyword_', '');
  const displayName = title.replace(/ Keyword$/, '').trim() || keywordName;
  const aliases = buildAliases(metaKeywords, metaSearchwords, title);

  // Check for matching key note
  const relatedKey = `[[Keys/${sanitizeFilename(displayName)}]]`;

  const fm = buildFrontmatter({
    type:             'keyword',
    keyword:          displayName,
    slug:             entry.slug,
    url:              entry.url,
    keyword_type:     'unknown',   // can be enriched post-generate
    related_key:      relatedKey,
    aliases,
    tags:             ['type/keyword'],
  });

  const source = `\n> [!source]- Source\n> [MA Lighting Help – ${displayName}](${entry.url})\n`;

  const body = bodyMarkdown || '*No content extracted — fetch and paste manually.*';

  const footer = `\n\nPart of [[000 Keyword Index]] · [[000 Map of Content]]`;

  return `${fm}\n\n# ${displayName}\n${source}\n${body}${footer}\n`;
}

/** console key note */
function buildKeyNote(entry, content) {
  const { title, metaKeywords, metaSearchwords, bodyMarkdown } = content;
  const keyName = entry.slug.replace('key_key_', '');
  const displayName = title.replace(/\[.*?\]/g, '').trim() || keyName;
  const aliases = buildAliases(metaKeywords, metaSearchwords, title);
  const relatedKw = `[[Keywords/${sanitizeFilename(displayName)}]]`;

  const fm = buildFrontmatter({
    type:              'key',
    key_label:         displayName,
    slug:              entry.slug,
    url:               entry.url,
    related_keyword:   relatedKw,
    aliases,
    tags:              ['type/key'],
  });

  const source = `\n> [!source]- Source\n> [MA Lighting Help – ${title}](${entry.url})\n`;
  const body = bodyMarkdown || '*No content extracted.*';
  const footer = `\n\nPart of [[000 Key Index]] · [[000 Map of Content]]`;

  return `${fm}\n\n# ${title}\n${source}\n${body}${footer}\n`;
}

/** section index note */
function buildSectionNote(entry, content, childEntries) {
  const { title, metaKeywords, metaSearchwords, bodyMarkdown } = content;
  const sectionName = title || entry.title;
  const aliases = buildAliases(metaKeywords, metaSearchwords, title);
  const childLinks = childEntries.map(c => `- [[Pages/${sanitizeFilename(sectionName)}/${sanitizeFilename(c.title)}]]`);

  const fm = buildFrontmatter({
    type:        'section',
    section:     sectionName,
    slug:        entry.slug,
    url:         entry.url,
    page_count:  childEntries.length,
    aliases,
    tags:        ['type/section'],
    pages:       childEntries.map(c => `[[Pages/${sanitizeFilename(sectionName)}/${sanitizeFilename(c.title)}]]`),
  });

  const source = `\n> [!source]- Source\n> [MA Lighting Help – ${sectionName}](${entry.url})\n`;
  const body = bodyMarkdown || '*Section index — see pages below.*';
  const pagesBlock = childLinks.length > 0
    ? `\n\n## Pages in This Section\n\n${childLinks.join('\n')}`
    : '';
  const footer = `\n\nPart of [[000 Map of Content]]`;

  return `${fm}\n\n# ${sectionName}\n${source}\n${body}${pagesBlock}${footer}\n`;
}

/** page note */
function buildPageNote(entry, content, siblingEntries) {
  const { title, metaKeywords, metaSearchwords, bodyMarkdown } = content;
  const pageTitle = title || entry.title;
  const sectionName = sectionFromSlug(entry.slug);
  const aliases = buildAliases(metaKeywords, metaSearchwords, title);

  // Find prev/next sibling
  const idx = siblingEntries.findIndex(s => s.url === entry.url);
  const prevEntry = idx > 0 ? siblingEntries[idx - 1] : null;
  const nextEntry = idx >= 0 && idx < siblingEntries.length - 1 ? siblingEntries[idx + 1] : null;

  const prevLink = prevEntry ? `[[Pages/${sanitizeFilename(sectionName)}/${sanitizeFilename(prevEntry.title)}]]` : null;
  const nextLink = nextEntry ? `[[Pages/${sanitizeFilename(sectionName)}/${sanitizeFilename(nextEntry.title)}]]` : null;

  const fm = buildFrontmatter({
    type:         'page',
    title_str:    pageTitle,
    slug:         entry.slug,
    url:          entry.url,
    section:      sectionName,
    section_ref:  `[[Sections/${sanitizeFilename(sectionName)}]]`,
    prev_page:    prevLink,
    next_page:    nextLink,
    aliases,
    tags:         ['type/page', `section/${entry.slug.replace('key_', '').split('_')[0]}`],
  });

  const source = `\n> [!source]- Source\n> [MA Lighting Help – ${pageTitle}](${entry.url})\n`;
  const body = bodyMarkdown || '*No content extracted.*';

  const navParts = [];
  if (prevLink) navParts.push(`← ${prevLink}`);
  if (nextLink) navParts.push(`${nextLink} →`);
  const nav = navParts.length > 0 ? `\n\n${navParts.join(' | ')}` : '';

  const footer = `${nav}\n\nPart of [[Sections/${sanitizeFilename(sectionName)}]] · [[000 Map of Content]]`;

  return `${fm}\n\n# ${pageTitle}\n${source}\n${body}${footer}\n`;
}

/** quick-start note */
function buildQuickStartNote(entry, content) {
  const { title, bodyMarkdown } = content;
  const pageTitle = title || entry.title;

  const fm = buildFrontmatter({
    type:  'quick-start',
    slug:  entry.slug,
    url:   entry.url,
    tags:  ['type/quick-start'],
  });

  const source = `\n> [!source]- Source\n> [MA Lighting Help – ${pageTitle}](${entry.url})\n`;
  const body = bodyMarkdown || '*No content extracted.*';
  const footer = `\n\nPart of [[000 Map of Content]]`;

  return `${fm}\n\n# ${pageTitle}\n${source}\n${body}${footer}\n`;
}

// ─── File write helpers ───────────────────────────────────────────────────────

async function writeNote(relPath, content) {
  const fullPath = path.join(VAULT_ROOT, relPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, content, 'utf8');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n=== grandma2-manual-extractor ===`);
  console.log(`Vault root: ${VAULT_ROOT}`);
  if (DRY_RUN) console.log('DRY RUN — no files written');

  // 1. Parse full TOC
  let allEntries = await parseTOC();

  // 2. Filter by section if requested
  if (SECTION_F) {
    allEntries = allEntries.filter(e => e.slug.includes(SECTION_F));
    console.log(`Filtered to ${allEntries.length} entries matching --section ${SECTION_F}`);
  }

  // 3. Apply count limit if requested
  if (LIMIT_VAL) {
    allEntries = allEntries.slice(0, LIMIT_VAL);
    console.log(`Capped at ${allEntries.length} entries (--limit ${LIMIT_VAL})`);
  }

  // 4. Build parent→children map for sibling/nav resolution
  const childMap = new Map(); // parentUrl → [entry...]
  for (const entry of allEntries) {
    if (!entry.parentUrl) continue;
    if (!childMap.has(entry.parentUrl)) childMap.set(entry.parentUrl, []);
    childMap.get(entry.parentUrl).push(entry);
  }

  // 5. Process each entry
  const limit = pLimit(CONCURRENCY);
  let written = 0;
  let errors = 0;

  const tasks = allEntries.map(entry => limit(async () => {
    await new Promise(r => setTimeout(r, FETCH_DELAY_MS));

    let content;
    try {
      content = await extractPageContent(entry.url);
    } catch (err) {
      console.error(`  ERROR fetching ${entry.url}: ${err.message}`);
      errors++;
      return;
    }

    const displayTitle = content.title || entry.title;
    let noteContent = '';
    let relPath = '';

    switch (entry.type) {
      case 'keyword': {
        const name = sanitizeFilename(displayTitle.replace(/ Keyword$/, '').trim() || entry.slug.replace('key_keyword_', ''));
        relPath = `Keywords/${name}.md`;
        noteContent = buildKeywordNote(entry, content);
        break;
      }
      case 'key': {
        const name = sanitizeFilename(displayTitle.replace(/\[.*?\]/g, '').trim() || entry.slug.replace('key_key_', ''));
        relPath = `Keys/${name}.md`;
        noteContent = buildKeyNote(entry, content);
        break;
      }
      case 'section': {
        const sectionName = sanitizeFilename(displayTitle || sectionFromSlug(entry.slug));
        const children = childMap.get(entry.url) || [];
        relPath = `Sections/${sectionName}.md`;
        noteContent = buildSectionNote(entry, content, children);
        break;
      }
      case 'quick-start': {
        const name = sanitizeFilename(displayTitle);
        relPath = `QuickStart/${name}.md`;
        noteContent = buildQuickStartNote(entry, content);
        break;
      }
      case 'page':
      default: {
        const sectionName = sanitizeFilename(sectionFromSlug(entry.slug));
        const name = sanitizeFilename(displayTitle);
        const siblings = childMap.get(entry.parentUrl) || [entry];
        relPath = `Pages/${sectionName}/${name}.md`;
        noteContent = buildPageNote(entry, content, siblings);
        break;
      }
    }

    if (!DRY_RUN) {
      await writeNote(relPath, noteContent);
    }
    written++;
    if (written % 25 === 0) console.log(`  [${written}/${allEntries.length}] ...`);
  }));

  await Promise.all(tasks);

  console.log(`\n✓ Done. Written: ${written}, Errors: ${errors}`);

  if (!DRY_RUN) {
    // Trigger MOC generation
    const { generateMOC } = await import('./generate-moc.js');
    await generateMOC(VAULT_ROOT, allEntries);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
