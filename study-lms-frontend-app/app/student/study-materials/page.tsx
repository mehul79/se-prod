"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockSubjects, mockStudyMaterials } from "@/lib/mock-data"
import { FileText, Video, Download, BookOpen, Presentation } from "lucide-react"

const typeIcons = {
  pdf: FileText,
  video: Video,
  document: BookOpen,
  presentation: Presentation,
}

const typeBadgeVariant: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  pdf: "default",
  video: "secondary",
  document: "outline",
  presentation: "secondary",
}

export default function StudyMaterialsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

  const materials = selectedSubject
    ? mockStudyMaterials.filter((m) => m.subjectId === selectedSubject)
    : mockStudyMaterials

  const subjects = mockSubjects

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Study Materials</h1>
        <p className="text-muted-foreground">Download course materials, notes, and resources</p>
      </div>

      {/* Subject Filters */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Filter by Subject</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedSubject === null ? "default" : "outline"}
            onClick={() => setSelectedSubject(null)}
            className="text-xs"
          >
            All Subjects
          </Button>
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              onClick={() => setSelectedSubject(subject.id)}
              className="text-xs"
            >
              {subject.code}
            </Button>
          ))}
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.map((material) => {
          const IconComponent = typeIcons[material.type]
          const subject = subjects.find((s) => s.id === material.subjectId)

          return (
            <Card key={material.id} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-base line-clamp-2">{material.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">{subject?.code}</CardDescription>
                  </div>
                  <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">{material.description}</p>

                {/* Metadata */}
                <div className="space-y-2 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Uploaded by</span>
                    <span className="font-medium text-foreground">{material.uploadedBy}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-medium text-foreground">{material.fileSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium text-foreground">{material.uploadedDate}</span>
                  </div>
                </div>

                {/* Type Badge & Download */}
                <div className="flex items-center justify-between pt-2 border-t border-border/30">
                  <Badge variant={typeBadgeVariant[material.type]} className="text-xs">
                    {material.type.toUpperCase()}
                  </Badge>
                  <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/5">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
