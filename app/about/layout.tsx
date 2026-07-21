import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About CosmicVend — Our Story & Mission',
  description:
    'CosmicVend was built on one belief: a moment of stillness should be within arm’s reach. Meet the mission behind the world’s first spiritual wellness vending experience.',
  path: '/about',
  keywords: [
    'about CosmicVend',
    'spiritual wellness brand story',
    'mindful retail mission',
    'sustainable wellness products',
    'seed ball sustainability',
    'contact CosmicVend',
  ],
  image: '/images/unboxing-moment.png',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
