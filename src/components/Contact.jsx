import { motion } from 'framer-motion'
import { Github, Mail, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappChatUrl } from '../config/site.js'
import { SectionLabel } from './ui/SectionLabel.jsx'

function ContactCard({ icon: Icon, eyebrow, children, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      className="glass-panel relative overflow-hidden rounded-3xl border border-border-glass bg-bg-secondary/50 p-6 shadow-card backdrop-blur-xl sm:p-8"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-primary/20 blur-2xl" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-glow/35 bg-accent-primary/15 text-accent-neon">
        <Icon size={22} strokeWidth={1.75} aria-hidden />
      </div>
      <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-neon">{eyebrow}</p>
      <div className="relative mt-3">{children}</div>
    </motion.article>
  )
}

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Get In Touch</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Let&apos;s build something amazing together.
        </h2>
        <p className="mt-4 max-w-2xl text-content-muted">
          Reach out directly — email, phone, or WhatsApp. I usually reply within a day.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ContactCard icon={Mail} eyebrow="Email" delay={0}>
            <a
              href={`mailto:${site.email}`}
              className="break-all font-display text-xl font-semibold leading-snug text-accent-neon transition hover:text-accent-glow sm:text-2xl"
            >
              {site.email}
            </a>
          </ContactCard>

          <ContactCard icon={Phone} eyebrow="Phone" delay={0.06}>
            <a
              href={`tel:${site.phoneTel}`}
              className="block font-display text-xl font-semibold tracking-tight text-accent-neon transition hover:text-accent-glow sm:text-2xl"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-content-muted">Tap to call</p>
          </ContactCard>

          <ContactCard icon={MessageCircle} eyebrow="WhatsApp" delay={0.12}>
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-display text-xl font-semibold gradient-text transition hover:opacity-90 sm:text-2xl"
            >
              Message on WhatsApp →
            </a>
            <p className="mt-2 text-sm text-content-muted">Same number as phone — opens chat</p>
          </ContactCard>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-glow/40 bg-accent-primary/15 px-4 py-2 text-sm font-medium text-accent-neon shadow-glow-sm">
            <span className="h-2 w-2 rounded-full bg-accent-glow shadow-[0_0_12px_rgba(139,92,246,0.85)]" />
            Open for opportunities
          </div>
          <motion.a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            whileHover={{ y: -3 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-glass bg-bg-card/60 text-accent-neon hover:border-accent-glow/50 hover:text-accent-glow"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}
