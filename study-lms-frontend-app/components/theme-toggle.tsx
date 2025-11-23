"use client"

import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

// ThemeToggle simplified: non-interactive light-theme indicator/button
export function ThemeToggle() {
  return (
    <Button variant="ghost" size="icon" className="text-muted-foreground">
      <Sun className="h-4 w-4" />
      <span className="sr-only">Light theme</span>
    </Button>
  )
}
