import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  GraduationCap, 
  Clock, 
  BookOpen, 
  Target,
  ChevronRight,
  Calendar,
  TrendingUp,
  FileText,
  Play,
  CheckCircle2,
  Award
} from "lucide-react"

export const metadata = {
  title: "International Exams | Muallimin Global Islamic Academy",
  description: "Prepare for SAT, IELTS, TOEFL, and other international exams.",
}

const examPrograms = [
  {
    id: "sat",
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "Comprehensive preparation for the SAT exam covering Math, Reading, and Writing",
    progress: 68,
    modulesCompleted: 17,
    totalModules: 25,
    practiceTests: 8,
    avgScore: 1420,
    targetScore: 1500,
    nextTest: "Mar 9, 2024",
    icon: "📊",
  },
  {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "Academic IELTS preparation for all four skills",
    progress: 45,
    modulesCompleted: 9,
    totalModules: 20,
    practiceTests: 4,
    avgScore: 7.0,
    targetScore: 8.0,
    nextTest: "Apr 15, 2024",
    icon: "🌍",
  },
  {
    id: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "TOEFL iBT preparation covering Reading, Listening, Speaking, and Writing",
    progress: 30,
    modulesCompleted: 6,
    totalModules: 20,
    practiceTests: 2,
    avgScore: 95,
    targetScore: 110,
    nextTest: "May 20, 2024",
    icon: "🎓",
  },
  {
    id: "ap",
    name: "AP Exams",
    fullName: "Advanced Placement Exams",
    description: "Preparation for various AP subjects including Calculus, Physics, and more",
    progress: 55,
    modulesCompleted: 11,
    totalModules: 20,
    practiceTests: 5,
    avgScore: 4,
    targetScore: 5,
    nextTest: "May 2024",
    icon: "📚",
  },
]

const upcomingTests = [
  { exam: "SAT Practice Test #9", date: "Mar 2, 2024", duration: "3h", type: "Practice" },
  { exam: "IELTS Writing Mock", date: "Mar 5, 2024", duration: "1h", type: "Mock" },
  { exam: "SAT Official Test", date: "Mar 9, 2024", duration: "3h", type: "Official" },
]

const recentScores = [
  { exam: "SAT Practice Test #8", date: "Feb 24, 2024", score: "1430/1600", improvement: "+20" },
  { exam: "IELTS Full Mock", date: "Feb 20, 2024", score: "7.5/9", improvement: "+0.5" },
  { exam: "SAT Math Section", date: "Feb 18, 2024", score: "760/800", improvement: "+10" },
]

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">International Exams</h1>
          <p className="text-muted-foreground">Prepare for standardized tests and international exams</p>
        </div>
        <Button className="gap-2">
          <Play className="h-4 w-4" />
          Start Practice Test
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Practice Tests</p>
                <p className="text-2xl font-bold">19</p>
              </div>
              <FileText className="h-8 w-8 text-primary/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Hours</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Clock className="h-8 w-8 text-primary/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Improvement</p>
                <p className="text-2xl font-bold text-primary">+12%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certifications</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Award className="h-8 w-8 text-primary/30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exam Programs */}
      <div className="grid gap-6 md:grid-cols-2">
        {examPrograms.map((exam) => (
          <Card key={exam.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{exam.icon}</span>
                  <div>
                    <CardTitle>{exam.name}</CardTitle>
                    <CardDescription>{exam.fullName}</CardDescription>
                  </div>
                </div>
                <Badge variant="outline">
                  <Calendar className="mr-1 h-3 w-3" />
                  {exam.nextTest}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{exam.description}</p>
              
              <div className="grid grid-cols-3 gap-4 rounded-lg bg-muted/50 p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{exam.avgScore}</p>
                  <p className="text-xs text-muted-foreground">Current Score</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{exam.targetScore}</p>
                  <p className="text-xs text-muted-foreground">Target Score</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{exam.practiceTests}</p>
                  <p className="text-xs text-muted-foreground">Tests Taken</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Course Progress</span>
                  <span className="font-medium">{exam.modulesCompleted}/{exam.totalModules} modules</span>
                </div>
                <Progress value={exam.progress} className="h-2" />
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" asChild>
                  <Link href={`/dashboard/exams/${exam.id}`}>
                    Continue Learning
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map((test, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{test.exam}</h4>
                      <p className="text-sm text-muted-foreground">
                        {test.date} • {test.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={test.type === "Official" ? "default" : "secondary"}>
                      {test.type}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              Schedule New Test
            </Button>
          </CardContent>
        </Card>

        {/* Recent Scores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentScores.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{result.exam}</h4>
                      <p className="text-sm text-muted-foreground">{result.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{result.score}</p>
                    <p className="text-sm text-primary">{result.improvement}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View All Results
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Study Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Study Resources</CardTitle>
          <CardDescription>Access practice materials and study guides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: "Practice Questions", count: "5,000+", icon: BookOpen },
              { title: "Video Lessons", count: "200+", icon: Play },
              { title: "Study Guides", count: "50+", icon: FileText },
              { title: "Mock Tests", count: "100+", icon: Target },
            ].map((resource, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{resource.title}</p>
                  <p className="text-sm text-muted-foreground">{resource.count}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
