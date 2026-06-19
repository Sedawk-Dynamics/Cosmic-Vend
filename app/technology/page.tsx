'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

const machineFeatures = [
  {
    icon: '⬆',
    title: 'Elevator Soft-Dispensing',
    desc: 'A lift system places each box gently in the pickup bay — engineered for fragile items like crystals. A premium reveal, never a clunk.',
    color: '#C9A84C',
  },
  {
    icon: '▭',
    title: '22-inch Touchscreen',
    desc: "A large, guided selection flow in CosmicVend's calm brand language. Multi-vend supports up to 5 items in one transaction.",
    color: '#C9A84C',
  },
  {
    icon: '▦',
    title: 'Lit Triple-Layer Glass',
    desc: 'Triple-layer vacuum glass front. Themed boxes visible and illuminated — the machine merchandises itself without a word.',
    color: '#C9A84C',
  },
  {
    icon: '⬡',
    title: 'Fully Cashless',
    desc: 'UPI (GPay, PhonePe, Paytm), credit/debit cards, wallets, and RFID. No cash handling — clean, automatic reconciliation.',
    color: '#3ECFCF',
  },
  {
    icon: '◈',
    title: 'Cloud Platform',
    desc: 'Real-time stock monitoring, refill alerts, machine-health monitoring, live sales dashboards, and an operator mobile app.',
    color: '#3ECFCF',
  },
  {
    icon: '✦',
    title: 'Child-Safe & Compliant',
    desc: 'Child-safe pickup bay with door interlocks and anti-pinch sensors. Standard power socket; compact retail footprint.',
    color: '#3ECFCF',
  },
]

const vnetraFeatures = [
  "Live stock-level dashboards — know what's selling before you need to refill.",
  'Automated refill alerts sent directly to your operator app.',
  'Machine-health monitoring with remote diagnostic support.',
  'Transparent real-time sales reporting — the basis for royalty calculations.',
]

const phase2Features = [
  {
    title: 'Astrology & Horoscope',
    desc: 'Live birth-chart readings and daily horoscopes delivered on the 22-inch touchscreen.',
  },
  {
    title: 'Interactive Tarot',
    desc: "Guided digital tarot draws, personalised to the guest's chosen theme and moment.",
  },
  {
    title: 'Personalised Recommendations',
    desc: "Personalised theme suggestions based on the guest's chosen energy and the moment they're in.",
  },
  {
    title: 'Existing Partners First',
    desc: 'Phase 2 software ships to all current partner and franchisee machines first — at no extra hardware cost.',
  },
]

export default function TechnologyPage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(62,207,207,0.1) 0%, rgba(107,63,160,0.1) 40%, transparent 70%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-5">
            <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#3ECFCF' }}>
              <span className="mr-2">&#10022;</span>Technology &amp; Roadmap<span className="ml-2">&#10022;</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0EAFF] text-balance leading-tight">
              Premium hardware.{' '}
              <span style={{ color: '#3ECFCF' }}>Proven platform.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-xl text-[rgba(240,234,255,0.65)] leading-relaxed max-w-2xl">
              Enterprise-grade smart vending hardware — engineered for fragile premium products, and wrapped in CosmicVend's calm, premium wellness identity, with the cosmos waiting on screen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Machine features grid */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#3ECFCF' }}><span className="mr-2">&#10022;</span>Advanced Technology<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Six reasons venues choose CosmicVend.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {machineFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 50px ${feat.color === '#3ECFCF' ? 'rgba(62,207,207,0.15)' : 'rgba(201,168,76,0.12)'}`,
                  transition: { type: 'spring', stiffness: 280 },
                }}
                className="glassmorphism rounded-2xl p-7 flex flex-col gap-4 cursor-default group relative overflow-hidden"
                style={{ border: `1px solid ${feat.color === '#3ECFCF' ? 'rgba(62,207,207,0.15)' : 'rgba(201,168,76,0.15)'}` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${feat.color === '#3ECFCF' ? 'rgba(62,207,207,0.08)' : 'rgba(201,168,76,0.06)'} 0%, transparent 70%)` }} />
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30`, color: feat.color }}>
                  {feat.icon}
                </div>
                <h3 className="font-serif text-xl text-[#F0EAFF]">{feat.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.6)]">{feat.desc}</p>
                <div className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${feat.color}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platform Spotlight */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-3xl p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            style={{ border: '1px solid rgba(62,207,207,0.2)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(62,207,207,0.07) 0%, transparent 60%)' }} />
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#3ECFCF' }}><span className="mr-2">&#10022;</span>Cloud Platform</p>
              <h2 className="font-serif text-4xl text-[#F0EAFF] mb-5">Intelligent automation.</h2>
              <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)] mb-8">
                There is a dedicated cloud intelligence layer behind every CosmicVend machine. You never need to wonder how the machine is performing — it tells you, in real time.
              </p>
              <ul className="flex flex-col gap-3">
                {vnetraFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-[rgba(240,234,255,0.75)]">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: '#3ECFCF' }}>&#10022;</span>{f}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-64 lg:h-auto rounded-2xl overflow-hidden">
              <Image src="/images/machine-lobby.png" alt="CosmicVend machine in a luxury hotel lobby, powered by dedicated cloud app" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,6,15,0.5) 0%, transparent 60%)', border: '1px solid rgba(62,207,207,0.15)', borderRadius: '1rem' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap — Phase 2 */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}>
              <span className="mr-2">&#10022;</span>Roadmap — Phase 2<span className="ml-2">&#10022;</span>
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF] text-balance">
              The Cosmic Concierge.
              <br />
              <span className="gold-shimmer">Coming next.</span>
            </h2>
            <p className="font-sans text-lg text-[rgba(240,234,255,0.6)] mt-6 max-w-2xl mx-auto leading-relaxed">
              Phase 2 transforms the machine from a dispenser into a personalised cosmic guide. Partners who join now receive the upgrade first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {phase2Features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 15px 40px rgba(201,168,76,0.12)', transition: { type: 'spring', stiffness: 280 } }}
                className="glassmorphism rounded-2xl p-7 flex flex-col gap-3 cursor-default relative overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />
                <div className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: '#C9A84C' }}>&#10022;</span>
                  <h3 className="font-serif text-xl text-[#F0EAFF]">{feat.title}</h3>
                </div>
                <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.6)]">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 text-center">
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'rgba(201,168,76,0.5)' }}>
              Partner now. Grow with us.
            </p>
            <Link href="/partner#enquiry">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(201,168,76,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 rounded-full font-mono text-sm tracking-widest uppercase font-semibold"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E0C06A)', color: '#07060F' }}
              >
                Become a Partner
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
