import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Mail } from 'lucide-react'
import ParticleEffect from '../animation/ParticleEffect'

export default function NewsletterCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <ParticleEffect count={20} color="#00E5FF" speed={0.3} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/[0.03] via-electric-purple/[0.02] to-neon-blue/[0.03]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-electric-purple/10 flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-neon-blue" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Get Exclusive Vape Deals<br />
            <span className="text-gradient">Before Everyone Else</span>
          </h2>

          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Join 10,000+ subscribers. Early access to drops, exclusive discounts, and members-only pricing.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-neon-blue/50 transition-colors text-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-neon-blue to-electric-purple text-white font-medium text-sm flex items-center gap-2 whitespace-nowrap hover:shadow-lg hover:shadow-neon-blue/20 transition-shadow"
            >
              Subscribe
              <ArrowRight size={16} />
            </motion.button>
          </form>

          <p className="text-white/20 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
