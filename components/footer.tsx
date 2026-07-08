import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Guest Experience', href: '/experience' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <CosmicVendLogo />

            <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-xs mt-2">
              A B2B spiritual wellness vending platform bringing curated manifestation
              experiences to premium venues.
            </p>
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

          {/* Contact */}
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
