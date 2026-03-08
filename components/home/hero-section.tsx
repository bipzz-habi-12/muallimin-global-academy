import Link from "next/link"
import { ArrowRight, Play, BookOpen, Users, Trophy, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border bg-background/80 px-4 py-1.5 text-sm backdrop-blur">
              <span className="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                New
              </span>
              <span className="text-muted-foreground">2024 Olympiad Prep Courses Available</span>
              <ArrowRight className="ml-2 h-3 w-3 text-muted-foreground" />
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your Gateway to{" "}
              <span className="text-primary">Islamic Excellence</span>{" "}
              & Academic Success
            </h1>
            
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              Join thousands of students worldwide in their journey of Islamic education, 
              Olympiad training, and international exam preparation with our expert instructors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/register">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-muted"
                    />
                  ))}
                </div>
                <span>Join 50,000+ students</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Cards */}
          <div className="relative lg:pl-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Feature Cards */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">Islamic Studies</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quran, Hadith, Fiqh, and Arabic language courses with certified scholars.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:translate-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">Olympiad Training</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Math, Science, and Computer Science Olympiad preparation programs.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">International Exams</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  SAT, IELTS, TOEFL, Cambridge, and other international exam prep.
                </p>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:translate-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">Live Classes</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interactive live sessions with expert teachers from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
