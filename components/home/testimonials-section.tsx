import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "Muallimin Academy has transformed my understanding of Islam. The scholars are knowledgeable and the courses are well-structured. I've memorized 10 Juz of Quran in just 8 months!",
    author: "Ahmad Hassan",
    role: "Quran Student, Malaysia",
    avatar: "AH",
  },
  {
    content: "Thanks to the Olympiad training program, I won a gold medal at the International Math Olympiad. The problem-solving techniques I learned here were invaluable.",
    author: "Sarah Chen",
    role: "IMO Gold Medalist, Singapore",
    avatar: "SC",
  },
  {
    content: "The SAT prep course helped me score 1550+. The instructors break down complex concepts into easy-to-understand lessons. Highly recommended!",
    author: "Omar Abdullah",
    role: "SAT Student, UAE",
    avatar: "OA",
  },
  {
    content: "As a working professional, I appreciate the flexibility of learning at my own pace. The mobile app makes it easy to continue my Islamic studies during commute.",
    author: "Fatima Zahra",
    role: "Professional Learner, UK",
    avatar: "FZ",
  },
  {
    content: "The live classes are engaging and interactive. I feel connected to teachers and students from all over the world. The community here is amazing!",
    author: "Yusuf Ibrahim",
    role: "High School Student, Nigeria",
    avatar: "YI",
  },
  {
    content: "My children have been learning Arabic and Quran through this platform for 2 years now. Their progress has been remarkable. Best investment in their education!",
    author: "Maryam Khan",
    role: "Parent, Canada",
    avatar: "MK",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by Students{" "}
            <span className="text-primary">Worldwide</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied learners who have achieved their educational goals with us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
