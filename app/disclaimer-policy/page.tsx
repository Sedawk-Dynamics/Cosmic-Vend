import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'

export const metadata: Metadata = {
  title: 'Disclaimer Policy | CosmicVend',
  description:
    'The Disclaimer Policy governing use of the CosmicVend website, operated by Hallow Essentials LLP.',
}

type Section = { title?: string; paras: string[] }

const SECTIONS: Section[] = [
  {
    title: '1. General Disclaimer',
    paras: [
      `This Disclaimer Policy (“Disclaimer”) governs the use of the website operated by Hallow Essentials LLP, a limited liability partnership incorporated under the Limited Liability Partnership Act, 2008, bearing LLPIN ACY-6204, having its registered office at 57/18, Sattanayakan Street, Tiruvannamalai, Tamil Nadu – 606601, operating under the brand name “CosmicVend” (“Company”, “We”, “Us”, or “Our”).`,
      `By accessing or using the Platform, You acknowledge that You have read, understood, and agree to be bound by this Disclaimer in addition to the Terms of Use and Privacy Policy.`,
    ],
  },
  {
    title: '2. Information Only',
    paras: [
      `a) The information, descriptions, photographs, illustrations, videos, graphics, marketing material, business models, franchise information, venue placement information, technology descriptions, sustainability initiatives, guest experience descriptions, and all other Content made available on the Platform are provided solely for general informational and promotional purposes.`,
      `b) Nothing contained on the Platform shall constitute legal advice, financial advice, investment advice, tax advice, business advice, professional advice, or any recommendation upon which reliance should be placed without obtaining independent professional advice.`,
    ],
  },
  {
    title: '3. No Offer or Contract',
    paras: [
      `a) The Platform does not constitute an offer capable of acceptance, a binding proposal, or a legally enforceable commitment by the Company.`,
      `b) Submission of any enquiry, request for a site walk, franchise application, discovery call request, venue placement enquiry, or any other communication through the Platform shall merely constitute an expression of interest and shall not create any contractual relationship between the User and the Company.`,
      `c) Any commercial relationship shall arise only upon execution of definitive written agreements by the Company.`,
    ],
  },
  {
    title: '4. No Guarantee of Acceptance',
    paras: [
      `The Company reserves the absolute discretion to approve, reject, defer, or discontinue any enquiry, venue placement request, franchise application, partnership proposal, or business opportunity without assigning any reasons.`,
      `Submission of an enquiry does not guarantee:`,
      `a) franchise approval;`,
      `b) territory allocation;`,
      `c) venue selection;`,
      `d) commercial engagement;`,
      `e) business partnership; or`,
      `f) execution of any agreement.`,
    ],
  },
  {
    title: '5. Franchise and Business Information',
    paras: [
      `a) All franchise-related information, business models, investment structures, revenue illustrations, margins, royalty structures, operational examples, financial projections, and commercial information displayed on the Platform are indicative in nature unless expressly agreed otherwise in writing.`,
      `b) Actual investment requirements, commercial terms, margins, operational costs, and profitability may vary depending upon territory, market conditions, commercial negotiations, operating expenses, taxation, regulatory requirements, and other business considerations.`,
      `c) The Company does not warrant or guarantee any particular financial return, profitability, business success, revenue, customer footfall, or commercial performance.`,
    ],
  },
  {
    title: '6. Venue Placement Disclaimer',
    paras: [
      `a) Information relating to venue partnerships, revenue-sharing arrangements, machine placement models, and operational support is provided solely for informational purposes.`,
      `b) Placement of a CosmicVend machine is subject to the Company’s internal evaluation criteria, commercial feasibility, technical suitability, location assessment, availability, and execution of definitive agreements.`,
      `c) The Company reserves the right to decline any proposed venue at its sole discretion.`,
    ],
  },
  {
    title: '7. Product and Guest Experience Disclaimer',
    paras: [
      `a) Descriptions relating to manifestation themes, crystals, affirmations, wellness experiences, sustainability initiatives, and curated products are intended to describe the Company’s product offerings and customer experience.`,
      `b) Such descriptions are not intended to diagnose, treat, cure, prevent, or manage any medical, psychological, psychiatric, or health condition.`,
      `c) Users should not rely upon any wellness-related content on the Platform as medical advice and should consult qualified healthcare professionals where appropriate.`,
    ],
  },
  {
    title: '8. Wellness Disclaimer',
    paras: [
      `a) The manifestation themes, affirmations, crystals, wellness experiences, spiritual guidance, sustainability initiatives, and other wellness-related information displayed on the Platform are intended solely for personal inspiration, lifestyle enhancement, and general wellness purposes.`,
      `b) Such information does not constitute medical advice, psychiatric advice, psychological advice, diagnosis, treatment, or healthcare services.`,
      `c) The Company does not guarantee any physical, emotional, spiritual, financial, or psychological outcomes arising from the use of its products or services.`,
      `d) Users should seek advice from qualified professionals wherever appropriate.`,
    ],
  },
  {
    title: '9. Sustainability Initiatives',
    paras: [
      `a) Information regarding seedball distribution, tree planting initiatives, environmental programmes, or sustainability efforts reflects the Company’s initiatives at the relevant time.`,
      `b) The Company does not warrant or guarantee the successful germination, growth, survival, or environmental impact of any seedball distributed through its products, as such outcomes depend upon environmental conditions and user handling beyond the Company’s control.`,
    ],
  },
  {
    title: '10. Technology Disclaimer',
    paras: [
      `a) Descriptions of machine specifications, cloud dashboards, remote monitoring, digital experiences, QR journeys, astrology modules, personalised recommendations, roadmap features, or other technological capabilities are subject to continuous development and improvement.`,
      `b) The Company reserves the right to modify, discontinue, postpone, replace, or enhance any feature without prior notice.`,
      `c) Future features described on the Platform represent the Company’s present vision and shall not constitute contractual commitments unless expressly agreed in writing.`,
    ],
  },
  {
    title: '11. Accuracy of Information',
    paras: [
      `a) While reasonable efforts are made to ensure that the information available on the Platform is accurate, complete, and current, the Company makes no representations or warranties regarding the completeness, reliability, suitability, accuracy, or availability of any information displayed.`,
      `b) Users should independently verify any information before making commercial, financial, or business decisions.`,
    ],
  },
  {
    title: '12. Third-Party Content',
    paras: [
      `a) The Platform may contain references to third-party products, technologies, payment gateways, service providers, or external websites.`,
      `b) Such references are provided only for user convenience and shall not constitute endorsement or recommendation by the Company.`,
      `c) The Company assumes no responsibility for the content, availability, policies, or practices of third-party websites or services.`,
    ],
  },
  {
    title: '13. Availability of Platform',
    paras: [
      `a) The Company does not warrant that the Platform will always remain uninterrupted, secure, error-free, or free from viruses, malware, cyber-attacks, or other harmful components.`,
      `b) The Company may suspend, modify, restrict, or discontinue access to the Platform at any time without prior notice.`,
      `c) Users access and use the Platform entirely at their own risk.`,
    ],
  },
  {
    title: '14. Limitation of Liability',
    paras: [
      `To the fullest extent permitted under Applicable Laws, the Company shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising out of or relating to:`,
      `a) access to or use of the Platform;`,
      `b) inability to access the Platform;`,
      `c) reliance upon information contained on the Platform;`,
      `d) interruption or suspension of services;`,
      `e) technical failures;`,
      `f) inaccuracies or omissions in the Content;`,
      `g) unauthorised access to data;`,
      `h) business decisions made by Users; or`,
      `i) any acts or omissions of third parties.`,
    ],
  },
  {
    title: '15. No Warranties',
    paras: [
      `a) The Platform and all Content are provided on an “as is” and “as available” basis without warranties of any kind, whether express, implied, statutory, or otherwise.`,
      `b) The Company expressly disclaims all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, uninterrupted availability, and accuracy.`,
    ],
  },
  {
    title: '16. Survival',
    paras: [
      `The provisions relating to disclaimers, limitation of liability, intellectual property, indemnity, governing law, dispute resolution, and any other provisions which by their nature are intended to survive shall continue to remain in force notwithstanding the termination of the User’s access to the Platform or termination of the Terms of Use.`,
    ],
  },
]

export default function DisclaimerPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      <article className="relative z-10 mx-auto max-w-4xl px-6 pt-36 pb-24">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#C9A84C]">
          <span className="mr-2">&#10022;</span>Legal<span className="ml-2">&#10022;</span>
        </p>
        <h1 className="mb-3 font-serif text-4xl md:text-5xl text-[#F0EAFF]">Disclaimer Policy</h1>
        <p className="font-sans text-sm text-[rgba(240,234,255,0.5)]">Posted as of 08-07-2026</p>
        <p className="mb-10 font-sans text-sm text-[rgba(240,234,255,0.5)]">
          Last updated as of 08-07-2026
        </p>

        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        {SECTIONS.map((section) => (
          <section key={section.title} className="mt-12 first:mt-0">
            {section.title && (
              <h2 className="mb-5 font-serif text-2xl text-[#F0EAFF]">{section.title}</h2>
            )}
            {section.paras.map((p, i) => (
              <p
                key={i}
                className="mb-4 font-sans text-[15px] leading-relaxed text-[rgba(240,234,255,0.72)]"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>

      <Footer />
    </div>
  )
}
