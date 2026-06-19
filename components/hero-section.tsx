'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: 'easeOut' } },
  }

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: '80px' }}
      aria-label="Hero"
    >
      {/* Nebula background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 65% 40%, rgba(107,63,160,0.28) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(201,168,76,0.06) 0%, transparent 45%), #07060F',
        }}
        aria-hidden="true"
      />

      {/* Hero image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, #07060F 0%, rgba(7,6,15,0.5) 38%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <Image
          src="/images/hero-machine.png"
          alt="CosmicVend premium wellness vending machine in a luxury hotel lobby"
          fill
          priority
          className="object-cover object-center opacity-85"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Floating star motif */}
      <motion.div
        className="absolute right-[6%] top-[18%] z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
        animate={{ opacity: 0.45, scale: 1, rotate: 0 }}
        transition={{ duration: 1.8, delay: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
          <path
            d="M55 8 L58.5 36 L84 27 L67.5 49 L94 57 L67.5 65 L84 87 L58.5 78 L55 106 L51.5 78 L26 87 L42.5 65 L16 57 L42.5 49 L26 27 L51.5 36 Z"
            fill="#C9A84C"
            opacity="0.65"
          />
          <circle cx="55" cy="57" r="7" fill="#C9A84C" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            style={{ color: '#C9A84C' }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                background: '#C9A84C',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              aria-hidden="true"
            />
            B2B Wellness Vending Platform
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                background: '#C9A84C',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              aria-hidden="true"
            />
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance mb-6"
            style={{ color: '#F0EAFF' }}
          >
            A revenue-generating{' '}
            <span className="gold-shimmer">wellness amenity</span>{' '}
            for your space.
          </motion.h1>

          {/* Subhead */}
          <motion.div
            variants={itemVariants}
            className="mb-10 space-y-4"
          >
            <p
              className="font-serif text-xl md:text-2xl font-semibold tracking-wide"
              style={{ color: '#D4AF37' }} // Sacred Gold
            >
              Meet India's first wellness vending machine
            </p>

            <p
              className="font-sans text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: 'rgba(240,234,255,0.82)' }}
            >
              <span className="font-semibold text-white">Five Intentions</span> — Abundance,
              Prosperity, Self-Love, Peace, and Gratitude, thoughtfully dispensed in a
              beautifully curated box you can carry home.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/partner">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.2)',
                }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-semibold overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E0C06A 50%, #C9A84C 100%)',
                  color: '#07060F',
                }}
              >
                Become a Partner
              </motion.button>
            </Link>
            <Link href="/partner#franchise">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(201,168,76,0.3)',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-medium border transition-all duration-300"
                style={{
                  borderColor: '#C9A84C',
                  color: '#C9A84C',
                }}
              >
                Own a Franchise
              </motion.button>
            </Link>
          </motion.div>

          {/* Tagline */}
          {/* <motion.p
            variants={itemVariants}
            className="font-mono text-xs tracking-[0.35em] uppercase mt-10"
            style={{ color: 'rgba(201,168,76,0.5)' }}
          >
            Pause &nbsp;&nbsp;|&nbsp;&nbsp; Breath &nbsp;&nbsp;|&nbsp;&nbsp; Align
          </motion.p> */}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #07060F 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
