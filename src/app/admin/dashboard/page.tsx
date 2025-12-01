import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'
import { ServiceShowcase } from '@/components/sections/ServiceShowcase'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Premier Acquisition Intelligence Platform | Dericho Morris Consultancy',
  description: 'SaaS platform delivering institutional-grade due diligence, growth roadmaps, and exit strategies for discerning investors, private equity firms, and family offices.',
  openGraph: {
    title: 'Premier Acquisition Intelligence Platform',
    description: 'SaaS platform delivering institutional-grade due diligence, growth roadmaps, and exit strategies.',
    images: ['/images/og-home.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <ServiceShowcase />
      <CTA />
    </>
  )
}