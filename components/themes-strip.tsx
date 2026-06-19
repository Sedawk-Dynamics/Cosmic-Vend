'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const themes = [
  {
    name: 'Abundance',
    tagline: 'Calling in overflow',
    color: '#C9A84C',
    glow: 'rgba(201,168,76,0.35)',
    image: '/images/theme-abundance.png',
    href: '/experience/abundance',
  },
  {
    name: 'Prosperity',
    tagline: 'Growth in all directions',
    color: '#4CAF78',
    glow: 'rgba(76,175,120,0.35)',
    image: '/images/theme-prosperity.png',
    href: '/experience/prosperity',
  },
  {
    name: 'Self Love',
    tagline: 'Returning to oneself',
    color: '#E0829A',
    glow: 'rgba(224,130,154,0.35)',
    image: '/images/theme-selflove.png',
    href: '/experience/self-love',
  },
  {
    name: 'Peace',
    tagline: 'Stillness and clarity',
    color: '#7EB8E8',
    glow: 'rgba(126,184,232,0.35)',
    image: '/images/theme-peace.png',
    href: '/experience/peace',
  },
  {
    name: 'Gratitude',
    tagline: 'The highest vibration',
    color: '#F0EAFF',
    glow: 'rgba(240,234,255,0.35)',
    image: '/images/theme-gratitude.png',
    href: '/experience/gratitude',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function ThemesStrip() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#09071A' }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(107,63,160,0.2) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="mr-2">&#9733;</span>Five Sacred Themes<span className="ml-2">&#9733;</span>
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F0EAFF] text-balance">
            One beautiful machine.
            <br />
            <span className="gold-shimmer">Five worlds of energy.</span>
          </h2>
          <p className="font-sans text-lg text-[rgba(240,234,255,0.6)] mt-6 max-w-2xl mx-auto leading-relaxed">
            Each theme carries its own colour world, emotional resonance, and curated manifestation.
            Your guests choose the energy they need — at any hour.
          </p>
        </div>

        {/* Theme cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: `0 25px 60px ${theme.glow}, 0 0 0 1px ${theme.color}44`,
                transition: { type: 'spring', stiffness: 260, damping: 18 },
              }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: 280 }}
            >
              {/* Image */}
              <Image
                src={theme.image}
                alt={`${theme.name} theme — ${theme.tagline}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, rgba(7,6,15,0.92) 0%, rgba(7,6,15,0.5) 50%, rgba(7,6,15,0.2) 100%)`,
                }}
              />

              {/* Colour glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${theme.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div
                  className="w-8 h-0.5 mb-3 transition-all duration-500 group-hover:w-14"
                  style={{ background: theme.color }}
                />
                <h3
                  className="font-serif text-2xl mb-1"
                  style={{ color: theme.color }}
                >
                  {theme.name}
                </h3>
                <p className="font-mono text-xs tracking-widest uppercase text-[rgba(240,234,255,0.6)]">
                  {theme.tagline}
                </p>
              </div>

              {/* full-card click target → the immersive experience */}
              <Link
                href={theme.href}
                aria-label={`Enter the ${theme.name} experience`}
                className="absolute inset-0 z-10"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center font-mono text-xs text-[rgba(240,234,255,0.3)] tracking-wide mt-8">
          Contents are curated seasonally — the manifestation evolves. Every box plants a tree.
        </p>
      </div>
    </section>
  )
}
