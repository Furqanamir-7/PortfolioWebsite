import { motion } from 'framer-motion'
import { Cog, Link2, Monitor, Palette, ShoppingCart, FileText } from 'lucide-react'
import { SectionLabel } from './ui/SectionLabel.jsx'

const services = [
  {
    title: 'Frontend Development',
    description: 'High-performance interfaces with motion, accessibility, and design systems.',
    Icon: Monitor,
  },
  {
    title: 'Backend Development',
    description: 'Secure APIs, data modeling, and scalable services you can ship with confidence.',
    Icon: Cog,
  },
  {
    title: 'Full Stack Web Apps',
    description: 'End-to-end product builds from concept to deployment on modern stacks.',
    Icon: Link2,
  },
  {
    title: 'Shopify Store Development',
    description: 'Custom themes, sections, and storefront experiences tuned for conversion.',
    Icon: ShoppingCart,
  },
  {
    title: 'WordPress Websites',
    description: 'Custom themes, plugins, and editorial workflows for content-led brands.',
    Icon: FileText,
  },
  {
    title: 'Branding & Social Media Design',
    description: 'Visual systems, campaign assets, and social kits aligned with your story.',
    Icon: Palette,
  },
]

export function Services() {
  return (
    <motion.section
      id="services"
      className="relative scroll-mt-24 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Services</SectionLabel>
        <h2 className="mt-3 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          What I can do for you.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="glass-panel flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary/40 to-accent-glow/20 text-accent-neon">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-content-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-content-muted">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
