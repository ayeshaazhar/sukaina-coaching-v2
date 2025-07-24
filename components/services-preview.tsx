"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Globe, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Heart,
    title: "Motherhood Transitions",
    description: "Gentle guidance through the beautiful complexity of becoming and being a mother",
    essence: "Rediscover yourself beyond motherhood",
    color: "from-pink-200 to-rose-100",
    iconColor: "text-pink-500",
    borderColor: "border-pink-200/50",
  },
  {
    icon: Sparkles,
    title: "Identity & Life Reassessment",
    description: "Compassionate support when life feels unclear and your path seems uncertain",
    essence: "Clarity emerges from gentle exploration",
    color: "from-purple-200 to-violet-100",
    iconColor: "text-purple-500",
    borderColor: "border-purple-200/50",
  },
  {
    icon: Globe,
    title: "Relocation & New Beginnings",
    description: "Nurturing guidance as you rebuild your life and identity in a new place",
    essence: "Home is where your heart feels safe",
    color: "from-blue-200 to-cyan-100",
    iconColor: "text-blue-500",
    borderColor: "border-blue-200/50",
  },
  {
    icon: Home,
    title: "Empty Nest & Rediscovery",
    description: "Loving support as you rediscover who you are beyond your role as caregiver",
    essence: "Your next chapter awaits",
    color: "from-green-200 to-emerald-100",
    iconColor: "text-green-500",
    borderColor: "border-green-200/50",
  },
]

export function ServicesPreview() {
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
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Gentle header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7ed957]/10 text-[#024288] text-sm font-medium mb-6">
              <span className="animate-pulse-gentle">🌸</span>
              Four paths to transformation
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">
              Where are you in your journey?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every woman's path is unique, but you don't have to walk it alone. Find the gentle guidance that speaks to
              your heart.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => void (cardRefs.current[index] = el)}
                className={`group transition-all duration-700 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`p-8 rounded-3xl bg-gradient-to-br ${service.color} border ${service.borderColor} hover:shadow-soft transition-all duration-500 hover:-translate-y-2 h-full group-hover:scale-[1.02]`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-[#024288] mb-1">{service.title}</h3>
                        <p className="text-sm text-[#7ed957] font-medium italic">{service.essence}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="pt-4">
                      <div className="inline-flex items-center text-[#0166d2] text-sm font-medium group-hover:text-[#024288] transition-colors">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gentle CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-[#0166d2]/30 text-[#0166d2] hover:bg-[#0166d2] hover:text-white px-8 py-6 text-base font-medium rounded-full bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-glow"
            >
              <Link href="/services">
                <Heart className="mr-2 h-4 w-4 group-hover:animate-pulse-gentle" />
                Explore Your Path
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
