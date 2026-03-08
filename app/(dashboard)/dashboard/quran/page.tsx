"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  BookOpen, 
  Play, 
  Headphones, 
  Search,
  Bookmark,
  ChevronRight,
  Volume2,
  Repeat,
  Star,
  Clock,
  Target
} from "lucide-react"

const surahs = [
  { number: 1, name: "Al-Fatiha", arabicName: "الفاتحة", verses: 7, type: "Meccan", memorized: true, progress: 100 },
  { number: 2, name: "Al-Baqarah", arabicName: "البقرة", verses: 286, type: "Medinan", memorized: false, progress: 45 },
  { number: 3, name: "Ali 'Imran", arabicName: "آل عمران", verses: 200, type: "Medinan", memorized: false, progress: 20 },
  { number: 4, name: "An-Nisa", arabicName: "النساء", verses: 176, type: "Medinan", memorized: false, progress: 0 },
  { number: 5, name: "Al-Ma'idah", arabicName: "المائدة", verses: 120, type: "Medinan", memorized: false, progress: 0 },
  { number: 36, name: "Ya-Sin", arabicName: "يس", verses: 83, type: "Meccan", memorized: true, progress: 100 },
  { number: 55, name: "Ar-Rahman", arabicName: "الرحمن", verses: 78, type: "Medinan", memorized: true, progress: 100 },
  { number: 67, name: "Al-Mulk", arabicName: "الملك", verses: 30, type: "Meccan", memorized: true, progress: 100 },
  { number: 112, name: "Al-Ikhlas", arabicName: "الإخلاص", verses: 4, type: "Meccan", memorized: true, progress: 100 },
  { number: 113, name: "Al-Falaq", arabicName: "الفلق", verses: 5, type: "Meccan", memorized: true, progress: 100 },
  { number: 114, name: "An-Nas", arabicName: "الناس", verses: 6, type: "Meccan", memorized: true, progress: 100 },
]

const dailyGoals = {
  versesToday: 5,
  versesGoal: 10,
  reviewPages: 3,
  reviewGoal: 5,
  listeningMinutes: 25,
  listeningGoal: 30,
}

const recentActivity = [
  { surah: "Al-Baqarah", verses: "Verses 142-145", action: "Memorized", time: "2 hours ago" },
  { surah: "Ya-Sin", verses: "Full Surah", action: "Reviewed", time: "Yesterday" },
  { surah: "Al-Baqarah", verses: "Verses 138-141", action: "Memorized", time: "2 days ago" },
]

export default function QuranPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.arabicName.includes(searchQuery) ||
      surah.number.toString().includes(searchQuery)
  )

  const memorizedCount = surahs.filter((s) => s.memorized).length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Quran Memorization</h1>
          <p className="text-muted-foreground">Track your Hifz journey and daily recitation</p>
        </div>
        <Button className="gap-2">
          <Play className="h-4 w-4" />
          Continue Practice
        </Button>
      </div>

      {/* Daily Goals */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verses Today</p>
                <p className="text-2xl font-bold">{dailyGoals.versesToday}/{dailyGoals.versesGoal}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
            <Progress value={(dailyGoals.versesToday / dailyGoals.versesGoal) * 100} className="mt-4 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pages Reviewed</p>
                <p className="text-2xl font-bold">{dailyGoals.reviewPages}/{dailyGoals.reviewGoal}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Repeat className="h-6 w-6 text-accent" />
              </div>
            </div>
            <Progress value={(dailyGoals.reviewPages / dailyGoals.reviewGoal) * 100} className="mt-4 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Listening Time</p>
                <p className="text-2xl font-bold">{dailyGoals.listeningMinutes}/{dailyGoals.listeningGoal} min</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
            </div>
            <Progress value={(dailyGoals.listeningMinutes / dailyGoals.listeningGoal) * 100} className="mt-4 h-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="surahs">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList>
                <TabsTrigger value="surahs">All Surahs</TabsTrigger>
                <TabsTrigger value="memorized">Memorized ({memorizedCount})</TabsTrigger>
                <TabsTrigger value="progress">In Progress</TabsTrigger>
              </TabsList>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search surahs..."
                  className="pl-9 md:w-[200px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <TabsContent value="surahs" className="mt-6">
              <Card>
                <ScrollArea className="h-[500px]">
                  <div className="divide-y">
                    {filteredSurahs.map((surah) => (
                      <Link
                        key={surah.number}
                        href={`/dashboard/quran/${surah.number}`}
                        className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                          {surah.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{surah.name}</h3>
                            {surah.memorized && (
                              <Badge variant="secondary" className="gap-1">
                                <Star className="h-3 w-3" />
                                Memorized
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {surah.verses} verses • {surah.type}
                          </p>
                        </div>
                        <p className="font-serif text-xl text-muted-foreground">{surah.arabicName}</p>
                        {surah.progress > 0 && surah.progress < 100 && (
                          <div className="w-20">
                            <Progress value={surah.progress} className="h-2" />
                          </div>
                        )}
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>

            <TabsContent value="memorized" className="mt-6">
              <Card>
                <ScrollArea className="h-[500px]">
                  <div className="divide-y">
                    {filteredSurahs.filter(s => s.memorized).map((surah) => (
                      <Link
                        key={surah.number}
                        href={`/dashboard/quran/${surah.number}`}
                        className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
                          {surah.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{surah.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {surah.verses} verses • {surah.type}
                          </p>
                        </div>
                        <p className="font-serif text-xl text-muted-foreground">{surah.arabicName}</p>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Repeat className="h-4 w-4" />
                          Review
                        </Button>
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="mt-6">
              <Card>
                <ScrollArea className="h-[500px]">
                  <div className="divide-y">
                    {filteredSurahs.filter(s => s.progress > 0 && s.progress < 100).map((surah) => (
                      <Link
                        key={surah.number}
                        href={`/dashboard/quran/${surah.number}`}
                        className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 font-semibold text-accent">
                          {surah.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{surah.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {surah.verses} verses • {surah.progress}% complete
                          </p>
                        </div>
                        <div className="w-32">
                          <Progress value={surah.progress} className="h-2" />
                        </div>
                        <Button size="sm" className="gap-1">
                          <Play className="h-4 w-4" />
                          Continue
                        </Button>
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Memorization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Current Goal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-primary/5 p-4">
                <h4 className="font-semibold">Surah Al-Baqarah</h4>
                <p className="text-sm text-muted-foreground">Verses 142-150</p>
                <Progress value={45} className="mt-3 h-2" />
                <p className="mt-2 text-sm text-muted-foreground">45% of surah memorized</p>
              </div>
              <Button className="w-full gap-2">
                <Play className="h-4 w-4" />
                Continue Memorizing
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.surah}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.verses} • {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Volume2 className="h-5 w-5" />
                <span className="text-xs">Listen</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Repeat className="h-5 w-5" />
                <span className="text-xs">Review</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Bookmark className="h-5 w-5" />
                <span className="text-xs">Bookmarks</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Target className="h-5 w-5" />
                <span className="text-xs">Set Goal</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
