"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ArrowLeft,
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Play,
  CheckCircle2,
  Lock,
  Download,
  FileText,
  Video,
  MessageSquare,
  Award,
  Calendar,
  Globe
} from "lucide-react"

const courseData = {
  id: 1,
  title: "Quran Memorization & Tajweed",
  description: "Master Quranic recitation with proper Tajweed rules and memorization techniques. This comprehensive course covers all essential aspects of Quran memorization, from basic Arabic letter pronunciation to advanced Tajweed rules.",
  category: "Islamic Studies",
  instructor: {
    name: "Sheikh Abdullah Hassan",
    title: "Senior Quran Instructor",
    students: 5000,
    courses: 12,
    rating: 4.9,
  },
  duration: "40 hours",
  totalLessons: 48,
  completedLessons: 31,
  students: 1250,
  rating: 4.9,
  reviews: 324,
  level: "All Levels",
  language: "English, Arabic",
  lastUpdated: "January 2024",
  progress: 65,
  enrolled: true,
  features: [
    "48 video lessons with lifetime access",
    "Downloadable resources and worksheets",
    "Live weekly Q&A sessions",
    "Personal progress tracking",
    "Certificate of completion",
    "Community forum access",
  ],
  modules: [
    {
      id: 1,
      title: "Module 1: Introduction to Tajweed",
      lessons: [
        { id: 1, title: "What is Tajweed?", duration: "12 min", completed: true, type: "video" },
        { id: 2, title: "Importance of Tajweed", duration: "15 min", completed: true, type: "video" },
        { id: 3, title: "Arabic Alphabet Review", duration: "20 min", completed: true, type: "video" },
        { id: 4, title: "Practice: Letter Pronunciation", duration: "25 min", completed: true, type: "quiz" },
      ],
    },
    {
      id: 2,
      title: "Module 2: Makharij Al-Huruf",
      lessons: [
        { id: 5, title: "Points of Articulation Overview", duration: "18 min", completed: true, type: "video" },
        { id: 6, title: "Throat Letters (Halqi)", duration: "22 min", completed: true, type: "video" },
        { id: 7, title: "Tongue Letters (Lisani)", duration: "25 min", completed: true, type: "video" },
        { id: 8, title: "Lip Letters (Shafawi)", duration: "15 min", completed: true, type: "video" },
        { id: 9, title: "Practice Session", duration: "30 min", completed: false, type: "quiz" },
      ],
    },
    {
      id: 3,
      title: "Module 3: Noon Sakinah & Tanween Rules",
      lessons: [
        { id: 10, title: "Introduction to Noon Sakinah", duration: "15 min", completed: true, type: "video" },
        { id: 11, title: "Idgham (Merging)", duration: "20 min", completed: true, type: "video" },
        { id: 12, title: "Iqlab (Conversion)", duration: "18 min", completed: false, type: "video" },
        { id: 13, title: "Ikhfa (Hiding)", duration: "22 min", completed: false, type: "video" },
        { id: 14, title: "Izhar (Clarity)", duration: "20 min", completed: false, type: "video" },
      ],
    },
    {
      id: 4,
      title: "Module 4: Meem Sakinah Rules",
      lessons: [
        { id: 15, title: "Introduction to Meem Sakinah", duration: "12 min", completed: false, type: "video", locked: true },
        { id: 16, title: "Ikhfa Shafawi", duration: "18 min", completed: false, type: "video", locked: true },
        { id: 17, title: "Idgham Shafawi", duration: "15 min", completed: false, type: "video", locked: true },
        { id: 18, title: "Izhar Shafawi", duration: "20 min", completed: false, type: "video", locked: true },
      ],
    },
  ],
  resources: [
    { id: 1, title: "Tajweed Rules Cheat Sheet", type: "PDF", size: "2.4 MB" },
    { id: 2, title: "Arabic Letter Practice Worksheet", type: "PDF", size: "1.8 MB" },
    { id: 3, title: "Makharij Diagram", type: "PDF", size: "3.2 MB" },
    { id: 4, title: "Audio: Surah Al-Fatiha with Tajweed", type: "MP3", size: "4.5 MB" },
  ],
}

export default function CourseDetailPage() {
  const params = useParams()
  const [activeLesson, setActiveLesson] = useState<number | null>(null)
  
  const course = courseData // In real app, fetch based on params.courseId
  const nextLesson = course.modules
    .flatMap(m => m.lessons)
    .find(l => !l.completed && !("locked" in l && l.locked))

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" asChild className="gap-2">
        <Link href="/dashboard/courses">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </Button>

      {/* Course Header */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">{course.category}</Badge>
            <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
            <p className="mt-3 text-muted-foreground">{course.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-accent">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">{course.rating}</span>
              <span className="text-muted-foreground">({course.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              {course.students.toLocaleString()} students
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Globe className="h-4 w-4" />
              {course.language}
            </div>
          </div>

          {/* Instructor Card */}
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {course.instructor.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{course.instructor.name}</h3>
                <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                <div className="mt-1 flex gap-4 text-sm text-muted-foreground">
                  <span>{course.instructor.students.toLocaleString()} students</span>
                  <span>{course.instructor.courses} courses</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    {course.instructor.rating}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>
                {course.completedLessons} of {course.totalLessons} lessons completed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-3" />
              </div>

              {nextLesson && (
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="text-sm font-medium text-primary">Continue where you left off</p>
                  <p className="mt-1 text-sm text-muted-foreground">{nextLesson.title}</p>
                  <Button className="mt-3 w-full gap-2" asChild>
                    <Link href={`/dashboard/courses/${params.courseId}/lessons/${nextLesson.id}`}>
                      <Play className="h-4 w-4" />
                      Continue Learning
                    </Link>
                  </Button>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-medium">This course includes:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Content */}
      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsTrigger value="curriculum" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="resources" className="gap-2">
            <FileText className="h-4 w-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="discussions" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Discussions
          </TabsTrigger>
          <TabsTrigger value="certificate" className="gap-2">
            <Award className="h-4 w-4" />
            Certificate
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>
                {course.modules.length} modules • {course.totalLessons} lessons • {course.duration} total
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {course.modules.map((module) => {
                  const completedCount = module.lessons.filter(l => l.completed).length
                  const progress = (completedCount / module.lessons.length) * 100

                  return (
                    <AccordionItem key={module.id} value={`module-${module.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex w-full items-center gap-4 pr-4">
                          <div className="flex-1 text-left">
                            <p className="font-medium">{module.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {completedCount}/{module.lessons.length} lessons completed
                            </p>
                          </div>
                          <Progress value={progress} className="h-2 w-24" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-4 pt-2">
                          {module.lessons.map((lesson) => {
                            const isLocked = "locked" in lesson && lesson.locked
                            return (
                              <Link
                                key={lesson.id}
                                href={isLocked ? "#" : `/dashboard/courses/${params.courseId}/lessons/${lesson.id}`}
                                className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                                  isLocked 
                                    ? "cursor-not-allowed opacity-50" 
                                    : "hover:bg-muted"
                                }`}
                                onClick={(e) => isLocked && e.preventDefault()}
                              >
                                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                  lesson.completed 
                                    ? "bg-primary text-primary-foreground" 
                                    : isLocked 
                                      ? "bg-muted" 
                                      : "bg-secondary"
                                }`}>
                                  {lesson.completed ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : isLocked ? (
                                    <Lock className="h-4 w-4" />
                                  ) : lesson.type === "video" ? (
                                    <Video className="h-4 w-4" />
                                  ) : (
                                    <FileText className="h-4 w-4" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">{lesson.title}</p>
                                  <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                </div>
                                <Badge variant="secondary">{lesson.type}</Badge>
                              </Link>
                            )
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>
                Downloadable materials and supplementary content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {course.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussions" className="mt-6">
          <Card className="py-12 text-center">
            <CardContent>
              <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 font-semibold">Join the Discussion</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Connect with fellow students and ask questions
              </p>
              <Button className="mt-4" asChild>
                <Link href="/dashboard/forum">Go to Forum</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificate" className="mt-6">
          <Card className="py-12 text-center">
            <CardContent>
              <Award className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 font-semibold">Certificate of Completion</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete all lessons to earn your certificate
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <span>{course.completedLessons}/{course.totalLessons} lessons completed</span>
                <span className="text-muted-foreground">•</span>
                <span>{course.totalLessons - course.completedLessons} remaining</span>
              </div>
              <Progress value={course.progress} className="mx-auto mt-4 h-2 max-w-xs" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
