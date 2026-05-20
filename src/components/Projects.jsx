import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projectCategories, projects } from '../data/projects.js'
import { SectionLabel } from './ui/SectionLabel.jsx'
import { GlowButton } from './ui/GlowButton.jsx'

export function Projects() {
  const [tab, setTab] = useState('All')

  const filtered = useMemo(() => {
    if (tab === 'All') return projects
    return projects.filter((p) => p.category === tab)
  }, [tab])

  return (
    <motion.section
      id="projects"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Featured Projects</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Some things I&apos;ve built.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setTab(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                tab === c
                  ? 'bg-gradient-to-r from-accent-primary to-accent-glow text-white shadow-glow-sm'
                  : 'border border-border-glass bg-bg-card/50 text-content-muted hover:border-accent-glow/40 hover:text-content-primary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {filtered.map((project, index) => {
                const centerLastSolo =
                  filtered.length % 2 === 1 && index === filtered.length - 1
                return (
                <motion.article
                  key={project.id}
                  layout
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-3xl border-2 border-accent-glow/40 bg-bg-secondary/60 shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_25px_50px_-12px_rgba(0,0,0,0.45),0_0_28px_rgba(139,92,246,0.18)] ring-1 ring-inset ring-accent-glow/10 backdrop-blur-xl transition-all duration-300 hover:border-accent-glow/80 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_30px_60px_-12px_rgba(0,0,0,0.55),0_0_45px_rgba(139,92,246,0.35)] hover:ring-accent-glow/30 ${
                    centerLastSolo
                      ? 'lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[calc(50%-1rem)]'
                      : ''
                  }`}
                >
                  <div className="relative flex h-52 items-center justify-center overflow-hidden px-3 py-4 sm:h-64">
                    <div
                      aria-hidden
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />
                    {project.image ? (
                      <img
                        src={project.image}
                        alt=""
                        className="relative z-[1] h-full w-full max-h-[13.5rem] object-contain object-center sm:max-h-[15.5rem]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : null}
                    {!project.image ? (
                      <div className="absolute inset-0 z-[1] opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                    ) : null}
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 z-[2] translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[100%] group-hover:opacity-100"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border-glass bg-bg-card/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-content-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-content-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-content-muted">{project.description}</p>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <GlowButton href={project.liveUrl} className="!text-xs">
                        Live Demo
                      </GlowButton>
                      <GlowButton variant="outline" href={project.repoUrl} className="!text-xs !inline-flex !items-center !gap-2">
                        <Github size={16} />
                        GitHub
                      </GlowButton>
                    </div>
                  </div>
                </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
