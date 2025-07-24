import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCTA } from "@/components/contact-cta"
import { TransformationStories } from "@/components/transformation-stories"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <TransformationStories />
      <TestimonialsSection />
      <ContactCTA />
    </main>
  )
}
