/**
 * graph.js — search / similar / serve over the vault graph (MA2 refactor of the
 * LinkedIn extractor's Neo4j graph commands).
 *
 * The LinkedIn tool required a running Neo4j; for a static ~841-note vault that
 * is overkill, so the default engine is in-memory and dependency-free:
 *   - search <query>   full-text ranking across note bodies
 *   - similar <note>   shared-neighbour Jaccard (reuses analytics)
 *   - serve            HTTP API on :3100 (node:http, no framework)
 *   - cypher           export a Neo4j-loadable Cypher script (analytics/graph.cypher)
 *                      for anyone who wants the graph DB (see docker-compose.yml)
 */
import { promises as fs } from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadVault, stripBoilerplate, VAULT_ROOT_DEFAULT } from './lib/vault.js';
import { similar, summary } from './analytics.js';

const PORT = Number(process.env.GRAPH_PORT || 3100);

function tokenize(s) {
  return (s.toLowerCase().match(/\b[a-z0-9][a-z0-9-]*\b/g) || []);
}

/** Full-text search across note bodies, ranked by query-term frequency. */
export function search(vault, query, limit = 15) {
  const terms = [...new Set(tokenize(query))].filter((t) => t.length > 1);
  if (!terms.length) return [];
  const results = [];
  for (const note of vault.notes) {
    if (note.type === 'moc') continue;
    const clean = stripBoilerplate(note.body).replace(/\s+/g, ' ');
    const lc = clean.toLowerCase();
    let score = 0;
    for (const t of terms) score += lc.split(t).length - 1;
    if (score > 0) {
      const idx = lc.indexOf(terms[0]);
      const snippet = idx >= 0 ? clean.slice(Math.max(0, idx - 40), idx + 80).trim() : '';
      results.push({ note: note.path, score, snippet });
    }
  }
  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** Escape a string for a Cypher single-quoted literal. */
const cy = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/** Export the vault as a Neo4j-loadable Cypher script. */
export function toCypher(vault) {
  const lines = ['// grandMA2 vault graph — load with: cypher-shell < graph.cypher', 'MATCH (n) DETACH DELETE n;'];
  for (const n of vault.notes) {
    lines.push(`CREATE (:Note {key:'${cy(n.key)}', type:'${cy(n.type)}', title:'${cy(n.title)}'});`);
  }
  for (const n of vault.notes) {
    for (const l of n.links) {
      lines.push(`MATCH (a:Note {key:'${cy(n.key)}'}),(b:Note {key:'${cy(l)}'}) CREATE (a)-[:LINKS_TO]->(b);`);
    }
  }
  return lines.join('\n') + '\n';
}

function serve(vault) {
  const json = (res, code, body) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(body, null, 2)); };
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, `http://localhost:${PORT}`);
    if (u.pathname === '/search') return json(res, 200, search(vault, u.searchParams.get('q') || ''));
    if (u.pathname === '/similar') {
      const r = similar(vault, u.searchParams.get('note') || '');
      return r ? json(res, 200, r) : json(res, 404, { error: 'note not found' });
    }
    if (u.pathname === '/summary') return json(res, 200, summary(vault));
    return json(res, 200, { endpoints: ['/search?q=', '/similar?note=', '/summary'] });
  });
  server.listen(PORT, () => console.log(`graph API on http://localhost:${PORT}  (/search?q= · /similar?note= · /summary)`));
}

async function main() {
  const [sub, ...rest] = process.argv.slice(2);
  const vault = await loadVault(VAULT_ROOT_DEFAULT);
  switch (sub) {
    case 'search': {
      const q = rest.join(' ');
      if (!q) { console.error('usage: graph search <query>'); process.exit(2); }
      const res = search(vault, q);
      console.log(`\n${res.length} result(s) for "${q}"\n`);
      for (const r of res) console.log(`  [${String(r.score).padStart(3)}] ${r.note}\n        …${r.snippet}…`);
      break;
    }
    case 'similar': {
      const r = similar(vault, rest[0] || '');
      if (!r) { console.error('note not found'); process.exit(2); }
      for (const x of r) console.log(`  ${x.score.toFixed(3)}  ${x.note}`);
      break;
    }
    case 'cypher': {
      const outDir = path.join(VAULT_ROOT_DEFAULT, 'analytics');
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, 'graph.cypher'), toCypher(vault), 'utf8');
      console.log(`Wrote analytics/graph.cypher (${vault.notes.length} nodes). Load into Neo4j (see docker-compose.yml).`);
      break;
    }
    case 'serve':
      serve(vault);
      break;
    default:
      console.error('usage: node graph.js <search <query> | similar <note> | cypher | serve>');
      process.exit(2);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
