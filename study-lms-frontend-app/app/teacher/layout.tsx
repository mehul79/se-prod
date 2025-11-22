"use client"

import type React from "react"

import { useAuthStore } from "@/store/auth-store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { TeacherSidebar } from "@/components/teacher-sidebar"
import { TeacherTopnav } from "@/components/teacher-topnav"

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const currentUser = useAuthStore((state) => state.currentUser)

  useEffect(() => {
    if (!isAuthenticated || currentUser?.role !== "Teacher") {
      router.push("/login")
    }
  }, [isAuthenticated, currentUser, router])

  if (!isAuthenticated || currentUser?.role !== "Teacher") {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TeacherTopnav />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
