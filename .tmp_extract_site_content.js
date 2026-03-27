const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const appDir = path.join(repoRoot, 'app');
const outFile = path.join(repoRoot, 'site-content-dump.md');
const targetTags = new Set(['h1', 'h2', 'h3', 'p', 'span', 'button']);
const skippedDirs = new Set(['node_modules', '.next', 'public', '.git']);

function walk(dir, out) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (skippedDirs.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.isFile() && e.name === 'page.tsx') out.push(p);
  }
}

function routeFromFile(file) {
  const rel = path.relative(appDir, file).replace(/\\/g, '/');
  const parts = rel.split('/').slice(0, -1);
  const routeParts = parts.filter(seg => !(seg.startsWith('(') && seg.endsWith(')')));
  const route = '/' + routeParts.join('/');
  return route === '/' ? '/' : route.replace(/\/+/g, '/');
}

function normalizeText(s) {
  return s
    .replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{\s*['"`]([^'"`]+)['"`]\s*\}/g, ' $1 ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTagTexts(src, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    const t = normalizeText(m[1] || '');
    if (t) out.push(t);
  }
  return out;
}

function extractFromFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const ordered = [];
  const tags = ['h1', 'h2', 'h3', 'p', 'span', 'button'];

  // Preserve rough DOM order by scanning tag openings and extracting their nearest block.
  const openRe = /<(h1|h2|h3|p|span|button)(?:\s[^>]*)?>/gi;
  let m;
  while ((m = openRe.exec(src)) !== null) {
    const tag = m[1].toLowerCase();
    const start = m.index;
    const endTag = `</${tag}>`;
    const end = src.indexOf(endTag, openRe.lastIndex);
    if (end === -1) continue;
    const inner = src.slice(openRe.lastIndex, end);
    const t = normalizeText(inner);
    if (t) ordered.push({ tag, text: t });
  }

  const seen = new Set();
  const lines = [];
  for (const item of ordered) {
    if (seen.has(item.text)) continue;
    seen.add(item.text);
    lines.push(item.text);
  }

  const firstH1 = ordered.find(x => x.tag === 'h1')?.text || '';
  return { h1: firstH1, lines };
}

const files = [];
walk(appDir, files);
files.sort();

const skipped = [];
const blocks = [];
for (const file of files) {
  try {
    const route = routeFromFile(file);
    const { h1, lines } = extractFromFile(file);
    const body = [];
    body.push(`## ${route}`);
    body.push(`H1: ${h1 || '[missing]'}`);
    for (const l of lines) body.push(l);
    body.push('---');
    blocks.push(body.join('\n'));
  } catch (e) {
    skipped.push({ file, reason: e.message });
  }
}

fs.writeFileSync(outFile, blocks.join('\n\n') + '\n', 'utf8');
console.log(JSON.stringify({ processed: files.length - skipped.length, totalFound: files.length, output: outFile, skippedCount: skipped.length, skipped }, null, 2));
