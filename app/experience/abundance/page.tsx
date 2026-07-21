import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS.abundance

export const metadata: Metadata = pageMetadata({
  title: `${world.title} — ${world.subtitle}`,
  description: world.metaDescription,
  path: '/experience/abundance',
  keywords: [...world.keywords, ...EXPERIENCE_KEYWORDS],
  image: '/images/theme-abundance.png',
})

export default function AbundancePage() {
  return <WorldExperience config={world} />
}
