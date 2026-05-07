import { motion } from 'framer-motion'

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-glow'

export function GlowButton({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const variants = {
    primary: `${base} bg-gradient-to-r from-accent-primary to-accent-glow text-white shadow-glow hover:shadow-[0_0_50px_rgba(139,92,246,0.45)]`,
    outline: `${base} border border-border-glass bg-bg-card/60 text-content-primary backdrop-blur-xl hover:bg-accent-primary/10 hover:border-accent-glow/40 hover:shadow-glow-sm`,
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`${variants[variant]} ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  )
}
