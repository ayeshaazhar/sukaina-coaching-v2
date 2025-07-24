"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Globe, Sparkles, ArrowRight, Clock, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Heart,
    title: "Motherhood Transition Coaching",
    duration: "3-6 months",
    format: "1:1 Sessions",
    description: "Navigate the beautiful complexity of becoming and being a mother while maintaining your identity",
    includes: [
      "Identity integration beyond motherhood",
      "Work-life harmony strategies",
      "Self-care without guilt",
      "Relationship navigation",
      "Personal values alignment",
    ],
    color: "from-pink-200 to-rose-100",
    iconColor: "text-pink-500",
    borderColor: "border-pink-200/50",
  },
  {
    icon: Sparkles,
    title: "Life Transition & Identity Coaching",
    duration: "4-8 months",
    format: "1:1 Sessions",
    description: "Find clarity and direction when life feels uncertain and your path seems unclear",
    includes: [
      "Values clarification process",
      "Life purpose exploration",
      "Decision-making frameworks",
      "Confidence rebuilding",
      "Future visioning",
    ],
    color: "from-purple-200 to-violet-100",
    iconColor: "text-purple-500",
    borderColor: "border-purple-200/50",
  },
  {
    icon: Globe,
    title: "Relocation & Cultural Adjustment",
    duration: "3-6 months",
    format: "1:1 Sessions",
    description: "Rebuild your life and identity with confidence in a new country or city",
    includes: [
      "Cultural adaptation strategies",
      "Community building guidance",
      "Career transition support",
      "Identity reconstruction",
      "Homesickness healing",
    ],
    color: "from-blue-200 to-cyan-100",
    iconColor: "text-blue-500",
    borderColor: "border-blue-200/50",
  },
  {
    icon: Home,
    title: "Empty Nest Rediscovery",
    duration: "4-6 months",
    format: "1:1 Sessions",
    description: "Rediscover who you are and what you want as your children become independent",
    includes: [
      "Identity beyond caregiving",
      "New purpose exploration",
      "Relationship redefinition",
      "Personal dreams revival",
      "Next chapter planning",
    ],
    color: "from-green-200 to-emerald-100",
    iconColor: "text-green-500",
    borderColor: "border-green-200/50",
  },
]

export function CoachingServices() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ed957]/10 text-[#024288] text-sm font-medium mb-6">
              <span className="animate-pulse-gentle">🌸</span>
              Transformation pathways
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">Coaching Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Each coaching journey is uniquely designed for your specific transition and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                ref={(el)  => void (cardRefs.current[index] = el)}
                className={`group transition-all duration-700 border-0 shadow-soft hover:shadow-glow bg-gradient-to-br ${service.color} rounded-3xl overflow-hidden ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:-translate-y-2 hover:scale-[1.02]`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft">
                          <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-[#024288] mb-1">{service.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {service.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {service.format}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="space-y-3">
                      <div className="text-sm font-medium text-[#024288]">What's included:</div>
                      <ul className="space-y-2">
                        {service.includes.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#7ed957] mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button
                        asChild
                        className="group/btn bg-[#0166d2] hover:bg-[#7ed957] text-white px-6 py-3 text-sm font-medium rounded-full transition-all duration-500 hover:scale-105"
                      >
                        <Link href="/discovery-call">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
