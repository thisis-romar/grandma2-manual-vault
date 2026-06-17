/**
 * nlp.js — topic extraction (MA2 refactor of the LinkedIn extractor's NLP
 * topic step). Default provider is local and dependency-free: significant-term
 * frequency + the known MA2 keyword vocabulary. An optional `openai` provider
 * (NLP_PROVIDER=openai, OPENAI_API_KEY set) calls the API via fetch — no SDK.
 *
 * Usage: node nlp.js            # per-note topics → analytics/topics.json
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadVault, byType, stripBoilerplate, VAULT_ROOT_DEFAULT } from './lib/vault.js';

const STOPWORDS = new Set(('a an and are as at be but by for from has have if in into is it its of on or that the ' +
  'their then there these this to was were will with you your can not all any may more such using used use see ' +
  'when which while also been being how what when where who whom into onto out up down over under than them they ' +
  'we our us his her him she he do does done each other some most via per about above below after before').split(' '));

/**
 * Extract topics from a note body.
 * @param {string} text
 * @param {Set<string>} keywordSet  lowercase known MA2 keywords
 * @param {number} topN
 * @returns {{ keywords: string[], terms: string[] }}
 */
export function extractTopics(text, keywordSet = new Set(), topN = 8) {
  const freq = new Map();
  const tokens = text.toLowerCase().match(/\b[a-z][a-z-]{2,}\b/g) || [];
  for (const tok of tokens) {
    if (STOPWORDS.has(tok)) continue;
    freq.set(tok, (freq.get(tok) || 0) + 1);
  }
  const terms = [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([t]) => t);

  const keywords = [];
  for (const kw of keywordSet) {
    if (kw.length < 2) continue;
    const re = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (re.test(text)) keywords.push(kw);
  }
  return { keywords: keywords.sort(), terms };
}

/** Optional OpenAI provider (fetch-based, no SDK). */
async function openaiTopics(text) {
  const key = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  if (!key) throw new Error('NLP_PROVIDER=openai but OPENAI_API_KEY is not set');
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: `Return 5-8 comma-separated lighting-console topic tags for:\n\n${text.slice(0, 4000)}` }],
      temperature: 0,
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}`);
  const json = await res.json();
  return (json.choices?.[0]?.message?.content || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
}

export async function runNlp(root = VAULT_ROOT_DEFAULT) {
  const vault = await loadVault(root);
  const keywordSet = new Set(
    byType(vault.notes, 'keyword').map((n) => (n.data.keyword || n.key.split('/').pop()).toLowerCase()),
  );
  const provider = process.env.NLP_PROVIDER || 'local';
  const perNote = [];
  const topicFreq = new Map();

  for (const note of vault.notes) {
    if (!['page', 'keyword', 'quick-start'].includes(note.type)) continue;
    const clean = stripBoilerplate(note.body);
    let topics;
    if (provider === 'openai') {
      const tags = await openaiTopics(clean);
      topics = { keywords: tags, terms: [] };
    } else {
      topics = extractTopics(clean, keywordSet);
    }
    perNote.push({ note: note.path, ...topics });
    for (const t of [...topics.keywords, ...topics.terms]) topicFreq.set(t, (topicFreq.get(t) || 0) + 1);
  }

  const report = {
    generated: new Date().toISOString(),
    provider,
    notes: perNote.length,
    topTopics: [...topicFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40).map(([topic, count]) => ({ topic, count })),
    perNote,
  };
  const outDir = path.join(root, 'analytics');
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'topics.json'), JSON.stringify(report, null, 2), 'utf8');

  console.log(`\nTopic extraction (${provider}) — ${perNote.length} notes`);
  console.log('Top topics:');
  for (const { topic, count } of report.topTopics.slice(0, 20)) console.log(`  ${String(count).padStart(4)}  ${topic}`);
  console.log('  → analytics/topics.json');
  return report;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runNlp().catch((e) => { console.error(e); process.exit(1); });
}
