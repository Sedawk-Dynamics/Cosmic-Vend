import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS.prosperity

export const metadata: Metadata = pageMetadata({
  title: `${world.title} — ${world.subtitle}`,
  description: world.metaDescription,
  path: '/experience/prosperity',
  keywords: [...world.keywords, ...EXPERIENCE_KEYWORDS],
  image: '/images/theme-prosperity.png',
})

export default function ProsperityPage() {
  return <WorldExperience config={world} />
}
