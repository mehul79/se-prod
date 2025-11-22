"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/auth-store"
import type { Branch, Role, User } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MOCK_SUBJECTS, MOCK_BRANCHES } from "@/lib/mock-data"

export function SignupForm() {
  const router = useRouter()
  const { setAuth } = useAuthStore()

  const [role, setRole] = useState<Role | "">("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [rollNumber, setRollNumber] = useState("")
  const [branch, setBranch] = useState<Branch | "">("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  const [employeeId, setEmployeeId] = useState("")
  const [subjectsTaught, setSubjectsTaught] = useState<string[]>([])
  const [branchesTaught, setBranchesTaught] = useState<Branch[]>([])

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const validateForm = (): boolean => {
    if (!name.trim()) {
      setError("Name is required")
      return false
    }
    if (!email.trim()) {
      setError("Email is required")
      return false
    }
    if (!password) {
      setError("Password is required")
      return false
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return false
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    if (role === "student") {
      if (!rollNumber.trim()) {
        setError("Roll number is required")
        return false
      }
      if (!branch) {
        setError("Branch is required")
        return false
      }
      if (selectedSubjects.length === 0) {
        setError("Select at least one subject")
        return false
      }
      if (!email.endsWith("@thapar.edu")) {
        setError("Student email must end with @thapar.edu")
        return false
      }
    } else if (role === "teacher") {
      if (!employeeId.trim()) {
        setError("Employee ID is required")
        return false
      }
      if (subjectsTaught.length === 0) {
        setError("Select at least one subject")
        return false
      }
      if (branchesTaught.length === 0) {
        setError("Select at least one branch")
        return false
      }
    } else {
      setError("Select a role")
      return false
    }

    return true
  }

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId) ? prev.filter((id) => id !== subjectId) : [...prev, subjectId],
    )
  }

  const toggleTeacherSubject = (subjectId: string) => {
    setSubjectsTaught((prev) =>
      prev.includes(subjectId) ? prev.filter((id) => id !== subjectId) : [...prev, subjectId],
    )
  }

  const toggleBranch = (b: Branch) => {
    setBranchesTaught((prev) => (prev.includes(b) ? prev.filter((branch) => branch !== b) : [...prev, b]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) {
      return
    }

    setLoading(true)

    // Simulate processing delay
    setTimeout(() => {
      const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name,
        role,
        createdAt: new Date().toISOString(),
        ...(role === "student" && {
          studentData: {
            rollNumber,
            branch: branch as Branch,
            subjects: selectedSubjects,
          },
        }),
        ...(role === "teacher" && {
          teacherData: {
            employeeId,
            subjectsTaught,
            branchesTaught,
          },
        }),
      }

      setAuth(newUser)
      router.push("/home")
      setLoading(false)
    }, 500)
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Sign up as a Student or Teacher</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <Select value={role} onValueChange={(value) => setRole(value as Role)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={role === "student" ? "student@thapar.edu" : "teacher@example.com"}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>

          {role === "student" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Roll Number</label>
                <Input
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  placeholder="e.g., 20BCS001"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Branch</label>
                <Select value={branch} onValueChange={(value) => setBranch(value as Branch)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_BRANCHES.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Subjects</label>
                <div className="space-y-2 border rounded-lg p-3">
                  {MOCK_SUBJECTS.map((subject) => (
                    <label key={subject.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject.id)}
                        onChange={() => toggleSubject(subject.id)}
                        className="rounded"
                      />
                      <span className="text-sm">{subject.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {role === "teacher" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Employee ID</label>
                <Input
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="e.g., T001"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Subjects Taught</label>
                <div className="space-y-2 border rounded-lg p-3">
                  {MOCK_SUBJECTS.map((subject) => (
                    <label key={subject.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={subjectsTaught.includes(subject.id)}
                        onChange={() => toggleTeacherSubject(subject.id)}
                        className="rounded"
                      />
                      <span className="text-sm">{subject.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Branches Taught</label>
                <div className="space-y-2 border rounded-lg p-3">
                  {MOCK_BRANCHES.map((b) => (
                    <label key={b} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={branchesTaught.includes(b)}
                        onChange={() => toggleBranch(b)}
                        className="rounded"
                      />
                      <span className="text-sm">{b}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
