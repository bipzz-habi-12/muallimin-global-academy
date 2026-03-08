"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Play,
  Filter,
  GraduationCap,
  BookMarked,
  Calculator,
  Globe,
  Sparkles
} from "lucide-react"

const categories = [
  { id: "all", name: "All Courses", icon: BookOpen },
  { id: "islamic", name: "Islamic Studies", icon: BookMarked },
  { id: "olympiad", name: "Olympiad Training", icon: Calculator },
  { id: "international", name: "International Exams", icon: Globe },
  { id: "languages", name: "Languages", icon: GraduationCap },
]

const courses = [
  {
    id: 1,
    title: "Quran Memorization & Tajweed",
    description: "Master Quranic recitation with proper Tajweed rules and memorization techniques",
    category: "islamic",
    instructor: "Sheikh Abdullah Hassan",
    duration: "40 hours",
    lessons: 48,
    students: 1250,
    rating: 4.9,
    level: "All Levels",
    progress: 65,
    enrolled: true,
    featured: true,
  },
  {
    id: 2,
    title: "Mathematics Olympiad Preparation",
    description: "Comprehensive training for IMO and national math olympiad competitions",
    category: "olympiad",
    instructor: "Prof. Muhammad Ali",
    duration: "60 hours",
    lessons: 72,
    students: 890,
    rating: 4.8,
    level: "Advanced",
    progress: 35,
    enrolled: true,
    featured: true,
  },
  {
    id: 3,
    title: "SAT Complete Preparation",
    description: "Full SAT prep covering Math, Reading, and Writing sections",
    category: "international",
    instructor: "Dr. Sarah Johnson",
    duration: "50 hours",
    lessons: 64,
    students: 2100,
    rating: 4.7,
    level: "Intermediate",
    progress: 0,
    enrolled: false,
    featured: true,
  },
  {
    id: 4,
    title: "Arabic Language Mastery",
    description: "Learn classical and modern standard Arabic from beginner to advanced",
    category: "languages",
    instructor: "Dr. Ahmad Khalil",
    duration: "45 hours",
    lessons: 56,
    students: 780,
    rating: 4.9,
    level: "Beginner",
    progress: 20,
    enrolled: true,
    featured: false,
  },
  {
    id: 5,
    title: "Islamic History & Civilization",
    description: "Explore the rich history of Islamic civilization from the Prophet's era",
    category: "islamic",
    instructor: "Dr. Fatima Al-Rashid",
    duration: "35 hours",
    lessons: 42,
    students: 650,
    rating: 4.8,
    level: "All Levels",
    progress: 0,
    enrolled: false,
    featured: false,
  },
  {
    id: 6,
    title: "Physics Olympiad Training",
    description: "Prepare for IPhO with advanced physics concepts and problem-solving",
    category: "olympiad",
    instructor: "Prof. James Chen",
    duration: "55 hours",
    lessons: 68,
    students: 420,
    rating: 4.7,
    level: "Advanced",
    progress: 0,
    enrolled: false,
    featured: false,
  },
  {
    id: 7,
    title: "IELTS Academic Preparation",
    description: "Complete IELTS prep for all four skills: Reading, Writing, Listening, Speaking",
    category: "international",
    instructor: "Emma Williams",
    duration: "40 hours",
    lessons: 52,
    students: 1800,
    rating: 4.6,
    level: "Intermediate",
    progress: 0,
    enrolled: false,
    featured: false,
  },
  {
    id: 8,
    title: "Hadith Studies - Sahih Al-Bukhari",
    description: "Deep study of authentic Hadith with explanations and context",
    category: "islamic",
    instructor: "Sheikh Omar Suleiman",
    duration: "50 hours",
    lessons: 60,
    students: 920,
    rating: 4.9,
    level: "Intermediate",
    progress: 0,
    enrolled: false,
    featured: false,
  },
]

function getCategoryIcon(category: string) {
  const cat = categories.find((c) => c.id === category)
  return cat?.icon || BookOpen
}

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const enrolledCourses = filteredCourses.filter((course) => course.enrolled)
  const availableCourses = filteredCourses.filter((course) => !course.enrolled)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Courses</h1>
          <p className="text-muted-foreground">Browse and manage your enrolled courses</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search courses..." 
              className="w-full pl-9 md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              {category.name}
            </Button>
          )
        })}
      </div>

      <Tabs defaultValue="enrolled">
        <TabsList>
          <TabsTrigger value="enrolled">
            My Courses ({enrolledCourses.length})
          </TabsTrigger>
          <TabsTrigger value="explore">
            Explore ({availableCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="enrolled" className="mt-6">
          {enrolledCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map((course) => {
                const CategoryIcon = getCategoryIcon(course.category)
                return (
                  <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon className="h-16 w-16 text-primary/40" />
                      </div>
                      {course.featured && (
                        <Badge className="absolute right-3 top-3 gap-1 bg-accent text-accent-foreground">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary" className="mb-2">
                          {course.level}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-accent">
                          <Star className="h-4 w-4 fill-current" />
                          {course.rating}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-1 text-lg">
                        <Link href={`/dashboard/courses/${course.id}`} className="hover:text-primary">
                          {course.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {course.lessons} lessons
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full gap-2" asChild>
                        <Link href={`/dashboard/courses/${course.id}`}>
                          <Play className="h-4 w-4" />
                          Continue Learning
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <Card className="py-12 text-center">
              <CardContent>
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 font-semibold">No enrolled courses</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Start learning by enrolling in a course
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="explore" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map((course) => {
              const CategoryIcon = getCategoryIcon(course.category)
              return (
                <Card key={course.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 bg-gradient-to-br from-secondary to-secondary/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                    {course.featured && (
                      <Badge className="absolute right-3 top-3 gap-1 bg-accent text-accent-foreground">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        {course.rating}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1 text-lg">
                      <Link href={`/dashboard/courses/${course.id}`} className="hover:text-primary">
                        {course.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      By {course.instructor}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={`/dashboard/courses/${course.id}`}>
                        View Course
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
