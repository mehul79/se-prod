"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import { LayoutDashboard, Calendar, BookOpen, FileText, CheckCircle, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const menuItems = [
  { href: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/teacher/lab-scheduling", label: "Lab Scheduling", icon: Calendar },
  { href: "/teacher/study-materials", label: "Study Materials", icon: BookOpen },
  { href: "/teacher/create-assessment", label: "Create Assessment", icon: FileText },
  { href: "/teacher/evaluate-results", label: "Evaluate Results", icon: CheckCircle },
]

export function TeacherSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const logout = useAuthStore((state) => state.logout)
  const currentUser = useAuthStore((state) => state.currentUser)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 md:hidden p-2 hover:bg-muted rounded-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/teacher/dashboard" className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 bg-sidebar-primary rounded flex items-center justify-center text-sidebar-primary-foreground text-sm font-bold">
              T
            </div>
            <span>StudyLMS</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors mb-1${
                  pathname === href
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* User Info & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border bg-sidebar/50">
          <div className="mb-3 px-2">
            <p className="text-xs text-sidebar-foreground/80 font-medium">{currentUser?.name}</p>
            <p className="text-xs text-sidebar-foreground/60">{currentUser?.email}</p>
          </div>
          <Button
            onClick={() => {
              logout()
              window.location.href = "/login"
            }}
            variant="ghost"
            className="w-full text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Spacing on desktop */}
      <div className="hidden md:block w-64" />
    </>
  )
}
