import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, ShoppingCart, Eye, X } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const products = [
  { id: 1, name: 'Geek Bar Pulse 15000', category: 'Disposable Vapes', price: 19.99, rating: 4.9, reviews: 1247, badge: 'Best Seller' },
  { id: 2, name: 'Lost Mary MO20000', category: 'Disposable Vapes', price: 22.99, rating: 4.8, reviews: 892, badge: 'New' },
  { id: 3, name: 'Uwell Caliburn G3', category: 'Vape Kits', price: 34.99, rating: 4.7, reviews: 654, badge: 'Top Rated' },
  { id: 4, name: 'Naked 100 Lava Flow', category: 'E-Liquids', price: 16.99, rating: 4.6, reviews: 2103, badge: 'Popular' },
  { id: 5, name: 'Air Bar Max 8000', category: 'Disposable Vapes', price: 17.99, rating: 4.8, reviews: 1567, badge: 'Best Seller' },
  { id: 6, name: 'Zyn Citrus 6mg', category: 'Nicotine Pouches', price: 9.99, rating: 4.5, reviews: 432, badge: 'Popular' },
]

function QuickViewModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-white/[0.06] bg-dark-900/95 backdrop-blur-2xl p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-neon-blue uppercase">{product.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{product.name}</h3>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
                ))}
              </div>
              <span className="text-white/40 text-sm">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="text-white/60 mb-6">Premium quality {product.category.toLowerCase()} with exceptional flavour and performance.</p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-white">£{product.price.toFixed(2)}</p>
              <button className="px-6 py-3 bg-neon-blue text-dark-950 font-medium rounded-full hover:bg-neon-blue/90 transition-colors">
                Add To Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function BestSellers() {
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (id) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
  }

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Best Sellers"
          title="Most Popular Products"
          description="Our customers' favourite picks — tried, tested, and top-rated"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <GlassCard className="p-6">
                <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.06] mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/10 to-electric-purple/10 flex items-center justify-center">
                      <span className="text-2xl">💨</span>
                    </div>
                  </div>
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-neon-blue text-dark-950' :
                      product.badge === 'New' ? 'bg-neon-green text-dark-950' :
                      product.badge === 'Top Rated' ? 'bg-yellow-400 text-dark-950' :
                      'bg-white/10 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                      wishlist.includes(product.id) ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-white/40 hover:text-white'
                    }`}
                  >
                    <Heart size={14} className={wishlist.includes(product.id) ? 'fill-red-400' : ''} />
                  </button>
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/5 backdrop-blur-md text-white/40 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Eye size={14} />
                  </button>
                </div>

                <span className="text-xs text-white/40">{product.category}</span>
                <h3 className="text-base font-bold text-white mt-0.5 mb-2">{product.name}</h3>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
                  ))}
                  <span className="text-white/30 text-xs ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-white">£{product.price.toFixed(2)}</p>
                  <button className="p-2.5 rounded-full bg-neon-blue/10 text-neon-blue hover:bg-neon-blue hover:text-dark-950 transition-all">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  )
}
