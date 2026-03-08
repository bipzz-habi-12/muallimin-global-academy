import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Access to 1,200+ courses",
  "Live classes with experts",
  "Community support",
  "Mobile app access",
  "Certificates upon completion",
  "7-day free trial",
]

export function CTASection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Start Your Learning Journey Today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of students worldwide and unlock your potential with 
              our comprehensive courses and expert instructors.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-sm text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-start justify-center gap-6 lg:items-end">
            <div className="rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur">
              <div className="text-sm font-medium text-primary-foreground/80">
                Limited Time Offer
              </div>
              <div className="mt-2 text-4xl font-bold text-primary-foreground">
                30% OFF
              </div>
              <div className="mt-1 text-primary-foreground/80">
                on annual subscription
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
