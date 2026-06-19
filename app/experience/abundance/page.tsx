import type { Metadata } from 'next'
import WorldExperience from '@/components/WorldExperience'
import { WORLDS } from '@/lib/worlds'

const world = WORLDS.abundance

export const metadata: Metadata = {
  title: world.metaTitle,
  description: world.metaDescription,
  keywords: world.keywords,
  openGraph: {
    title: `${world.title} — ${world.subtitle}`,
    description: 'An immersive cosmic meditation experience: ambient frequency, affirmations, and a guided timer.',
    type: 'website',
  },
}

export default function AbundancePage() {
  return <WorldExperience config={world} />
}
