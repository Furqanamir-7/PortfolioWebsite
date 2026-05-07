import { motion } from 'framer-motion'
import { SectionLabel } from './ui/SectionLabel.jsx'

const tiles = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  hue: (i * 37) % 360,
}))

export function Branding() {
  return (
    <motion.section
      id="branding"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Branding & Design</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Creative work that speaks.
        </h2>
        <p className="mt-3 max-w-2xl text-content-muted">
          Social posts, brand kits, and campaign creatives — engineered for consistency and
          impact.
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 6) * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border-glass bg-bg-card/60 shadow-card backdrop-blur-xl"
            >
              <div
                className="relative aspect-square w-full"
                style={{
                  background: `radial-gradient(circle at 20% 0%, hsla(${t.hue}, 90%, 70%, 0.35), transparent 55%), linear-gradient(145deg, #020007, #1e1033)`,
                }}
              >
                <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/20 p-4 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-neon">
                    @brand
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold text-content-primary">
                    Launch drop {i + 1}
                  </p>
                  <p className="mt-2 text-xs text-content-muted">
                    Gradient system, typography lockup, and motion-ready templates.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-accent-glow/70 shadow-[0_0_40px_rgba(139,92,246,0.45)]" />
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
