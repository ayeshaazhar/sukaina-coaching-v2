"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Send } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Coaching", href: "/services" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Resources", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
            <div className="relative">
              <Image
                src="/sukaina-logo.png"
                alt="Sukaina Pasha Transformation"
                width={40}
                height={40}
                className="h-20 w-auto"
              />
              <div className="absolute inset-0 bg-[#7ed957]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* <div>
              <div className="text-lg font-medium text-[#0166d2] group-hover:text-[#024288] transition-colors">
                Sukaina Pasha
              </div>
              <div className="text-xs text-[#7ed957] font-medium">Transformation Coach</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-slate-600 hover:text-[#0166d2] transition-all duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7ed957] to-[#0166d2] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:inline-flex group bg-[#0166d2] hover:bg-[#7ed957] text-white px-6 py-2 text-sm font-medium rounded-full transition-all duration-500 hover:scale-105 hover:shadow-glow"
            >
              <Link href="/discovery-call">
                <Heart className="mr-2 h-4 w-4 group-hover:animate-pulse-gentle" />
                Free Discovery Call
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-[#7ed957]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`h-4 w-4 absolute transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`h-4 w-4 absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/50 shadow-soft p-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-600 hover:text-[#0166d2] transition-all duration-300 font-medium hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-fit bg-[#0166d2] text-white rounded-full mt-4">
                <Link href="/discovery-call" onClick={() => setIsMenuOpen(false)}>
                  <Send className="mr-2 h-4 w-4" />
                  Free Discovery Call
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
