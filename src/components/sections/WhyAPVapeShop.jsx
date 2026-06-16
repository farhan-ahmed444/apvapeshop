import { motion } from 'framer-motion'
import { Shield, Truck, Package, BadgePercent, HeadphonesIcon, CreditCard } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../animation/AnimatedSection'

const features = [
  { icon: Shield, title: 'Authentic Products', description: '100% genuine products sourced directly from authorised UK distributors.', color: 'from-cyan-500/20 to-blue-500/20' },
  { icon: Truck, title: 'Fast Delivery', description: 'Next-day delivery on all orders placed before 3pm. Free shipping over $50.', color: 'from-purple-500/20 to-pink-500/20' },
  { icon: Package, title: 'Huge Selection', description: 'Over 400 premium products from the world\'s leading vape brands.', color: 'from-green-500/20 to-emerald-500/20' },
  { icon: BadgePercent, title: 'Competitive Pricing', description: 'Best price guarantee. We match any legitimate UK competitor\'s price.', color: 'from-orange-500/20 to-red-500/20' },
  { icon: HeadphonesIcon, title: 'Customer Support', description: 'UK-based team ready to help. Live chat, email, and phone support.', color: 'from-blue-500/20 to-indigo-500/20' },
  { icon: CreditCard, title: 'Verified Checkout', description: 'Secure encrypted payments with Apple Pay, Google Pay & Klarna.', color: 'from-pink-500/20 to-purple-500/20' },
]

export default function WhyAPVapeShop() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="Why AP Vape Shop?"
          description="We're not just another vape store — we're your premium vaping destination"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                    <feature.icon size={22} className="text-neon-blue group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
          <AnimatedSection delay={0.3} className="md:col-span-2">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon size={22} className="text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{features[4].title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{features[4].description}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  <CreditCard size={22} className="text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{features[5].title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{features[5].description}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '400+', label: 'Products' },
              { value: '50+', label: 'Brands' },
              { value: '7,000+', label: 'Reviews' },
              { value: '4.8', label: 'Average Rating' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
