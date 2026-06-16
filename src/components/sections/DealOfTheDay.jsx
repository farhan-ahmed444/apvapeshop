import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, Clock } from 'lucide-react'
import Button from '../ui/Button'
import AuroraGradient from '../animation/AuroraGradient'

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <Clock size={18} className="text-neon-blue" />
      <div className="flex gap-2">
        {[
          { value: String(time.hours).padStart(2, '0'), label: 'Hours' },
          { value: String(time.minutes).padStart(2, '0'), label: 'Mins' },
          { value: String(time.seconds).padStart(2, '0'), label: 'Secs' },
        ].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-lg px-3 py-2 min-w-[48px]">
              <span className="text-xl font-bold text-neon-blue">{unit.value}</span>
            </div>
            <span className="text-[10px] text-white/40 mt-1 block">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DealOfTheDay() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <AuroraGradient />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/80 via-dark-950/50 to-dark-950/80 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-sm text-neon-blue mb-6">
              <Zap size={14} />
              Deal Of The Day
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Geek Bar Pulse<br />
              <span className="text-gradient">£19.99</span>
            </h2>
            <p className="text-white/50 text-lg mb-6">
              15,000 puffs · 5% nicotine · Rechargeable · 20 delicious flavours
            </p>

            <div className="mb-8">
              <p className="text-white/40 text-sm mb-2">Hurry! Deal ends in:</p>
              <CountdownTimer />
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">Sold: <span className="text-white font-bold">847</span></span>
                <span className="text-white/60">Available: <span className="text-white font-bold">153</span></span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-neon-blue to-electric-purple rounded-full"
                />
              </div>
            </div>

            <Button variant="gradient" size="lg" className="group">
              Grab This Deal
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-electric-purple/10 rounded-full blur-[64px] animate-pulse" />
              <div className="absolute inset-[10%] rounded-full border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">💨</div>
                  <p className="text-2xl font-bold text-white">Geek Bar</p>
                  <p className="text-neon-blue font-bold text-lg">Pulse 15000</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                <span className="text-neon-green font-bold text-sm">-40%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
