import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import VaporEffect from '../animation/VaporEffect'
import ParticleEffect from '../animation/ParticleEffect'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current
      if (!container) return
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      container.style.setProperty('--mouse-x', x)
      container.style.setProperty('--mouse-y', y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <VaporEffect />
      <ParticleEffect count={40} color="#00E5FF" speed={0.5} />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-dark-950/0 to-dark-950 z-10" />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8">
            <Sparkles size={14} className="text-neon-blue" />
            Premium Vape Shop — UK Delivery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          <span className="text-white">Experience The</span>
          <br />
          <span className="text-gradient">Future Of Vaping</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10"
        >
          Premium disposables, vape kits, e-liquids and accessories delivered nationwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gradient" size="lg" className="group">
            Shop Best Sellers
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Explore Categories
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { label: '21+ Verified', value: 'Age Check' },
            { label: 'Fast Shipping', value: 'Next Day' },
            { label: 'Secure Checkout', value: 'SSL' },
            { label: 'Premium Brands', value: '100+' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-neon-blue font-bold text-lg">{item.value}</p>
              <p className="text-white/40 text-xs">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/30 hover:text-white/60 transition-colors"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
