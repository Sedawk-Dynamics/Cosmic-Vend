'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'
import { WEB3FORMS_ACCESS_KEY } from '@/lib/web3forms'

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

const nextSteps = [
  {
    path: 'Venues',
    tag: 'Host a Machine',
    steps: [
      { num: '01', title: 'Site Walk', desc: '30 minutes to find the perfect spot in your space. We come to you.' },
      { num: '02', title: 'Placement Agreement', desc: 'A simple revenue-share agreement — no capital required from your side.' },
      { num: '03', title: 'We Install & Switch On', desc: 'We install, stock, brand, and activate the machine. You start earning.' },
    ],
    color: '#C9A84C',
    cta: 'Request a Site Walk',
  },
  {
    path: 'Entrepreneurs',
    tag: 'Own a Franchise',
    steps: [
      { num: '01', title: 'Discovery Call', desc: 'A conversation about your territory, your goals, and fit for the CosmicVend brand.' },
      { num: '02', title: 'Territory Proposal', desc: 'We send a full investment proposal with territory map, economics, and next steps.' },
      { num: '03', title: 'Training, Launch & Live', desc: 'Complete launch training, placement support, and your first machine goes live.' },
    ],
    color: '#8B5FC8',
    cta: 'Book a Discovery Call',
  },
]

function ContactForm() {
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

  return (
    <div id="contact" className="glassmorphism rounded-3xl p-8 md:p-12">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4" style={{ color: '#C9A84C' }}>&#10022;</div>
          <h3 className="font-serif text-3xl text-[#F0EAFF] mb-3">Message received.</h3>
          <p className="font-sans text-[rgba(240,234,255,0.6)]">Our team will respond soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Web3Forms hidden fields */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New enquiry from CosmicVend website" />
          <input type="hidden" name="from_name" value="CosmicVend Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {[
            { id: 'cname', name: 'name', label: 'Name', type: 'text', required: true, full: false },
            { id: 'ccompany', name: 'company', label: 'Company / Organisation', type: 'text', required: false, full: false },
            { id: 'cemail', name: 'email', label: 'Email Address', type: 'email', required: true, full: false },
            { id: 'cphone', name: 'phone', label: 'Phone', type: 'tel', required: false, full: false },
          ].map(({ id, name, label, type, required, full }) => (
            <div key={id} className={full ? 'md:col-span-2' : ''}>
              <label htmlFor={id} className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,168,76,0.7)' }}>
                {label}{required && ' *'}
              </label>
              <input id={id} name={name} type={type} required={required}
                className="w-full px-4 py-3 rounded-xl font-sans text-sm text-[#F0EAFF] placeholder:text-[rgba(240,234,255,0.25)] focus:outline-none transition-all duration-200"
                style={{ background: 'rgba(107,63,160,0.1)', border: '1px solid rgba(201,168,76,0.15)' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <label htmlFor="ctype" className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,168,76,0.7)' }}>Enquiry Type</label>
            <select id="ctype" name="enquiry_type"
              className="w-full px-4 py-3 rounded-xl font-sans text-sm text-[#F0EAFF] focus:outline-none transition-all duration-200 appearance-none"
              style={{ background: 'rgba(107,63,160,0.1)', border: '1px solid rgba(201,168,76,0.15)' }}
              defaultValue=""
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
            >
              <option value="" disabled style={{ backgroundColor: '#12081F', color: 'rgba(240,234,255,0.5)' }}>Select enquiry type</option>
              <option value="venue" style={{ backgroundColor: '#12081F', color: '#F0EAFF' }}>Venue Placement (Model A)</option>
              <option value="franchise" style={{ backgroundColor: '#12081F', color: '#F0EAFF' }}>Franchise Enquiry (Model B)</option>
              <option value="press" style={{ backgroundColor: '#12081F', color: '#F0EAFF' }}>Press &amp; Media</option>
              <option value="other" style={{ backgroundColor: '#12081F', color: '#F0EAFF' }}>Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="cmsg" className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(201,168,76,0.7)' }}>Message</label>
            <textarea id="cmsg" name="message" rows={4} placeholder="Tell us about your space, your goals, or your enquiry…"
              className="w-full px-4 py-3 rounded-xl font-sans text-sm text-[#F0EAFF] placeholder:text-[rgba(240,234,255,0.25)] focus:outline-none transition-all duration-200 resize-none"
              style={{ background: 'rgba(107,63,160,0.1)', border: '1px solid rgba(201,168,76,0.15)' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
            />
          </div>
          <div className="md:col-span-2">
            <motion.button type="submit" disabled={submitting}
              whileHover={submitting ? undefined : { scale: 1.02, boxShadow: '0 0 50px rgba(201,168,76,0.5)' }}
              whileTap={submitting ? undefined : { scale: 0.98 }}
              className="w-full py-4 rounded-full font-mono text-sm tracking-widest uppercase font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E0C06A 50%, #C9A84C 100%)', color: '#07060F' }}>
              {submitting ? 'Sending…' : 'Send Enquiry'}
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

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 40% 30%, rgba(107,63,160,0.18) 0%, transparent 65%)' }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-5">
            <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>
              <span className="mr-2">&#10022;</span>About CosmicVend<span className="ml-2">&#10022;</span>
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F0EAFF] text-balance leading-tight max-w-3xl">
              Pause. Breath.
              <br />
              <span className="gold-shimmer">Align.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-xl text-[rgba(240,234,255,0.65)] leading-relaxed max-w-2xl">
              CosmicVend was born from the belief that moments of wellness shouldn&apos;t require a staffed boutique or a convenient schedule. They should be available wherever a person finds themselves — awake, seeking, and ready.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder / Mission */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col gap-6">
            <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>The Mission</p>
            <h2 className="font-serif text-4xl text-[#F0EAFF]">Manifestation, delivered.</h2>
            <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)]">
              The founders of CosmicVend saw the same gap in every premium venue they visited: a growing guest desire for intentional wellness, and absolutely nothing to meet it beyond 11pm. No staffed crystal shop. No manifestation gifting. No pause, breath, or alignment.
            </p>
            <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)]">
              So they built a machine that could. A beautiful smart vending experience, operating around the clock, curating five worlds of spiritual energy — each box as considered as the guest who chooses it.
            </p>
            <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)]">
              CosmicVend is a first-mover in spiritual wellness vending. The category is open. The timing is perfect. The only question is which venues lead.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'rgba(201,168,76,0.4)' }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.5)' }}>Pause · Breath · Align</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
            <Image src="/images/machine-lobby.png" alt="CosmicVend machine in a luxury hotel lobby" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to top, rgba(7,6,15,0.6) 0%, transparent 60%)', border: '1px solid rgba(201,168,76,0.15)' }} />
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glassmorphism rounded-3xl p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(76,175,120,0.07) 0%, transparent 60%)' }} />
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-64 lg:h-72 rounded-2xl overflow-hidden">
              <Image src="/images/seedball-sustainability.png" alt="A tiny seedball sprouting from soil, representing CosmicVend's sustainability initiative" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col gap-5">
              <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#4CAF78' }}><span className="mr-2">&#10022;</span>Sustainability</p>
              <h2 className="font-serif text-4xl text-[#F0EAFF]">Every box plants a tree.</h2>
              <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)]">
                Every CosmicVend box contains a handcrafted tree seedball — a compressed sphere of clay, compost, and indigenous tree seeds. Plant it in soil, water it, and watch it grow.
              </p>
              <p className="font-sans text-base leading-relaxed text-[rgba(240,234,255,0.65)]">
                It&apos;s the most tangible expression of the CosmicVend ethos: every manifestation should leave the world slightly more alive than it found it.
              </p>
              <p className="font-sans text-sm text-[rgba(240,234,255,0.4)] italic">
                The seedball initiative is a core part of the guest experience — not a footnote.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Next Steps<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Choose your path.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextSteps.map((ns, i) => (
              <motion.div key={ns.path} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }}
                className="glassmorphism rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden"
                style={{ border: `1px solid ${ns.color}25` }}>
                <div>
                  <span className="font-mono text-xs tracking-widest uppercase px-2 py-1 rounded" style={{ background: `${ns.color}15`, color: ns.color }}>{ns.tag}</span>
                  <h3 className="font-serif text-2xl text-[#F0EAFF] mt-3">{ns.path}</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {ns.steps.map((step) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <span className="font-mono text-2xl font-light flex-shrink-0 mt-0.5" style={{ color: `${ns.color}50` }}>{step.num}</span>
                      <div>
                        <p className="font-serif text-lg text-[#F0EAFF] mb-1">{step.title}</p>
                        <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,255,0.6)]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#contact">
                  <motion.button whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${ns.color}40` }} whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-full font-mono text-sm tracking-widest uppercase font-semibold mt-auto"
                    style={{ background: `linear-gradient(135deg, ${ns.color}, ${ns.color}cc)`, color: '#07060F' }}>
                    {ns.cta}
                  </motion.button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section id="press" className="relative z-10 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glassmorphism rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>Press &amp; Media</p>
              <p className="font-sans text-base text-[rgba(240,234,255,0.7)]">Journalists, podcasters, and media partners — our press kit is available on request.</p>
            </div>
            <a href="#contact">
              <motion.button whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(201,168,76,0.3)' }} whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full font-mono text-sm tracking-widest uppercase font-medium border transition-all duration-300 flex-shrink-0"
                style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#C9A84C' }}>
                Request Press Kit
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#C9A84C' }}><span className="mr-2">&#10022;</span>Get in Touch<span className="ml-2">&#10022;</span></p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F0EAFF]">Let&apos;s begin.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
