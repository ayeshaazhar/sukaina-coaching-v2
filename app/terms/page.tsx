import { LegalHero } from "@/components/legal-hero"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <LegalHero title="Terms of Use" />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Coaching Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our coaching services are designed to support your personal growth and transformation. Results may vary
              and are dependent on your commitment to the process.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Cancellation Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Sessions can be rescheduled with 24-hour notice. Cancellations with less than 24-hour notice may be
              subject to full session fee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Coaching is not therapy or counseling. If you need professional mental health support, we encourage you to
              seek appropriate professional help.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
