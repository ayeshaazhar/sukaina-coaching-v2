"use client"

interface LegalHeroProps {
  title: string
}

export function LegalHero({ title }: LegalHeroProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">{title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Transparency and trust are the foundation of our coaching relationship
          </p>
        </div>
      </div>
    </section>
  )
}
