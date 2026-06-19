'use client'

import { motion } from 'framer-motion'

interface QuoteSectionProps {
  quote: string
  author?: string
}

/** Centered, fade-in inspirational passage. */
export default function QuoteSection({ quote, author }: QuoteSectionProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="mx-auto max-w-2xl px-6 text-center"
    >
      <span
        aria-hidden="true"
        className="block font-serif text-6xl leading-none"
        style={{ color: 'rgba(var(--world-accent-rgb),0.4)' }}
      >
        &ldquo;
      </span>
      <blockquote className="-mt-4 font-serif text-2xl italic leading-relaxed text-[rgba(240,234,255,0.92)] md:text-3xl">
        {quote}
      </blockquote>
      {author && (
        <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.28em] text-(--world-accent)">
          {author}
        </figcaption>
      )}
    </motion.figure>
  )
}
