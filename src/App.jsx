import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'
import { useSite } from './context/SiteContext'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/layout/LoadingScreen'
import CursorFollower from './components/ui/CursorFollower'
import Home from './pages/Home'

export default function App() {
  const { isLoading, setIsLoading } = useSite()
  const location = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative min-h-screen bg-dark-950">
        <CursorFollower />
        <Navigation />

        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  )
}
