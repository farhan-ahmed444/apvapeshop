import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Truck, Lock, Award, Users } from 'lucide-react'

const trustItems = [
  { icon: Shield, label: '21+ Verified', value: 25, suffix: 'K+' },
  { icon: Truck, label: 'Fast Shipping', value: 50, suffix: 'K+' },
  { icon: Lock, label: 'Secure Checkout', value: 100, suffix: '%' },
  { icon: Award, label: 'Premium Brands', value: 100, suffix: '+' },
  { icon: Users, label: 'Happy Customers', value: 50, suffix: 'K+' },
]

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const increment = Math.ceil(target / 60)
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(interval)
      }
      setCount(current)
    }, 20)
    return () => clearInterval(interval)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function TrustBar() {
  return (
    <section className="relative py-12 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <item.icon size={24} className="text-neon-blue/60" />
              <p className="text-2xl font-bold text-white">
                <Counter target={item.value} suffix={item.suffix} />
              </p>
              <p className="text-white/40 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
