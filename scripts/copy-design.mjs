// Copies the static design explorations (design/) into dist/design/ so they
// can be reviewed on Vercel PREVIEW deployments only. Production builds skip it.
import { cpSync, existsSync } from 'node:fs'

const env = process.env.VERCEL_ENV
if (env === 'production') {
  console.log('[copy-design] production build: skipping design/')
  process.exit(0)
}
if (!existsSync('dist')) {
  console.error('[copy-design] dist/ missing; run vite build first')
  process.exit(1)
}

const skip = [
  /(^|[\\/])design[\\/]shots([\\/]|$)/,
  /(^|[\\/])design[\\/]assets[\\/]art([\\/]|$)/,
  /(^|[\\/])design[\\/]assets[\\/][^\\/]+\.png$/, // raw source photos
]
cpSync('design', 'dist/design', {
  recursive: true,
  filter: (src) => !skip.some((re) => re.test(src)),
})
console.log(`[copy-design] copied design/ -> dist/design (VERCEL_ENV=${env ?? 'local'})`)
