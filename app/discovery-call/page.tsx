import { BookingForm } from "@/components/booking-form"

export default function DiscoveryCallPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
        <div className="container mx-auto px-4 text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#7ed957]/20 text-[#024288] text-sm font-medium mb-6">
            <span className="animate-pulse-gentle">💚</span>
            Your transformation begins here
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">Free Discovery Call</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A gentle 30-minute conversation to explore how coaching can support your journey
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </main>
  )
}
