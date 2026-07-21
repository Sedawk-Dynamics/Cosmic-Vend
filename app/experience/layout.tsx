import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'The Experience — Five Worlds of Guided Ritual',
  description:
    'Step into Peace, Abundance, Gratitude, Prosperity or Self-Love. Each CosmicVend world pairs a healing frequency, a spoken affirmation and a guided timer with a physical ritual kit.',
  path: '/experience',
  keywords: [
    ...EXPERIENCE_KEYWORDS,
    'online guided meditation worlds',
    'free meditation timer',
    'ritual kit experience',
    'sound healing frequencies online',
  ],
  image: '/images/ritual-crystal.png',
})

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children
}
