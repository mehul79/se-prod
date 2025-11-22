"use client"

import type { User } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TeacherDashboardProps {
  user: User
}

// Mock classes taught
const mockClasses = [
  { id: "class1", subject: "Data Structures", branch: "COPC", students: 45 },
  { id: "class2", subject: "Algorithms", branch: "COE", students: 38 },
]

// Mock materials to upload
const mockMaterials = [
  { id: "mat1", subject: "Data Structures", type: "Lecture Slides", date: "2025-11-20" },
  { id: "mat2", subject: "Algorithms", type: "Assignment", date: "2025-11-18" },
]

export function TeacherDashboard({ user }: TeacherDashboardProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Employee ID</p>
              <p className="font-medium">{user.teacherData?.employeeId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Subjects Taught</p>
              <p className="font-medium">{user.teacherData?.subjectsTaught.length || 0} subjects</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Branches</p>
              <p className="font-medium">{user.teacherData?.branchesTaught.join(", ")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create Assessment</CardTitle>
          <CardDescription>Build and manage evaluations for your classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockClasses.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{cls.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {cls.branch} • {cls.students} students
                  </p>
                </div>
                <Button size="sm">Create Assessment</Button>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-transparent" variant="outline">
            + New Class
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Material</CardTitle>
          <CardDescription>Share resources with your students</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockMaterials.map((material) => (
              <div key={material.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">{material.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {material.type} • {material.date}
                  </p>
                </div>
                <Badge variant="outline">{material.type}</Badge>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4">+ Upload Material</Button>
        </CardContent>
      </Card>
    </div>
  )
}
