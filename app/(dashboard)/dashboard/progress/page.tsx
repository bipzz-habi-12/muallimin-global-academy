import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Target, TrendingUp, Award, Calendar } from "lucide-react"

export const metadata = {
  title: "Learning Progress | Muallimin Global Islamic Academy",
  description: "Track your learning progress and achievements.",
}

const overallStats = [
  { label: "Total Courses", value: "12", icon: BookOpen },
  { label: "Completed", value: "5", icon: Target },
  { label: "Hours Learned", value: "156", icon: Clock },
  { label: "Certificates", value: "5", icon: Award },
]

const courseProgress = [
  {
    title: "Quran Memorization - Surah Al-Baqarah",
    category: "Islamic Studies",
    progress: 65,
    lessonsCompleted: 26,
    totalLessons: 40,
    lastAccessed: "2 hours ago",
  },
  {
    title: "Mathematics Olympiad - Number Theory",
    category: "Olympiad",
    progress: 40,
    lessonsCompleted: 8,
    totalLessons: 20,
    lastAccessed: "1 day ago",
  },
  {
    title: "SAT Preparation - Math Section",
    category: "Exam Prep",
    progress: 80,
    lessonsCompleted: 24,
    totalLessons: 30,
    lastAccessed: "3 hours ago",
  },
  {
    title: "Arabic Grammar Fundamentals",
    category: "Islamic Studies",
    progress: 100,
    lessonsCompleted: 15,
    totalLessons: 15,
    lastAccessed: "1 week ago",
  },
  {
    title: "Physics Olympiad - Mechanics",
    category: "Olympiad",
    progress: 25,
    lessonsCompleted: 5,
    totalLessons: 20,
    lastAccessed: "3 days ago",
  },
]

const weeklyData = [
  { day: "Mon", hours: 2.5, lessons: 4 },
  { day: "Tue", hours: 3.2, lessons: 5 },
  { day: "Wed", hours: 1.8, lessons: 3 },
  { day: "Thu", hours: 4.0, lessons: 6 },
  { day: "Fri", hours: 2.8, lessons: 4 },
  { day: "Sat", hours: 1.2, lessons: 2 },
  { day: "Sun", hours: 2.0, lessons: 3 },
]

const skillProgress = [
  { skill: "Quran Memorization", level: 75 },
  { skill: "Arabic Language", level: 60 },
  { skill: "Mathematics", level: 85 },
  { skill: "Physics", level: 45 },
  { skill: "Problem Solving", level: 70 },
]

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Learning Progress</h1>
        <p className="text-muted-foreground">Track your learning journey and milestones.</p>
      </div>

      {/* Overall Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overallStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Course Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>Your progress in enrolled courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courseProgress.map((course) => (
                  <div key={course.title} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">{course.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{course.lastAccessed}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={course.progress} className="h-2 flex-1" />
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {course.lessonsCompleted} of {course.totalLessons} lessons completed
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Weekly Activity</CardTitle>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Hours spent learning this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-64 items-end gap-2">
                  {weeklyData.map((data) => (
                    <div key={data.day} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
                        style={{ height: `${(data.hours / 4) * 100}%` }}
                      />
                      <span className="text-xs font-medium">{data.hours}h</span>
                      <span className="text-xs text-muted-foreground">{data.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Learning Streak</CardTitle>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>Your consistency matters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">7</div>
                  <p className="mt-2 text-lg text-muted-foreground">Day Streak</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {"You're"} on fire! Keep learning daily to maintain your streak.
                  </p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <div
                        key={day}
                        className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Development</CardTitle>
              <CardDescription>Your proficiency in different areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillProgress.map((skill) => (
                  <div key={skill.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
