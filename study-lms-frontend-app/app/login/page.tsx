"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useAuthStore } from "@/store/auth-store"
import { ThemeToggle } from "@/components/theme-toggle"
import { AlertCircle, Mail, Lock, BookOpen, Users } from "lucide-react"
import type { UserRole } from "@/types"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("aditya.sharma@thapar.edu")
  const [password, setPassword] = useState("password")
  const [selectedRole, setSelectedRole] = useState<UserRole>("Student")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const login = useAuthStore((state) => state.login)

  // Demo credentials for different roles
  const demoCredentials: Record<UserRole, { email: string; name: string }> = {
    Student: { email: "aditya.sharma@thapar.edu", name: "Student Demo" },
    Teacher: { email: "priya.verma@thapar.edu", name: "Teacher Demo" },
  }

  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role)
    const demo = demoCredentials[role]
    setEmail(demo.email)
    setPassword("password")
    setError("")
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = login(email, password)
    if (result.success) {
      const user = useAuthStore.getState().currentUser
      if (user?.role === "Student") {
        router.push("/student/dashboard")
      } else {
        router.push("/teacher/dashboard")
      }
    } else {
      setError(result.error || "Login failed")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">

      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">StudyLMS</h1>
            <p className="text-muted-foreground">Thapar University Learning Platform</p>
          </div>

          {/* Role Selector */}
          <div className="flex gap-4 justify-center mb-6">
            <Button
              variant={selectedRole === "Student" ? "default" : "outline"}
              onClick={() => handleRoleChange("Student")}
              className="gap-2 px-6 py-2 h-auto bg-primary text-primary-foreground hover:bg-primary "
            >
              <BookOpen className="w-4 h-4" />
              <span>Student</span>
            </Button>
            <Button
              variant={selectedRole === "Teacher" ? "default" : "outline"}
              onClick={() => handleRoleChange("Teacher")}
              className="gap-2 px-6 py-2 h-auto"
            >
              <Users className="w-4 h-4" />
              <span>Teacher</span>
            </Button>
          </div>

          {/* Login Card */}
          <Card className="border-border/50">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Welcome Back</CardTitle>
                  <CardDescription>Sign in with your Thapar credentials</CardDescription>
                </div>
                <Badge variant="outline" className="gap-1">
                  {selectedRole === "Student" ? (
                    <>
                      <BookOpen className="w-3 h-3" />
                      Student
                    </>
                  ) : (
                    <>
                      <Users className="w-3 h-3" />
                      Teacher
                    </>
                  )}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="your.name@thapar.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-input border-border/30"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="At least 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-input border-border/30"
                      required
                    />
                  </div>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="destructive" className="border-destructive/30 bg-destructive/5">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 font-medium"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                {/* Demo Credentials Info */}
                <div className="p-4 bg-secondary/30 rounded-lg border border-border/30 space-y-2">
                  <p className="text-xs font-semibold text-foreground">Demo Credentials ({selectedRole})</p>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {demoCredentials[selectedRole].email}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                      <Lock className="w-3 h-3" />
                      password
                    </p>
                  </div>
                </div>
              </form>

              {/* Sign Up Link */}
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary font-medium hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs text-muted-foreground max-w-md mx-auto">
            <p>
              Use the role selector above to switch between Student and Teacher modes. Each role has different access
              permissions and features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
