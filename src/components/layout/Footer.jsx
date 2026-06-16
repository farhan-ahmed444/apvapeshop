import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react'
import { useSite } from '../../context/SiteContext'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Delivery Info', href: '/delivery' },
]

const categories = [
  { label: 'Disposable Vapes', href: '/category/disposable-vapes' },
  { label: 'Vape Kits', href: '/category/vape-kits' },
  { label: 'E-Liquids', href: '/category/e-liquids' },
  { label: 'Nicotine Pouches', href: '/category/nicotine-pouches' },
  { label: 'Accessories', href: '/category/accessories' },
]

const support = [
  { label: 'Track Order', href: '/track-order' },
  { label: 'Returns', href: '/returns' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms Of Service', href: '/terms' },
  { label: 'Age Verification', href: '/age-verification' },
]

export default function Footer() {
  const { lenisRef } = useSite()

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0)
    }
  }
  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-white/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center">
                <span className="text-dark-950 font-bold text-sm">AP</span>
              </div>
              <span className="text-lg font-bold text-white">
                AP Vape <span className="text-neon-blue">Shop</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Your premium UK vaping destination. Authentic products, fast delivery, and exceptional customer service.
            </p>
            <div className="space-y-2">
              {[
                { icon: MapPin, text: 'London, United Kingdom' },
                { icon: Mail, text: 'hello@apvapeshop.co.uk' },
                { icon: Phone, text: '+44 20 1234 5678' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/40 text-sm">
                  <item.icon size={14} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/40 text-sm hover:text-neon-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link to={cat.href} className="text-white/40 text-sm hover:text-neon-blue transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/40 text-sm hover:text-neon-blue transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.06] gap-4">
          <p className="text-white/30 text-xs">
            © 2026 AP Vape Shop. All rights reserved. Must be 18+ to purchase.
          </p>
          <div className="flex items-center gap-4">
            {['X', 'Instagram', 'TikTok', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 text-xs hover:text-neon-blue transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-dark-950 transition-all"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  )
}
