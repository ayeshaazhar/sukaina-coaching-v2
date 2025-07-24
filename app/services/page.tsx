import { ServicesHero } from "@/components/services-hero"
import { CoachingServices } from "@/components/coaching-services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <CoachingServices />
    </main>
  )
}
