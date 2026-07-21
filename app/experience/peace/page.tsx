import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS.peace

export const metadata: Metadata = pageMetadata({
  title: `${world.title} — ${world.subtitle}`,
  description: world.metaDescription,
  path: '/experience/peace',
  keywords: [...world.keywords, ...EXPERIENCE_KEYWORDS],
  image: '/images/theme-peace.png',
})

export default function PeacePage() {
  return <WorldExperience config={world} />
}
