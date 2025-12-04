"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

interface Assignment {
  id: string
  title: string
  description: string
  subject_code: string
  branch_code: string
  due_at: string
  submission: number
}

interface TeacherData {
  name: string
  email: string
  employeeId: string
  department: string
}

export default function TeacherDashboard() {
  const router = useRouter()
  const supabase = createClient()

  const [teacherData, setTeacherData] = useState<TeacherData | null>(null)
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      // 1️⃣ Validate session
      const { data: auth } = await supabase.auth.getUser()
      const user = auth.user
      if (!user) {
        router.push("/teacher/login")
        return
      }

      // 2️⃣ Fetch teacher profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("full_name, employee_id, role")
        .eq("id", user.id)
        .single()

      if (profileError || !profile || profile.role !== "teacher") {
        router.push("/teacher/login")
        return
      }

      // 3️⃣ Fetch teacher branch
      const { data: branchData } = await supabase
        .from("teacher_branches")
        .select("branch_code")
        .eq("teacher_id", user.id)
        .maybeSingle()

      const department = branchData?.branch_code ?? "N/A"

      // 4️⃣ Fetch assignments
      const { data: assignmentRows } = await supabase
        .from("assignments")
        .select("id, title, description, subject_code, branch_code, due_at, submission")
        .eq("teacher_id", user.id)
        .order("created_at", { ascending: false })

      // 5️⃣ Update UI state
      setTeacherData({
        name: profile.full_name,
        email: user.email!,
        employeeId: profile.employee_id,
        department,
      })

      setAssignments(assignmentRows || [])
      setLoading(false)
    }

    loadData()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center text-sm font-mono">Loading...</div>
  if (!teacherData) return null
  return (
    <div className="min-h-screen blueprint-grid">
      <div className="construction-line absolute top-0 left-0 right-0 h-px" />

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">TEACHER DASHBOARD</h1>
            <div className="h-1 w-24 bg-accent" />
          </div>
          <button
            onClick={handleLogout}
            className="border-2 border-foreground/30 px-4 py-2 font-mono text-xs hover:border-foreground transition-colors duration-200"
          >
            LOGOUT
          </button>
        </div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">EMPLOYEE ID</p>
            <p className="text-2xl font-bold font-mono">{teacherData.employeeId}</p>
          </div>
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">DEPARTMENT</p>
            <p className="text-2xl font-bold font-mono">{teacherData.department}</p>
          </div>
          <div className="border-2 border-foreground/20 p-6">
            <p className="text-xs font-mono text-muted-foreground mb-2">ASSIGNMENTS</p>
            <p className="text-2xl font-bold font-mono">{assignments.length}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/teacher/upload-assignment"
            className="border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground px-6 py-4 font-mono text-sm font-semibold transition-colors duration-200 text-center"
          >
            CREATE ASSIGNMENT
          </Link>
          <Link
            href="/teacher/evaluate"
            className="border-2 border-foreground/30 px-6 py-4 font-mono text-sm font-semibold hover:border-foreground transition-colors duration-200 text-center"
          >
            EVALUATE SUBMISSIONS
          </Link>
        </div>

        {/* Assignments list */}
        <div className="border-2 border-foreground/20 p-6">
          <h2 className="text-2xl font-bold font-mono mb-6">YOUR ASSIGNMENTS</h2>

          <div className="space-y-3">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="border-2 border-foreground/10 p-4 hover:border-accent/30 transition-colors duration-200"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-sm">{assignment.title}</h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {assignment.subject_code} • {assignment.branch_code}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-accent text-lg ">{assignment.submission}</span>
                  <span className="text-xs text-muted-foreground font-mono ml-2">submissions</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t-2 border-foreground/10">
                  {/* 🔥 updated field */}
                  <p className="text-xs font-mono text-muted-foreground">
                    Due: {new Date(assignment.due_at).toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={`/teacher/edit-assignment?id=${assignment.id}`}
                      className="text-xs font-mono text-accent hover:underline"
                    >
                      EDIT
                    </Link>
                    <Link
                      href={`/teacher/evaluate?assignment=${assignment.id}`}
                      className="text-xs font-mono text-accent hover:underline"
                    >
                      EVALUATE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
