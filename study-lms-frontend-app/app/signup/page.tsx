"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuthStore } from "@/store/auth-store"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Branch, UserRole } from "@/types"
import { AlertCircle, Mail, Lock, User, BookOpen, Users } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
    branch: "CSE" as Branch,
    role: "Student" as UserRole,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const signup = useAuthStore((state) => state.signup)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    const result = signup(
      formData.email,
      formData.password,
      formData.name,
      formData.rollNumber,
      formData.branch,
      formData.role,
    )

    if (result.success) {
      router.push(formData.role === "Student" ? "/student/dashboard" : "/teacher/dashboard")
    } else {
      setError(result.error || "Signup failed")
    }

    setLoading(false)
  }

  const branches: Branch[] = ["CSE", "ECE", "ME", "CE", "ELE"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
              <span className="text-xl font-bold text-primary-foreground">S</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">StudyLMS</h1>
            <p className="text-muted-foreground">Join Thapar Learning Platform</p>
          </div>

          <div className="flex gap-4 justify-center mb-6">
            <Button
              variant={formData.role === "Student" ? "default" : "outline"}
              onClick={() => setFormData((prev) => ({ ...prev, role: "Student" }))}
              className="gap-2 px-6 py-2 h-auto"
            >
              <BookOpen className="w-4 h-4" />
              <span>Student</span>
            </Button>
            <Button
              variant={formData.role === "Teacher" ? "default" : "outline"}
              onClick={() => setFormData((prev) => ({ ...prev, role: "Teacher" }))}
              className="gap-2 px-6 py-2 h-auto"
            >
              <Users className="w-4 h-4" />
              <span>Teacher</span>
            </Button>
          </div>

          {/* Signup Card */}
          <Card className="border-border/50">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <CardDescription>Sign up with your Thapar email</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-3">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 bg-input border-border/30"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="name@thapar.edu"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-input border-border/30"
                      required
                    />
                  </div>
                </div>

                {/* Branch Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Branch</label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, branch: value as Branch }))}
                  >
                    <SelectTrigger className="bg-input border-border/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch} value={branch}>
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Roll Number (Students only) */}
                {formData.role === "Student" && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Roll Number</label>
                    <Input
                      type="text"
                      name="rollNumber"
                      placeholder="UE20CS001"
                      value={formData.rollNumber}
                      onChange={handleInputChange}
                      className="bg-input border-border/30"
                      required
                    />
                  </div>
                )}

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="password"
                      name="password"
                      placeholder="At least 6 characters"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 bg-input border-border/30"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
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
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>

              {/* Login Link */}
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
