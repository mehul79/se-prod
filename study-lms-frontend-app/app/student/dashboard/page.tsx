"use client"

import { useEffect, useMemo, useState } from "react"
import { useAuthStore } from "@/store/auth-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { CheckCircle, Clock, BookOpen, Trophy } from "lucide-react"
import Link from "next/link"
import type { SemesterReport, StudentResult } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

type DashboardPayload = {
  student: {
    id: string
    name: string
    email: string
    rollNumber?: string
    branch: string
  }
  semesterReports: SemesterReport[]
  cgpaTrend: { semester: string; cgpa: number }[]
  recentResults: StudentResult[]
  pendingAssignments: {
    id: string
    subjectId: string
    title: string
    description: string
    deadline: string
    totalMarks: number
  }[]
  subjects: {
    id: string
    code: string
    name: string
    credits: number
  }[]
}

export default function StudentDashboard() {
  const currentUser = useAuthStore((state) => state.currentUser)
  const [data, setData] = useState<DashboardPayload | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [overviewTab, setOverviewTab] = useState<"cgpa" | "semesters" | "subjects">("cgpa")

  useEffect(() => {
    if (!currentUser) return

    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const studentId = currentUser.id || "student1"
        const res = await fetch(`${API_URL}/api/student-dashboard/${studentId}`)
        if (!res.ok) {
          throw new Error("Failed to load dashboard")
        }
        const json = (await res.json()) as DashboardPayload
        if (!cancelled) setData(json)
      } catch (e) {
        console.error(e)
        if (!cancelled) setError("Could not load dashboard data")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [currentUser])

  const latestSemester = useMemo(() => {
    if (!data?.semesterReports?.length) return null
    // assume first is latest as seeded in backend
    return data.semesterReports[0]
  }, [data])

  const performanceData = useMemo(
    () =>
      data?.recentResults.map((r) => ({
        name: r.assessmentId,
        score: r.percentage,
        marks: r.totalMarks,
      })) ?? [],
    [data],
  )

  if (!currentUser) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Please log in to view your dashboard.</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {currentUser.name}!</h1>
        <p className="text-muted-foreground">Here's your learning overview</p>
        {isLoading && <p className="text-xs text-muted-foreground mt-1">Loading dashboard...</p>}
        {error && <p className="text-xs text-destructive mt-1">{error}</p>}
      </div>

      {/* Key Stats */}
      {latestSemester && data && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">CGPA</p>
                  <p className="text-3xl font-bold text-primary mt-2">{latestSemester.cgpa.toFixed(2)}</p>
                </div>
                <Trophy className="w-8 h-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">SGPA (Sem {latestSemester.semester})</p>
                  <p className="text-3xl font-bold text-accent mt-2">{latestSemester.sgpa.toFixed(2)}</p>
                </div>
                <BookOpen className="w-8 h-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Credits</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{latestSemester.enrolledCredits}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Pending</p>
                  <p className="text-3xl font-bold text-destructive mt-2">{data.pendingAssignments.length}</p>
                </div>
                <Clock className="w-8 h-8 text-destructive/60" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overview toggle: CGPA / Semesters / Subjects */}
      {data && (
        <Card className="border-border/50">
          <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Profile Overview</CardTitle>
              <CardDescription>CGPA across semesters, branch, and current subjects</CardDescription>
            </div>
            <div className="inline-flex gap-2 rounded-lg border border-border/40 p-1 bg-background/40">
              <Button
                size="sm"
                variant={overviewTab === "cgpa" ? "default" : "ghost"}
                onClick={() => setOverviewTab("cgpa")}
              >
                CGPA
              </Button>
              <Button
                size="sm"
                variant={overviewTab === "semesters" ? "default" : "ghost"}
                onClick={() => setOverviewTab("semesters")}
              >
                Semesters
              </Button>
              <Button
                size="sm"
                variant={overviewTab === "subjects" ? "default" : "ghost"}
                onClick={() => setOverviewTab("subjects")}
              >
                Subjects
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {overviewTab === "cgpa" && latestSemester && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Overall CGPA</p>
                  <p className="text-3xl font-bold text-primary">{latestSemester.cgpa.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">
                    Branch: {data.student.branch} • Roll: {data.student.rollNumber}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Last 4 semesters</p>
                  <ul className="text-sm text-foreground space-y-1">
                    {data.cgpaTrend.map((s) => (
                      <li key={s.semester} className="flex justify-between">
                        <span>{s.semester}</span>
                        <span className="font-medium">{s.cgpa.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {overviewTab === "semesters" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/40">
                      <th className="py-2 text-left text-muted-foreground">Semester</th>
                      <th className="py-2 text-left text-muted-foreground">Year</th>
                      <th className="py-2 text-left text-muted-foreground">SGPA</th>
                      <th className="py-2 text-left text-muted-foreground">CGPA</th>
                      <th className="py-2 text-left text-muted-foreground">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.semesterReports.map((sem) => (
                      <tr key={sem.semester} className="border-b border-border/20">
                        <td className="py-2">Sem {sem.semester}</td>
                        <td className="py-2">{sem.year}</td>
                        <td className="py-2">{sem.sgpa.toFixed(2)}</td>
                        <td className="py-2">{sem.cgpa.toFixed(2)}</td>
                        <td className="py-2">
                          {sem.enrolledCredits}/{sem.totalCredits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {overviewTab === "subjects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.subjects.map((subj) => (
                  <div
                    key={subj.id}
                    className="p-3 rounded-lg border border-border/30 bg-secondary/20 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-foreground">{subj.name}</p>
                      <p className="text-xs text-muted-foreground">{subj.code}</p>
                    </div>
                    <Badge variant="outline">{subj.credits} credits</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Results */}
        {data && (
          <Card className="border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Results</CardTitle>
              <CardDescription>Your latest assessment scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.recentResults.map((result) => (
                <div
                  key={result.id}
                  className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border/30"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Assessment {result.assessmentId}</p>
                    <p className="text-xs text-muted-foreground">{result.submittedAt}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">
                      {result.marksObtained}/{result.totalMarks}
                    </p>
                    <p className="text-xs text-muted-foreground">{result.percentage}%</p>
                  </div>
                </div>
              ))}
              {data.recentResults.length === 0 && (
                <p className="text-sm text-muted-foreground">No recent results available.</p>
              )}
            </div>
          </CardContent>
        </Card>
        )}

        {/* Performance Chart */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Bar dataKey="score" fill="var(--color-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CGPA Trend */}
        {data && (
          <Card className="border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle>CGPA Trend</CardTitle>
              <CardDescription>Your academic progress over semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data.cgpaTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="semester" />
                <YAxis domain={[7, 9]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Line
                  type="monotone"
                  dataKey="cgpa"
                  stroke="var(--color-accent)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        )}

        {/* Semester Report */}
        {latestSemester && (
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Semester {latestSemester.semester}</CardTitle>
              <CardDescription>{latestSemester.year}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Courses</p>
                <p className="font-bold text-foreground">{latestSemester.courses.length} courses</p>
            </div>
              <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Credits</p>
                <p className="font-bold text-foreground">
                  {latestSemester.enrolledCredits}/{latestSemester.totalCredits}
                </p>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                <Link href="/student/results">View Details</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Pending Work */}
      {data && (
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Pending Assignments</CardTitle>
            <CardDescription>Tasks that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.pendingAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{assignment.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">Deadline: {assignment.deadline}</p>
                </div>
                <Badge variant="outline">{assignment.totalMarks} marks</Badge>
              </div>
            ))}
            {data.pendingAssignments.length === 0 && (
              <p className="text-sm text-muted-foreground">No pending assignments. You're all caught up!</p>
            )}
          </div>
        </CardContent>
      </Card>
      )}
    </div>
  )
}
