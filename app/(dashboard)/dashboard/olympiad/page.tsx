"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calculator, 
  FlaskConical, 
  Atom, 
  Code, 
  Brain,
  Trophy,
  Target,
  Clock,
  Play,
  ChevronRight,
  Star,
  Zap,
  Award,
  TrendingUp,
  BookOpen
} from "lucide-react"

const olympiadCategories = [
  {
    id: "math",
    name: "Mathematics",
    icon: Calculator,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    competitions: ["IMO", "USAMO", "AMC", "MATHCOUNTS"],
    progress: 72,
    problemsSolved: 145,
    totalProblems: 200,
    rank: 12,
  },
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    competitions: ["IPhO", "USAPhO", "F=ma"],
    progress: 45,
    problemsSolved: 67,
    totalProblems: 150,
    rank: 28,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: FlaskConical,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    competitions: ["IChO", "USNCO"],
    progress: 30,
    problemsSolved: 42,
    totalProblems: 140,
    rank: 45,
  },
  {
    id: "informatics",
    name: "Informatics",
    icon: Code,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    competitions: ["IOI", "USACO"],
    progress: 55,
    problemsSolved: 88,
    totalProblems: 160,
    rank: 19,
  },
]

const weeklyProblems = [
  {
    id: 1,
    title: "Number Theory Challenge",
    category: "Mathematics",
    difficulty: "Hard",
    points: 50,
    solved: false,
    timeLimit: "45 min",
  },
  {
    id: 2,
    title: "Mechanics Problem Set",
    category: "Physics",
    difficulty: "Medium",
    points: 35,
    solved: true,
    timeLimit: "30 min",
  },
  {
    id: 3,
    title: "Organic Chemistry Analysis",
    category: "Chemistry",
    difficulty: "Medium",
    points: 35,
    solved: false,
    timeLimit: "40 min",
  },
  {
    id: 4,
    title: "Dynamic Programming",
    category: "Informatics",
    difficulty: "Hard",
    points: 50,
    solved: false,
    timeLimit: "60 min",
  },
]

const upcomingCompetitions = [
  {
    name: "AMC 10/12 A",
    date: "Feb 8, 2024",
    registrationDeadline: "Jan 15, 2024",
    status: "registered",
  },
  {
    name: "USACO February Contest",
    date: "Feb 16-19, 2024",
    registrationDeadline: "Feb 14, 2024",
    status: "open",
  },
  {
    name: "F=ma Exam",
    date: "Jan 25, 2024",
    registrationDeadline: "Dec 20, 2023",
    status: "registered",
  },
]

const leaderboard = [
  { rank: 1, name: "Ahmad S.", points: 2450, solved: 185 },
  { rank: 2, name: "Maria L.", points: 2380, solved: 178 },
  { rank: 3, name: "Chen W.", points: 2290, solved: 172 },
  { rank: 4, name: "Fatima A.", points: 2150, solved: 165 },
  { rank: 5, name: "You", points: 1980, solved: 145, isYou: true },
]

export default function OlympiadPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Olympiad Training</h1>
          <p className="text-muted-foreground">Prepare for international science and math olympiads</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Trophy className="h-4 w-4" />
            My Achievements
          </Button>
          <Button className="gap-2">
            <Play className="h-4 w-4" />
            Practice Now
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
                <p className="text-2xl font-bold">342</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold">15 days</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Zap className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Global Rank</p>
                <p className="text-2xl font-bold">#156</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Award className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Categories */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {olympiadCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.bgColor}`}>
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>Rank #{category.rank}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {category.competitions.slice(0, 3).map((comp) => (
                    <Badge key={comp} variant="secondary" className="text-xs">
                      {comp}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{category.problemsSolved}/{category.totalProblems} problems</span>
                    <span className="font-medium">{category.progress}%</span>
                  </div>
                  <Progress value={category.progress} className="h-2" />
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/dashboard/olympiad/${category.id}`}>
                    Practice
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Weekly Problems */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Weekly Challenge Problems</CardTitle>
                  <CardDescription>Complete these problems to earn bonus points</CardDescription>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" />
                  5 days left
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyProblems.map((problem) => (
                  <div
                    key={problem.id}
                    className={`flex items-center gap-4 rounded-lg border p-4 transition-colors ${
                      problem.solved ? "bg-primary/5 border-primary/20" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      problem.solved ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      {problem.solved ? (
                        <Star className="h-5 w-5" />
                      ) : (
                        <Target className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{problem.title}</h3>
                        <Badge variant={
                          problem.difficulty === "Hard" ? "destructive" : 
                          problem.difficulty === "Medium" ? "secondary" : "outline"
                        }>
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {problem.category} • {problem.timeLimit} • {problem.points} pts
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      variant={problem.solved ? "secondary" : "default"}
                      disabled={problem.solved}
                    >
                      {problem.solved ? "Completed" : "Solve"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Competitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                Upcoming Competitions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingCompetitions.map((comp, index) => (
                  <div key={index} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-medium">{comp.name}</h4>
                      <p className="text-sm text-muted-foreground">{comp.date}</p>
                    </div>
                    <Badge variant={comp.status === "registered" ? "default" : "outline"}>
                      {comp.status === "registered" ? "Registered" : "Open"}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                View All Competitions
              </Button>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 rounded-lg p-2 ${
                      user.isYou ? "bg-primary/10" : ""
                    }`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      user.rank === 1 ? "bg-yellow-500 text-yellow-950" :
                      user.rank === 2 ? "bg-gray-300 text-gray-800" :
                      user.rank === 3 ? "bg-orange-400 text-orange-950" :
                      "bg-muted"
                    }`}>
                      {user.rank}
                    </span>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${user.isYou ? "text-primary" : ""}`}>
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{user.solved} problems</p>
                    </div>
                    <span className="text-sm font-semibold">{user.points}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
