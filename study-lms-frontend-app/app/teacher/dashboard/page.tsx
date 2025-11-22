"use client"

import { useAuthStore } from "@/store/auth-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockLabEvents, mockAssignments, mockAssessments } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Users, FileText, Calendar, CheckCircle, DollarSign, CreditCard } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  const currentUser = useAuthStore((state) => state.currentUser)

  // Mock data for payroll/fees
  const salaryData = [
    { month: "Jan", amount: 50000 },
    { month: "Feb", amount: 50000 },
    { month: "Mar", amount: 50000 },
    { month: "Apr", amount: 50000 },
    { month: "May", amount: 52000 },
    { month: "Jun", amount: 52000 },
  ]

  const feesCollected = [
    { month: "Jan", fees: 180000 },
    { month: "Feb", fees: 195000 },
    { month: "Mar", fees: 210000 },
    { month: "Apr", fees: 205000 },
    { month: "May", fees: 220000 },
    { month: "Jun", fees: 215000 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, Prof. {currentUser?.name}!</h1>
        <p className="text-muted-foreground">Manage your courses, assessments, and academic activities</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Courses</p>
                <p className="text-3xl font-bold text-primary">3</p>
              </div>
              <FileText className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Students</p>
                <p className="text-3xl font-bold text-accent">145</p>
              </div>
              <Users className="w-8 h-8 text-accent/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Labs</p>
                <p className="text-3xl font-bold text-foreground">{mockLabEvents.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-foreground/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Assessments</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{mockAssessments.length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/60 dark:text-green-400/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-destructive">{mockAssignments.length}</p>
              </div>
              <FileText className="w-8 h-8 text-destructive/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Labs */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Upcoming Labs</CardTitle>
            <CardDescription>Scheduled lab events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockLabEvents.slice(0, 4).map((lab) => (
                <div
                  key={lab.id}
                  className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border/30"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{lab.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {lab.date} • {lab.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {lab.enrolled}/{lab.capacity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Assessments */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Active Assessments</CardTitle>
            <CardDescription>Currently published assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAssessments.slice(0, 4).map((assess) => (
                <div
                  key={assess.id}
                  className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg border border-border/30"
                >
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{assess.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {assess.duration}m • {assess.totalMarks} marks
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {assess.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Salary Overview */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Salary Overview
            </CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Bar dataKey="amount" fill="var(--color-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fees Collected */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Fees Collection Trend
            </CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={feesCollected}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                />
                <Line
                  type="monotone"
                  dataKey="fees"
                  stroke="var(--color-accent)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-primary)", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/teacher/lab-scheduling">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Lab
              </Link>
            </Button>
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/teacher/study-materials">
                <FileText className="w-4 h-4 mr-2" />
                Upload Materials
              </Link>
            </Button>
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/teacher/create-assessment">
                <CheckCircle className="w-4 h-4 mr-2" />
                Create Assessment
              </Link>
            </Button>
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/teacher/evaluate-results">
                <Users className="w-4 h-4 mr-2" />
                Grade Submissions
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
