'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const models = [
  {
    tag: 'Model A · For Venues',
    title: 'Host It.',
    subtitle: 'Zero investment.',
    description:
      'We own and operate the machine in your space. You provide a guest-visible spot and a power socket — and earn an attractive revenue share on every sale.',
    features: [
      'Zero investment',
      'Attractive revenue share on all sales',
      'We handle stock, service & payments',
      'Seasonal content rotation & reporting',
    ],
    best: 'Hotels, malls, airports, wellness centres',
    cta: 'Enquire About Placement',
    href: '/partner?path=venue#enquiry',
    accentColor: '#C9A84C',
    glowColor: 'rgba(201,168,76,0.2)',
  },
  {
    tag: 'Model B · For Entrepreneurs',
    title: 'Own It.',
    subtitle: 'Own the machine. Own the territory.',
    description:
      'A FOFO franchise. You own the machine and an exclusive territory, run the business, and keep a healthy retail margin. We supply the brand, technology, and every box.',
    features: [
      'Exclusive territory rights for your city',
      'Healthy retail margin on every box you sell',
      'Brand, tech & training included',
      'Real-time cloud dashboards via dedicated cloud app',
    ],
    best: 'Entrepreneurs, operators, investors',
    cta: 'Book a Discovery Call',
    href: '/partner?path=franchise#enquiry',
    accentColor: '#8B5FC8',
    glowColor: 'rgba(139,95,200,0.2)',
  },
]

export default function PartnerModelsTeaser() {
  return (
    <section className="relative z-10 py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#07060F' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 60%, rgba(107,63,160,0.2) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="mr-2">&#9733;</span>Two Ways to Partner<span className="ml-2">&#9733;</span>
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F0EAFF] text-balance">
            Host it.{' '}
            <span className="gold-shimmer">Or own it.</span>
          </h2>
          <p className="font-sans text-lg text-[rgba(240,234,255,0.6)] mt-6 max-w-xl mx-auto leading-relaxed">
            Choose the model that fits your appetite — passive revenue from your space, or a
            full business of your own.
          </p>
        </div>

        {/* Model cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {models.map((model, i) => (
            <motion.div
              key={model.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: `0 30px 80px ${model.glowColor}, 0 0 0 1px ${model.accentColor}40`,
                transition: { type: 'spring', stiffness: 280, damping: 20 },
              }}
              className="glassmorphism rounded-3xl p-8 flex flex-col gap-5 cursor-default group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${model.glowColor} 0%, transparent 65%)`,
                }}
              />

              {/* Tag */}
              <span
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full self-start"
                style={{
                  background: `${model.accentColor}18`,
                  color: model.accentColor,
                  border: `1px solid ${model.accentColor}40`,
                }}
              >
                {model.tag}
              </span>

              {/* Title */}
              <div>
                <h3 className="font-serif text-4xl text-[#F0EAFF]">{model.title}</h3>
                <p className="font-mono text-xs tracking-widest uppercase mt-1" style={{ color: model.accentColor }}>
                  {model.subtitle}
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.65)]">
                {model.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mt-1">
                {model.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-[rgba(240,234,255,0.75)]">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: model.accentColor }}>&#10022;</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Best for */}
              <p className="font-mono text-xs tracking-wide text-[rgba(240,234,255,0.4)]">
                Best for: {model.best}
              </p>

              {/* CTA */}
              <Link href={model.href} className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${model.glowColor}` }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-full font-mono text-sm tracking-widest uppercase font-medium transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${model.accentColor}, ${model.accentColor}cc)`,
                    color: '#07060F',
                  }}
                >
                  {model.cta}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
