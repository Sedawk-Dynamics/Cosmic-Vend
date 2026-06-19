import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'
import HeroSection from '@/components/hero-section'
import OpportunitySection from '@/components/opportunity-section'
import ThemesStrip from '@/components/themes-strip'
import StatsBand from '@/components/stats-band'
import PartnerModelsTeaser from '@/components/partner-models-teaser'
import CtaBand from '@/components/cta-band'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBand />
        <OpportunitySection />
        <ThemesStrip />

        <PartnerModelsTeaser />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
