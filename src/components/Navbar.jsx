import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollEffect } from '../hooks/useScrollEffect.js'
import { GlowButton } from './ui/GlowButton.jsx'
import { Logo } from './ui/Logo.jsx'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrollEffect(32)
  const [open, setOpen] = useState(false)

  const scrollTo = (href) => {
    setOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-border-glass bg-bg-primary/75 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#home')
            }}
            className="group flex items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-glass bg-bg-card/80 shadow-glow-sm backdrop-blur-md transition-transform group-hover:scale-105">
              <Logo className="h-6 w-6" />
            </span>
            <span className="hidden font-display text-sm font-semibold text-content-primary sm:block">
              Furqan Amir
            </span>
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium text-content-muted md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(l.href)
                  }}
                  className="group relative text-content-muted transition-colors hover:text-content-primary"
                >
                  {l.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent-glow to-accent-neon transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <GlowButton
              variant="outline"
              className="!py-2 !text-xs !uppercase !tracking-widest"
              onClick={() => scrollTo('#contact')}
            >
              Let&apos;s Talk
            </GlowButton>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-glass bg-bg-card/70 text-content-primary md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-bg-primary/95 px-8 pb-10 pt-24 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-1 flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="font-display text-3xl font-semibold text-content-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(l.href)
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-auto"
              >
                <GlowButton
                  className="w-full justify-center"
                  onClick={() => scrollTo('#contact')}
                >
                  Let&apos;s Talk
                </GlowButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
