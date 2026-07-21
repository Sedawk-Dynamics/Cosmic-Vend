import type { Metadata } from 'next'
import { PARTNER_KEYWORDS, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Partner With Us — Turn Idle Space Into Wellness Revenue',
  description:
    'Host a CosmicVend machine in your hotel, spa, studio or co-working space. Revenue share or outright purchase, zero staffing, full restocking and analytics included. Apply to partner today.',
  path: '/partner',
  keywords: [
    ...PARTNER_KEYWORDS,
    'become a CosmicVend partner',
    'wellness vending machine placement',
    'passive revenue for hotels',
    'amenity that pays for itself',
  ],
  image: '/images/machine-lobby.png',
})

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return children
}
