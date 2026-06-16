import { useEffect, useRef } from 'react'

export default function VaporEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 80 + 40,
      speedY: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.15 + 0.05,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.speedX
        p.opacity -= 0.001
        if (p.y < -p.size || p.opacity <= 0) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
          p.opacity = Math.random() * 0.15 + 0.05
        }
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(0, 229, 255, ${p.opacity})`)
        gradient.addColorStop(0.5, `rgba(123, 46, 255, ${p.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(0, 229, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(p.x - p.size, p.y - p.size, p.size * 2, p.size * 2)
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  )
}
