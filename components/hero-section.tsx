"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)

  const taglines = ["Navigate Change.", "Embrace Growth.", "Create Your Future."]

  useEffect(() => {
    setIsVisible(true)

    // Animate taglines one by one
    const timer = setInterval(() => {
      setLineIndex((prev) => (prev < taglines.length - 1 ? prev + 1 : prev))
    }, 800)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Floating butterflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float-slow opacity-20">
          <div className="w-8 h-8 text-[#7ed957] transform rotate-12">🦋</div>
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed opacity-15">
          <div className="w-6 h-6 text-[#0166d2] transform -rotate-12">🦋</div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float-gentle opacity-10">
          <div className="w-7 h-7 text-[#024288] transform rotate-45">🦋</div>
        </div>
      </div>

      {/* Soft background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7ed957]/10 to-[#0166d2]/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#0166d2]/10 to-[#024288]/5 rounded-full blur-3xl animate-pulse-slower" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              {/* Welcome badge */}
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#7ed957]/20 text-[#024288] text-sm font-medium shadow-soft transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Heart className="w-4 h-4 text-[#7ed957] animate-pulse-gentle" />
                Welcome, beautiful soul
              </div>

              {/* Animated taglines */}
              <div className="space-y-4">
                {taglines.map((line, index) => (
                  <h1
                    key={index}
                    className={`text-4xl lg:text-6xl font-light tracking-tight leading-tight transition-all duration-1000 ${
                      lineIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${
                      index === 0 ? "text-[#024288]" : index === 1 ? "text-[#0166d2]" : "text-[#7ed957] font-medium"
                    }`}
                    style={{ transitionDelay: `${index * 800}ms` }}
                  >
                    {line}
                  </h1>
                ))}
              </div>

              <p
                className={`text-xl text-slate-600 max-w-lg leading-relaxed transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "2400ms" }}
              >
                A gentle space for women navigating life's most profound transitions. Together, we'll transform your
                challenges into your greatest growth opportunities.
              </p>

              <div
                className={`pt-4 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "2800ms" }}
              >
                <Button
                  size="lg"
                  asChild
                  className="group bg-[#0166d2] hover:bg-[#7ed957] text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-glow"
                >
                  <Link href="/discovery-call">
                    <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin-slow" />
                    Begin Your Transformation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Gentle stats */}
              <div
                className={`flex items-center gap-8 pt-8 text-sm text-slate-500 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "3200ms" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-light text-[#024288] mb-1">500+</div>
                  <div>Women transformed</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#7ed957]/30 to-transparent" />
                <div className="text-center">
                  <div className="text-2xl font-light text-[#024288] mb-1">15+</div>
                  <div>Years of wisdom</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#7ed957]/30 to-transparent" />
                <div className="text-center">
                  <div className="text-2xl font-light text-[#024288] mb-1">Global</div>
                  <div>Sisterhood</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Serene imagery */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="relative">
              {/* Main serene image */}
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Woman+in+peaceful+meditation+by+nature+path"
                  alt="Woman in peaceful reflection on a nature path"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              {/* Floating transformation elements */}
              <div className="absolute -top-6 -left-6 z-30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-white/50 animate-float-gentle">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7ed957] to-[#0166d2] flex items-center justify-center">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#024288]">Your Journey</div>
                    <div className="text-xs text-slate-500">Begins with one step</div>
                  </div>
                </div>
              </div>

              {/* Gentle success indicator */}
              <div className="absolute -bottom-6 -right-6 z-30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-white/50 animate-float-delayed">
                <div className="text-center">
                  <div className="text-2xl font-light text-[#7ed957] mb-1">💚</div>
                  <div className="text-sm font-medium text-[#024288]">Transformation</div>
                  <div className="text-xs text-slate-500">Awaits you</div>
                </div>
              </div>

              {/* Floating testimonial bubble */}
              <div className="absolute top-1/2 -left-8 z-30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft border border-white/50 max-w-xs animate-float-slow">
                <div className="text-sm text-slate-600 italic mb-2">"Sukaina helped me find myself again..."</div>
                <div className="text-xs text-[#0166d2] font-medium">- Sarah, Mother & Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
