import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Loader2, Mail, MapPin } from 'lucide-react'
import { site } from '../config/site.js'
import { SectionLabel } from './ui/SectionLabel.jsx'
import { GlowButton } from './ui/GlowButton.jsx'

const socials = [
  { Icon: Github, href: site.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
]

export function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const fd = new FormData(form)
    const name = String(fd.get('name') || '').trim()
    const email = String(fd.get('email') || '').trim()
    const subject = String(fd.get('subject') || '').trim()
    const message = String(fd.get('message') || '').trim()

    if (!name || !email || !message) return

    const mailSubject = encodeURIComponent(subject || 'Portfolio inquiry')
    const mailBody = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', message].join('\n'),
    )

    setStatus('loading')
    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`
      setStatus('success')
      form.reset()
      window.setTimeout(() => setStatus('idle'), 6000)
    }, 650)
  }

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

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-content-muted">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 text-accent-neon" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-content-muted">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg text-content-primary hover:text-accent-neon"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-accent-neon" size={20} />
              <div>
                <p className="text-xs uppercase tracking-widest text-content-muted">Location</p>
                <p className="text-lg text-content-primary">{site.location}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Open for opportunities
            </div>
            <div className="flex gap-3 pt-4">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-glass bg-bg-card/60 text-content-muted hover:border-accent-glow/50 hover:text-accent-neon"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute inset-x-0 -top-2 z-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100 backdrop-blur-md"
                >
                  Message prepared — your mail app should open. If it did not, email{' '}
                  <a className="font-semibold underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>{' '}
                  directly.
                </motion.div>
              )}
            </AnimatePresence>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="glass-panel space-y-4 rounded-3xl p-6 sm:p-8"
            >
              {['Name', 'Email', 'Subject'].map((label) => (
                <label
                  key={label}
                  className="block text-xs font-semibold uppercase tracking-widest text-content-muted"
                >
                  {label}
                  <input
                    required={label !== 'Subject'}
                    type={label === 'Email' ? 'email' : 'text'}
                    name={label.toLowerCase()}
                    className="input-glow mt-2 w-full rounded-xl border border-border-glass bg-bg-primary/60 px-4 py-3 text-sm text-content-primary placeholder:text-content-muted/60"
                    placeholder={
                      label === 'Name'
                        ? 'Your name'
                        : label === 'Email'
                          ? 'you@example.com'
                          : 'Project inquiry'
                    }
                  />
                </label>
              ))}
              <label className="block text-xs font-semibold uppercase tracking-widest text-content-muted">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="input-glow mt-2 w-full resize-y rounded-xl border border-border-glass bg-bg-primary/60 px-4 py-3 text-sm text-content-primary placeholder:text-content-muted/60"
                  placeholder="Tell me about your goals, timeline, and links."
                />
              </label>
              <GlowButton
                type="submit"
                className="mt-2 w-full justify-center sm:w-auto"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} />
                    Sending
                  </span>
                ) : (
                  <>Send Message →</>
                )}
              </GlowButton>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
