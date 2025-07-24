import { FAQSection } from "@/components/faq-section"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about transformation coaching
          </p>
        </div>
      </section>
      <FAQSection />
    </main>
  )
}
