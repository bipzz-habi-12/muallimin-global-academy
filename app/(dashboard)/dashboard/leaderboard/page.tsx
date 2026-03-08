import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Leaderboard | Muallimin Global Islamic Academy",
  description: "See how you rank against other learners.",
}

const leaderboardData = {
  global: [
    { rank: 1, name: "Fatima Al-Rashid", country: "UAE", xp: 15420, change: "up" },
    { rank: 2, name: "Muhammad Chen", country: "Malaysia", xp: 14850, change: "up" },
    { rank: 3, name: "Aisha Johnson", country: "UK", xp: 14200, change: "down" },
    { rank: 4, name: "Omar Hassan", country: "Egypt", xp: 13980, change: "same" },
    { rank: 5, name: "Sarah Ibrahim", country: "Canada", xp: 13750, change: "up" },
    { rank: 6, name: "Yusuf Ahmed", country: "Nigeria", xp: 13500, change: "down" },
    { rank: 7, name: "Khadija Rahman", country: "Bangladesh", xp: 13200, change: "up" },
    { rank: 8, name: "Ali Khan", country: "Pakistan", xp: 12980, change: "same" },
    { rank: 9, name: "Maryam Osman", country: "Somalia", xp: 12750, change: "up" },
    { rank: 10, name: "Ibrahim Yusuf", country: "Indonesia", xp: 12500, change: "down" },
  ],
  weekly: [
    { rank: 1, name: "Muhammad Chen", country: "Malaysia", xp: 2850, change: "up" },
    { rank: 2, name: "Fatima Al-Rashid", country: "UAE", xp: 2720, change: "down" },
    { rank: 3, name: "Khadija Rahman", country: "Bangladesh", xp: 2580, change: "up" },
    { rank: 4, name: "Omar Hassan", country: "Egypt", xp: 2450, change: "up" },
    { rank: 5, name: "Sarah Ibrahim", country: "Canada", xp: 2380, change: "same" },
    { rank: 6, name: "Ahmad Hassan", country: "Malaysia", xp: 2250, isCurrentUser: true, change: "up" },
    { rank: 7, name: "Aisha Johnson", country: "UK", xp: 2100, change: "down" },
    { rank: 8, name: "Yusuf Ahmed", country: "Nigeria", xp: 1980, change: "up" },
    { rank: 9, name: "Ali Khan", country: "Pakistan", xp: 1850, change: "down" },
    { rank: 10, name: "Maryam Osman", country: "Somalia", xp: 1720, change: "same" },
  ],
  islamic: [
    { rank: 1, name: "Sheikh Abdullah", country: "Saudi Arabia", xp: 8500, change: "same" },
    { rank: 2, name: "Fatima Al-Rashid", country: "UAE", xp: 7800, change: "up" },
    { rank: 3, name: "Ustadh Ibrahim", country: "Egypt", xp: 7500, change: "up" },
    { rank: 4, name: "Hafiz Muhammad", country: "Pakistan", xp: 7200, change: "down" },
    { rank: 5, name: "Khadija Rahman", country: "Bangladesh", xp: 6980, change: "up" },
    { rank: 6, name: "Ahmad Hassan", country: "Malaysia", xp: 6750, isCurrentUser: true, change: "up" },
    { rank: 7, name: "Aisha Johnson", country: "UK", xp: 6500, change: "down" },
    { rank: 8, name: "Omar Hassan", country: "Egypt", xp: 6280, change: "same" },
    { rank: 9, name: "Sarah Ibrahim", country: "Canada", xp: 6100, change: "up" },
    { rank: 10, name: "Yusuf Ahmed", country: "Nigeria", xp: 5850, change: "down" },
  ],
  olympiad: [
    { rank: 1, name: "Prof. Ali Khan", country: "Pakistan", xp: 9200, change: "same" },
    { rank: 2, name: "Muhammad Chen", country: "Malaysia", xp: 8800, change: "up" },
    { rank: 3, name: "Sarah Ibrahim", country: "Canada", xp: 8500, change: "up" },
    { rank: 4, name: "Omar Hassan", country: "Egypt", xp: 8200, change: "down" },
    { rank: 5, name: "Yusuf Ahmed", country: "Nigeria", xp: 7980, change: "up" },
    { rank: 6, name: "Ibrahim Yusuf", country: "Indonesia", xp: 7750, change: "same" },
    { rank: 7, name: "Ahmad Hassan", country: "Malaysia", xp: 7500, isCurrentUser: true, change: "up" },
    { rank: 8, name: "Fatima Al-Rashid", country: "UAE", xp: 7200, change: "down" },
    { rank: 9, name: "Khadija Rahman", country: "Bangladesh", xp: 6980, change: "up" },
    { rank: 10, name: "Ali Mohammed", country: "Turkey", xp: 6750, change: "down" },
  ],
}

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
  if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
  if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />
  return <span className="text-sm font-medium text-muted-foreground">{rank}</span>
}

function ChangeIcon({ change }: { change: string }) {
  if (change === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
  if (change === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
  return <Minus className="h-4 w-4 text-muted-foreground" />
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against other learners worldwide.</p>
      </div>

      {/* Your Rank Card */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                342
              </div>
              <div>
                <h3 className="font-semibold">Your Global Rank</h3>
                <p className="text-sm text-muted-foreground">Top 3% of all learners</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">4,850 XP</p>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">+12 ranks this week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard Tabs */}
      <Tabs defaultValue="global">
        <TabsList>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="weekly">This Week</TabsTrigger>
          <TabsTrigger value="islamic">Islamic Studies</TabsTrigger>
          <TabsTrigger value="olympiad">Olympiad</TabsTrigger>
        </TabsList>

        {Object.entries(leaderboardData).map(([category, data]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {category === "global" && "Global Leaderboard"}
                  {category === "weekly" && "Weekly Leaderboard"}
                  {category === "islamic" && "Islamic Studies Leaderboard"}
                  {category === "olympiad" && "Olympiad Leaderboard"}
                </CardTitle>
                <CardDescription>
                  {category === "global" && "All-time rankings across all programs"}
                  {category === "weekly" && "Top performers this week"}
                  {category === "islamic" && "Rankings in Islamic Studies courses"}
                  {category === "olympiad" && "Rankings in Olympiad programs"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.map((user) => (
                    <div
                      key={`${category}-${user.rank}`}
                      className={cn(
                        "flex items-center gap-4 rounded-lg border p-4 transition-colors",
                        "isCurrentUser" in user && user.isCurrentUser
                          ? "border-primary/20 bg-primary/5"
                          : "hover:bg-muted/50"
                      )}
                    >
                      <div className="flex h-10 w-10 items-center justify-center">
                        <RankIcon rank={user.rank} />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            {user.name}
                            {"isCurrentUser" in user && user.isCurrentUser && " (You)"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.country}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{user.xp.toLocaleString()} XP</p>
                      </div>
                      <ChangeIcon change={user.change} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
