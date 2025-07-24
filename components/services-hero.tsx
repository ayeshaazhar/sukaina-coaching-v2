"use client"

export function ServicesHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ed957]/10 text-[#024288] text-sm font-medium mb-6">
            <span className="animate-pulse-gentle">🌸</span>
            Transformation pathways
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] leading-tight">
            Coaching Services for
            <br />
            <span className="text-[#0166d2] font-medium">Life Transitions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Gentle, personalized coaching programs designed to support you through life's most significant changes and
            help you create the future you desire.
          </p>
        </div>
      </div>
    </section>
  )
}
