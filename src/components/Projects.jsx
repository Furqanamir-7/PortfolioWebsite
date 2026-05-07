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
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-border-glass bg-bg-secondary/60 shadow-card backdrop-blur-xl"
                >
                  <div
                    className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-56`}
                  >
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[100%] group-hover:opacity-100"
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
                      <GlowButton type="button" className="!text-xs">
                        Live Demo
                      </GlowButton>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 rounded-full border border-border-glass bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-widest text-content-primary hover:border-accent-glow/50 hover:bg-accent-primary/5"
                      >
                        <Github size={16} />
                        GitHub
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
