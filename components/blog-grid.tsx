"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "5 Effective Study Techniques for Mathematics",
    description: "Discover proven methods to improve your math comprehension and problem-solving skills.",
    category: "Study Tips",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "effective-study-techniques-mathematics",
  },
  {
    title: "Understanding Chemical Bonding: A Visual Guide",
    description: "Break down complex chemistry concepts with visual explanations and real-world examples.",
    category: "Chemistry",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "understanding-chemical-bonding-guide",
  },
  {
    title: "Preparing for AP Calculus: Essential Tips",
    description: "Everything you need to know to succeed in AP Calculus and ace the exam.",
    category: "Test Prep",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "preparing-ap-calculus-essential-tips",
  },
  {
    title: "The Science of Learning: How Memory Works",
    description: "Understand how your brain processes and retains information to optimize your study sessions.",
    category: "Learning Science",
    date: "2023-12-28",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "science-of-learning-memory-works",
  },
  {
    title: "Overcoming Math Anxiety: Practical Strategies",
    description: "Learn how to build confidence and reduce stress when approaching mathematical problems.",
    category: "Study Tips",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "overcoming-math-anxiety-strategies",
  },
  {
    title: "Biology Lab Reports: Structure and Tips",
    description: "Master the art of writing clear, comprehensive biology lab reports that impress.",
    category: "Biology",
    date: "2023-12-15",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
    slug: "biology-lab-reports-structure-tips",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
