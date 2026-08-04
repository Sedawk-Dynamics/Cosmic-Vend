'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Mode = 'down' | 'top' | null

/**
 * A gentle, self-managing scroll control that floats bottom-centre.
 * - While there is more page below the fold it shows a bouncing "scroll down"
 *   chevron so long affirmation pages always signal that content continues.
 * - Once the visitor reaches the end it flips to a "back to top" arrow.
 */
export default function ScrollCue() {
  const [mode, setMode] = useState<Mode>(null)

  useEffect(() => {
    const update = () => {
      const { scrollY, innerHeight } = window
      const docHeight = document.documentElement.scrollHeight
      const remaining = docHeight - (scrollY + innerHeight)

      if (remaining > innerHeight * 0.35) setMode('down')
      else if (scrollY > innerHeight * 0.6) setMode('top')
      else setMode(null)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const t = setTimeout(update, 1400)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      clearTimeout(t)
    }
  }, [])

  const handleClick = () => {
    if (mode === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence mode="wait">
      {mode && (
        <motion.button
          key={mode}
          type="button"
          aria-label={mode === 'top' ? 'Back to top' : 'Scroll down for more'}
          onClick={handleClick}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-(--world-accent) bg-[rgba(7,6,15,0.55)] backdrop-blur-md"
          style={{ boxShadow: '0 0 18px rgba(var(--world-accent-rgb), 0.35)' }}
        >
          <motion.span
            animate={
              mode === 'down'
                ? { y: [0, 5, 0], opacity: [0.55, 1, 0.55] }
                : { y: [0, -5, 0], opacity: [0.55, 1, 0.55] }
            }
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-(--world-accent)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ transform: mode === 'top' ? 'rotate(180deg)' : 'none' }}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
