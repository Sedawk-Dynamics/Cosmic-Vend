'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

/** [frequencyHz, relativeGain] layers that form the drone chord. */
type Partial = [number, number]

interface AudioPlayerProps {
  /**
   * Sine layers that make up the ambient pad. Default is the Abundance
   * tuning — an 888 Hz harmonic family (222 = 888/4, 444 = 888/2, 888 shimmer).
   */
  partials?: Partial[]
  /** Master volume after fade-in (0–1). Kept low for an ambient bed. */
  volume?: number
  /** localStorage key for persisting the mute preference. */
  storageKey?: string
  /** Hide the floating controls until the experience has been entered. */
  controlsVisible?: boolean
}

const ABUNDANCE_PARTIALS: Partial[] = [
  [222, 0.5], // warm root
  [333, 0.26], // perfect fifth above the root
  [444, 0.16], // octave
  [888, 0.05], // faint high shimmer (the displayed frequency)
]

/**
 * Procedurally-synthesised ambient drone (Web Audio API) — no audio asset
 * required. Layered detuned sines through a low-pass, with a slow "breathing"
 * swell on the master gain.
 *
 *  - autoplay on first user gesture (browser-compliant)
 *  - smooth fade-in / fade-out
 *  - play/pause + mute floating glass controls (bottom-right)
 *  - mute preference persisted to localStorage
 */
export default function AudioPlayer({
  partials = ABUNDANCE_PARTIALS,
  volume = 0.14,
  storageKey = 'cv-experience-muted',
  controlsVisible = true,
}: AudioPlayerProps) {
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const builtRef = useRef(false)
  const mutedRef = useRef(false)

  const [muted, setMuted] = useState(false)
  const [supported, setSupported] = useState(true)

  // restore persisted mute preference
  useEffect(() => {
    try {
      const v = localStorage.getItem(storageKey) === 'true'
      setMuted(v)
      mutedRef.current = v
    } catch {
      /* ignore */
    }
  }, [storageKey])

  const rampTo = useCallback((target: number, seconds: number) => {
    const ctx = ctxRef.current
    const master = masterRef.current
    if (!ctx || !master) return
    const now = ctx.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.setValueAtTime(Math.max(0.0001, master.gain.value), now)
    master.gain.setTargetAtTime(Math.max(0.0001, target), now, seconds / 3)
  }, [])

  const build = useCallback(() => {
    if (builtRef.current) return
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext
    if (!Ctx) {
      setSupported(false)
      return
    }

    const ctx = new Ctx()
    const master = ctx.createGain()
    master.gain.value = 0.0001
    master.connect(ctx.destination)

    // gentle low-pass for warmth
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 1100
    lp.Q.value = 0.5
    lp.connect(master)

    // layered detuned sines
    partials.forEach(([freq, gain], i) => {
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = freq

      const og = ctx.createGain()
      og.gain.value = gain

      // slow detune shimmer so the pad never sits perfectly still
      const lfo = ctx.createOscillator()
      lfo.frequency.value = 0.05 + i * 0.013
      const lfoGain = ctx.createGain()
      lfoGain.gain.value = 1.6
      lfo.connect(lfoGain)
      lfoGain.connect(osc.detune)
      lfo.start()

      osc.connect(og)
      og.connect(lp)
      osc.start()
    })

    // ~10s inhale/exhale swell on the master gain
    const breath = ctx.createOscillator()
    breath.frequency.value = 0.1
    const breathGain = ctx.createGain()
    breathGain.gain.value = 0.035
    breath.connect(breathGain)
    breathGain.connect(master.gain)
    breath.start()

    ctxRef.current = ctx
    masterRef.current = master
    builtRef.current = true
  }, [partials])

  const start = useCallback(() => {
    build()
    const ctx = ctxRef.current
    if (!ctx) return
    void ctx.resume()
    rampTo(mutedRef.current ? 0.0001 : volume, 2.6)
  }, [build, rampTo, volume])

  // Autoplay after the first interaction anywhere on the page.
  // Mobile browsers (notably iOS Safari) only unlock/resume a Web Audio context
  // on a `click`/`touchend` gesture — never on `pointerdown`/`touchstart`. So we
  // listen across all valid gesture types and keep retrying until the context is
  // actually `running`, only then removing the listeners.
  useEffect(() => {
    let removed = false
    const events = ['pointerdown', 'touchend', 'click', 'keydown'] as const
    const remove = () => {
      if (removed) return
      removed = true
      events.forEach((e) => window.removeEventListener(e, kick))
    }
    const kick = () => {
      start()
      const ctx = ctxRef.current
      if (!ctx) return
      void ctx.resume().then(() => {
        if (ctx.state === 'running') remove()
      })
    }
    events.forEach((e) => window.addEventListener(e, kick))
    return remove
  }, [start])

  // release the audio context on unmount
  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {})
      ctxRef.current = null
      masterRef.current = null
      builtRef.current = false
    }
  }, [])

  // Single control: turn the ambient drone on / off.
  // Off → fade out then suspend the audio context (truly stops the sound).
  // On  → resume (or build) and fade back in.
  const toggleSound = () => {
    const next = !muted
    setMuted(next)
    mutedRef.current = next
    try {
      localStorage.setItem(storageKey, String(next))
    } catch {
      /* ignore */
    }

    const ctx = ctxRef.current
    if (next) {
      rampTo(0.0001, 0.4)
      window.setTimeout(() => ctx?.suspend().catch(() => {}), 450)
    } else if (!builtRef.current) {
      start()
    } else {
      void ctx?.resume()
      rampTo(volume, 0.6)
    }
  }

  if (!supported || !controlsVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <ControlButton onClick={toggleSound} label={muted ? 'Turn sound on' : 'Turn sound off'}>
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </ControlButton>
    </motion.div>
  )
}

function ControlButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="glassmorphism flex h-12 w-12 items-center justify-center rounded-full text-(--world-accent) transition-colors hover:text-(--world-accent-light)"
    >
      {children}
    </motion.button>
  )
}
