import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const apply = () => {
      const ok = mq.matches
      setEnabled(ok)
      document.body.classList.toggle('has-custom-cursor', ok)
    }
    apply()
    mq.addEventListener('change', apply)
    return () => {
      mq.removeEventListener('change', apply)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow shadow-[0_0_24px_rgba(139,92,246,0.9)] mix-blend-screen"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-neon/40 bg-accent-primary/10 blur-[0.5px]"
        style={{ x: sx, y: sy }}
      />
    </>
  )
}
