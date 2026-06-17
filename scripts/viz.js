/**
 * viz.js — interactive HTML graph of the vault (MA2 refactor of the LinkedIn
 * extractor's `analytics viz`). Emits a standalone analytics/graph.html using
 * vis-network from a CDN, so it adds no npm dependency.
 *
 * Nodes are coloured by note type using the CLAUDE.md color system.
 * Usage: node viz.js
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadVault, VAULT_ROOT_DEFAULT } from './lib/vault.js';

const TYPE_COLOR = {
  keyword: '#E15759',
  key: '#F28E2B',
  section: '#4E79A7',
  page: '#76B7B2',
  'quick-start': '#59A14F',
  moc: '#F97316',
  unknown: '#64748B',
};

export function buildGraph(vault) {
  const nodes = vault.notes.map((n) => ({
    id: n.key,
    label: n.key.split('/').pop(),
    group: n.type,
    color: TYPE_COLOR[n.type] || TYPE_COLOR.unknown,
    value: 1 + n.backlinks.size, // size by inbound links
  }));
  const edges = [];
  for (const n of vault.notes) {
    for (const l of n.links) edges.push({ from: n.key, to: l });
  }
  return { nodes, edges };
}

function html(graph) {
  const legend = Object.entries(TYPE_COLOR)
    .map(([t, c]) => `<span class="chip" style="background:${c}">${t}</span>`)
    .join(' ');
  return `<!doctype html>
<html><head><meta charset="utf-8"><title>grandMA2 Manual Vault — Graph</title>
<script src="https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js"></script>
<style>
  html,body{margin:0;height:100%;font-family:system-ui,sans-serif;background:#11141a;color:#cbd5e1}
  #net{width:100%;height:calc(100% - 44px)}
  #bar{height:44px;display:flex;align-items:center;gap:8px;padding:0 12px;background:#0b0e13}
  .chip{padding:2px 8px;border-radius:10px;color:#0b0e13;font-size:12px;font-weight:600}
  input{background:#1b2230;border:1px solid #2b3446;color:#e2e8f0;border-radius:6px;padding:5px 8px}
</style></head>
<body>
  <div id="bar"><strong>grandMA2 Vault</strong> ${graph.nodes.length} notes · ${graph.edges.length} links &nbsp; ${legend}
    &nbsp;<input id="q" placeholder="focus note… (Enter)" />
  </div>
  <div id="net"></div>
<script>
  const data = ${JSON.stringify(graph)};
  const nodes = new vis.DataSet(data.nodes);
  const edges = new vis.DataSet(data.edges.map((e,i)=>({id:i,...e})));
  const net = new vis.Network(document.getElementById('net'), {nodes,edges}, {
    nodes:{shape:'dot',scaling:{min:4,max:40},font:{color:'#cbd5e1',size:11}},
    edges:{color:{color:'#33405580'},smooth:false,arrows:{to:{enabled:true,scaleFactor:0.4}}},
    physics:{stabilization:true,barnesHut:{gravitationalConstant:-8000,springLength:120}},
    interaction:{hover:true,tooltipDelay:120}
  });
  document.getElementById('q').addEventListener('keydown',(ev)=>{
    if(ev.key!=='Enter')return; const v=ev.target.value.trim().toLowerCase();
    const hit=data.nodes.find(n=>n.id.toLowerCase().includes(v)); if(hit){net.focus(hit.id,{scale:1.2,animation:true});net.selectNodes([hit.id]);}
  });
</script></body></html>`;
}

export async function runViz(root = VAULT_ROOT_DEFAULT) {
  const vault = await loadVault(root);
  const graph = buildGraph(vault);
  const outDir = path.join(root, 'analytics');
  await fs.mkdir(outDir, { recursive: true });
  const out = path.join(outDir, 'graph.html');
  await fs.writeFile(out, html(graph), 'utf8');
  console.log(`Graph: ${graph.nodes.length} nodes, ${graph.edges.length} edges → analytics/graph.html`);
  return { nodes: graph.nodes.length, edges: graph.edges.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runViz().catch((e) => { console.error(e); process.exit(1); });
}
