import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

type Entry = { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }

const ROUTES: Entry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/partner', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/experience', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/technology', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/experience/peace', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/experience/abundance', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/experience/gratitude', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/experience/prosperity', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/experience/self-love', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/disclaimer-policy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
