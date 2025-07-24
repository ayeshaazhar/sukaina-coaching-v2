"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Heart, Sparkles } from "lucide-react"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is a discovery call and what can I expect?",
        answer:
          "A discovery call is a gentle, 30-minute conversation where we explore your current situation, discuss your goals, and see if coaching feels like the right fit for you. There's no pressure - it's simply a safe space to share what's on your heart and learn how I might support your journey.",
      },
      {
        question: "How do I know if coaching is right for me?",
        answer:
          "Coaching is perfect if you're feeling stuck, overwhelmed, or ready for change but unsure how to move forward. If you're navigating a life transition, questioning your path, or seeking to rediscover your authentic self, coaching can provide the gentle guidance and support you need.",
      },
      {
        question: "What's the difference between coaching and therapy?",
        answer:
          "While therapy often focuses on healing past wounds, coaching is forward-focused on creating the future you desire. As your coach, I'll help you clarify your vision, overcome obstacles, and take aligned action toward your goals. If you need therapeutic support, I'm happy to provide referrals.",
      },
    ],
  },
  {
    category: "The Coaching Process",
    questions: [
      {
        question: "How long does a coaching program typically last?",
        answer:
          "Most transformation journeys take 3-8 months, depending on your goals and the depth of change you're seeking. We'll discuss the ideal timeline during your discovery call based on your specific situation and desired outcomes.",
      },
      {
        question: "How often do we meet and for how long?",
        answer:
          "We typically meet weekly or bi-weekly for 60-minute sessions. This frequency allows for deep exploration while giving you time to integrate insights and take action between sessions. We can adjust the schedule based on your needs and preferences.",
      },
      {
        question: "What happens between our sessions?",
        answer:
          "Between sessions, you'll have reflection exercises, gentle action steps, and sometimes journaling prompts to deepen your insights. I'm also available via email for quick questions or support as you navigate your transformation journey.",
      },
    ],
  },
  {
    category: "Investment & Logistics",
    questions: [
      {
        question: "What are your coaching fees?",
        answer:
          "Investment varies based on the program length and your specific needs. We'll discuss options during your discovery call to find an approach that feels aligned with your goals and budget. Payment plans are available to make coaching accessible.",
      },
      {
        question: "Do you offer sessions online or in-person?",
        answer:
          "I offer both online sessions (via Zoom) and in-person sessions for clients in the Toronto area. Online coaching is just as effective and allows us to work together regardless of your location. Many of my clients are global.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "Life happens, and I understand that. Sessions can be rescheduled with 24-hour notice. Cancellations with less notice may be subject to the full session fee, though I'm always willing to discuss special circumstances with compassion.",
      },
    ],
  },
  {
    category: "Results & Expectations",
    questions: [
      {
        question: "What kind of results can I expect?",
        answer:
          "While every journey is unique, clients typically experience greater clarity about their values and direction, increased confidence in decision-making, improved work-life harmony, and a deeper connection to their authentic selves. The key is your commitment to the process.",
      },
      {
        question: "What if I don't see results?",
        answer:
          "Transformation takes time and commitment from both of us. If you're not seeing progress, we'll explore what might need to shift in our approach. I'm committed to your success and will work with you to find the path that serves you best.",
      },
      {
        question: "Do you guarantee specific outcomes?",
        answer:
          "While I can't guarantee specific outcomes (as transformation is a co-creative process), I can promise to show up fully present, provide expert guidance, and support you with compassion and skill. Your results depend on your openness and commitment to the process.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ed957]/10 text-[#024288] text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-[#7ed957] animate-pulse-gentle" />
              Your questions answered
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Everything you need to know about starting your transformation journey
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-[#7ed957]" />
                  <h3 className="text-xl font-medium text-[#024288]">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card
                        key={questionIndex}
                        className="border-0 shadow-soft rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300"
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 rounded-2xl transition-colors duration-200"
                          >
                            <span className="font-medium text-[#024288] pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#0166d2] transition-transform duration-300 flex-shrink-0 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-gradient-to-br from-[#7ed957]/10 to-[#0166d2]/5 rounded-3xl">
            <h3 className="text-xl font-medium text-[#024288] mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-6">
              I'd love to connect and answer any questions you have about coaching or your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/discovery-call"
                className="inline-flex items-center gap-2 bg-[#0166d2] hover:bg-[#7ed957] text-white px-6 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-glow"
              >
                <Heart className="w-4 h-4" />
                Book a Discovery Call
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#0166d2]/30 text-[#0166d2] hover:bg-[#0166d2] hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
