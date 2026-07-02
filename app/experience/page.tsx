'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'
import ExperienceCard from '@/components/ExperienceCard'

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.18 } } }

const ritualSteps = [
  {
    step: '01',
    title: 'Choose Your Energy',
    desc: 'Touch the 22" screen. Five theme worlds glow before you — each with its own colour, energy, and emotional resonance. Choose the one that calls to you.',
    image: '/images/hero-machine.png',
    alt: 'CosmicVend machine touchscreen showing five theme selections',
  },
  {
    step: '02',
    title: 'The Gentle Reveal',
    desc: 'The elevator lift system places your curated box gently in the pickup bay — no drops, no clunks. A premium reveal, as intentional as the manifestation itself.',
    image: '/images/ritual-crystal.png',
    alt: 'Hand receiving a beautifully wrapped box from the machine\'s elevator lift',
  },
  {
    step: '03',
    title: 'The Unboxing Moment',
    desc: 'Unwrap. Breathe. Scan the QR code for a private affirmation experience — and let the manifestation begin. Every box plants a tree.',
    image: '/images/unboxing-moment.png',
    alt: 'A beautifully wrapped wellness box opening with golden light',
  },
]

const themes = [
  { name: 'Abundance', tagline: 'Calling in overflow', color: '#d4af37', image: '/images/theme-abundance.png', href: '/experience/abundance' },
  { name: 'Prosperity', tagline: 'Growth in all directions', color: '#ffd700', image: '/images/theme-prosperity.png', href: '/experience/prosperity' },
  { name: 'Self Love', tagline: 'Returning to oneself', color: '#e8b4a0', image: '/images/theme-selflove.png', href: '/experience/self-love' },
  { name: 'Peace', tagline: 'Stillness and clarity', color: '#c0c0c0', image: '/images/theme-peace.png', href: '/experience/peace' },
  { name: 'Gratitude', tagline: 'The highest vibration', color: '#cfb53b', image: '/images/theme-gratitude.png', href: '/experience/gratitude' },
]

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(107,63,160,0.2) 0%, transparent 65%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-5">
            <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
              <span className="mr-2">&#10022;</span>The Guest Experience<span className="ml-2">&#10022;</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0EAFF] text-balance leading-tight">
              The surprise is the gift.
              <br />
              {/* <span className="gold-shimmer">Never the contents.</span> */}
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-xl text-[rgba(240,234,255,0.65)] leading-relaxed max-w-2xl">
              Guests feel it before they can describe it. The experience begins the moment they approach the machine — and some things are simply better discovered than described.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Three-step ritual */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>The Manifestation<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Three moments.<br /><span className="gold-shimmer">One unforgettable experience.</span></h2>
          </motion.div>

          <div className="flex flex-col gap-20">
            {ritualSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                {/* Image */}
                <div className={`relative h-72 md:h-96 rounded-3xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to top, rgba(7,6,15,0.6) 0%, transparent 60%)', border: '1px solid rgba(201,168,76,0.15)' }} />
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-5xl font-light" style={{ color: 'rgba(201,168,76,0.25)' }}>{step.step}</span>
                    <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(201,168,76,0.4), transparent)' }} />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#F0EAFF]">{step.title}</h3>
                  <p className="font-sans text-lg leading-relaxed text-[rgba(240,234,255,0.65)]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Theme Worlds */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Five Worlds of Energy<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">One theme.<br /><span className="gold-shimmer">One feeling </span>
              One beautifully delivered manifestation.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4" style={{ perspective: 1200 }}>
            {themes.map((theme, i) => (
              <ExperienceCard
                key={theme.name}
                title={theme.name}
                subtitle={theme.tagline}
                image={theme.image}
                color={theme.color}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inside every box */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glassmorphism rounded-3xl p-10 md:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
            <span className="text-4xl" style={{ color: '#C9A84C' }}>&#10022;</span>
            <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>Inside Every Box</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F0EAFF]">Curated by category.<br />Never by itemised list.</h2>
            <p className="font-sans text-lg text-[rgba(240,234,255,0.65)] leading-relaxed">
              Each box holds{' '}
              <strong className="text-[#F0EAFF]">a master healing crystal</strong> ·{' '}
              <strong className="text-[#F0EAFF]">a tree seedball to plant</strong> ·{' '}
              <strong className="text-[#F0EAFF]">a keepsake to carry</strong> ·{' '}
              <strong className="text-[#F0EAFF]">a guided affirmation experience</strong>.
              <br /><br />
              The specific items rotate seasonally — every visit holds a new discovery.
            </p>
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }} />
            <p className="font-sans text-base text-[rgba(240,234,255,0.5)] italic leading-relaxed max-w-lg">
              &ldquo;Contents evolve with the seasons — every visit holds a new discovery, and every box plants a tree.&rdquo;
            </p>
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.5)' }}>Collectability · Repeat Purchase · Sustainability</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
