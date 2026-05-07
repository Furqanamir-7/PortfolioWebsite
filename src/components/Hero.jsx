import { motion } from 'framer-motion'
import { ArrowDown, Github } from 'lucide-react'
import { site } from '../config/site.js'
import { GlowButton } from './ui/GlowButton.jsx'

const codeLines = [
  'const build = async () => {',
  '  const stack = ["React", "Node", "Shopify"];',
  '  return await ship(stack);',
  '};',
]

const badges = ['React', 'Node.js', 'Shopify', 'Tailwind']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl flex-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl space-y-6"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-content-primary sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Furqan Amir.</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-display text-xl font-medium text-content-muted sm:text-2xl"
          >
            I build modern digital experiences.
          </motion.h2>

          <motion.p variants={item} className="max-w-lg text-base text-content-muted">
            Frontend, Backend & Full Stack Developer with 2 years of experience creating
            modern websites, Shopify stores, WordPress websites, and branding content for
            social media.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <GlowButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </GlowButton>
            <GlowButton variant="outline" href={site.cvPath} download="Furqan-Amir-CV.pdf">
              Download CV
            </GlowButton>
          </motion.div>

          <motion.div variants={item} className="pt-2">
            <motion.a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.05 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-glass bg-bg-card/60 text-content-muted transition-colors hover:border-accent-glow/50 hover:text-accent-neon hover:shadow-glow-sm"
            >
              <Github size={20} strokeWidth={1.75} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
        >
          {badges.map((label, i) => (
            <motion.span
              key={label}
              className="absolute z-20 rounded-full border border-border-glass bg-bg-secondary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-neon shadow-sm backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.06 }}
              style={{
                top: `${18 + i * 16}%`,
                right: i % 2 === 0 ? '-2%' : '6%',
              }}
            >
              {label}
            </motion.span>
          ))}

          <div className="relative z-10 w-full max-w-sm rounded-3xl border border-border-glass bg-bg-secondary/80 p-[1px] shadow-card backdrop-blur-xl">
            <div className="rounded-[1.4rem] bg-bg-primary/95 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                <span className="ml-auto text-[10px] font-mono text-content-muted">
                  ~/projects/portfolio
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-accent-neon/95 sm:text-xs">
                {codeLines.map((line, idx) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="select-none text-content-muted/50">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-slate-200">{line}</span>
                  </motion.div>
                ))}
                <motion.span
                  className="mt-2 inline-block h-4 w-1.5 bg-accent-glow"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[10px] text-content-muted">
                <span>Live reload · Vite</span>
                <span className="text-emerald-300/90">All systems nominal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-content-muted"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-border-glass bg-bg-card/60 pt-1"
        >
          <ArrowDown size={14} className="text-accent-neon" />
        </motion.span>
      </motion.a>
    </section>
  )
}
