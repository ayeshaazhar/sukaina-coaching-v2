"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Heart, Sparkles } from "lucide-react"

export default function LeadMagnetPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsDownloaded(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#7ed957]/20 text-[#024288] text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-[#7ed957] animate-pulse-gentle" />
              Free transformation guide
            </div>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">
              The Gentle Guide to Life Transitions
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A compassionate 20-page guide to navigating change with grace, including reflection exercises and
              practical tools for transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Preview */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
                <h3 className="text-xl font-medium text-[#024288] mb-4">What's Inside:</h3>
                <ul className="space-y-3">
                  {[
                    "Understanding the stages of transition",
                    "Gentle self-reflection exercises",
                    "Tools for managing uncertainty",
                    "Creating your vision for the future",
                    "Building resilience during change",
                    "Practical daily practices for peace",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#7ed957] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Download Form */}
            <div>
              {!isDownloaded ? (
                <Card className="border-0 shadow-soft rounded-3xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-light text-[#024288]">Download Your Free Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[#024288]">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957]"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0166d2] hover:bg-[#7ed957] text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Sparkles className="mr-2 h-4 w-4 animate-spin-slow" />
                            Preparing your guide...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Download Free Guide
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        By downloading, you'll also receive gentle weekly insights about transformation and growth.
                        Unsubscribe anytime.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-soft rounded-3xl bg-gradient-to-br from-[#7ed957]/10 to-[#0166d2]/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#7ed957] flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-[#024288] mb-4">Check Your Email!</h3>
                    <p className="text-slate-600 mb-6">
                      Your free guide is on its way to your inbox. Don't forget to check your spam folder just in case.
                    </p>
                    <Button asChild className="bg-[#0166d2] hover:bg-[#7ed957] text-white px-6 py-3 rounded-full">
                      <a href="/discovery-call">Book Your Discovery Call</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
