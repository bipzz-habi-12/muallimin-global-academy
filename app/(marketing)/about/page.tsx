import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react"

export const metadata = {
  title: "About Us | Muallimin Global Islamic Academy",
  description: "Learn about our mission to provide quality Islamic education and academic excellence worldwide.",
}

const values = [
  {
    icon: Heart,
    title: "Faith-Centered Learning",
    description: "We integrate Islamic values into every aspect of education, nurturing both intellect and spirit.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "We maintain the highest standards of education with certified instructors and rigorous curricula.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "We connect learners from 120+ countries, fostering cultural exchange and mutual understanding.",
  },
  {
    icon: Users,
    title: "Student Success",
    description: "Our personalized approach ensures every student receives the support they need to thrive.",
  },
]

const team = [
  {
    name: "Dr. Ahmad Ibrahim",
    role: "Founder & CEO",
    bio: "Former professor of Islamic Studies with 20+ years of experience in education.",
  },
  {
    name: "Sheikh Abdullah Hassan",
    role: "Head of Islamic Studies",
    bio: "Hafiz and Islamic scholar with ijazah in Quran recitation from multiple renowned scholars.",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Academic Director",
    bio: "PhD in Education from Harvard, specializing in online learning methodologies.",
  },
  {
    name: "Prof. Muhammad Ali",
    role: "Head of Olympiad Programs",
    bio: "Former IMO gold medalist and coach of national Olympiad teams for 15 years.",
  },
]

export default function AboutPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Empowering Students Through{" "}
                <span className="text-primary">Knowledge</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Since 2015, Muallimin Global Islamic Academy has been dedicated to providing 
                world-class Islamic education and academic preparation to students worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-card-foreground">Our Mission</h2>
                <p className="mt-4 text-muted-foreground">
                  To democratize access to quality Islamic education and academic excellence, 
                  empowering students from all backgrounds to achieve their full potential while 
                  staying grounded in Islamic values and principles.
                </p>
              </div>
              
              <div className="rounded-2xl border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-card-foreground">Our Vision</h2>
                <p className="mt-4 text-muted-foreground">
                  To become the leading global platform for Islamic education and academic 
                  preparation, producing graduates who excel in their careers while being 
                  ambassadors of Islamic values in their communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border bg-card p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Leadership Team
              </h2>
              <p className="mt-4 text-muted-foreground">
                Meet the dedicated individuals behind Muallimin Academy.
              </p>
            </div>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-2xl border bg-card p-6 text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-muted" />
                  <h3 className="mt-4 font-semibold text-card-foreground">{member.name}</h3>
                  <div className="text-sm text-primary">{member.role}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">2015</div>
                <div className="mt-1 text-sm text-primary-foreground/80">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">120+</div>
                <div className="mt-1 text-sm text-primary-foreground/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">50,000+</div>
                <div className="mt-1 text-sm text-primary-foreground/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">500+</div>
                <div className="mt-1 text-sm text-primary-foreground/80">Instructors</div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
