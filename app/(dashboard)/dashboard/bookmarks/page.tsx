import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Play, FileText, Video, BookOpen, Trash2 } from "lucide-react"

export const metadata = {
  title: "Bookmarks | Muallimin Global Islamic Academy",
  description: "Your saved lessons and resources.",
}

const bookmarks = {
  lessons: [
    {
      id: 1,
      title: "Understanding Tajweed Rules - Noon Sakinah",
      course: "Quran Memorization",
      duration: "15 min",
      savedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Number Theory Basics - Prime Numbers",
      course: "Mathematics Olympiad",
      duration: "25 min",
      savedAt: "1 day ago",
    },
    {
      id: 3,
      title: "SAT Math - Quadratic Equations",
      course: "SAT Preparation",
      duration: "20 min",
      savedAt: "3 days ago",
    },
    {
      id: 4,
      title: "Arabic Grammar - Verb Conjugation",
      course: "Arabic Language",
      duration: "30 min",
      savedAt: "1 week ago",
    },
  ],
  resources: [
    {
      id: 1,
      title: "Tajweed Rules Cheat Sheet",
      type: "PDF",
      course: "Quran Memorization",
      savedAt: "2 days ago",
    },
    {
      id: 2,
      title: "Olympiad Problem Set - Week 5",
      type: "PDF",
      course: "Mathematics Olympiad",
      savedAt: "4 days ago",
    },
    {
      id: 3,
      title: "SAT Vocabulary List",
      type: "PDF",
      course: "SAT Preparation",
      savedAt: "1 week ago",
    },
  ],
  videos: [
    {
      id: 1,
      title: "Live Tafsir Session - Surah Al-Fatiha",
      instructor: "Sheikh Abdullah Hassan",
      duration: "1h 15min",
      savedAt: "3 days ago",
    },
    {
      id: 2,
      title: "Problem Solving Workshop",
      instructor: "Prof. Muhammad Ali",
      duration: "2h",
      savedAt: "1 week ago",
    },
  ],
}

export default function BookmarksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Bookmarks</h1>
        <p className="text-muted-foreground">Your saved lessons and resources for quick access.</p>
      </div>

      <Tabs defaultValue="lessons">
        <TabsList>
          <TabsTrigger value="lessons" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Lessons ({bookmarks.lessons.length})
          </TabsTrigger>
          <TabsTrigger value="resources" className="gap-2">
            <FileText className="h-4 w-4" />
            Resources ({bookmarks.resources.length})
          </TabsTrigger>
          <TabsTrigger value="videos" className="gap-2">
            <Video className="h-4 w-4" />
            Videos ({bookmarks.videos.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Lessons</CardTitle>
              <CardDescription>Lessons you{"'"}ve bookmarked to watch later</CardDescription>
            </CardHeader>
            <CardContent>
              {bookmarks.lessons.length > 0 ? (
                <div className="space-y-4">
                  {bookmarks.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {lesson.course} • {lesson.duration}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">{lesson.savedAt}</span>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Watch
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Bookmark className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-4 font-semibold">No bookmarked lessons</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Save lessons to access them quickly later.
                  </p>
                  <Button className="mt-4" asChild>
                    <Link href="/dashboard/courses">Browse Courses</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Resources</CardTitle>
              <CardDescription>PDFs, notes, and study materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookmarks.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {resource.course} • {resource.type}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">{resource.savedAt}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Download
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Videos</CardTitle>
              <CardDescription>Recorded live sessions and lectures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookmarks.videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {video.instructor} • {video.duration}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">{video.savedAt}</span>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Play className="mr-2 h-4 w-4" />
                        Watch
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
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
