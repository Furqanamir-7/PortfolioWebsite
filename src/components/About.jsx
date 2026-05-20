import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../config/site.js'
import { SectionLabel } from './ui/SectionLabel.jsx'
import { GlowButton } from './ui/GlowButton.jsx'
import { GlassCard } from './ui/GlassCard.jsx'

const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'Branding Projects', value: 2, suffix: '+' },
  { label: 'Happy Clients', value: 6, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'E-commerce builds', value: 4, suffix: '+' },
  { label: 'Industries served', value: 4, suffix: '+' },
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
              With a year in the field, I&apos;ve shipped production sites, ecommerce flows,
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
                <img
                  src="/furqan.jpg"
                  alt="Furqan Amir"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent-glow/20" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-content-muted">
            Education
          </p>
          <div className="mt-4 rounded-3xl border border-accent-glow/25 bg-gradient-to-br from-bg-secondary/90 via-bg-secondary/60 to-accent-primary/10 p-6 shadow-card backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-glass bg-bg-card/80 text-accent-glow shadow-glow-sm">
                <GraduationCap className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <h3 className="font-display text-xl font-semibold text-content-primary sm:text-2xl">
                  {education.institution}
                </h3>
                <p className="text-base font-medium text-content-primary/95">{education.degree}</p>
                <p className="text-sm text-content-muted">{education.period}</p>
                <p className="flex items-center gap-2 text-sm text-content-muted">
                  <MapPin className="h-4 w-4 shrink-0 text-accent-glow/80" aria-hidden />
                  {education.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.slice(0, 4).map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.slice(4).map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
