"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#024288] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A_logo_for_Sukaina_Pasha%2C_a_Transformation_Coach%2C_-2KMH4ojVBDAhN94elSaMWphP2bIurW.png"
                alt="Sukaina Pasha Coaching Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <div>
                <div className="text-lg font-semibold">Sukaina Pasha</div>
                <div className="text-sm text-blue-200">Transformation Coach</div>
              </div>
            </Link>
            <p className="text-blue-200 text-sm">Navigate Change. Embrace Growth. Create Your Future.</p>
            <p className="text-blue-200 text-sm">
              Empowering women globally through life's most challenging transitions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors text-sm">
                About Sukaina
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                Coaching Services
              </Link>
              <Link href="/testimonials" className="text-blue-200 hover:text-white transition-colors text-sm">
                Client Stories
              </Link>
              <Link href="/blog" className="text-blue-200 hover:text-white transition-colors text-sm">
                Blog & Resources
              </Link>
              <Link href="/faq" className="text-blue-200 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Coaching Areas</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-blue-200 text-sm">Motherhood Transitions</span>
              <span className="text-blue-200 text-sm">Identity Crisis & Life Reassessment</span>
              <span className="text-blue-200 text-sm">Relocation & Cultural Adjustment</span>
              <span className="text-blue-200 text-sm">Empty Nesting & Rediscovery</span>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Get Started</h3>
            <div className="space-y-3">
              <Link
                href="/discovery-call"
                className="inline-flex items-center gap-2 text-[#7ed957] hover:text-white transition-colors text-sm font-medium"
              >
                <Heart className="h-4 w-4" />
                Free Discovery Call
              </Link>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-200">
                  <Mail className="h-4 w-4" />
                  <span>hello@sukainapasha.com</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <MapPin className="h-4 w-4" />
                  <span>Canada (Serving Global Clients)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Sukaina Pasha Transformational Coaching. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
