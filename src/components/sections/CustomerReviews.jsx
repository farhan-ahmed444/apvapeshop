import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const reviews = [
  { id: 1, name: 'James Mitchell', rating: 5, text: 'Best vape shop in the UK. The Geek Bar Pulse arrived next day and the flavour is incredible. Highly recommend!', product: 'Geek Bar Pulse 15000' },
  { id: 2, name: 'Sarah Thompson', rating: 5, text: 'Been using AP Vape for over a year now. Always authentic products, great prices, and lightning fast delivery. 10/10.', product: 'Uwell Caliburn G3' },
  { id: 3, name: 'Marcus Williams', rating: 5, text: 'The selection of e-liquids is unmatched. Found my new favourite flavour. Customer service team is incredibly helpful.', product: 'Naked 100 Lava Flow' },
  { id: 4, name: 'Emily Roberts', rating: 4, text: 'Fast shipping and authentic products. The website is easy to navigate and checkout is seamless. Will definitely order again.', product: 'Lost Mary MO20000' },
  { id: 5, name: 'David Chen', rating: 5, text: 'Premium vape shop experience. The packaging was beautiful and my order arrived in less than 24 hours. Outstanding.', product: 'Air Bar Max 8000' },
  { id: 6, name: 'Olivia Parker', rating: 5, text: 'Finally a vape shop that feels premium. Great prices on bulk orders and the rewards programme is a nice touch.', product: 'Zyn Citrus 6mg' },
]

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const visibleReviews = []
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(currentIndex + i) % reviews.length])
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/[0.02] rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          description="Join 50,000+ satisfied customers across the UK"
        />

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {[
            { value: '7,000+', label: 'Reviews' },
            { value: '4.8', label: 'Average Rating' },
            { value: '100k+', label: 'Orders' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center px-6"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/40 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {visibleReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-6 lg:p-8"
              >
                <Quote size={24} className="text-neon-blue/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{review.name}</p>
                  <p className="text-white/30 text-xs">{review.product}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex % reviews.length
                      ? 'bg-neon-blue w-6'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
