import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, Zap, BookOpen, Clock, Users, Award, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Achievements | Muallimin Global Islamic Academy",
  description: "View your badges and achievements.",
}

const stats = [
  { label: "Total Badges", value: "24", earned: 12 },
  { label: "Total XP", value: "4,850" },
  { label: "Current Level", value: "15" },
  { label: "Global Rank", value: "#342" },
]

const badges = {
  learning: [
    { name: "First Steps", description: "Complete your first lesson", icon: BookOpen, earned: true, xp: 50 },
    { name: "Quick Learner", description: "Complete 10 lessons", icon: Zap, earned: true, xp: 100 },
    { name: "Course Master", description: "Complete your first course", icon: Award, earned: true, xp: 200 },
    { name: "Knowledge Seeker", description: "Complete 5 courses", icon: Target, earned: false, xp: 500, progress: 60 },
    { name: "Scholar", description: "Complete 10 courses", icon: Star, earned: false, xp: 1000, progress: 30 },
    { name: "Expert", description: "Complete 25 courses", icon: Trophy, earned: false, xp: 2500, progress: 12 },
  ],
  consistency: [
    { name: "Daily Learner", description: "Learn for 7 consecutive days", icon: Clock, earned: true, xp: 150 },
    { name: "Dedicated", description: "Learn for 30 consecutive days", icon: Target, earned: true, xp: 500 },
    { name: "Unstoppable", description: "Learn for 100 consecutive days", icon: Zap, earned: false, xp: 1500, progress: 45 },
    { name: "Legendary", description: "Learn for 365 consecutive days", icon: Star, earned: false, xp: 5000, progress: 12 },
  ],
  community: [
    { name: "Friendly Face", description: "Introduce yourself in the forum", icon: Users, earned: true, xp: 25 },
    { name: "Helpful Hand", description: "Answer 10 questions in forums", icon: Users, earned: true, xp: 100 },
    { name: "Community Leader", description: "Answer 50 questions", icon: Star, earned: false, xp: 300, progress: 40 },
    { name: "Forum Champion", description: "Receive 100 helpful votes", icon: Trophy, earned: false, xp: 500, progress: 25 },
  ],
  quizzes: [
    { name: "Quiz Taker", description: "Complete your first quiz", icon: Target, earned: true, xp: 50 },
    { name: "Perfect Score", description: "Score 100% on a quiz", icon: Star, earned: true, xp: 100 },
    { name: "Quiz Master", description: "Score 100% on 10 quizzes", icon: Award, earned: false, xp: 500, progress: 30 },
    { name: "Quiz Legend", description: "Score 100% on 50 quizzes", icon: Trophy, earned: false, xp: 2000, progress: 6 },
  ],
}

export default function AchievementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Achievements</h1>
        <p className="text-muted-foreground">Track your badges and milestones.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-3xl font-bold">{stat.value}</p>
              {"earned" in stat && (
                <p className="mt-1 text-xs text-muted-foreground">{stat.earned} earned</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Level Progress */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                15
              </div>
              <div>
                <h3 className="font-semibold">Level 15 - Advanced Learner</h3>
                <p className="text-sm text-muted-foreground">1,150 XP to next level</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">4,850 / 6,000 XP</p>
            </div>
          </div>
          <Progress value={81} className="mt-4 h-3" />
        </CardContent>
      </Card>

      {/* Badges */}
      <Tabs defaultValue="learning">
        <TabsList>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="consistency">Consistency</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        </TabsList>

        {Object.entries(badges).map(([category, categoryBadges]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryBadges.map((badge) => (
                <Card
                  key={badge.name}
                  className={cn(
                    "transition-all",
                    badge.earned ? "border-primary/20 bg-primary/5" : "opacity-70"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        badge.earned ? "bg-primary/10" : "bg-muted"
                      )}>
                        {badge.earned ? (
                          <badge.icon className="h-6 w-6 text-primary" />
                        ) : (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{badge.name}</h3>
                        <p className="text-sm text-muted-foreground">{badge.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Star className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">{badge.xp} XP</span>
                        </div>
                        {!badge.earned && "progress" in badge && (
                          <div className="mt-3">
                            <Progress value={badge.progress} className="h-2" />
                            <p className="mt-1 text-xs text-muted-foreground">{badge.progress}% complete</p>
                          </div>
                        )}
                        {badge.earned && (
                          <p className="mt-2 text-xs text-primary font-medium">Earned</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
