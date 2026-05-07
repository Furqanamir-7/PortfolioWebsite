/**
 * Mirrors the Desktop "Portfolio Website" folder into ./Portfolio Website/
 * so anything you drop there is kept in-repo. Override source with PORTFOLIO_WEBSITE_SRC.
 * Set SKIP_PORTFOLIO_SYNC=1 to skip (e.g. CI). No-op if the source path does not exist.
 */
import { cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')

if (process.env.SKIP_PORTFOLIO_SYNC === '1') {
  console.log('[sync-portfolio] skip: SKIP_PORTFOLIO_SYNC=1')
  process.exit(0)
}

const envSrc = process.env.PORTFOLIO_WEBSITE_SRC?.trim()
const home = process.env.USERPROFILE || process.env.HOME || ''
const defaultSrc = join(home, 'Desktop', 'Portfolio Website')
const src = envSrc || defaultSrc
const dest = join(root, 'Portfolio Website')

if (!existsSync(src)) {
  console.log('[sync-portfolio] skip: source not found:', src)
  process.exit(0)
}

cpSync(src, dest, { recursive: true, force: true })
console.log('[sync-portfolio] mirrored:', src, '→', dest)
