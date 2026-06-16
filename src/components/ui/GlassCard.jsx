import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl overflow-hidden group ${glow ? 'hover:shadow-lg hover:shadow-neon-blue/10' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
