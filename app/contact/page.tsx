// import { ContactHero } from "@/components/contact-hero"
import { BookingForm } from "@/components/booking-form"
import { Contact } from "@/components/contact"
// import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className=" mx-auto px-4 containerpy-16">
            <div className="min-h-screen bg-background">

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
            <Contact />
          {/* <BookingForm /> */}
        </div>
      </div>
    </main>
  )
}
