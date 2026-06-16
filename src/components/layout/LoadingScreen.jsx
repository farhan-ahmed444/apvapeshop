import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(() => onComplete?.(), 600)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }}
          className="fixed inset-0 z-[9999] bg-dark-950 flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center">
              <span className="text-dark-950 font-bold text-3xl">AP</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue to-electric-purple"
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: 'blur(20px)', zIndex: -1 }}
            />
          </div>

          <p className="text-white/60 text-sm mb-8">Loading experience</p>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-blue to-electric-purple"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <p className="text-white/40 text-xs mt-3 font-mono">
            {Math.min(Math.floor(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
