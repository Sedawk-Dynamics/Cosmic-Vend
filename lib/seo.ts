import type { Metadata } from 'next'

/**
 * Single source of truth for site-wide SEO.
 * Change SITE_URL if the production domain differs.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://cosmicvend.com'

export const SITE_NAME = 'CosmicVend'
export const SITE_TAGLINE = 'Pause | Breath | Align'
export const DEFAULT_OG_IMAGE = '/images/hero-machine.png'

/** Core brand + category keywords carried on every page. */
export const CORE_KEYWORDS = [
  'CosmicVend',
  'cosmic vending machine',
  'spiritual wellness vending machine',
  'smart wellness vending',
  'mindfulness vending machine',
  'meditation vending machine',
  'wellness amenity for hotels',
  'guest experience amenity',
  'passive income vending',
  'wellness franchise opportunity',
  'sacred ritual kits',
  'manifestation products',
]

/** Longer-tail intent phrases — used on commercial pages. */
export const PARTNER_KEYWORDS = [
  'vending machine revenue share',
  'hotel lobby amenity ideas',
  'spa wellness retail solution',
  'yoga studio revenue stream',
  'co-working wellness perks',
  'zero staffing retail amenity',
  'premium venue partnership program',
  'wellness vending machine for business',
]

export const EXPERIENCE_KEYWORDS = [
  'guided meditation experience',
  'healing frequency music',
  'daily affirmations ritual',
  'crystal ritual kit',
  'gratitude practice',
  'abundance manifestation',
  'self-love ritual',
  'inner peace meditation timer',
]

type PageSeoInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

/** Build a fully-formed, canonicalised Metadata object for a page. */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    keywords: [...new Set([...CORE_KEYWORDS, ...keywords])],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
