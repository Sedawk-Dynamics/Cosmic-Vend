'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

interface NavigationProps {
  href?: string
  label?: string
}

/** Minimal floating back-link, top-left, glassmorphism. */
export default function Navigation({ href = '/', label = 'Back' }: NavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="fixed left-4 top-4 z-50 md:left-6 md:top-6"
    >
      <Link
        href={href}
        className="glassmorphism group flex items-center gap-2 rounded-full px-4 py-2 text-sm text-[#F0EAFF] transition-colors hover:text-(--world-accent-light)"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="font-mono text-xs uppercase tracking-[0.18em]">{label}</span>
      </Link>
    </motion.nav>
  )
}
