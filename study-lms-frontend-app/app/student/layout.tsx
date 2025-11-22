"use client"

import type React from "react"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { StudentSidebar } from "@/components/student-sidebar"
import { StudentTopnav } from "@/components/student-topnav"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const currentUser = useAuthStore((state) => state.currentUser)

  useEffect(() => {
    if (!isAuthenticated || currentUser?.role !== "Student") {
      router.push("/login")
    }
  }, [isAuthenticated, currentUser, router])

  if (!isAuthenticated || currentUser?.role !== "Student") {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <StudentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <StudentTopnav />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
