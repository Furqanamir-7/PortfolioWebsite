import { forwardRef } from 'react'
import { motion } from 'framer-motion'

export const GlassCard = forwardRef(function GlassCard(
  { children, className = '', ...props },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className={`glass-panel relative overflow-hidden rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
})
