"use client"

import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Assignment {
  id: string
  title: string
  subject: string
  description: string
  dueDate: string
  score?: number
}

interface StudentData {
  name: string
  email: string
  rollNumber: string
  branch: string
}

export default function StudentDashboard() {
  const router = useRouter()
  const supabase = createClient()

  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [assignments, setAssignments] = useState<Assignment[]>([])

  useEffect(() => {
    const loadData = async () => {
      // 1️⃣ Get authenticated user
      const { data: auth } = await supabase.auth.getUser()
      const user = auth.user
      if (!user) {
        router.push("/student/login")
        return
      }

      // 2️⃣ Get profile
      const { data: profile, error: profileErr } = await supabase
        .from("profiles")
        .select("full_name, roll_number, branch_code")
        .eq("id", user.id)
        .single()

      if (profileErr || !profile) {
        router.push("/student/login")
        return
      }

      setStudentData({
        name: profile.full_name,
        email: user.email!,
        rollNumber: profile.roll_number,
        branch: profile.branch_code,
      })

      // 3️⃣ Get assignments & submission status for the student
      // 3️⃣ Fetch assignments & submission status for the student
      const { data: assignmentRows, error: assignmentErr } = await supabase
        .from("assignments")
        .select(
          `
            id,
            title,
            description,
            subject_code,
            due_at,
            file_path
          `
        )
        .eq("branch_code", profile.branch_code)  // match student branch
        .order("deadline", { ascending: true })
      
      if (!assignmentRows) {
        setAssignments([])
        return
      }
      
      const mapped: Assignment[] = assignmentRows.map((row: any) => {
      
        return {
          id: row.id,
          title: row.title,
          description: row.description,
          subject: row.subject_code,
          dueDate: row.due_at,
        }
      })
      
      setAssignments(mapped)
    }

    loadData()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (!studentData) return null

  return (
    <div className="min-h-screen blueprint-grid">
      <div className="construction-line absolute top-0 left-0 right-0 h-px" />

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">STUDENT DASHBOARD</h1>
            <div className="h-1 w-24 bg-accent" />
          </div>
          <button
            onClick={handleLogout}
            className="border-2 border-foreground/30 px-4 py-2 font-mono text-xs hover:border-foreground transition-colors duration-200"
          >
            LOGOUT
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">STUDENT ID</p>
            <p className="text-2xl font-bold font-mono">{studentData.rollNumber}</p>
          </div>
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">BRANCH</p>
            <p className="text-2xl font-bold font-mono">{studentData.branch}</p>
          </div>
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">NAME</p>
            <p className="text-2xl font-bold font-mono">{studentData.name}</p>
          </div>
        </div>

        <div className="mb-8">
          <Link
            href="/student/assignments"
            className="inline-block border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 font-mono text-sm font-semibold transition-colors duration-200"
          >
            SUBMIT ASSIGNMENT
          </Link>
        </div>

        <div className="border-2 border-foreground/20 p-6">
          <h2 className="text-2xl font-bold font-mono mb-6">ASSIGNMENT RESULTS</h2>

          <div className="space-y-3">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="border-2 border-foreground/10 p-4 hover:border-accent/30 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-mono font-bold text-sm">{assignment.title}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{assignment.subject}</p>
                  </div>
                  <span
                    className={`font-mono text-xs px-3 py-1 border-2 ${
                      assignment.status === "evaluated"
                        ? "border-accent text-accent bg-accent/5"
                        : assignment.status === "submitted"
                          ? "border-foreground/40 text-foreground/60"
                          : "border-foreground/30 text-foreground/50"
                    }`}
                  >
                    {assignment.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-foreground/10">
                  <p className="text-xs font-mono text-muted-foreground">Due: {assignment.dueDate}</p>
                  {assignment.score !== undefined && (
                    <p className="font-mono font-bold text-lg">
                      <span className="text-accent">{assignment.score}</span>
                      <span className="text-muted-foreground">/100</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
