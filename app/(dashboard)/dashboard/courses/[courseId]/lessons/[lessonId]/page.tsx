"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  ArrowLeft,
  ArrowRight,
  BookOpen, 
  Clock, 
  Play,
  Pause,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Download,
  FileText,
  MessageSquare,
  ThumbsUp,
  Share2,
  Volume2,
  Maximize,
  Settings,
  ChevronRight,
  Lock
} from "lucide-react"

const lessonData = {
  id: 12,
  title: "Iqlab (Conversion)",
  description: "Learn about the Iqlab rule in Tajweed, where Noon Sakinah or Tanween is converted to a Meem sound when followed by the letter Ba.",
  duration: "18 min",
  type: "video",
  completed: false,
  module: {
    id: 3,
    title: "Module 3: Noon Sakinah & Tanween Rules",
  },
  course: {
    id: 1,
    title: "Quran Memorization & Tajweed",
  },
  content: `
    <h2>What is Iqlab?</h2>
    <p>Iqlab (إقلاب) literally means "to convert" or "to change". In Tajweed, it refers to the conversion of Noon Sakinah (نْ) or Tanween (ـًـٍـٌ) into a hidden Meem (م) sound when followed by the letter Ba (ب).</p>
    
    <h2>The Rule</h2>
    <p>When Noon Sakinah or Tanween is followed by the letter Ba (ب), the Noon sound is changed to a Meem sound, and the Meem is hidden (Ikhfa) with a ghunna (nasalization) for approximately 2 counts.</p>
    
    <h2>Examples from the Quran</h2>
    <ul>
      <li>أَنۢبِئْهُم - "Anbi'hum" becomes "Ambi'hum"</li>
      <li>مِنۢ بَعْدِ - "Min ba'di" becomes "Mim ba'di"</li>
      <li>سَمِيعٌۢ بَصِيرٌ - "Samee'un baseer" becomes "Samee'um baseer"</li>
    </ul>
    
    <h2>Why This Rule?</h2>
    <p>The conversion happens because the Noon and Ba have distant articulation points, making it difficult to pronounce them consecutively. By converting to Meem, which shares the same articulation point as Ba (the lips), the transition becomes smoother.</p>
  `,
  resources: [
    { id: 1, title: "Iqlab Practice Sheet", type: "PDF", size: "1.2 MB" },
    { id: 2, title: "Audio Examples", type: "MP3", size: "2.8 MB" },
  ],
  notes: [],
  nextLesson: {
    id: 13,
    title: "Ikhfa (Hiding)",
    duration: "22 min",
  },
  prevLesson: {
    id: 11,
    title: "Idgham (Merging)",
    duration: "20 min",
  },
  moduleProgress: {
    current: 3,
    total: 5,
  },
}

const moduleLessons = [
  { id: 10, title: "Introduction to Noon Sakinah", duration: "15 min", completed: true },
  { id: 11, title: "Idgham (Merging)", duration: "20 min", completed: true },
  { id: 12, title: "Iqlab (Conversion)", duration: "18 min", completed: false, current: true },
  { id: 13, title: "Ikhfa (Hiding)", duration: "22 min", completed: false },
  { id: 14, title: "Izhar (Clarity)", duration: "20 min", completed: false },
]

const comments = [
  {
    id: 1,
    user: "Ahmad K.",
    avatar: "AK",
    content: "This explanation is very clear. I finally understand the difference between Iqlab and Ikhfa!",
    time: "2 days ago",
    likes: 12,
  },
  {
    id: 2,
    user: "Fatima R.",
    avatar: "FR",
    content: "Could you please explain more about the ghunna duration in Iqlab? Is it the same as in Idgham?",
    time: "1 day ago",
    likes: 5,
    reply: {
      user: "Sheikh Abdullah",
      avatar: "SA",
      content: "Great question! Yes, the ghunna in Iqlab is held for approximately 2 counts, similar to Idgham with ghunna. Practice maintaining this duration consistently.",
      time: "1 day ago",
    },
  },
]

export default function LessonPage() {
  const params = useParams()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [note, setNote] = useState("")
  const [isCompleted, setIsCompleted] = useState(lessonData.completed)

  const lesson = lessonData // In real app, fetch based on params

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-6 p-6">
          {/* Navigation */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/dashboard/courses" className="hover:text-foreground">
              Courses
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/dashboard/courses/${params.courseId}`} className="hover:text-foreground">
              {lesson.course.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{lesson.title}</span>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video overflow-hidden rounded-xl bg-foreground/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="h-16 w-16 rounded-full"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="ml-1 h-8 w-8" />
                )}
              </Button>
            </div>
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <Progress value={35} className="mb-3 h-1" />
              <div className="flex items-center justify-between text-sm text-white">
                <div className="flex items-center gap-4">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <span>6:18 / 18:00</span>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="mb-2">{lesson.module.title}</Badge>
                <h1 className="text-2xl font-bold">{lesson.title}</h1>
                <p className="mt-2 text-muted-foreground">{lesson.description}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-4 w-4 text-primary" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                  {isBookmarked ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {lesson.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                Lesson {lesson.moduleProgress.current} of {lesson.moduleProgress.total}
              </span>
            </div>
          </div>

          {/* Lesson Content Tabs */}
          <Tabs defaultValue="content">
            <TabsList>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="notes">My Notes</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="mt-6">
              <Card>
                <CardContent className="prose prose-sm max-w-none pt-6 dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Resources</CardTitle>
                  <CardDescription>Download materials for this lesson</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lesson.resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
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

            <TabsContent value="notes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Notes</CardTitle>
                  <CardDescription>Take notes while watching this lesson</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Write your notes here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="min-h-[200px]"
                  />
                  <Button>Save Notes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussion" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion</CardTitle>
                  <CardDescription>Ask questions and discuss with others</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium">
                          {comment.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-sm text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="mt-1 text-sm">{comment.content}</p>
                          <div className="mt-2 flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                              <ThumbsUp className="h-4 w-4" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              Reply
                            </Button>
                          </div>
                          {comment.reply && (
                            <div className="ml-6 mt-4 flex gap-3 rounded-lg bg-muted/50 p-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                                {comment.reply.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{comment.reply.user}</span>
                                  <Badge variant="secondary" className="text-xs">Instructor</Badge>
                                  <span className="text-sm text-muted-foreground">{comment.reply.time}</span>
                                </div>
                                <p className="mt-1 text-sm">{comment.reply.content}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <Textarea placeholder="Ask a question or share your thoughts..." />
                    <Button className="mt-2">Post Comment</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between border-t pt-6">
            {lesson.prevLesson ? (
              <Button variant="outline" asChild className="gap-2">
                <Link href={`/dashboard/courses/${params.courseId}/lessons/${lesson.prevLesson.id}`}>
                  <ArrowLeft className="h-4 w-4" />
                  Previous: {lesson.prevLesson.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            <Button
              variant={isCompleted ? "secondary" : "default"}
              className="gap-2"
              onClick={() => setIsCompleted(!isCompleted)}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </Button>
            {lesson.nextLesson ? (
              <Button asChild className="gap-2">
                <Link href={`/dashboard/courses/${params.courseId}/lessons/${lesson.nextLesson.id}`}>
                  Next: {lesson.nextLesson.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      {/* Sidebar - Module Lessons */}
      <div className="hidden w-80 border-l lg:block">
        <div className="p-4">
          <h3 className="font-semibold">{lesson.module.title}</h3>
          <p className="text-sm text-muted-foreground">
            {moduleLessons.filter(l => l.completed).length}/{moduleLessons.length} completed
          </p>
        </div>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="space-y-1 p-2">
            {moduleLessons.map((moduleLesson) => (
              <Link
                key={moduleLesson.id}
                href={`/dashboard/courses/${params.courseId}/lessons/${moduleLesson.id}`}
                className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                  moduleLesson.current
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                  moduleLesson.completed
                    ? "bg-primary text-primary-foreground"
                    : moduleLesson.current
                      ? "border-2 border-primary"
                      : "bg-muted"
                }`}>
                  {moduleLesson.completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    moduleLessons.indexOf(moduleLesson) + 1
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{moduleLesson.title}</p>
                  <p className="text-xs text-muted-foreground">{moduleLesson.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
