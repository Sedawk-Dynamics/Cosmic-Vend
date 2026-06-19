'use client'

import { motion } from 'framer-motion'

interface AffirmationCardProps {
  text: string
  /** Optional language label shown above the line (e.g. "தமிழ்"). */
  lang?: string
  /** Apply the Indic font stack + relaxed line-height. */
  indic?: boolean
  /** Position in the list — drives the staggered reveal delay. */
  index?: number
}

/** A single glass affirmation card; reveals on scroll with a staggered delay. */
export default function AffirmationCard({
  text,
  lang,
  indic = false,
  index = 0,
}: AffirmationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="glassmorphism rounded-2xl border-l-2 border-l-(--world-accent) px-6 py-5"
    >
      {lang && (
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-(--world-accent)">
          {lang}
        </p>
      )}
      <p
        className={`text-lg leading-snug text-[rgba(240,234,255,0.92)] ${
          indic ? 'font-indic' : 'font-serif'
        }`}
      >
        {text}
      </p>
    </motion.div>
  )
}
