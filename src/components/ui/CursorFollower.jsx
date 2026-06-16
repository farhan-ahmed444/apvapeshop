import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  if (isTouchDevice) return null

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-6 w-6 rounded-full mix-blend-difference bg-neon-blue"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{
        x: { type: 'spring', stiffness: 500, damping: 28 },
        y: { type: 'spring', stiffness: 500, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
    />
  )
}
