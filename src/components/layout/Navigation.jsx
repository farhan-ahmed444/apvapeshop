import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Heart, Search, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Categories', href: '/categories', hasDropdown: true },
  { label: 'Deals', href: '/deals', badge: 'Hot' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    let lastY = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      setVisible(currentY < lastY || currentY < 100)
      setLastScroll(currentY)
      lastY = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/80 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center">
                <span className="text-dark-950 font-bold text-sm">AP</span>
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">
                AP Vape <span className="text-neon-blue">Shop</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
                >
                  {link.label}
                  {link.badge && (
                    <span className="absolute -top-0.5 -right-0.5 text-[10px] font-bold text-dark-950 bg-neon-green px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 text-white/70 hover:text-white transition-colors hidden sm:block">
                <Search size={18} />
              </button>
              <button className="p-2.5 text-white/70 hover:text-white transition-colors relative hidden sm:block">
                <Heart size={18} />
              </button>
              <button className="p-2.5 text-white/70 hover:text-white transition-colors relative">
                <ShoppingCart size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-neon-blue text-dark-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 text-white/70 hover:text-white"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl pt-20"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
