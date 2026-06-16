import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { useSite } from './context/SiteContext'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/layout/LoadingScreen'
import CursorFollower from './components/ui/CursorFollower'
import Home from './pages/Home'

export default function App() {
  const { isLoading, setIsLoading, setScrollY, lenisRef } = useSite()
  const location = useLocation()
  const rafRef = useRef(null)

  useEffect(() => {
    let lenis
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      })
      lenisRef.current = lenis
      lenis.on('scroll', (e) => {
        setScrollY(e.animatedScroll || e.scroll || 0)
      })
      function raf(time) {
        lenis.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }
      rafRef.current = requestAnimationFrame(raf)
    } catch (e) {
      console.error('Lenis failed:', e)
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (lenis) lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [location.pathname])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="relative min-h-screen bg-dark-950">
        <CursorFollower />
        <Navigation />

        <main>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}
