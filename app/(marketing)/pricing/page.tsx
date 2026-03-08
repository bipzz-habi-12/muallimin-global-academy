import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Pricing | Muallimin Global Islamic Academy",
  description: "Choose the perfect plan for your learning journey. Flexible pricing for students, families, and institutions.",
}

const plans = [
  {
    name: "Free",
    description: "Get started with basic features",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Access to 50+ free courses",
      "Community forum access",
      "Basic progress tracking",
      "Mobile app access",
      "Email support",
    ],
    cta: "Get Started",
    href: "/register",
    popular: false,
  },
  {
    name: "Student",
    description: "Everything you need to excel",
    price: { monthly: 19, yearly: 15 },
    features: [
      "Access to all 1,200+ courses",
      "Live classes included",
      "Certificates on completion",
      "1-on-1 tutoring (2 hours/month)",
      "Downloadable resources",
      "Priority support",
      "Olympiad preparation",
      "Mock exams & assessments",
    ],
    cta: "Start Free Trial",
    href: "/register?plan=student",
    popular: true,
  },
  {
    name: "Family",
    description: "For families with multiple learners",
    price: { monthly: 39, yearly: 29 },
    features: [
      "Up to 5 family members",
      "All Student plan features",
      "Parent dashboard",
      "Progress reports",
      "Family study groups",
      "Dedicated support",
      "Custom learning paths",
      "Annual progress review",
    ],
    cta: "Start Free Trial",
    href: "/register?plan=family",
    popular: false,
  },
  {
    name: "Institution",
    description: "For schools and organizations",
    price: { monthly: null, yearly: null },
    features: [
      "Unlimited students",
      "All Family plan features",
      "LMS integration",
      "Custom branding",
      "Admin dashboard",
      "Analytics & reporting",
      "Dedicated account manager",
      "Custom course development",
    ],
    cta: "Contact Sales",
    href: "/contact?subject=institution",
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All paid plans come with a 7-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
  },
]

export default function PricingPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Simple, Transparent{" "}
                <span className="text-primary">Pricing</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the perfect plan for your learning journey. All plans include access to 
                our core features with a 7-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg",
                    plan.popular && "border-primary ring-1 ring-primary"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-card-foreground">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                    
                    <div className="mt-4">
                      {plan.price.monthly !== null ? (
                        <>
                          <span className="text-4xl font-bold text-card-foreground">
                            ${plan.price.yearly}
                          </span>
                          <span className="text-muted-foreground">/mo</span>
                          <div className="text-sm text-muted-foreground">
                            billed annually
                          </div>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-card-foreground">
                          Custom Pricing
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="mt-6 w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-3xl gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border bg-card p-6">
                  <h3 className="font-semibold text-card-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary p-8 text-center lg:p-12">
              <h2 className="text-3xl font-bold text-primary-foreground">
                Still Have Questions?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                {"Our team is here to help you choose the right plan. Let's discuss your needs."}
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
