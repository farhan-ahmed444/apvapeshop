import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { brands } from '../../data/categories'

export default function BrandShowcase() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Premium Brands We Carry"
          description="Partnered with the world's leading vape manufacturers"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 lg:p-8 flex items-center justify-center h-28 lg:h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-white/[0.04] group-hover:from-neon-blue/[0.03] group-hover:to-electric-purple/[0.03] transition-colors duration-500" />
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="relative z-10 max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <span className="relative z-10 text-lg lg:text-xl font-bold text-white/40 group-hover:text-white group-hover:text-gradient transition-all duration-500">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
