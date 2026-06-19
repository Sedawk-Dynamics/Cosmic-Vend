'use client'

import { motion } from 'framer-motion'

const opportunities = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
    title: 'Always-On Impulse Demand',
    description:
      'Wellness purchases are emotional and spontaneous. The machine is awake when the desire strikes — day, night, weekend. Capture revenue a staffed store never could.',
    accent: '#C9A84C',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Premium Revenue Per Sq. Ft.',
    description:
      'A compact footprint turns an idle corner into a high-margin retail point. Gift-priced products, not snack-priced ones — maximising return on every square metre.',
    accent: '#8B5FC8',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'A Category With No Incumbent',
    description:
      'Snack vending is crowded. Wellness vending is an open lane. Early movers in each city own the association — and your venue leads.',
    accent: '#3ECFCF',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function OpportunitySection() {
  return (
    <section className="relative z-10 py-24 md:py-32" style={{ backgroundColor: '#07060F' }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(107,63,160,0.18) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="mr-2">&#9733;</span>The Opportunity<span className="ml-2">&#9733;</span>
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F0EAFF] text-balance">
            Wellness demand is 24/7.
            <br />
            <span className="gold-shimmer">{'Wellness retail isn\'t.'}</span>
          </h2>
          <p className="font-sans text-lg text-[rgba(240,234,255,0.6)] mt-6 max-w-2xl mx-auto leading-relaxed">
            Guests want to take a piece of wellness home — at 11pm after check-in, between meetings, before a flight. A beautiful smart machine captures that moment around the clock, with zero staffing cost.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {opportunities.map((opp) => (
            <motion.div
              key={opp.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 60px rgba(201,168,76,0.15), 0 0 0 1px rgba(201,168,76,0.3)`,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="relative glassmorphism rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden group"
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${opp.accent}18 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${opp.accent}28, transparent)`,
                  border: `1px solid ${opp.accent}50`,
                  color: opp.accent,
                }}
              >
                {opp.icon}
              </div>

              <h3 className="font-serif text-2xl text-[#F0EAFF]">{opp.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.65)]">
                {opp.description}
              </p>

              {/* Gold accent line at bottom */}
              <div
                className="mt-auto pt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${opp.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
