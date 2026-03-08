const stats = [
  { label: "Active Students", value: "50,000+", description: "from 120+ countries" },
  { label: "Expert Teachers", value: "500+", description: "certified instructors" },
  { label: "Courses Available", value: "1,200+", description: "across all programs" },
  { label: "Success Rate", value: "98%", description: "student satisfaction" },
]

export function StatsSection() {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
