import { LegalHero } from "@/components/legal-hero"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <LegalHero title="Privacy Policy" />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you book a discovery call, sign up for our
              newsletter, or contact us for coaching services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our coaching services, communicate
              with you, and send you updates about our programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#024288] mb-4">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at hello@sukainapasha.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
