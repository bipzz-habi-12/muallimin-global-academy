import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ | Muallimin Global Islamic Academy",
  description: "Find answers to frequently asked questions about our courses, pricing, and platform.",
}

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I create an account?",
        answer: "Creating an account is easy! Click the 'Register' button on our homepage, fill in your details, and you're ready to start learning. You can also sign up using your Google or GitHub account for faster registration.",
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes! All our paid plans come with a 7-day free trial. You can access all features during the trial period without entering any payment information.",
      },
      {
        question: "What devices can I use to access courses?",
        answer: "Our platform works on any device with a web browser - desktop computers, laptops, tablets, and smartphones. We also have dedicated mobile apps for iOS and Android for learning on the go.",
      },
      {
        question: "Do I need any special software?",
        answer: "No special software is required. You only need a modern web browser (Chrome, Firefox, Safari, or Edge) and a stable internet connection. For live classes, we recommend using a headset with a microphone.",
      },
    ],
  },
  {
    title: "Courses & Learning",
    faqs: [
      {
        question: "How are the courses structured?",
        answer: "Each course consists of video lessons, reading materials, quizzes, and assignments. Courses are divided into modules that you can complete at your own pace. You can track your progress through your dashboard.",
      },
      {
        question: "Can I download course materials for offline use?",
        answer: "Yes, with our Student, Family, and Institution plans, you can download video lessons and reading materials to watch offline. Downloaded content is available in our mobile apps.",
      },
      {
        question: "How long do I have access to a course?",
        answer: "Once enrolled, you have lifetime access to the course content as long as you maintain an active subscription. If you cancel, you'll retain access until the end of your billing period.",
      },
      {
        question: "Are certificates provided upon completion?",
        answer: "Yes! Upon successful completion of any course, you'll receive a verified digital certificate that you can share on LinkedIn or add to your resume.",
      },
    ],
  },
  {
    title: "Islamic Studies",
    faqs: [
      {
        question: "Who are the Islamic studies instructors?",
        answer: "Our Islamic studies instructors are certified scholars with ijazah (formal authorization) in their respective fields. Many have studied at renowned Islamic universities and have years of teaching experience.",
      },
      {
        question: "Can I learn Quran memorization online?",
        answer: "Absolutely! We offer comprehensive Quran memorization programs with one-on-one sessions with qualified Huffaz. Our structured approach helps students of all ages memorize the Quran effectively.",
      },
      {
        question: "Is Arabic language instruction available?",
        answer: "Yes, we offer Arabic language courses for all levels - from beginners to advanced. Our curriculum covers both Modern Standard Arabic and Quranic Arabic.",
      },
      {
        question: "Are the Islamic courses suitable for children?",
        answer: "Yes! We have age-appropriate Islamic courses for children starting from age 5. Our children's programs use engaging methods including animations, games, and interactive activities.",
      },
    ],
  },
  {
    title: "Olympiad & Exam Prep",
    faqs: [
      {
        question: "What Olympiad programs do you offer?",
        answer: "We offer training programs for Mathematics Olympiad (IMO), Physics Olympiad (IPhO), Chemistry Olympiad (IChO), and Informatics Olympiad (IOI). Our programs are designed by former Olympiad medalists.",
      },
      {
        question: "What international exams can I prepare for?",
        answer: "We offer preparation courses for SAT, ACT, IELTS, TOEFL, Cambridge (A-Levels, IGCSE), and various other standardized tests. Each program includes practice tests and personalized feedback.",
      },
      {
        question: "Do you guarantee score improvements?",
        answer: "While we can't guarantee specific scores, our students consistently see significant improvements. On average, our SAT students improve by 150+ points, and our IELTS students improve by 1.5+ bands.",
      },
      {
        question: "Are there mock exams available?",
        answer: "Yes, all our exam prep courses include multiple full-length mock exams that simulate the actual test environment. You'll receive detailed score reports and areas for improvement.",
      },
    ],
  },
  {
    title: "Billing & Subscriptions",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. In some regions, we also accept local payment methods.",
      },
      {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the change takes effect immediately. If you downgrade, the change will apply at the start of your next billing cycle.",
      },
      {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, contact our support team for a full refund - no questions asked.",
      },
      {
        question: "Do you offer scholarships or financial aid?",
        answer: "Yes! We have scholarship programs for students who demonstrate financial need. We also offer discounts for students from developing countries. Contact our team for more information.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Find answers to common questions about our platform, courses, and services.
                {"Can't"} find what {"you're"} looking for? Contact our support team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  <Accordion type="single" collapsible className="mt-6">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.title}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-card border p-8 text-center lg:p-12">
              <h2 className="text-2xl font-bold text-card-foreground">
                Still Have Questions?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Our support team is here to help. Reach out to us anytime and {"we'll"} get back to you within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/community">Join Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
