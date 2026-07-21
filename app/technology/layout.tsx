import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'The Technology — Smart, Connected, Self-Managing',
  description:
    'Inside the CosmicVend machine: cashless payments, real-time inventory telemetry, remote content updates and a touch-guided ritual interface. Built to run itself.',
  path: '/technology',
  keywords: [
    'smart vending machine technology',
    'cashless vending payments',
    'IoT vending telemetry',
    'remote inventory monitoring',
    'touchscreen vending interface',
    'automated retail technology',
  ],
})

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
