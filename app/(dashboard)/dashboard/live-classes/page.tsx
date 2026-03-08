import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Bell, 
  Play,
  CalendarDays,
  ExternalLink
} from "lucide-react"

export const metadata = {
  title: "Live Classes | Muallimin Global Islamic Academy",
  description: "Join live classes and interactive sessions.",
}

const upcomingClasses = [
  {
    id: 1,
    title: "Advanced Tajweed Practice Session",
    instructor: "Sheikh Abdullah Hassan",
    course: "Quran Memorization & Tajweed",
    date: "Today",
    time: "3:00 PM - 4:30 PM",
    timeZone: "EST",
    status: "starting-soon",
    attendees: 45,
    maxAttendees: 100,
  },
  {
    id: 2,
    title: "IMO Problem Solving Workshop",
    instructor: "Prof. Muhammad Ali",
    course: "Mathematics Olympiad",
    date: "Tomorrow",
    time: "10:00 AM - 12:00 PM",
    timeZone: "EST",
    status: "scheduled",
    attendees: 32,
    maxAttendees: 50,
  },
  {
    id: 3,
    title: "SAT Math: Quadratic Functions",
    instructor: "Dr. Sarah Johnson",
    course: "SAT Preparation",
    date: "Wed, Mar 10",
    time: "2:00 PM - 3:30 PM",
    timeZone: "EST",
    status: "scheduled",
    attendees: 28,
    maxAttendees: 75,
  },
  {
    id: 4,
    title: "Arabic Conversation Practice",
    instructor: "Dr. Ahmad Khalil",
    course: "Arabic Language",
    date: "Thu, Mar 11",
    time: "4:00 PM - 5:00 PM",
    timeZone: "EST",
    status: "scheduled",
    attendees: 18,
    maxAttendees: 30,
  },
]

const pastClasses = [
  {
    id: 5,
    title: "Tajweed Rules: Noon Sakinah",
    instructor: "Sheikh Abdullah Hassan",
    course: "Quran Memorization & Tajweed",
    date: "Mar 5, 2024",
    duration: "1h 30m",
    attendees: 67,
    hasRecording: true,
  },
  {
    id: 6,
    title: "Number Theory Fundamentals",
    instructor: "Prof. Muhammad Ali",
    course: "Mathematics Olympiad",
    date: "Mar 3, 2024",
    duration: "2h",
    attendees: 42,
    hasRecording: true,
  },
  {
    id: 7,
    title: "SAT Reading Strategies",
    instructor: "Dr. Sarah Johnson",
    course: "SAT Preparation",
    date: "Mar 1, 2024",
    duration: "1h 45m",
    attendees: 55,
    hasRecording: true,
  },
]

export default function LiveClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Live Classes</h1>
          <p className="text-muted-foreground">Join interactive sessions with instructors</p>
        </div>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          View Calendar
        </Button>
      </div>

      {/* Live Now Banner */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Video className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute -right-1 -top-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
              </span>
            </div>
            <div>
              <Badge variant="destructive" className="mb-1">LIVE NOW</Badge>
              <h3 className="font-semibold">Advanced Tajweed Practice Session</h3>
              <p className="text-sm text-muted-foreground">with Sheikh Abdullah Hassan • 45 attending</p>
            </div>
          </div>
          <Button className="gap-2">
            <Play className="h-4 w-4" />
            Join Now
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="recordings">Recordings</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-4">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {classItem.instructor.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{classItem.title}</h3>
                        {classItem.status === "starting-soon" && (
                          <Badge variant="destructive">Starting Soon</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{classItem.instructor}</p>
                      <p className="text-sm text-muted-foreground">{classItem.course}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {classItem.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {classItem.time} {classItem.timeZone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {classItem.attendees}/{classItem.maxAttendees}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Bell className="h-4 w-4" />
                        Remind Me
                      </Button>
                      {classItem.status === "starting-soon" ? (
                        <Button size="sm" className="gap-1">
                          <Play className="h-4 w-4" />
                          Join Now
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary">
                          Register
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recordings" className="mt-6">
          <div className="grid gap-4">
            {pastClasses.map((classItem) => (
              <Card key={classItem.id}>
                <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <Video className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{classItem.title}</h3>
                      <p className="text-sm text-muted-foreground">{classItem.instructor}</p>
                      <p className="text-sm text-muted-foreground">{classItem.course}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {classItem.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {classItem.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {classItem.attendees} attended
                    </div>
                    {classItem.hasRecording && (
                      <Button size="sm" className="gap-1">
                        <Play className="h-4 w-4" />
                        Watch Recording
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Weekly Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Your regular live class schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { day: "Monday", classes: ["Tajweed Practice - 3:00 PM", "Arabic Grammar - 5:00 PM"] },
              { day: "Tuesday", classes: ["Math Olympiad - 10:00 AM"] },
              { day: "Wednesday", classes: ["SAT Prep - 2:00 PM", "Hadith Study - 4:30 PM"] },
              { day: "Thursday", classes: ["Arabic Conversation - 4:00 PM"] },
            ].map((schedule) => (
              <div key={schedule.day} className="rounded-lg border p-4">
                <h4 className="font-semibold">{schedule.day}</h4>
                <ul className="mt-2 space-y-1">
                  {schedule.classes.map((classItem, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {classItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
