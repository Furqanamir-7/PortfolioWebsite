import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
/** Optional: `npm run generate-cv` writes a tiny sample PDF — does not replace Furqan-Amir-Resume.pdf */
const out = join(__dirname, '..', 'public', 'generated-cv-sample.pdf')

const doc = await PDFDocument.create()
const page = doc.addPage([595.28, 841.89])
const font = await doc.embedFont(StandardFonts.Helvetica)
const bold = await doc.embedFont(StandardFonts.HelveticaBold)

let y = 800
const line = (text, size = 11, f = font, color = rgb(0.1, 0.1, 0.12)) => {
  page.drawText(text, { x: 50, y, size, font: f, color })
  y -= size + 8
}

line('Furqan Amir', 22, bold)
line('Full Stack Developer · Shopify · WordPress · Branding', 11)
y -= 10
line('Replace this PDF with your final CV export.', 10)
line('Email: furqanamir2705@gmail.com · Phone / WhatsApp: +92 326 2803870', 10)
y -= 16
line('Summary', 13, bold)
line(
  'Frontend, backend, and full stack developer with 2+ years building modern websites, Shopify stores, WordPress themes, and social / brand creatives.',
  10,
)
y -= 12
line('Core stack', 13, bold)
line('React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Shopify Liquid, WordPress, PHP.', 10)
y -= 12
line('Experience (placeholder)', 13, bold)
line('• Delivered production web apps, ecommerce themes, and marketing sites for global clients.', 10)
line('• Partnered on UI systems, motion-forward landing pages, and performance tuning.', 10)

writeFileSync(out, await doc.save())
console.log('Wrote', out)
