import { motion } from 'framer-motion'
import { Zap, Cpu, Droplets, Package, RefreshCw, Settings, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../animation/AnimatedSection'
import ParticleEffect from '../animation/ParticleEffect'
import { categories } from '../../data/categories'

const iconMap = { Zap, Cpu, Droplets, Package, RefreshCw, Settings }

export default function FeaturedCategories() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Categories"
          title="Shop By Category"
          description="Explore our curated collection of premium vaping products"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <AnimatedSection key={category.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 lg:p-8 cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ParticleEffect count={15} color="#00E5FF" speed={0.2} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
                      <Icon size={22} className="text-neon-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/40 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/30 text-xs">{category.count} Products</span>
                      <ArrowRight size={16} className="text-white/30 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
