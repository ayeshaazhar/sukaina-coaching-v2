"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Heart, Send, Sparkles } from "lucide-react"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <Card className="border-0 shadow-soft rounded-3xl bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7ed957]/20 to-[#0166d2]/10 flex items-center justify-center">
            <Calendar className="h-8 w-8 text-[#0166d2]" />
          </div>
        </div>
        <CardTitle className="text-2xl font-light text-[#024288] mb-2">Book Your Free Discovery Call</CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
          Let's explore how coaching can support your transformation journey. This gentle conversation is about you and
          your dreams.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-[#024288]">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Your first name"
                required
                className={`rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957] transition-all duration-300 ${
                  focusedField === "firstName" ? "shadow-glow" : ""
                }`}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-[#024288]">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Your last name"
                required
                className={`rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957] transition-all duration-300 ${
                  focusedField === "lastName" ? "shadow-glow" : ""
                }`}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-[#024288]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className={`rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957] transition-all duration-300 ${
                focusedField === "email" ? "shadow-glow" : ""
              }`}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-[#024288]">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className={`rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957] transition-all duration-300 ${
                focusedField === "phone" ? "shadow-glow" : ""
              }`}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="transition" className="text-sm font-medium text-[#024288]">
              What transition are you navigating?
            </Label>
            <Select>
              <SelectTrigger className="rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957]">
                <SelectValue placeholder="Select your current transition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="motherhood">Motherhood Transition</SelectItem>
                <SelectItem value="identity">Identity Crisis & Life Reassessment</SelectItem>
                <SelectItem value="relocation">Relocation & Cultural Adjustment</SelectItem>
                <SelectItem value="empty-nest">Empty Nest & Rediscovery</SelectItem>
                <SelectItem value="other">Other / Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-sm font-medium text-[#024288]">
              Your Timezone
            </Label>
            <Select>
              <SelectTrigger className="rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957]">
                <SelectValue placeholder="Select your timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                <SelectItem value="cst">Central Time (CST)</SelectItem>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="gmt">GMT (London)</SelectItem>
                <SelectItem value="cet">Central European Time</SelectItem>
                <SelectItem value="aest">Australian Eastern Time</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-[#024288]">
              Tell me about your journey
            </Label>
            <Textarea
              id="message"
              placeholder="Share what's on your heart... What challenges are you facing? What would you love to create in your life?"
              className={`min-h-[120px] rounded-2xl border-slate-200 focus:border-[#7ed957] focus:ring-[#7ed957] transition-all duration-300 ${
                focusedField === "message" ? "shadow-glow" : ""
              }`}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <Button
            type="submit"
            className="w-full group bg-[#0166d2] hover:bg-[#7ed957] text-white px-8 py-6 text-base font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-glow"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin-slow" />
                Sending your message...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4 group-hover:animate-pulse-gentle" />
                Book My Free Discovery Call
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>

          <div className="text-center text-sm text-slate-500 pt-4">
            <p className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#7ed957] rounded-full animate-pulse-gentle"></span>
              You'll receive a confirmation email within 24 hours
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
