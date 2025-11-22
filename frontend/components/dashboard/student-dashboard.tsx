"use client"

import type { User } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface StudentDashboardProps {
  user: User
}

// Mock enrolled subjects with statuses
const mockSubjects = [
  { id: "cs101", name: "Data Structures", enrolled: true, grade: "A" },
  { id: "cs102", name: "Algorithms", enrolled: true, grade: "B+" },
  { id: "cs103", name: "Database Systems", enrolled: false, grade: null },
]

// Mock upcoming evaluations
const mockEvaluations = [
  { id: "eval1", subject: "Data Structures", date: "2025-11-25", type: "Quiz" },
  { id: "eval2", subject: "Algorithms", date: "2025-11-28", type: "Midterm" },
  { id: "eval3", subject: "Operating Systems", date: "2025-12-05", type: "Assignment" },
]

export function StudentDashboard({ user }: StudentDashboardProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Roll Number</p>
              <p className="font-medium">{user.studentData?.rollNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Branch</p>
              <p className="font-medium">{user.studentData?.branch}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enrolled Subjects</CardTitle>
          <CardDescription>Your current courses and grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockSubjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{subject.name}</p>
                  <p className="text-sm text-muted-foreground">{subject.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  {subject.enrolled ? (
                    <Badge variant="default">Enrolled</Badge>
                  ) : (
                    <Badge variant="outline">Not Enrolled</Badge>
                  )}
                  {subject.grade && <Badge variant="secondary">{subject.grade}</Badge>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Evaluations</CardTitle>
          <CardDescription>Important dates and assessments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockEvaluations.map((evaluation) => (
              <div key={evaluation.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{evaluation.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {evaluation.type} • {evaluation.date}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
