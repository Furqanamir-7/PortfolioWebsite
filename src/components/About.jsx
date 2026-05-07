import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { SectionLabel } from './ui/SectionLabel.jsx'
import { GlowButton } from './ui/GlowButton.jsx'
import { GlassCard } from './ui/GlassCard.jsx'

const stats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
  { label: 'Lines of Code', value: 5, suffix: 'k+' },
]

function StatCard({ label, value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <GlassCard ref={ref} className="p-5 text-center">
      <span className="block font-display text-3xl font-bold text-content-primary sm:text-4xl">
        {display}
        <span className="gradient-text">{suffix}</span>
      </span>
      <p className="mt-2 text-xs text-content-muted">{label}</p>
    </GlassCard>
  )
}

export function About() {
  return (
    <motion.section
      id="about"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>About Me</SectionLabel>
        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold text-content-primary sm:text-4xl">
              I&apos;m a developer who enjoys turning ideas into real products.
            </h2>
            <p className="text-content-muted">
              I work across the full stack — from polished interfaces to reliable APIs — with a
              focus on performance, accessibility, and maintainable architecture.
            </p>
            <p className="text-content-muted">
              I specialize in Shopify and WordPress experiences that feel fast and intentional,
              and I collaborate on branding and social creatives that stay consistent with the
              product story.
            </p>
            <p className="text-content-muted">
              With two years in the field, I&apos;ve shipped production sites, ecommerce flows,
              and design systems for teams who care about craft.
            </p>
            <GlowButton
              variant="outline"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Let&apos;s Talk
            </GlowButton>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-primary/40 via-fuchsia-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border-glass bg-bg-secondary/80 p-1 shadow-card backdrop-blur-xl">
              <div className="relative aspect-square overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-bg-secondary via-bg-primary to-slate-950">
                <div className="absolute inset-6 rounded-3xl border border-dashed border-accent-glow/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.35),transparent_55%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-52 w-52 rounded-full border-2 border-accent-glow/60 bg-bg-card/80 shadow-glow backdrop-blur-md">
                    <span className="absolute inset-4 rounded-full border border-white/5" />
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                      <span className="font-display text-4xl font-extrabold gradient-text">FA</span>
                      <span className="text-xs uppercase tracking-[0.25em] text-content-muted">
                        Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
