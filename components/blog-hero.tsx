"use client"

export function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Learning <span className="text-primary">Resources & Tips</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Helpful articles, study tips, and educational insights to support your academic journey.
          </p>
        </div>
      </div>
    </section>
  )
}
