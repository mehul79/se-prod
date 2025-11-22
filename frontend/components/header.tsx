"use client"

import { useRouter, usePathname } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import { useThemeStore } from "@/store/theme-store"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { user, logout, isAuthenticated } = useAuthStore()
  const { isDark, toggleTheme } = useThemeStore()

  const hideHeader = pathname === "/login" || pathname === "/signup"

  if (hideHeader) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <header className="border-b bg-card">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={isAuthenticated ? "/home" : "/login"} className="font-bold text-lg">
          EduHub
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated && user && (
            <>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{user.name}</span>
                <span className="mx-1">•</span>
                <span className="capitalize">{user.role}</span>
              </div>

              {pathname !== "/dashboard" && (
                <Button variant="outline" size="sm" onClick={() => router.push("/dashboard")}>
                  Dashboard
                </Button>
              )}

              <Button variant="ghost" size="sm" onClick={toggleTheme} title="Theme toggle (placeholder)">
                {isDark ? "☀️" : "🌙"}
              </Button>

              <div className="text-xs text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded">Dev: Role Toggle</span>
              </div>

              <Button variant="destructive" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
