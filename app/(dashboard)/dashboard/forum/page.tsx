"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MessageSquare, 
  Search, 
  Plus, 
  ThumbsUp, 
  MessageCircle, 
  Eye,
  Clock,
  TrendingUp,
  Pin,
  Filter,
  BookOpen,
  Calculator,
  Globe,
  Users,
  Star,
  ChevronRight
} from "lucide-react"

const categories = [
  { id: "all", name: "All Topics", icon: MessageSquare, count: 1250 },
  { id: "islamic", name: "Islamic Studies", icon: BookOpen, count: 425 },
  { id: "olympiad", name: "Olympiad Training", icon: Calculator, count: 380 },
  { id: "exams", name: "International Exams", icon: Globe, count: 290 },
  { id: "general", name: "General Discussion", icon: Users, count: 155 },
]

const threads = [
  {
    id: 1,
    title: "Tips for memorizing Surah Al-Baqarah efficiently?",
    category: "islamic",
    author: "Ahmad K.",
    avatar: "AK",
    content: "I'm currently working on memorizing Surah Al-Baqarah and finding it challenging. Any tips from those who have completed it?",
    replies: 24,
    views: 456,
    likes: 38,
    lastActivity: "2 hours ago",
    pinned: true,
    solved: false,
  },
  {
    id: 2,
    title: "IMO 2023 Problem 3 Discussion",
    category: "olympiad",
    author: "Maria L.",
    avatar: "ML",
    content: "Let's discuss the approach for Problem 3 from IMO 2023. I found a solution using number theory...",
    replies: 45,
    views: 892,
    likes: 67,
    lastActivity: "5 hours ago",
    pinned: true,
    solved: true,
  },
  {
    id: 3,
    title: "SAT Math: Quadratic Equations Strategies",
    category: "exams",
    author: "Chen W.",
    avatar: "CW",
    content: "What are your go-to strategies for solving quadratic equation problems quickly on the SAT?",
    replies: 18,
    views: 234,
    likes: 22,
    lastActivity: "8 hours ago",
    pinned: false,
    solved: false,
  },
  {
    id: 4,
    title: "Understanding Tajweed: Noon Sakinah Rules",
    category: "islamic",
    author: "Fatima A.",
    avatar: "FA",
    content: "Can someone explain the difference between Idgham and Ikhfa in simpler terms?",
    replies: 12,
    views: 178,
    likes: 15,
    lastActivity: "1 day ago",
    pinned: false,
    solved: true,
  },
  {
    id: 5,
    title: "Physics Olympiad: Mechanics Problem Set",
    category: "olympiad",
    author: "James P.",
    avatar: "JP",
    content: "Sharing some challenging mechanics problems I've collected. Let's solve them together!",
    replies: 31,
    views: 567,
    likes: 45,
    lastActivity: "1 day ago",
    pinned: false,
    solved: false,
  },
  {
    id: 6,
    title: "IELTS Writing Task 2: Common Topics",
    category: "exams",
    author: "Sarah M.",
    avatar: "SM",
    content: "I've compiled a list of common IELTS Writing Task 2 topics. Hope this helps!",
    replies: 28,
    views: 412,
    likes: 52,
    lastActivity: "2 days ago",
    pinned: false,
    solved: false,
  },
]

const topContributors = [
  { name: "Sheikh Abdullah", role: "Instructor", posts: 156, avatar: "SA" },
  { name: "Ahmad K.", role: "Student", posts: 89, avatar: "AK" },
  { name: "Maria L.", role: "Student", posts: 76, avatar: "ML" },
  { name: "Prof. Muhammad", role: "Instructor", posts: 68, avatar: "PM" },
  { name: "Fatima A.", role: "Student", posts: 54, avatar: "FA" },
]

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredThreads = threads.filter((thread) => {
    const matchesSearch = thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || thread.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find((c) => c.id === categoryId)
    return cat?.icon || MessageSquare
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Community Forum</h1>
          <p className="text-muted-foreground">Connect, discuss, and learn together</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Discussion
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search discussions..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Categories Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-3">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <Badge variant={selectedCategory === category.id ? "secondary" : "outline"}>
                      {category.count}
                    </Badge>
                  </button>
                )
              })}
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topContributors.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{user.posts} posts</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="recent">
            <TabsList>
              <TabsTrigger value="recent" className="gap-2">
                <Clock className="h-4 w-4" />
                Recent
              </TabsTrigger>
              <TabsTrigger value="trending" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="unanswered" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Unanswered
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="mt-6">
              <Card>
                <CardContent className="divide-y p-0">
                  {filteredThreads.map((thread) => {
                    const CategoryIcon = getCategoryIcon(thread.category)
                    return (
                      <Link
                        key={thread.id}
                        href={`/dashboard/forum/${thread.id}`}
                        className="flex gap-4 p-4 transition-colors hover:bg-muted/50"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{thread.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                {thread.pinned && (
                                  <Pin className="h-4 w-4 text-primary" />
                                )}
                                <h3 className="font-medium hover:text-primary">
                                  {thread.title}
                                </h3>
                                {thread.solved && (
                                  <Badge variant="default" className="bg-primary text-xs">
                                    Solved
                                  </Badge>
                                )}
                              </div>
                              <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                                {thread.content}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <CategoryIcon className="h-3 w-3" />
                              {categories.find((c) => c.id === thread.category)?.name}
                            </span>
                            <span>by {thread.author}</span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {thread.replies}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {thread.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              {thread.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {thread.lastActivity}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="mt-2 h-5 w-5 text-muted-foreground" />
                      </Link>
                    )
                  })}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trending" className="mt-6">
              <Card>
                <CardContent className="divide-y p-0">
                  {filteredThreads
                    .sort((a, b) => b.views - a.views)
                    .map((thread) => {
                      const CategoryIcon = getCategoryIcon(thread.category)
                      return (
                        <Link
                          key={thread.id}
                          href={`/dashboard/forum/${thread.id}`}
                          className="flex gap-4 p-4 transition-colors hover:bg-muted/50"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{thread.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-accent" />
                              <h3 className="font-medium hover:text-primary">
                                {thread.title}
                              </h3>
                              {thread.solved && (
                                <Badge variant="default" className="bg-primary text-xs">
                                  Solved
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CategoryIcon className="h-3 w-3" />
                                {categories.find((c) => c.id === thread.category)?.name}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {thread.views} views
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {thread.likes}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="mt-2 h-5 w-5 text-muted-foreground" />
                        </Link>
                      )
                    })}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unanswered" className="mt-6">
              <Card>
                <CardContent className="divide-y p-0">
                  {filteredThreads
                    .filter((t) => t.replies === 0 || !t.solved)
                    .map((thread) => {
                      const CategoryIcon = getCategoryIcon(thread.category)
                      return (
                        <Link
                          key={thread.id}
                          href={`/dashboard/forum/${thread.id}`}
                          className="flex gap-4 p-4 transition-colors hover:bg-muted/50"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{thread.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <h3 className="font-medium hover:text-primary">
                              {thread.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CategoryIcon className="h-3 w-3" />
                                {categories.find((c) => c.id === thread.category)?.name}
                              </span>
                              <span>by {thread.author}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {thread.lastActivity}
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            Answer
                          </Button>
                        </Link>
                      )
                    })}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
