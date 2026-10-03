// Runs after `vite build` (see the "build" script in package.json).
//
// prerendered/ holds index.html snapshots committed by
// .github/workflows/prerender.yml (rendered on a GitHub-hosted runner,
// where Chromium installs reliably — see scripts/prerender.mjs for why
// this app needs prerendering at all). Those snapshots can be minutes to
// hours old by the time Vercel builds, so their <script>/<link> tags may
// reference asset filenames from an older build that no longer exist in
// this dist/.
//
// Rather than overwrite dist/'s freshly-built files wholesale (which would
// 404 the JS bundle for every visitor until the next prerender run catches
// up), this only grafts the crawler-relevant, content-only pieces — title,
// meta description, canonical/hreflang links, and the rendered #root
// markup — onto today's shell. Worst case if a snapshot is stale: a
// crawler sees slightly outdated text. The site itself never breaks.

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const PRERENDERED = path.join(ROOT, 'prerendered')
const SHELL_PATH = path.join(DIST, 'index.html')

async function walkIndexFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walkIndexFiles(full)))
    else if (entry.name === 'index.html') files.push(full)
  }
  return files
}

// Vercel serves dist/404.html, with a real 404 status, for any URL that
// vercel.json doesn't rewrite to the app. It's the bare SPA shell, so React
// still renders the localized Not Found page; the homepage's canonical,
// hreflang and schema are stripped and it's marked noindex.
async function writeNotFoundPage(shell) {
  const notFound = shell
    .replace(/<link rel="(?:canonical|alternate)"[^>]*>\s*/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')
    .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
    .replace(/<title>[\s\S]*?<\/title>/, '<title>Page Not Found | Villas Punta Uva</title>')
  await writeFile(path.join(DIST, '404.html'), notFound)
}

async function applyOne(prerenderedFile, shell) {
  const relative = path.relative(PRERENDERED, prerenderedFile)
  const distFile = path.join(DIST, relative)

  const snapshot = await readFile(prerenderedFile, 'utf-8')

  const rootMatch = snapshot.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/)
  if (!rootMatch) return { relative, skipped: 'no #root content found in snapshot' }

  let merged = shell.replace(
    /<div id="root">[\s\S]*<\/div>\s*<\/body>/,
    `<div id="root">${rootMatch[1]}</div>\n  </body>`,
  )

  // Every SEO tag the page sets at runtime (title, description, robots,
  // canonical, hreflang alternates, Open Graph/Twitter tags, JSON-LD) is
  // taken from the snapshot, and the shell's homepage copies are dropped —
  // otherwise every route would advertise the homepage's hreflang, og:url
  // and schema to crawlers.
  const seoTagPatterns = [
    /<title>[\s\S]*?<\/title>/g,
    /<meta name="(?:description|robots|twitter:[^"]+)"[^>]*>/g,
    /<meta property="og:[^"]+"[^>]*>/g,
    /<link rel="(?:canonical|alternate)"[^>]*>/g,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  ]
  const snapshotHead = snapshot.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
  const snapshotTags = seoTagPatterns.flatMap((pattern) => snapshotHead.match(pattern) ?? [])
  if (snapshotTags.length > 0) {
    for (const pattern of seoTagPatterns) merged = merged.replace(pattern, '')
    merged = merged.replace('</head>', `    ${snapshotTags.join('\n    ')}\n  </head>`)
  }

  const snapshotLang = snapshot.match(/<html[^>]*\blang="([^"]+)"/)?.[1]
  if (snapshotLang) merged = merged.replace(/<html([^>]*)\blang="[^"]*"/, `<html$1lang="${snapshotLang}"`)

  await mkdir(path.dirname(distFile), { recursive: true })
  await writeFile(distFile, merged)
  return { relative, skipped: false }
}

async function main() {
  // vite build only ever produces the one SPA entry file (dist/index.html);
  // that's the universal shell every route's merged output is built from,
  // since it always has today's correct asset hashes.
  let shell
  try {
    shell = await readFile(SHELL_PATH, 'utf-8')
  } catch {
    console.warn('dist/index.html not found — did `vite build` run first? Skipping.')
    return
  }

  await writeNotFoundPage(shell)

  let files
  try {
    files = await walkIndexFiles(PRERENDERED)
  } catch {
    console.log('No prerendered/ directory found — dist/ stays as the plain SPA shell.')
    return
  }

  if (files.length === 0) {
    console.log('prerendered/ is empty — dist/ stays as the plain SPA shell.')
    return
  }

  let applied = 0
  for (const file of files) {
    const result = await applyOne(file, shell)
    if (result.skipped) console.warn(`  [skip] ${result.relative}: ${result.skipped}`)
    else applied++
  }
  console.log(`Applied ${applied}/${files.length} prerendered snapshot(s) onto dist/.`)
}

main().catch((err) => {
  console.error('apply-prerendered failed (leaving dist/ as the plain SPA build):', err)
})
