// Production build for dearyoutx.com: the static "lived-in" site (design/home-v6.html).
// Copies only the files the page actually references into dist/. Raw photos, shots and
// unreleased art never reach dist (allowlist, not blocklist).
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const SRC = 'design', OUT = 'dist', PAGE = 'home-v6.html'
mkdirSync(OUT, { recursive: true })
for (const f of readdirSync(OUT)) rmSync(join(OUT, f), { recursive: true, force: true }) // empty, keep the dir

let html = readFileSync(join(SRC, PAGE), 'utf8')
const extra = new Set()
const SITE = 'https://dearyoutx.com'
const meta = `
<link rel="canonical" href="${SITE}/" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${SITE}/" />
<meta property="og:title" content="dear you" />
<meta property="og:description" content="little pop punk band from big texas, with a lot to say." />
<meta property="og:image" content="${SITE}/assets/img/og-1200x630.jpg" />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@DearYouTX" />
<meta name="twitter:image" content="${SITE}/assets/img/og-1200x630.jpg" />`
html = html.replace('<meta name="theme-color"', meta.trim() + '\n<meta name="theme-color"')
html = html.replace(/content="dear you\. pop punk from beaumont, texas\."/, 'content="little pop punk band from big texas, with a lot to say."')
// players: a release only gets a play bar once its file is in design/assets/audio/
html = html.replace(/\s*<div class="play" data-audio="([^"]+)"[^>]*><\/div>/g, (m, f) => {
  if (existsSync(join(SRC, f))) { extra.add(f); return m }
  console.log(`[build-site] no ${f} yet: player left out`); return ''
})
writeFileSync(join(OUT, 'index.html'), html)

// every local file referenced by the page (src, srcset, href, url()), minus #fragments
const refs = new Set(['tokens.css', 'assets/img/og-1200x630.jpg', ...extra])
const re = /(?:src|href)="([^"]+)"|srcset="([^"]+)"|url\(([^)]+)\)/g
for (const m of html.matchAll(re)) {
  const vals = m[2] ? m[2].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1] || m[3]]
  for (let v of vals) {
    v = v.replace(/^['"]|['"]$/g, '').split('#')[0].replace(/^\.\//, '')
    if (!v || /^(https?:|data:|mailto:|\/\/)/.test(v)) continue
    refs.add(v)
  }
}
const banned = /(^|\/)(art|shots)\/|^assets\/[^/]+\.png$/
for (const r of refs) {
  if (banned.test(r)) throw new Error(`refusing to ship ${r}`)
  const from = join(SRC, r)
  if (!existsSync(from)) throw new Error(`missing referenced file ${from}`)
  mkdirSync(dirname(join(OUT, r)), { recursive: true })
  cpSync(from, join(OUT, r))
}
console.log(`[build-site] dist/index.html + ${refs.size} files`)
