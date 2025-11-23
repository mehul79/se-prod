"use client"

import { useAuthStore } from "@/store/auth-store"
import { Bell, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function StudentTopnav() {
  const currentUser = useAuthStore((state) => state.currentUser)

  return (
    <header className="sticky top-0 bg-card border-b border-border z-20">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input type="search" placeholder="Search courses, materials..." className="bg-secondary border-border/30" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="w-5 h-5" />
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2 pl-2 md:pl-4 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              {currentUser?.name?.charAt(0) || "U"}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">{currentUser?.name}</p>
              <p className="text-xs text-muted-foreground">{currentUser?.rollNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
