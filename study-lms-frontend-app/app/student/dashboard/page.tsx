"use client"

import { useAuthStore } from "@/store/auth-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockStudentResults, mockSemesterReports, mockAssignments } from "@/lib/mock-data"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { CheckCircle, Clock, BookOpen, Trophy } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const currentUser = useAuthStore((state) => state.currentUser)
  const latestSemester = mockSemesterReports[0]
  const recentResults = mockStudentResults.slice(0, 2)
  const pendingAssignments = mockAssignments.slice(0, 3)

  // Performance data for chart
  const performanceData = [
    { name: "Quiz", score: 90, marks: 10 },
    { name: "Mid Exam", score: 84, marks: 50 },
  ]

  // CGPA trend
  const cgpaTrend = [
    { semester: "S1", cgpa: 7.8 },
    { semester: "S2", cgpa: 8.1 },
    { semester: "S3", cgpa: 8.35 },
    { semester: "S4", cgpa: 8.56 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {currentUser?.name}!</h1>
        <p className="text-muted-foreground">Here's your learning overview</p>
      </div>

      {/* Key Stats */}
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
                <p className="text-sm text-muted-foreground font-medium">SGPA (Sem 4)</p>
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
                <p className="text-3xl font-bold text-destructive mt-2">{pendingAssignments.length}</p>
              </div>
              <Clock className="w-8 h-8 text-destructive/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Results */}
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Results</CardTitle>
            <CardDescription>Your latest assessment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentResults.map((result) => (
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
            </div>
          </CardContent>
        </Card>

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
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle>CGPA Trend</CardTitle>
            <CardDescription>Your academic progress over semesters</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cgpaTrend}>
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

        {/* Semester Report */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Semester 4</CardTitle>
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
      </div>

      {/* Pending Work */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Pending Assignments</CardTitle>
          <CardDescription>Tasks that need your attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingAssignments.map((assignment) => (
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
