"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowLeft,
  ThumbsUp, 
  MessageCircle, 
  Eye,
  Clock,
  Share2,
  Bookmark,
  Flag,
  CheckCircle2,
  MoreHorizontal,
  ChevronUp,
  ChevronDown,
  Reply
} from "lucide-react"

const threadData = {
  id: 1,
  title: "Tips for memorizing Surah Al-Baqarah efficiently?",
  category: "Islamic Studies",
  author: {
    name: "Ahmad K.",
    avatar: "AK",
    role: "Student",
    joinDate: "Jan 2023",
    posts: 89,
  },
  content: `Assalamu Alaikum everyone,

I'm currently working on memorizing Surah Al-Baqarah and finding it quite challenging due to its length. I've been following a traditional method of memorizing a few verses each day, but I'm looking for more efficient strategies.

My current approach:
- Memorizing 5 verses daily
- Reviewing the previous day's verses
- Weekly revision of the entire portion memorized

I'm particularly struggling with:
1. Maintaining consistency
2. Distinguishing between similar verses
3. Long-term retention

Has anyone successfully completed Al-Baqarah's memorization? What strategies worked best for you? I'd love to hear about:
- Your daily routine
- Any specific techniques for difficult passages
- How you managed revision alongside new memorization

JazakAllah Khair in advance for your help!`,
  replies: 24,
  views: 456,
  likes: 38,
  createdAt: "2 days ago",
  pinned: true,
  solved: false,
}

const replies = [
  {
    id: 1,
    author: {
      name: "Sheikh Abdullah Hassan",
      avatar: "SA",
      role: "Instructor",
      badge: "Instructor",
    },
    content: `Wa Alaikum Assalam Ahmad,

MashaAllah, it's wonderful to see your dedication to memorizing Surah Al-Baqarah. Here are some proven strategies that have helped my students:

**1. The 3x3 Method:**
- Read the verse 3 times while looking
- Repeat 3 times from memory
- Move to the next verse

**2. Connection Technique:**
Understanding the meaning and context helps tremendously. Al-Baqarah has clear thematic sections - memorize by theme rather than just verse numbers.

**3. Revision Schedule:**
- Daily: Review yesterday's portion
- Weekly: Review the current week's portion
- Monthly: Full revision of everything memorized

**4. Similar Verse Strategy:**
Create a separate list of similar verses and practice them together. This helps your brain differentiate between them.

Feel free to reach out if you need specific guidance for any section. May Allah make it easy for you!`,
    likes: 45,
    createdAt: "1 day ago",
    isAccepted: false,
    replies: [
      {
        id: 11,
        author: { name: "Ahmad K.", avatar: "AK" },
        content: "JazakAllah Khair Sheikh! The 3x3 method sounds very practical. I'll start implementing it from today.",
        likes: 8,
        createdAt: "1 day ago",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Fatima A.",
      avatar: "FA",
      role: "Student",
    },
    content: `I completed Al-Baqarah alhamdulillah! What really helped me:

1. **Morning memorization** - Your mind is freshest after Fajr
2. **Listen to recitation** while doing other tasks (cooking, commuting)
3. **Teach what you've learned** - Even reciting to family helps retention
4. **Don't skip revision** - Even if it means memorizing fewer new verses

It took me 8 months with consistent effort. You can do it insha'Allah!`,
    likes: 32,
    createdAt: "1 day ago",
    isAccepted: false,
    replies: [],
  },
  {
    id: 3,
    author: {
      name: "Yusuf M.",
      avatar: "YM",
      role: "Student",
    },
    content: `One thing that helped me was using the Muallimin app's spaced repetition feature. It automatically schedules your revision based on how well you remember each portion.

Also, breaking the surah into juz' (parts) gave me smaller milestones to celebrate!`,
    likes: 18,
    createdAt: "23 hours ago",
    isAccepted: false,
    replies: [],
  },
]

export default function ThreadPage() {
  const params = useParams()
  const [replyContent, setReplyContent] = useState("")
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" asChild className="gap-2">
        <Link href="/dashboard/forum">
          <ArrowLeft className="h-4 w-4" />
          Back to Forum
        </Link>
      </Button>

      {/* Thread Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{threadData.category}</Badge>
                {threadData.pinned && (
                  <Badge variant="outline">Pinned</Badge>
                )}
              </div>
              <CardTitle className="text-2xl">{threadData.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {threadData.views} views
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {threadData.replies} replies
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {threadData.createdAt}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-12 w-12">
                <AvatarFallback>{threadData.author.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <span className="font-semibold">{threadData.likes}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="font-semibold">{threadData.author.name}</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {threadData.author.role} • {threadData.author.posts} posts
                  </span>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {threadData.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Replies */}
      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <MessageCircle className="h-5 w-5" />
          {replies.length} Replies
        </h2>

        {replies.map((reply) => (
          <Card key={reply.id} className={reply.isAccepted ? "border-primary" : ""}>
            {reply.isAccepted && (
              <div className="flex items-center gap-2 border-b bg-primary/5 px-4 py-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Accepted Answer
              </div>
            )}
            <CardContent className="pt-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{reply.author.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-semibold">{reply.likes}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{reply.author.name}</span>
                      {reply.author.badge && (
                        <Badge variant="secondary">{reply.author.badge}</Badge>
                      )}
                      <span className="text-sm text-muted-foreground">
                        • {reply.createdAt}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Reply className="h-4 w-4" />
                        Reply
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    {reply.content.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Nested Replies */}
                  {reply.replies && reply.replies.length > 0 && (
                    <div className="mt-4 space-y-4 border-l-2 border-muted pl-4">
                      {reply.replies.map((nestedReply) => (
                        <div key={nestedReply.id} className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {nestedReply.author.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold">
                                {nestedReply.author.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {nestedReply.createdAt}
                              </span>
                            </div>
                            <p className="mt-1 text-sm">{nestedReply.content}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-6 gap-1 px-2">
                                <ThumbsUp className="h-3 w-3" />
                                {nestedReply.likes}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reply Form */}
      <Card>
        <CardHeader>
          <CardTitle>Post a Reply</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Write your reply here... Markdown is supported."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-[150px]"
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Be respectful and follow community guidelines.
            </p>
            <Button disabled={!replyContent.trim()}>
              Post Reply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
