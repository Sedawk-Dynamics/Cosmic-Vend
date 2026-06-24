'use client'

import { useState, type CSSProperties } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import CosmicBackground from '@/components/CosmicBackground'
import Navigation from '@/components/Navigation'
import AudioPlayer from '@/components/AudioPlayer'
import Hero from '@/components/Hero'
import SacredFrequency from '@/components/SacredFrequency'
import QuoteSection from '@/components/QuoteSection'
import AffirmationCard from '@/components/AffirmationCard'
import type { WorldConfig } from '@/lib/worlds'

const LOGO =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXWS04aukEHorxPqnWN84vsHPesOS5.png'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.34em] text-(--world-accent)">
      <span className="mr-2">&#10022;</span>
      {children}
      <span className="ml-2">&#10022;</span>
    </p>
  )
}

/** Full-screen entry portal — mirrors the original "Begin" ritual gate. */
function BeginPortal({ label, title, onBegin }: { label: string; title: string; onBegin: () => void }) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Begin the ${title} experience`}
      onClick={onBegin}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onBegin()
        }
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 1.1, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center px-6 text-center"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35), rgba(0,0,0,0.72))',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <Image src={LOGO} alt="CosmicVend" width={180} height={48} priority className="mb-7 object-contain opacity-90" />
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-(--world-accent)">{label}</p>
      <h1 className="gold-shimmer mb-10 font-serif text-6xl md:text-7xl">{title}</h1>

      {/* pulsing rings */}
      <div className="relative mb-9 h-36 w-36">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border border-(--world-accent)"
            style={{ inset: -i * 16 }}
            animate={{
              scale: [0.86, 1, 0.86],
              opacity: [0.3 - i * 0.08, 0.6 - i * 0.12, 0.3 - i * 0.08],
            }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em] text-(--world-accent)">
          Begin
        </span>
      </div>

      <motion.p
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="font-mono text-[11px] uppercase tracking-[0.3em] text-[rgba(240,234,255,0.6)]"
      >
        Tap to begin &middot; find a quiet breath
      </motion.p>
    </motion.div>
  )
}

/**
 * A complete immersive "World of Energy" experience, themed entirely from a
 * {@link WorldConfig}. Renders the Begin portal, cosmic background, ambient
 * drone, hero, sacred frequency, verse, six-language affirmations, and a
 * meditation timer.
 */
export default function WorldExperience({ config }: { config: WorldConfig }) {
  const [begun, setBegun] = useState(false)

  const themeVars = {
    '--world-accent': config.accent.hex,
    '--world-accent-light': config.accent.light,
    '--world-accent-dark': config.accent.dark,
    '--world-accent-rgb': config.accent.rgb,
  } as CSSProperties

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#F0EAFF]" style={themeVars}>
      {/* Noto Sans families for the Indic affirmations (hoisted to <head> by Next) */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil&family=Noto+Sans+Telugu&family=Noto+Sans+Malayalam&family=Noto+Sans+Kannada&family=Noto+Sans+Devanagari&display=swap"
      />

      <CosmicBackground accent={config.accent.rgb} glow={config.glowRgb} />

      {/* Ambient drone — synthesised live (no audio file). Starts on first gesture. */}
      <AudioPlayer
        partials={config.tuning}
        storageKey={`cv-${config.slug}-muted`}
        controlsVisible={begun}
      />

      <AnimatePresence>
        {!begun && (
          <BeginPortal key="portal" label={config.label} title={config.title} onBegin={() => setBegun(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {begun && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
          >
            <Navigation href="/about" label="All Worlds" />

            <Hero eyebrow={config.label} title={config.title} subtitle={config.subtitle} />

            {/* Sacred frequency */}
            <section className="relative z-10 px-6 pt-28">
              <SectionLabel>The Tuning</SectionLabel>
              <SacredFrequency hz={config.hz} label={config.freqLabel} caption={config.freqCaption} />
            </section>

            {/* Verse */}
            <section className="relative z-10 px-6 pt-32">
              <QuoteSection quote={config.verse} author={config.verseAuthor} />
            </section>

            {/* Affirmations — six tongues, one intention */}
            <section className="relative z-10 px-6 pt-32">
              <SectionLabel>Affirmation</SectionLabel>
              <div className="mx-auto flex max-w-xl flex-col gap-4">
                {config.affirmations.map((a, i) => (
                  <AffirmationCard key={a.lang} text={a.text} lang={a.lang} indic={a.indic} index={i} />
                ))}
              </div>
            </section>

            {/* closing tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 pb-24 pt-36 text-center font-serif text-sm italic tracking-wide text-[rgba(240,234,255,0.45)]"
            >
              Pause &nbsp;|&nbsp; Breath &nbsp;|&nbsp; Align
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
