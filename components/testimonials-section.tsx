"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Sukaina's compassionate guidance helped me navigate the overwhelming transition into motherhood. I rediscovered my identity and learned to balance my ambitions with my new role as a mother.",
    author: "Jennifer Walsh",
    role: "Marketing Director & New Mother",
    location: "Vancouver, Canada",
    rating: 5,
  },
  {
    content:
      "After feeling lost for years despite career success, Sukaina helped me uncover what was truly missing. I now wake up excited about my life and the direction I'm heading.",
    author: "Amanda Chen",
    role: "Corporate Lawyer",
    location: "Singapore",
    rating: 5,
  },
  {
    content:
      "Moving to a new country left me feeling isolated and questioning everything. Through our sessions, I rebuilt my confidence and created a life I love in my new home.",
    author: "Fatima Al-Rashid",
    role: "Software Engineer",
    location: "Dubai, UAE",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("testimonials")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#024288] mb-6">
              What women are saying
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from women who have transformed their lives through coaching
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8 rounded-2xl bg-slate-50/50 border border-slate-200/50 h-full">
                  <div className="space-y-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#7ed957] fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-slate-600 leading-relaxed">{testimonial.content}</blockquote>

                    <div className="space-y-1">
                      <div className="font-semibold text-[#024288]">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
