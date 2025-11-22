"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const router = useRouter()
  const { user, logout, isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome, {user.name}!</CardTitle>
            <CardDescription>You are logged in as a {user.role === "student" ? "Student" : "Teacher"}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Role</p>
                <p className="font-medium capitalize">{user.role}</p>
              </div>

              {user.role === "student" && user.studentData && (
                <>
                  <div>
                    <p className="text-muted-foreground">Roll Number</p>
                    <p className="font-medium">{user.studentData.rollNumber}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Branch</p>
                    <p className="font-medium">{user.studentData.branch}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Enrolled Subjects</p>
                    <p className="font-medium">{user.studentData.subjects.join(", ")}</p>
                  </div>
                </>
              )}

              {user.role === "teacher" && user.teacherData && (
                <>
                  <div>
                    <p className="text-muted-foreground">Employee ID</p>
                    <p className="font-medium">{user.teacherData.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Branches Taught</p>
                    <p className="font-medium">{user.teacherData.branchesTaught.join(", ")}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Subjects Taught</p>
                    <p className="font-medium">{user.teacherData.subjectsTaught.join(", ")}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={() => router.push("/dashboard")} className="flex-1">
                Go to Dashboard
              </Button>
              <Button onClick={handleLogout} variant="destructive" className="flex-1">
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
