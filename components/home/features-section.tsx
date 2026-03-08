import { 
  Video, 
  FileText, 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Smartphone, 
  Zap 
} from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Live Interactive Classes",
    description: "Join real-time sessions with expert teachers and interact with peers worldwide.",
  },
  {
    icon: FileText,
    title: "Comprehensive Curriculum",
    description: "Structured courses covering Islamic studies, academics, and competitive exams.",
  },
  {
    icon: Award,
    title: "Gamified Learning",
    description: "Earn badges, track achievements, and compete on leaderboards to stay motivated.",
  },
  {
    icon: Users,
    title: "Community Forums",
    description: "Connect with fellow students, ask questions, and share knowledge.",
  },
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
    title: "Mobile Friendly",
    description: "Access courses on any device with our responsive platform.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate results on quizzes and personalized recommendations.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-primary">Excel</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform combines traditional Islamic education with modern learning tools 
            to provide a comprehensive educational experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
