'use client'

import { useEffect, useRef } from 'react'
import FloatingParticles from './FloatingParticles'

interface CosmicBackgroundProps {
  /** rgb triplet for the dominant aurora/particle hue. */
  accent?: string
  /** secondary rgb triplet for the cross aurora glow. */
  glow?: string
  /** Enable the drifting particle field. */
  particles?: boolean
  /** Theme gradient hexes for the base void (matches the original HTML rituals). */
  gradient?: { g1: string; g2: string; g3: string }
}

/**
 * Full-screen, continuously-animated cosmic backdrop:
 * base void → nebula pan → twin aurora blobs → breathing core → starfield → particles.
 * Includes a subtle pointer parallax that nudges the aurora layer.
 */
export default function CosmicBackground({
  accent = '201, 168, 76',
  glow = '107, 63, 160',
  particles = true,
  gradient,
}: CosmicBackgroundProps) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = parallaxRef.current
    if (!layer) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        layer.style.transform = `translate3d(${nx * 26}px, ${ny * 26}px, 0)`
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
      {/* base void — themed gradient when provided, mirroring the HTML rituals */}
      <div
        className="absolute inset-0 bg-[#07060F]"
        style={
          gradient
            ? {
                background: `linear-gradient(135deg, ${gradient.g1} 0%, ${gradient.g2} 50%, ${gradient.g3} 100%)`,
              }
            : undefined
        }
      />

      {/* nebula pan — mirrors the HTML .aurora layer when a theme gradient is set */}
      <div
        className="absolute inset-0 animate-nebula opacity-90"
        style={{
          background: gradient
            ? 'radial-gradient(40% 50% at 25% 30%, rgba(' +
              accent +
              ', 0.16) 0%, transparent 70%), radial-gradient(45% 55% at 78% 70%, rgba(' +
              glow +
              ', 0.18) 0%, transparent 70%)'
            : 'radial-gradient(40% 55% at 18% 25%, rgba(' +
              glow +
              ', 0.28) 0%, transparent 60%), radial-gradient(45% 60% at 82% 70%, rgba(' +
              accent +
              ', 0.16) 0%, transparent 62%), radial-gradient(60% 60% at 50% 50%, rgba(62,207,207,0.06) 0%, transparent 70%)',
        }}
      />

      {/* parallax aurora blobs */}
      <div ref={parallaxRef} className="absolute -inset-[15%] will-change-transform">
        <div
          className="absolute left-[10%] top-[12%] h-[55vmax] w-[55vmax] animate-aurora rounded-full blur-[90px]"
          style={{
            background:
              'radial-gradient(circle, rgba(' + glow + ', 0.35) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute right-[8%] bottom-[6%] h-[50vmax] w-[50vmax] animate-aurora rounded-full blur-[100px]"
          style={{
            animationDelay: '-7s',
            background:
              'radial-gradient(circle, rgba(' + accent + ', 0.28) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* breathing core glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[42vmax] w-[42vmax] animate-breathe rounded-full blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, rgba(' + accent + ', 0.18) 0%, transparent 60%)',
        }}
      />

      {/* twinkling stars (cheap, static-positioned, CSS-twinkle) */}
      <Stars />

      {/* drifting particles */}
      {particles && (
        <FloatingParticles
          color={accent}
          className="pointer-events-none absolute inset-0"
        />
      )}

      {/* vignette for depth — skipped when a theme gradient is set so the HTML colours show through */}
      {!gradient && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 55%, rgba(7,6,15,0.85) 100%)',
          }}
        />
      )}
    </div>
  )
}

/** Deterministic-ish star sprinkle rendered once with CSS twinkle. */
function Stars() {
  const stars = useRef(
    Array.from({ length: 90 }, (_, i) => ({
      top: ((i * 37) % 100) + (i % 5),
      left: ((i * 53) % 100) + (i % 7),
      size: (i % 3) + 1,
      delay: (i % 9) * 0.4,
    })),
  ).current

  return (
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#F0EAFF]"
          style={{
            top: `${Math.min(s.top, 99)}%`,
            left: `${Math.min(s.left, 99)}%`,
            width: s.size,
            height: s.size,
            opacity: 0.4,
            animation: `twinkle ${3 + (i % 4)}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
