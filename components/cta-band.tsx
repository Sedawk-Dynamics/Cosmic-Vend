'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CtaBand() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#0B091A' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.12) 0%, rgba(107,63,160,0.12) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative 8-point stars */}
      <div className="absolute top-8 left-[10%] text-[#C9A84C] opacity-20 text-4xl pointer-events-none" aria-hidden="true">&#10022;</div>
      <div className="absolute bottom-8 right-[10%] text-[#6B3FA0] opacity-20 text-5xl pointer-events-none" aria-hidden="true">&#10022;</div>
      <div className="absolute top-1/2 right-[5%] text-[#C9A84C] opacity-10 text-6xl pointer-events-none" aria-hidden="true">&#10022;</div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
            <span className="mr-2">&#9733;</span>Ready to begin?<span className="ml-2">&#9733;</span>
          </p>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F0EAFF] text-balance leading-tight">
            Bring the cosmos
            <br />
            <span className="gold-shimmer">to your space.</span>
          </h2>

          {/* Sub */}
          <p className="font-sans text-lg text-[rgba(240,234,255,0.65)] leading-relaxed max-w-2xl">
            A 30-minute site walk is all it takes to discover where CosmicVend fits in your venue.
            No commitment, no pressure — just a conversation about revenue you&apos;re currently leaving on the table.
          </p>

          {/* Divider star */}
          <div className="flex items-center gap-4 my-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.5)]" />
            <span style={{ color: '#C9A84C' }} className="text-xl">&#9733;</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.5)]" />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/partner#enquiry">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(201,168,76,0.6), 0 0 100px rgba(201,168,76,0.2)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-semibold relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E0C06A 50%, #C9A84C 100%)',
                  color: '#07060F',
                }}
              >
                Book a Site Walk
              </motion.button>
            </Link>
            <Link href="/about#contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(107,63,160,0.4)',
                  backgroundColor: 'rgba(107,63,160,0.15)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-medium border transition-all duration-300"
                style={{
                  borderColor: 'rgba(107,63,160,0.5)',
                  color: '#F0EAFF',
                }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Tagline */}
          <p className="font-mono text-xs tracking-[0.35em] uppercase mt-4" style={{ color: 'rgba(201,168,76,0.4)' }}>
            Pause &nbsp;&nbsp;|&nbsp;&nbsp; Breath &nbsp;&nbsp;|&nbsp;&nbsp; Align
          </p>
        </div>
      </div>
    </section>
  )
}
