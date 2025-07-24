"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Sparkles, Users, Globe } from "lucide-react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float-slow opacity-20">
          <div className="w-8 h-8 text-[#7ed957]">🦋</div>
        </div>
        <div className="absolute bottom-32 right-32 animate-float-delayed opacity-15">
          <div className="w-6 h-6 text-[#0166d2]">✨</div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#7ed957]/20 text-[#024288] text-sm font-medium">
                <Heart className="w-4 h-4 text-[#7ed957] animate-pulse-gentle" />
                Meet your transformation guide
              </div>

              <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-[#024288] leading-tight">
                Hello, I'm
                <br />
                <span className="text-[#0166d2] font-medium">Sukaina Pasha</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                For over 15 years, I've had the privilege of walking alongside incredible women as they navigate life's
                most profound transitions. My approach combines deep empathy, practical wisdom, and a gentle strength
                that helps you rediscover your authentic self.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7ed957]/20 to-[#0166d2]/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#0166d2]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#024288]">500+ Women</div>
                    <div className="text-sm text-slate-500">Transformed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7ed957]/20 to-[#0166d2]/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-[#0166d2]" />
                  </div>
                  <div>
                    <div className="font-medium text-[#024288]">Global Reach</div>
                    <div className="text-sm text-slate-500">English-speaking clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-soft">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=Sukaina+Pasha+professional+portrait"
                  alt="Sukaina Pasha - Transformation Coach"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 z-30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft animate-float-gentle">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#7ed957]" />
                  <div>
                    <div className="text-sm font-medium text-[#024288]">Certified Coach</div>
                    <div className="text-xs text-slate-500">ICF Accredited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
