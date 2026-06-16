import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../animation/AnimatedSection'

const posts = [
  { id: 1, title: 'Geek Bar Pulse 15000 Review: The Ultimate Disposable?', excerpt: 'Our comprehensive review of the most powerful disposable vape on the market...', category: 'Reviews', date: 'Mar 15, 2026', featured: true },
  { id: 2, title: 'The Complete Guide To Nicotine Salts', excerpt: 'Everything you need to know about nicotine salts vs freebase...', category: 'Guides', date: 'Mar 12, 2026', featured: false },
  { id: 3, title: 'Best Vape Kits For Beginners In 2026', excerpt: 'Starting your vaping journey? Here are our top picks...', category: 'Guides', date: 'Mar 10, 2026', featured: false },
  { id: 4, title: 'UK Vape Regulations: What You Need To Know', excerpt: 'Stay compliant with the latest UK vaping laws and TPD regulations...', category: 'Info', date: 'Mar 8, 2026', featured: false },
]

export default function VapeKnowledgeHub() {
  const featured = posts.find((p) => p.featured)
  const secondary = posts.filter((p) => !p.featured)

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Knowledge Hub"
          title="Vape Guides & Reviews"
          description="Stay informed with expert reviews, guides, and industry insights"
        />

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 lg:p-8 h-full overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 lg:h-56 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.06] mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">📖</span>
                </div>
              </div>
              <span className="text-xs font-semibold tracking-wider text-neon-blue uppercase">{featured.category}</span>
              <h3 className="text-xl lg:text-2xl font-bold text-white mt-2 mb-3 group-hover:text-neon-blue transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/40 text-sm mb-4">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs flex items-center gap-1">
                  <Calendar size={12} />
                  {featured.date}
                </span>
                <span className="text-neon-blue text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          </AnimatedSection>

          <div className="flex flex-col gap-4 lg:gap-6">
            {secondary.map((post, index) => (
              <AnimatedSection key={post.id} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 group cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.06] flex-shrink-0 flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold tracking-wider text-neon-blue uppercase">{post.category}</span>
                      <h3 className="text-sm font-bold text-white mt-0.5 mb-1 line-clamp-2 group-hover:text-neon-blue transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-white/30 text-xs">{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
