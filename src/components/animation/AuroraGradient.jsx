import { useEffect, useRef } from 'react'

export default function AuroraGradient() {
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

    const blobs = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 300 + 200,
    }))

    const colors = [
      'rgba(0, 229, 255, 0.15)',
      'rgba(123, 46, 255, 0.1)',
      'rgba(0, 255, 136, 0.08)',
    ]

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blobs.forEach((blob, i) => {
        blob.x += blob.vx
        blob.y += blob.vy
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) blob.vx *= -1
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) blob.vy *= -1

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        gradient.addColorStop(0, colors[i])
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(blob.x - blob.radius, blob.y - blob.radius, blob.radius * 2, blob.radius * 2)
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
