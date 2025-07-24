"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#024288] via-[#0254ae] to-[#0166d2] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float-slow opacity-20">
          <div className="w-6 h-6 text-white/30">🦋</div>
        </div>
        <div className="absolute top-40 right-32 animate-float-delayed opacity-15">
          <div className="w-8 h-8 text-white/20">✨</div>
        </div>
        <div className="absolute bottom-32 left-1/3 animate-float-gentle opacity-10">
          <div className="w-7 h-7 text-white/25">🌸</div>
        </div>
      </div>

      {/* Soft background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7ed957]/10 to-white/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/5 to-[#7ed957]/10 rounded-full blur-3xl animate-pulse-slower" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Gentle welcome */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <Heart className="w-4 h-4 animate-pulse-gentle" />
              Your transformation journey begins here
            </div>

            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Ready to step into
              <br />
              <span className="font-medium">your most authentic self?</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Let's have a gentle conversation about where you are and where you'd love to be. Your free discovery call
              is a safe space to explore what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                asChild
                className="group bg-white text-[#024288] hover:bg-[#7ed957] hover:text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-glow"
              >
                <Link href="/discovery-call">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Your Free Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base font-medium rounded-full bg-transparent transition-all duration-500 hover:scale-105"
              >
                <Link href="/about">
                  <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin-slow" />
                  Meet Sukaina
                </Link>
              </Button>
            </div>

            {/* Gentle reassurance */}
            <div className="pt-8 text-blue-100 text-sm space-y-2">
              <p className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#7ed957] rounded-full animate-pulse-gentle"></span>
                30 minutes of gentle exploration
              </p>
              <p className="flex items-center justify-center gap-2">
                <span
                  className="w-2 h-2 bg-[#7ed957] rounded-full animate-pulse-gentle"
                  style={{ animationDelay: "0.5s" }}
                ></span>
                No pressure, just connection
              </p>
              <p className="flex items-center justify-center gap-2">
                <span
                  className="w-2 h-2 bg-[#7ed957] rounded-full animate-pulse-gentle"
                  style={{ animationDelay: "1s" }}
                ></span>
                Discover your next beautiful step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
