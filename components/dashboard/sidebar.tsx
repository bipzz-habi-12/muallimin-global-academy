"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BookOpen, 
  LayoutDashboard, 
  GraduationCap, 
  Trophy, 
  BarChart3, 
  Award, 
  Bookmark, 
  Video, 
  Users, 
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ChevronDown
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
      { name: "Live Classes", href: "/dashboard/live-classes", icon: Video },
    ],
  },
  {
    title: "Learning",
    items: [
      { name: "Progress", href: "/dashboard/progress", icon: BarChart3 },
      { name: "Achievements", href: "/dashboard/achievements", icon: Award },
      { name: "Leaderboard", href: "/dashboard/leaderboard", icon: Trophy },
      { name: "Bookmarks", href: "/dashboard/bookmarks", icon: Bookmark },
    ],
  },
  {
    title: "Programs",
    items: [
      { name: "Islamic Studies", href: "/dashboard/islamic-studies", icon: GraduationCap },
      { name: "Olympiad Training", href: "/dashboard/olympiad", icon: Trophy },
      { name: "Exam Prep", href: "/dashboard/exams", icon: BookOpen },
    ],
  },
  {
    title: "Community",
    items: [
      { name: "Forums", href: "/dashboard/community", icon: Users },
    ],
  },
]

const bottomNav = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help", href: "/faq", icon: HelpCircle },
]

function SidebarContent() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold">Muallimin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {navigation.map((section) => (
            <Collapsible key={section.title} defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">
                {section.title}
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </nav>

      {/* Bottom Nav */}
      <div className="border-t p-4">
        <ul className="space-y-1">
          {bottomNav.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-card lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
