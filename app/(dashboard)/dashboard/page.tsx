import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Trophy, Target, Play, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export const metadata = {
  title: "Dashboard | Muallimin Global Islamic Academy",
  description: "Your personalized learning dashboard.",
}

const stats = [
  { label: "Courses Enrolled", value: "12", icon: BookOpen, change: "+2 this month" },
  { label: "Hours Learned", value: "48", icon: Clock, change: "+8 this week" },
  { label: "Achievements", value: "24", icon: Trophy, change: "3 new badges" },
  { label: "Current Streak", value: "7", icon: Target, change: "days" },
]

const continueLearning = [
  {
    title: "Quran Memorization - Surah Al-Baqarah",
    progress: 65,
    nextLesson: "Verses 142-150",
    timeLeft: "25 min",
    image: "/courses/quran.jpg",
  },
  {
    title: "Mathematics Olympiad Preparation",
    progress: 40,
    nextLesson: "Number Theory - Module 5",
    timeLeft: "45 min",
    image: "/courses/math.jpg",
  },
  {
    title: "SAT Preparation - Math Section",
    progress: 80,
    nextLesson: "Practice Test 3",
    timeLeft: "60 min",
    image: "/courses/sat.jpg",
  },
]

const upcomingClasses = [
  {
    title: "Live Tafsir Session",
    instructor: "Sheikh Abdullah Hassan",
    time: "Today, 3:00 PM",
    duration: "1 hour",
  },
  {
    title: "Math Olympiad Problem Solving",
    instructor: "Prof. Muhammad Ali",
    time: "Tomorrow, 10:00 AM",
    duration: "2 hours",
  },
  {
    title: "Arabic Grammar Workshop",
    instructor: "Ustadh Yusuf Ibrahim",
    time: "Wed, 2:00 PM",
    duration: "1.5 hours",
  },
]

const achievements = [
  { name: "First Steps", description: "Complete your first lesson", earned: true },
  { name: "Consistent Learner", description: "7-day learning streak", earned: true },
  { name: "Quiz Master", description: "Score 100% on 5 quizzes", earned: false },
  { name: "Community Helper", description: "Answer 10 questions", earned: false },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Ahmad!</h1>
          <p className="text-muted-foreground">{"Here's"} what{"'s"} happening with your learning journey.</p>
        </div>
        <Button asChild>
          <Link href="/courses">
            Browse Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Continue Learning */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Continue Learning</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard/courses">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {continueLearning.map((course) => (
                  <div
                    key={course.title}
                    className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="h-16 w-24 shrink-0 rounded-lg bg-muted" />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium leading-tight">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Next: {course.nextLesson}
                      </p>
                      <div className="flex items-center gap-3">
                        <Progress value={course.progress} className="h-2 flex-1" />
                        <span className="text-xs text-muted-foreground">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                    <Button size="sm" className="shrink-0">
                      <Play className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Classes */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Classes</CardTitle>
              <CardDescription>Your scheduled live sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.title} className="space-y-2 rounded-lg border p-4">
                    <h3 className="font-medium leading-tight">{cls.title}</h3>
                    <p className="text-sm text-muted-foreground">{cls.instructor}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary">{cls.time}</span>
                      <span className="text-muted-foreground">{cls.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <Link href="/dashboard/live-classes">View All Classes</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Progress */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Weekly Progress</CardTitle>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Your learning activity this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-end gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                const heights = [60, 80, 45, 90, 70, 30, 50]
                return (
                  <div key={day} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
                      style={{ height: `${heights[i]}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Achievements</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/achievements">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Badges and milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`rounded-lg border p-4 text-center transition-colors ${
                    achievement.earned ? "bg-primary/5 border-primary/20" : "opacity-50"
                  }`}
                >
                  <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                    achievement.earned ? "bg-primary/10" : "bg-muted"
                  }`}>
                    <Trophy className={`h-5 w-5 ${achievement.earned ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <h4 className="text-sm font-medium">{achievement.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
