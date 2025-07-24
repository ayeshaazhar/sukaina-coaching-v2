"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Heart } from "lucide-react"

const stories = [
  {
    before: "Lost in the overwhelm of new motherhood",
    after: "Confident mother who honors both her needs and her child's",
    name: "Sarah M.",
    location: "Toronto, Canada",
    category: "Motherhood",
    quote: "Sukaina helped me see that being a good mother doesn't mean losing myself completely.",
    emotion: "💕",
  },
  {
    before: "Successful on paper but empty inside",
    after: "Living authentically aligned with my true values",
    name: "Maria L.",
    location: "London, UK",
    category: "Identity",
    quote: "I finally understand what was missing - the courage to be genuinely me.",
    emotion: "✨",
  },
  {
    before: "Isolated and homesick after moving abroad",
    after: "Thriving in my new home with deep roots and wings",
    name: "Priya K.",
    location: "Sydney, Australia",
    category: "Relocation",
    quote: "I discovered that home isn't a place - it's the peace I carry within me.",
    emotion: "🌸",
  },
]

export function TransformationStories() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStory, setActiveStory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("transformation-stories")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="transformation-stories" className="py-24 bg-gradient-to-br from-green-50/30 via-white to-blue-50/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Gentle header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#7ed957]/20 text-[#024288] text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-[#7ed957] animate-pulse-gentle" />
              Stories of transformation
            </div>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#024288] mb-6">
              From struggle to strength
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every woman's journey is sacred. Here are glimpses into the beautiful transformations that happen when we
              choose growth over comfort.
            </p>
          </div>

          {/* Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className={`group transition-all duration-1000 border-0 shadow-soft hover:shadow-glow bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:-translate-y-2 hover:scale-[1.02]`}
                style={{ transitionDelay: `${index * 300}ms` }}
                onMouseEnter={() => setActiveStory(index)}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Emotion indicator */}
                    <div className="text-center">
                      <div className="text-3xl mb-2 animate-float-gentle">{story.emotion}</div>
                      <div className="text-xs font-medium text-[#0166d2] bg-[#0166d2]/10 px-3 py-1 rounded-full">
                        {story.category} Journey
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-6 h-6 text-[#7ed957]/50 absolute -top-2 -left-2" />
                      <blockquote className="text-slate-600 leading-relaxed italic pl-4">"{story.quote}"</blockquote>
                    </div>

                    {/* Transformation */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Before</div>
                        <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-2xl">{story.before}</div>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#7ed957] to-transparent" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium text-[#7ed957] uppercase tracking-wide">After</div>
                        <div className="text-sm text-slate-600 bg-gradient-to-br from-[#7ed957]/10 to-[#0166d2]/5 p-3 rounded-2xl">
                          {story.after}
                        </div>
                      </div>
                    </div>

                    {/* Attribution */}
                    <div className="text-center pt-4 border-t border-slate-100">
                      <div className="font-medium text-[#024288]">{story.name}</div>
                      <div className="text-sm text-slate-500">{story.location}</div>
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
