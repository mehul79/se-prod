"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockSemesterReports, mockStudentResults } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Award, TrendingUp, BookOpen, CheckCircle } from "lucide-react"

const gradeColors = {
  A: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "A-": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "B+": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  B: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "B-": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export default function ResultsPage() {
  const latestSemester = mockSemesterReports[0]
  const allResults = mockStudentResults

  const courseGradeData = latestSemester.courses.map((course) => ({
    name: course.courseName,
    gradePoint: course.gradePoint,
    credits: course.credits,
  }))

  const performanceData = allResults.map((result) => ({
    name: `Assessment ${result.assessmentId}`,
    obtained: result.marksObtained,
    total: result.totalMarks,
  }))

  const gradeDistribution = [
    { name: "A (9.0+)", value: latestSemester.courses.filter((c) => c.grade === "A").length },
    { name: "A- (8.5+)", value: latestSemester.courses.filter((c) => c.grade === "A-").length },
    { name: "B+ (8.0+)", value: latestSemester.courses.filter((c) => c.grade.includes("B")).length },
  ]

  const COLORS = ["var(--color-chart-1)", "var(--color-chart-2)", "var(--color-chart-3)"]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Academic Results</h1>
        <p className="text-muted-foreground">Your grades, GPA, and performance overview</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">CGPA</p>
                <p className="text-3xl font-bold text-primary">{latestSemester.cgpa.toFixed(2)}</p>
              </div>
              <Award className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">SGPA (Sem 4)</p>
                <p className="text-3xl font-bold text-accent">{latestSemester.sgpa.toFixed(2)}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Courses</p>
                <p className="text-3xl font-bold text-foreground">{latestSemester.courses.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-foreground/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Credits</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {latestSemester.enrolledCredits}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/60 dark:text-green-400/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Semester Courses */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Semester 4 Courses</CardTitle>
          <CardDescription>Your courses and grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Credits</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Grade</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                {latestSemester.courses.map((course, index) => (
                  <tr key={index} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{course.courseName}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{course.credits}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className={gradeColors[course.grade as keyof typeof gradeColors]}>{course.grade}</Badge>
                    </td>
                    <td className="text-center py-3 px-4 font-semibold text-foreground">{course.gradePoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>Breakdown of grades</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Course Performance */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Course Grade Points</CardTitle>
            <CardDescription>Comparison across courses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={courseGradeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Bar dataKey="gradePoint" fill="var(--color-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Results */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Assessment Results</CardTitle>
          <CardDescription>Your performance in assessments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {allResults.map((result) => (
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
    </div>
  )
}
