import { chromium } from 'playwright'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'projects')

const sites = [
  { id: 'sukiri', url: 'https://sukiri-website.vercel.app/' },
  { id: 'saagar-foundation', url: 'https://www.saagarfoundation.site/' },
  { id: 'texonomy', url: 'https://www.texonomy.net/' },
  { id: 'tadarch', url: 'https://www.tadarch.co/' },
  { id: 'playitforward', url: 'https://www.playitfoward.site/' },
  { id: 'bullsfc', url: 'https://www.bullsfc.site/' },
  { id: 'priceyra', url: 'https://www.priceyra.site/' },
  { id: 'nexora', url: 'https://nexora-black-alpha.vercel.app/' },
]

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
})

for (const site of sites) {
  const page = await context.newPage()
  try {
    console.log(`Capturing ${site.id}…`)
    await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 90000 })
    await page.waitForTimeout(3500)
    await page.screenshot({
      path: join(root, `${site.id}.png`),
      type: 'png',
      fullPage: false,
    })
    console.log(`  ✓ ${site.id}.png`)
  } catch (err) {
    console.error(`  ✗ ${site.id}:`, err.message)
  } finally {
    await page.close()
  }
}

await context.close()
await browser.close()
console.log('Done.')
