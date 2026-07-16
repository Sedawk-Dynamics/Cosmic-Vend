import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CosmicVend — Pause | Breath | Align',
  description:
    'A revenue-generating spiritual wellness amenity for premium venues. Partner with CosmicVend to bring curated sacred experiences to your guests — zero staffing, always on.',
  keywords: [
    'spiritual wellness vending',
    'hotel amenity',
    'wellness revenue share',
    'smart vending franchise',
    'CosmicVend',
  ],
  openGraph: {
    title: 'CosmicVend — Pause | Breath | Align',
    description:
      'A revenue-generating wellness amenity for your space. Smart spiritual vending — zero effort, premium returns.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${spaceGrotesk.variable} bg-[#07060F]`}
    >
      <body className="antialiased bg-[#07060F] text-[#F0EAFF]">{children}</body>
    </html>
  )
}
