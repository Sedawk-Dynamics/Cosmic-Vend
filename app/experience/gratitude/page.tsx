import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS.gratitude

export const metadata: Metadata = pageMetadata({
  title: `${world.title} — ${world.subtitle}`,
  description: world.metaDescription,
  path: '/experience/gratitude',
  keywords: [...world.keywords, ...EXPERIENCE_KEYWORDS],
  image: '/images/theme-gratitude.png',
})

export default function GratitudePage() {
  return <WorldExperience config={world} />
}
