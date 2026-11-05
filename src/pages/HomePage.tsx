import CaseStudies from '../components/CaseStudies'
import FinalCta from '../components/FinalCta'
import Hero from '../components/Hero'
import Hsai from '../components/Hsai'
import Industries from '../components/Industries'
import Integrations from '../components/Integrations'
import Platform from '../components/Platform'
import Pricing from '../components/Pricing'
import RunCta from '../components/RunCta'
import Sacc from '../components/Sacc'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Testimonials />
      <Platform />
      <Hsai />
      <Industries />
      <RunCta />
      <CaseStudies />
      <Sacc />
      <Pricing />
      <Integrations />
      <FinalCta />
    </main>
  )
}
