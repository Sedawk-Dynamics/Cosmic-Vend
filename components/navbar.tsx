'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Guest Experience', href: '/experience' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
]

function CosmicVendLogo({
  size = 'md',
}: {
  size?: 'sm' | 'md' | 'lg'
}) {
  const logoWidth =
    size === 'sm' ? 160 : size === 'md' ? 220 : 280

  return (
    <Link
      href="/"
      className="group flex items-center"
      aria-label="CosmicVend home"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXWS04aukEHorxPqnWN84vsHPesOS5.png"
          alt="CosmicVend"
          height={50}
          width={logoWidth}
          priority
          className="object-contain"
        />
      </motion.div>
    </Link>
  )
}

export { CosmicVendLogo }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] =
    useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 30)

    window.addEventListener(
      'scroll',
      onScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
        className="fixed top-5 left-0 right-0 z-50 px-5"
      >
        <div
          className={`mx-auto max-w-[1320px] rounded-full border transition-all duration-500 ${
            scrolled
              ? 'border-black/10 bg-[#FAF8F3]/95 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]'
              : 'border-black/10 bg-[#FAF8F3]/75 backdrop-blur-xl'
          }`}
        >
          <div className="flex h-[90px] items-center justify-between px-8">
            {/* Logo */}
            <CosmicVendLogo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-[13px] font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]/70 transition-all duration-300 hover:text-[#C9A84C]"
                >
                  {link.label}

                  <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/partner#enquiry"
              className="hidden lg:block"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    '0 0 35px rgba(201,168,76,0.25)',
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(135deg,#C9A84C,#E2C76D)',
                  color: '#090412',
                }}
              >
                Become a Partner
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[#1A1A1A]"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >
              {mobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: '100%',
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: '100%',
            }}
            transition={{
              duration: 0.35,
              ease: 'easeInOut',
            }}
            className="fixed inset-0 z-40 bg-[#FAF8F3]/95 backdrop-blur-2xl"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="font-serif text-3xl text-[#1A1A1A] transition-colors hover:text-[#C9A84C]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/partner#enquiry"
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-6 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                  style={{
                    background:
                      'linear-gradient(135deg,#C9A84C,#E2C76D)',
                    color: '#090412',
                  }}
                >
                  Become a Partner
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
