import { motion } from 'framer-motion'
import { Zap, Cpu, Droplets, Package, RefreshCw, Settings, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../animation/AnimatedSection'
import ParticleEffect from '../animation/ParticleEffect'

const iconMap = { Zap, Cpu, Droplets, Package, RefreshCw, Settings }

const categories = [
  { id: 'disposable-vapes', name: 'Disposable Vapes', description: 'Premium disposable devices', gradient: 'from-cyan-500/20 to-blue-500/20', icon: 'Zap', count: 48 },
  { id: 'vape-kits', name: 'Vape Kits', description: 'Starter & advanced kits', gradient: 'from-purple-500/20 to-pink-500/20', icon: 'Cpu', count: 36 },
  { id: 'e-liquids', name: 'E-Liquids', description: 'Hundreds of flavours', gradient: 'from-green-500/20 to-emerald-500/20', icon: 'Droplets', count: 200 },
  { id: 'nicotine-pouches', name: 'Nicotine Pouches', description: 'Tobacco-free satisfaction', gradient: 'from-orange-500/20 to-red-500/20', icon: 'Package', count: 24 },
  { id: 'replacement-pods', name: 'Replacement Pods', description: 'Keep your device going', gradient: 'from-blue-500/20 to-indigo-500/20', icon: 'RefreshCw', count: 52 },
  { id: 'accessories', name: 'Accessories', description: 'Batteries, chargers & more', gradient: 'from-pink-500/20 to-purple-500/20', icon: 'Settings', count: 40 },
]

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
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ParticleEffect count={15} color="#00E5FF" speed={0.2} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
