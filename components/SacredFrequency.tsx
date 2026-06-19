'use client'

import { motion } from 'framer-motion'

interface SacredFrequencyProps {
  hz?: number
  label?: string
  caption?: string
}

/** Floating glass card displaying a tuned healing frequency with a pulsing border. */
export default function SacredFrequency({
  hz = 888,
  label = 'Sacred Frequency',
  caption = 'Tuned for abundance & overflow',
}: SacredFrequencyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="animate-float-soft">
        <div className="glassmorphism animate-border-pulse relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl px-10 py-12 text-center">
          {/* soft inner aura */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(var(--world-accent-rgb),0.25), transparent 65%)' }}
          />

          <p className="relative font-mono text-[10px] uppercase tracking-[0.32em] text-[rgba(240,234,255,0.6)]">
            {label}
          </p>

          <div className="relative flex items-end justify-center gap-2">
            <span className="gold-shimmer font-serif text-7xl leading-none">{hz}</span>
            <span className="mb-2 font-mono text-base uppercase tracking-widest text-(--world-accent)">
              Hz
            </span>
          </div>

          <p className="relative max-w-[16rem] font-sans text-sm italic text-[rgba(240,234,255,0.55)]">
            {caption}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
