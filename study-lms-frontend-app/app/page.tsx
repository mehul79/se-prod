"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"

export default function Home() {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const currentUser = useAuthStore((state) => state.currentUser)

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === "Student") {
        router.push("/student/dashboard")
      } else if (currentUser.role === "Teacher") {
        router.push("/teacher/dashboard")
      }
    } else {
      router.push("/login")
    }
  }, [isAuthenticated, currentUser, router])

  return null
}
