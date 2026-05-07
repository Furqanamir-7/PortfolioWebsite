import { motion } from 'framer-motion'

export function SectionLabel({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow"
    >
      {children}
    </motion.p>
  )
}
