'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 24, suffix: '/7', label: 'Always On', desc: 'Round-the-clock revenue, zero staffing required' },
  { value: 0, suffix: '', label: 'Investment for Venues', desc: 'Model A requires zero capital from the venue' },
  { value: 5, suffix: '', label: 'Sacred Themes', desc: 'Seasonally rotating, endlessly collectible' },
  { value: 100, suffix: '%', label: 'Cashless & Cloud-Monitored', desc: 'UPI, cards, wallets — all reconciled live' },
]

export default function StatsBand() {
  return (
    <section
      className="relative z-10 py-20"
      style={{
        background: 'linear-gradient(135deg, rgba(107,63,160,0.25) 0%, rgba(7,6,15,0.95) 50%, rgba(201,168,76,0.12) 100%)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        backgroundColor: '#0D0A1E',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center flex flex-col items-center gap-2"
            >
              <span
                className="font-serif text-5xl md:text-6xl font-light"
                style={{ color: '#C9A84C' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-xs tracking-widest uppercase text-[rgba(240,234,255,0.5)]">
                {stat.label}
              </span>
              <p className="font-sans text-sm text-[rgba(240,234,255,0.4)] text-center max-w-[180px] leading-snug">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
