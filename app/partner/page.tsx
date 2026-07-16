'use client'

import { Suspense, useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'
import { WEB3FORMS_ACCESS_KEY } from '@/lib/web3forms'

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

const franchiseEconomics = [
  {
    type: 'One-time',
    label: 'Franchise Fee',
    desc: 'Exclusive territory rights, launch training, placement playbook & brand onboarding. Quoted with your territory proposal.',
  },
  {
    type: 'One-time',
    label: 'Machine & Setup Package',
    desc: 'Premium CosmicVend-branded Smart Vending machine, wrap, installation & dedicated cloud app activation — purchased once, owned by you.',
  },
  {
    type: 'Yours · recurring',
    label: 'Your Margin Per Box',
    desc: 'A healthy retail margin on every box: you buy at franchise pricing and sell at brand MRP. Exact figures shared in your discovery call.',
  },
  {
    type: 'Ours · recurring',
    label: 'Brand Royalty',
    desc: "A transparent royalty calculated automatically from the dedicated cloud app's real-time sales data. No estimates, no disputes.",
  },
]

const whoThrives = [
  { title: 'First-Time Entrepreneurs', desc: 'Professionals seeking a structured side business with a playbook, a brand, and tech that runs the operations heavy-lifting.' },
  { title: 'Vending & Kiosk Operators', desc: 'Existing operators adding a premium, high-margin category to their route — with a brand story snacks can\'t match.' },
  { title: 'Wellness Professionals', desc: 'Yoga studios, spa owners, and healers extending their practice into retail their clients already trust.' },
  { title: 'Investors & Connectors', desc: 'People with capital and privileged venue access — family hotel ties, clinic chains, community networks — seeking a monitored, semi-passive asset.' },
]

const machineSpecs = [
  { icon: '⬆', label: 'Elevator Soft-Dispense', desc: 'Lift places each box gently — engineered for fragile items like crystals. No drops, ever.' },
  { icon: '◫', label: '22" Touchscreen', desc: 'Large guided selection flow in CosmicVend\'s brand language. Multi-vend: up to 5 items per transaction.' },
  { icon: '◧', label: 'Lit Glass Display', desc: 'Triple-layer vacuum glass. Themed boxes visible and illuminated — the machine merchandises itself.' },
  { icon: '⬡', label: 'Fully Cashless', desc: 'UPI (GPay, PhonePe, Paytm), credit/debit cards, wallets, RFID. No cash handling.' },
  { icon: '◈', label: 'Cloud Dashboards', desc: 'Real-time stock & sales tracking, refill alerts, machine-health monitoring, operator app.' },
  { icon: '✦', label: 'Compact Footprint', desc: 'Standard power socket; retail-friendly dimensions. Guest-visible floor space only.' },
]

function EnquiryForm() {
  const searchParams = useSearchParams()
  const [path, setPath] = useState<'venue' | 'franchise'>(
    searchParams.get('path') === 'franchise' ? 'franchise' : 'venue',
  )
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.success) {
        throw new Error(json?.message || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not send. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // React to CTAs that arrive with ?path=venue|franchise — select the matching
  // tab and bring the form into view (works cross-page and same-page).
  useEffect(() => {
    const p = searchParams.get('path')
    if (p !== 'venue' && p !== 'franchise') return
    setPath(p)
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [searchParams])

  return (
    <div id="enquiry" className="glassmorphism scroll-mt-28 rounded-3xl p-8 md:p-12">
      {/* Path selector */}
      <div className="flex gap-3 mb-8">
        {(['venue', 'franchise'] as const).map((p) => (
          <button
            key={p}
            onClick={() => setPath(p)}
            className="flex-1 py-3 rounded-full font-mono text-xs tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              background: path === p ? 'linear-gradient(135deg, #C9A84C, #E0C06A)' : 'transparent',
              color: path === p ? '#07060F' : 'rgba(240,234,255,0.5)',
              border: path === p ? 'none' : '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {p === 'venue' ? 'I want to host a machine' : 'I want to own a franchise'}
          </button>
        ))}
      </div>

      {submitted ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4" style={{ color: '#C9A84C' }}>&#10022;</div>
          <h3 className="font-serif text-3xl text-[#F0EAFF] mb-3">Received. The cosmos aligns.</h3>
          <p className="font-sans text-[rgba(240,234,255,0.6)]">
            Our team will be in touch soon to arrange your{' '}
            {path === 'venue' ? 'site walk' : 'discovery call'}.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="from_name" value="CosmicVend Website" />
          <input
            type="hidden"
            name="subject"
            value={path === 'venue' ? 'New Venue Placement enquiry (Model A)' : 'New Franchise enquiry (Model B)'}
          />
          <input
            type="hidden"
            name="enquiry_type"
            value={path === 'venue' ? 'Venue Placement (Model A)' : 'Franchise (Model B)'}
          />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {[
            { id: 'name', label: 'Full Name', type: 'text', required: true, full: false },
            { id: 'company', label: path === 'venue' ? 'Venue / Company' : 'Company / Business', type: 'text', required: true, full: false },
            { id: 'role', label: 'Your Role', type: 'text', required: false, full: false },
            { id: 'city', label: path === 'venue' ? 'Venue City' : 'Target Territory / City', type: 'text', required: true, full: false },
            { id: 'email', label: 'Email Address', type: 'email', required: true, full: false },
            { id: 'phone', label: 'Phone Number', type: 'tel', required: false, full: false },
          ].map(({ id, label, type, required, full }) => (
            <div key={id} className={full ? 'md:col-span-2' : ''}>
              <label htmlFor={id} className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,168,76,0.7)' }}>
                {label}{required && ' *'}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                required={required}
                className="w-full px-4 py-3 rounded-xl font-sans text-sm text-[#F0EAFF] placeholder:text-[rgba(240,234,255,0.25)] focus:outline-none transition-all duration-200"
                style={{
                  background: 'rgba(107,63,160,0.1)',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label htmlFor="venueType" className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,168,76,0.7)' }}>
              {path === 'venue' ? 'Venue Type' : 'Why CosmicVend?'}
            </label>
            <textarea
              id="venueType"
              name="details"
              rows={4}
              placeholder={path === 'venue' ? 'e.g. Boutique hotel, 80 rooms, lobby space available…' : 'Tell us about your location access, experience, and goals…'}
              className="w-full px-4 py-3 rounded-xl font-sans text-sm text-[#F0EAFF] placeholder:text-[rgba(240,234,255,0.25)] focus:outline-none transition-all duration-200 resize-none"
              style={{
                background: 'rgba(107,63,160,0.1)',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
            />
          </div>

          <div className="md:col-span-2">
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={submitting ? undefined : { scale: 1.02, boxShadow: '0 0 50px rgba(201,168,76,0.5)' }}
              whileTap={submitting ? undefined : { scale: 0.98 }}
              className="w-full py-4 rounded-full font-mono text-sm tracking-widest uppercase font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E0C06A 50%, #C9A84C 100%)',
                color: '#07060F',
              }}
            >
              {submitting ? 'Sending…' : path === 'venue' ? 'Request a Site Walk' : 'Book a Discovery Call'}
            </motion.button>
            {error && (
              <p role="alert" className="mt-3 text-center font-sans text-sm text-red-400">{error}</p>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default function PartnerPage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(107,63,160,0.2) 0%, transparent 65%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-5">
            <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
              <span className="mr-2">&#10022;</span>Partnership Enquiry<span className="ml-2">&#10022;</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0EAFF] text-balance leading-tight">
              Host it.{' '}
              <span className="gold-shimmer">Or own it.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-xl text-[rgba(240,234,255,0.65)] leading-relaxed max-w-2xl">
              Two ways to bring the cosmos to your space — a passive revenue stream for your venue, or a full business of your own.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Model A & B */}
      <section id="venue" className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model A */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="glassmorphism rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)' }} />
            <span className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full self-start" style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>Model A · Venue Placement</span>
            <h2 className="font-serif text-4xl text-[#F0EAFF]">We run it.<br /><span style={{ color: '#C9A84C' }}>You earn from it.</span></h2>
            <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.65)]">CosmicVend owns and operates the machine in your space. You provide a guest-visible spot and a standard power connection — and earn an attractive revenue share on every transaction.</p>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>CosmicVend handles</p>
              {['Machine supply, installation & branding', 'All inventory — sourcing, curation & refills', 'Remote monitoring & maintenance via dedicated cloud app', 'Cashless payment processing & transaction support', 'Seasonal content rotation & merchandising', 'Transparent monthly sales reporting'].map((item) => (
                <div key={item} className="flex items-start gap-2 py-1.5 border-b border-[rgba(201,168,76,0.08)] font-sans text-sm text-[rgba(240,234,255,0.7)]">
                  <span style={{ color: '#C9A84C' }} className="mt-0.5 flex-shrink-0">&#10022;</span>{item}
                </div>
              ))}
            </div>
            <div className="glassmorphism rounded-xl px-5 py-4">
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(201,168,76,0.6)' }}>You provide</p>
              <p className="font-sans text-sm text-[#F0EAFF]">A compact, guest-visible floor space + a standard power connection. <strong className="text-[#C9A84C]">That&apos;s it.</strong></p>
            </div>
            <p className="font-mono text-xs text-[rgba(240,234,255,0.35)] tracking-wide">Best for: hotels, malls, airports, wellness centres</p>
            <Link href="/partner?path=venue#enquiry">
              <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(201,168,76,0.4)' }} whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full font-mono text-sm tracking-widest uppercase font-semibold"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E0C06A)', color: '#07060F' }}>
                Enquire About Placement
              </motion.button>
            </Link>
          </motion.div>

          {/* Model B */}
          <motion.div id="franchise" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="glassmorphism rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden group" style={{ border: '1px solid rgba(139,95,200,0.3)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(107,63,160,0.2) 0%, transparent 65%)' }} />
            <span className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full self-start" style={{ background: 'rgba(107,63,160,0.15)', color: '#8B5FC8', border: '1px solid rgba(107,63,160,0.4)' }}>Model B · FOFO Franchise</span>
            <h2 className="font-serif text-4xl text-[#F0EAFF]">Own the machine.<br /><span style={{ color: '#8B5FC8' }}>Own the territory.</span></h2>
            <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.65)]">Franchise Owned, Franchise Operated. You own the machine and the exclusive territory, run the business, and keep the profits. We supply the brand, technology, and every box.</p>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#8B5FC8' }}>You own &amp; operate</p>
              {['CosmicVend-branded Smart Vending machine package', 'Secure and manage your placement location(s)', 'Handle refills guided by the cloud dashboard app', 'Keep the healthy retail margin on every box sold'].map((item) => (
                <div key={item} className="flex items-start gap-2 py-1.5 border-b border-[rgba(107,63,160,0.12)] font-sans text-sm text-[rgba(240,234,255,0.7)]">
                  <span style={{ color: '#8B5FC8' }} className="mt-0.5 flex-shrink-0">&#10022;</span>{item}
                </div>
              ))}
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#8B5FC8' }}>We power your business</p>
              {['Exclusive territory rights for your city/zone', 'Complete launch training & placement playbook', 'Exclusive supply of all themed boxes at franchise pricing', 'Brand, marketing assets, cloud dashboard activation & support'].map((item) => (
                <div key={item} className="flex items-start gap-2 py-1.5 border-b border-[rgba(107,63,160,0.08)] font-sans text-sm text-[rgba(240,234,255,0.7)]">
                  <span style={{ color: '#8B5FC8' }} className="mt-0.5 flex-shrink-0">&#10022;</span>{item}
                </div>
              ))}
            </div>
            <p className="font-mono text-xs text-[rgba(240,234,255,0.35)] tracking-wide">Best for: entrepreneurs, operators, investors</p>
            <Link href="/partner?path=franchise#enquiry">
              <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(107,63,160,0.5)' }} whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-full font-mono text-sm tracking-widest uppercase font-semibold"
                style={{ background: 'linear-gradient(135deg, #6B3FA0, #8B5FC8)', color: '#F0EAFF' }}>
                Book a Discovery Call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Franchise Economics */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Franchise Economics<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Simple, transparent economics.</h2>
            <p className="font-sans text-sm text-[rgba(240,234,255,0.4)] mt-3 italic">Indicative structure — full figures are shared in your discovery call and confirmed, tailored per territory, in the franchise agreement.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {franchiseEconomics.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(201,168,76,0.12)', transition: { type: 'spring', stiffness: 280 } }}
                className="glassmorphism rounded-2xl p-6 flex flex-col gap-3">
                <span className="font-mono text-xs tracking-widest uppercase self-start px-2 py-0.5 rounded" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}>{item.type}</span>
                <h3 className="font-serif text-xl text-[#F0EAFF]">{item.label}</h3>
                <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.6)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center font-mono text-xs text-[rgba(240,234,255,0.3)] mt-6 tracking-wide">
            Multi-year renewable terms · territory exclusivity within a defined radius · multi-machine discounts for ambitious operators.
          </p>
        </div>
      </section>

      {/* Who Thrives */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Who Thrives<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Built for first-timers.<br /><span className="gold-shimmer">Scalable for operators.</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whoThrives.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(107,63,160,0.15)', transition: { type: 'spring', stiffness: 280 } }}
                className="glassmorphism rounded-2xl p-6 flex gap-4 items-start">
                <span className="mt-1 flex-shrink-0" style={{ color: '#C9A84C' }}>&#10022;</span>
                <div>
                  <h3 className="font-serif text-xl text-[#F0EAFF] mb-2">{w.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.6)]">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Specs */}
      {/* <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>The Machine<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Enterprise-grade vending hardware.</h2>
            <p className="font-sans text-lg text-[rgba(240,234,255,0.6)] mt-4 max-w-xl mx-auto">Engineered for fragile premium products. Fully wrapped in CosmicVend's celestial identity.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {machineSpecs.map((spec, i) => (
              <motion.div key={spec.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(201,168,76,0.12)', transition: { type: 'spring', stiffness: 280 } }}
                className="glassmorphism rounded-xl p-5 flex gap-3 items-start group cursor-default">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: '#C9A84C' }}>{spec.icon}</span>
                <div>
                  <h3 className="font-serif text-base text-[#F0EAFF] mb-1">{spec.label}</h3>
                  <p className="font-sans text-xs leading-relaxed text-[rgba(240,234,255,0.55)]">{spec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enquiry Form */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Take the First Step<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Choose your path.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Suspense fallback={null}>
              <EnquiryForm />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
