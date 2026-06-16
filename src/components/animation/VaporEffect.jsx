import { useEffect, useRef } from 'react'

export default function VaporEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const getSize = () => ({
      w: canvas.clientWidth || window.innerWidth,
      h: canvas.clientHeight || window.innerHeight,
    })

    const init = () => {
      const { w, h } = getSize()
      if (w === 0 || h === 0) {
        requestAnimationFrame(init)
        return
      }
      canvas.width = w
      canvas.height = h
      particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * w,
        y: h + 20,
        size: Math.random() * 80 + 40,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.05,
      }))
    }

    const ro = new ResizeObserver(() => init())
    init()
    ro.observe(canvas.parentElement)
    window.addEventListener('resize', init)

    const animate = () => {
      const { w, h } = getSize()
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.y -= p.speedY
        p.x += p.speedX
        p.opacity -= 0.001
        if (p.y < -p.size || p.opacity <= 0) {
          p.y = h + 20
          p.x = Math.random() * w
          p.opacity = Math.random() * 0.15 + 0.05
        }
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(0, 229, 255, ${p.opacity})`)
        gradient.addColorStop(0.5, `rgba(123, 46, 255, ${p.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(0, 229, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2)
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      ro.disconnect()
      window.removeEventListener('resize', init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
