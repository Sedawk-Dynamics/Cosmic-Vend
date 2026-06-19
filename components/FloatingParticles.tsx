'use client'

import { useEffect, useRef } from 'react'

interface FloatingParticlesParticle {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  opacity: number
}

interface FloatingParticlesProps {
  /** Approximate particle count at 1080p; scales with viewport. */
  count?: number
  /** rgb triplet used for the particle fill, e.g. "201, 168, 76". */
  color?: string
  className?: string
}

/**
 * GPU-light canvas particle field that drifts slowly upward.
 * Honours prefers-reduced-motion by rendering a static, sparse field.
 */
export default function FloatingParticles({
  count = 60,
  color = '201, 168, 76',
  className,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let particles: FloatingParticlesParticle[] = []
    let frame = 0

    const seed = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      const density = Math.min(count, Math.round((width * height) / 26000))
      const total = reduce ? Math.round(density / 3) : density
      particles = Array.from({ length: total }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.1 + 0.5,
        speed: Math.random() * 0.32 + 0.06,
        drift: (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.5 + 0.18,
      }))
    }

    const paint = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`
        ctx.fill()
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < -12) {
          p.y = height + 12
          p.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`
        ctx.fill()
      }
      frame = requestAnimationFrame(tick)
    }

    seed()
    if (reduce) {
      paint()
    } else {
      frame = requestAnimationFrame(tick)
    }

    const onResize = () => {
      seed()
      if (reduce) paint()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [count, color])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? 'pointer-events-none fixed inset-0 -z-10'}
    />
  )
}
