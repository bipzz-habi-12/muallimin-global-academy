import Link from "next/link"
import { ArrowRight, BookOpen, Trophy, Globe, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: BookOpen,
    title: "Islamic Studies",
    description: "Comprehensive courses in Quran memorization, Tafsir, Hadith, Fiqh, and Arabic language with certified scholars.",
    features: ["Quran Memorization", "Hadith Sciences", "Islamic Jurisprudence", "Arabic Language"],
    href: "/islamic-studies",
    color: "primary",
    students: "15,000+",
  },
  {
    icon: Trophy,
    title: "Olympiad Training",
    description: "Prepare for national and international Olympiads in Mathematics, Physics, Chemistry, and Informatics.",
    features: ["Math Olympiad", "Physics Olympiad", "Chemistry Olympiad", "Informatics"],
    href: "/olympiad",
    color: "accent",
    students: "8,000+",
  },
  {
    icon: Globe,
    title: "International Exams",
    description: "Expert preparation for SAT, IELTS, TOEFL, Cambridge, and other standardized international exams.",
    features: ["SAT Prep", "IELTS Training", "Cambridge Exams", "TOEFL Prep"],
    href: "/exams",
    color: "primary",
    students: "12,000+",
  },
  {
    icon: GraduationCap,
    title: "Academic Courses",
    description: "Regular academic courses aligned with international curricula for grades K-12.",
    features: ["Mathematics", "Sciences", "Languages", "Humanities"],
    href: "/courses",
    color: "accent",
    students: "20,000+",
  },
]

export function ProgramsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Programs
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Choose from our diverse range of educational programs designed to help you succeed.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg lg:p-8"
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                  program.color === "primary" ? "bg-primary/10" : "bg-accent/20"
                }`}>
                  <program.icon className={`h-7 w-7 ${
                    program.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <div className="text-sm text-muted-foreground">
                  {program.students} students
                </div>
              </div>
              
              <h3 className="mt-4 text-xl font-semibold text-card-foreground group-hover:text-primary">
                {program.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{program.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {program.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex items-center text-sm font-medium text-primary">
                Explore Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
