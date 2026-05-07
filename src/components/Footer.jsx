import { Github, Instagram, Linkedin } from 'lucide-react'
import { site } from '../config/site.js'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#branding', label: 'Branding' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { Icon: Github, href: site.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
  { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-glass bg-bg-secondary/40 py-12 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-glass bg-bg-card/80 font-display text-sm font-extrabold gradient-text">
            FA
          </div>
          <p className="max-w-xs text-sm text-content-muted">
            Full stack developer crafting cinematic web experiences, Shopify stores, and brand
            systems.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-content-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-content-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-glass bg-bg-card/60 text-content-muted hover:border-accent-glow/50 hover:text-accent-neon"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border-glass/60 px-4 pt-6 text-center text-xs text-content-muted sm:px-6 lg:px-8">
        <p className="gradient-text font-medium">
          Designed &amp; Developed by {site.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
