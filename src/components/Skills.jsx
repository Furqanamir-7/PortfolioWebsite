import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { skillCategories, skills } from '../data/skills.js'
import { SectionLabel } from './ui/SectionLabel.jsx'
import SkillGlyph from './SkillGlyph.jsx'

export function Skills() {
  const [tab, setTab] = useState('All')

  const filtered = useMemo(() => {
    if (tab === 'All') return skills
    return skills.filter((s) => s.category === tab)
  }, [tab])

  return (
    <motion.section
      id="skills"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {skillCategories.map((c) => (
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

        <LayoutGroup>
          <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-border-glass bg-bg-card/60 p-5 shadow-card backdrop-blur-xl transition-shadow hover:border-accent-glow/45 hover:shadow-glow"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="rounded-xl border border-white/5 bg-bg-secondary/80 p-2">
                      <SkillGlyph name={skill.icon} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-content-primary">
                        {skill.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-widest text-content-muted">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </motion.section>
  )
}
