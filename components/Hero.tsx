'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
}

/** Cinematic page hero with a luxury animated gold-gradient title. */
export default function Hero({ eyebrow, title, subtitle }: HeroProps) {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center px-6 pt-32 text-center md:pt-40"
    >
      {eyebrow && (
        <motion.p
          variants={item}
          className="mb-5 font-mono text-xs uppercase tracking-[0.4em] text-(--world-accent)"
        >
          <span className="mr-2">&#10022;</span>
          {eyebrow}
          <span className="ml-2">&#10022;</span>
        </motion.p>
      )}

      <motion.h1
        variants={item}
        className="gold-shimmer font-serif text-6xl leading-[1.05] sm:text-7xl md:text-8xl"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.28em] text-[rgba(240,234,255,0.6)]"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  )
}
