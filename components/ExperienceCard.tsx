'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion'

interface ExperienceCardProps {
  title: string
  subtitle: string
  image: string
  /** Hex accent used for the title, glow, and border. */
  color?: string
  /** When provided the whole card becomes a link; otherwise it is inert. */
  href?: string
  /** Stagger index for the reveal animation. */
  index?: number
}

/**
 * Premium glass card with mouse-parallax 3D tilt, hover glow, image zoom and
 * a continuous float. Becomes a router link when `href` is supplied.
 */
export default function ExperienceCard({
  title,
  subtitle,
  image,
  color = '#C9A84C',
  href,
  index = 0,
}: ExperienceCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 220, damping: 18 })
  const sy = useSpring(py, { stiffness: 220, damping: 18 })
  const rotateX = useTransform(sy, [-0.5, 0.5], ['9deg', '-9deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-9deg', '9deg'])

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    px.set(0)
    py.set(0)
  }

  const tiltStyle: MotionStyle = {
    rotateX,
    rotateY,
    transformPerspective: 1000,
  }

  const card = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.035 }}
      style={tiltStyle}
      className={[
        'group relative overflow-hidden rounded-3xl will-change-transform',
        'border border-[rgba(201,168,76,0.22)] bg-[rgba(30,16,56,0.4)] backdrop-blur-md',
        'shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)]',
        href ? 'cursor-pointer' : 'cursor-default',
        'animate-float-soft',
      ].join(' ')}
    >
      {/* image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} — ${subtitle}`}
          fill
          sizes="(max-width: 768px) 100vw, 20vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {/* legibility gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(7,6,15,0.92) 0%, rgba(7,6,15,0.4) 60%, rgba(7,6,15,0.12) 100%)',
          }}
        />
        {/* hover glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${color}26 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* glowing border on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${color}, 0 0 32px -4px ${color}66` }}
      />

      {/* content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <div
          className="mb-2 h-0.5 w-6 transition-all duration-500 group-hover:w-12"
          style={{ background: color }}
        />
        <h3 className="font-serif text-2xl" style={{ color }}>
          {title}
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest text-[rgba(240,234,255,0.55)]">
          {subtitle}
        </p>
        {href && (
          <span
            className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color }}
          >
            Enter the ritual &rarr;
          </span>
        )}
      </div>
    </motion.div>
  )

  if (!href) return card

  return (
    <Link href={href} aria-label={`Enter the ${title} experience`} className="block">
      {card}
    </Link>
  )
}
