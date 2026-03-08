import Link from "next/link"
import { 
  Video, 
  FileText, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Smartphone, 
  Zap,
  BookOpen,
  Trophy,
  MessageSquare,
  BarChart3,
  Download,
  Globe,
  Headphones,
  Lock,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Features | Muallimin Global Islamic Academy",
  description: "Discover the powerful features that make learning with us effective and enjoyable.",
}

const mainFeatures = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Join real-time sessions with expert teachers. Ask questions, participate in discussions, and get instant feedback.",
    features: ["HD video streaming", "Screen sharing", "Interactive whiteboard", "Breakout rooms"],
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Structured courses covering Islamic studies, academic subjects, and competitive exam preparation.",
    features: ["1,200+ courses", "Self-paced learning", "Downloadable resources", "Progress tracking"],
  },
  {
    icon: Award,
    title: "Gamified Learning",
    description: "Stay motivated with our achievement system. Earn badges, climb leaderboards, and celebrate your progress.",
    features: ["Achievement badges", "XP points system", "Weekly challenges", "Global leaderboards"],
  },
  {
    icon: Users,
    title: "Community Forums",
    description: "Connect with fellow students worldwide. Ask questions, share knowledge, and grow together.",
    features: ["Discussion forums", "Study groups", "Peer mentoring", "Expert Q&A"],
  },
]

const additionalFeatures = [
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access recorded lessons anytime, anywhere. Learn on your own schedule.",
  },
  {
    icon: Shield,
    title: "Certified Instructors",
    description: "Learn from qualified scholars and educators with years of experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Access courses on any device with our responsive mobile application.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate results on quizzes and personalized recommendations.",
  },
  {
    icon: Trophy,
    title: "Certificates",
    description: "Earn verified certificates upon course completion.",
  },
  {
    icon: MessageSquare,
    title: "1-on-1 Sessions",
    description: "Book private sessions with instructors for personalized guidance.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning with detailed progress reports and insights.",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download lessons to learn without an internet connection.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Content available in multiple languages including Arabic, English, and more.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always ready to help you with any questions.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: FileText,
    title: "Study Materials",
    description: "Access comprehensive notes, worksheets, and practice materials.",
  },
]

export default function FeaturesPage() {
  return (
    <>
        {/* Hero */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Powerful Features for{" "}
                <span className="text-primary">Effective Learning</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Our platform combines traditional Islamic education with modern technology 
                to provide you with the best learning experience possible.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/register">
                    Start Learning Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {mainFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-card p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-card-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                And Much More
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need for a complete learning experience.
              </p>
            </div>
            
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {additionalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
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
                Ready to Experience All These Features?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Join thousands of students who are already benefiting from our comprehensive 
                learning platform. Start your 7-day free trial today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
