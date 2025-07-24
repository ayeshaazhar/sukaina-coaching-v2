"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Calendar, Send, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transition: "",
    urgency: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Discovery call request:", formData)
    // Reset form or show success message
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/20 relative bubble-container">
      {/* Bubble Effects */}
      <div className="bubble-transition">
        <div className="bubble"></div>
        <div className="butterfly-bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight">Begin Your Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Ready to navigate your transition with support and clarity? Let's start with a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="transformation-card">
              <CardHeader>
                <CardTitle className="font-medium flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" />
                  Free Discovery Call
                </CardTitle>
                <CardDescription className="font-light">
                  Let's explore how transformation coaching can support your unique journey. No pressure, just
                  connection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-border/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="transition" className="font-medium">
                        Current Transition
                      </Label>
                      <Select onValueChange={(value) => handleChange("transition", value)}>
                        <SelectTrigger className="border-border/50">
                          <SelectValue placeholder="What are you navigating?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motherhood">Motherhood Transition</SelectItem>
                          <SelectItem value="identity">Identity Crisis/Life Reassessment</SelectItem>
                          <SelectItem value="relocation">Relocation/Moving</SelectItem>
                          <SelectItem value="empty-nesting">Empty Nesting</SelectItem>
                          <SelectItem value="career">Career Change</SelectItem>
                          <SelectItem value="other">Other/Multiple</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="font-medium">
                        Timeline
                      </Label>
                      <Select onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger className="border-border/50">
                          <SelectValue placeholder="When would you like to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="this-month">Within this month</SelectItem>
                          <SelectItem value="next-month">Next month</SelectItem>
                          <SelectItem value="exploring">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">
                      Tell Me About Your Situation
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What's happening in your life right now? What kind of support are you looking for? Share as much or as little as feels comfortable..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className="border-border/50"
                    />
                  </div>

                  <Button type="submit" className="w-full coaching-gradient text-white" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Request Discovery Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="transformation-card">
              <CardHeader>
                <CardTitle className="font-medium">Let's Connect</CardTitle>
                <CardDescription className="font-light">
                  I'm here to support you wherever you are in the world.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-light">sukaina@transformationcoaching.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-light">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-light">Based in Canada, serving globally online</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-light">Flexible scheduling across time zones</span>
                </div>
              </CardContent>
            </Card>

            <Card className="transformation-card">
              <CardHeader>
                <CardTitle className="font-medium">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 coaching-gradient rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Free Discovery Call</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      15-minute conversation to understand your situation and see if we're a good fit
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 coaching-gradient rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-white">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Approach</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Custom coaching plan designed around your unique needs and goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 coaching-gradient rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs font-medium text-white">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Regular sessions with between-session support as you navigate your transformation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="transformation-card p-6 text-center">
              <h3 className="font-medium mb-2">You Don't Have to Navigate This Alone</h3>
              <p className="text-sm text-muted-foreground font-light">
                Every transformation begins with courage to reach out. I'm honored to be part of your journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
