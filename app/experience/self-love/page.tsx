import type { Metadata } from 'next'
import { EXPERIENCE_KEYWORDS, pageMetadata } from '@/lib/seo'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS['self-love']

export const metadata: Metadata = pageMetadata({
  title: `${world.title} — ${world.subtitle}`,
  description: world.metaDescription,
  path: '/experience/self-love',
  keywords: [...world.keywords, ...EXPERIENCE_KEYWORDS],
  image: '/images/theme-selflove.png',
})

export default function SelfLovePage() {
  return <WorldExperience config={world} />
}
