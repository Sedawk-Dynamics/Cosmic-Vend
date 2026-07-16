import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Guest Experience', href: '/experience' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cosmicvend/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cosmicvend/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'X',
    href: 'https://x.com/cosmicvend',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/cosmicvend/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
]

function CosmicVendLogo() {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="CosmicVend home"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXWS04aukEHorxPqnWN84vsHPesOS5.png"
        alt="CosmicVend"
        height={70}
        width={280}
        priority
        className="object-contain"
      />
    </Link>
  )
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-gray-500 hover:text-[#C9A84C] transition-colors duration-200"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-gray-200">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <CosmicVendLogo />

            <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-xs mt-2">
              A B2B spiritual wellness vending platform bringing curated manifestation
              experiences to premium venues.
            </p>

            <div className="mt-2">
              <p className="font-mono text-xs tracking-widest uppercase text-[#C9A84C] mb-3">
                Follow Us
              </p>
              <SocialIcons />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
              Navigation
            </p>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Partner Enquiries */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
              Partner Enquiries
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/partner#enquiry"
                className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
              >
                Venue Placement Enquiry
              </Link>

              <Link
                href="/partner#enquiry"
                className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
              >
                Franchise Discovery Call
              </Link>

              <Link
                href="/about#press"
                className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
              >
                Press &amp; Media Kit
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#C9A84C] mb-5">
              Contact
            </p>

            <address className="not-italic flex flex-col gap-3">
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                57/18 Sattanayakan Street
                <br />
                Tiruvannamalai
                <br />
                Tamil Nadu &ndash; 606601
              </p>

              <p className="font-sans text-sm text-gray-600">
                Phone:{' '}
                <a
                  href="tel:+918870457089"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  +91 8870457089
                </a>
              </p>

              <p className="font-sans text-sm text-gray-600">
                Email:{' '}
                <a
                  href="mailto:info@cosmicvend.com"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  info@cosmicvend.com
                </a>
              </p>

              <p className="font-sans text-sm text-gray-600">
                Careers:{' '}
                <a
                  href="mailto:hr@cosmicvend.com"
                  className="hover:text-[#C9A84C] transition-colors duration-200"
                >
                  hr@cosmicvend.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        {/* Legal */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/terms-of-use"
            className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
          >
            Terms of Use
          </Link>

          <Link
            href="/privacy-policy"
            className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
          >
            Privacy Policy
          </Link>

          <Link
            href="/cookie-policy"
            className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
          >
            Cookie Policy
          </Link>

          <Link
            href="/disclaimer-policy"
            className="font-sans text-sm text-gray-600 hover:text-[#C9A84C] transition-colors duration-200"
          >
            Disclaimer Policy
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-500 tracking-wide">
            &copy; {new Date().getFullYear()} CosmicVend. All rights reserved.
          </p>

          <p className="font-mono text-xs text-gray-400 tracking-wide text-center">
            Confidential &mdash; B2B partner &amp; franchisee information only
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[#C9A84C] text-sm">&#10022;</span>

            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">
              CosmicVend
            </span>

            <span className="text-[#C9A84C] text-sm">&#10022;</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
