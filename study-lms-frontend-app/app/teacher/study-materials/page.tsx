"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockStudyMaterials, mockSubjects } from "@/lib/mock-data"
import { Upload, Edit, Trash2, FileText, Video, BookOpen } from "lucide-react"

const typeIcons = {
  pdf: FileText,
  video: Video,
  document: BookOpen,
  presentation: FileText,
}

export default function ManageStudyMaterialsPage() {
  const [materials, setMaterials] = useState(mockStudyMaterials)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredMaterials = selectedType ? materials.filter((m) => m.type === selectedType) : materials

  const handleDeleteMaterial = (id: string) => {
    setMaterials(materials.filter((m) => m.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Study Materials</h1>
          <p className="text-muted-foreground">Upload and manage course study materials</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Upload className="w-4 h-4 mr-2" />
          Upload Material
        </Button>
      </div>

      {/* Upload Area */}
      <Card className="border-border/50 border-2 border-dashed">
        <CardContent className="p-8 text-center">
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Upload New Material</h3>
          <p className="text-sm text-muted-foreground mb-4">Drag and drop files or click to browse</p>
          <Button variant="outline">Select Files</Button>
        </CardContent>
      </Card>

      {/* Filter */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Filter by Type</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedType === null ? "default" : "outline"}
            onClick={() => setSelectedType(null)}
            className="text-xs"
          >
            All Types
          </Button>
          {["pdf", "video", "document", "presentation"].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="text-xs"
            >
              {type.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      {/* Materials Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Uploaded Materials</CardTitle>
          <CardDescription>{filteredMaterials.length} files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Material</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Subject</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Type</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Size</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((material) => {
                  const subject = mockSubjects.find((s) => s.id === material.subjectId)
                  const IconComponent = typeIcons[material.type]

                  return (
                    <tr key={material.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">{material.title}</p>
                            <p className="text-xs text-muted-foreground">{material.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-foreground">{subject?.code}</span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="outline" className="text-xs">
                          {material.type.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{material.fileSize}</td>
                      <td className="text-center py-3 px-4 text-muted-foreground text-xs">{material.uploadedDate}</td>
                      <td className="text-right py-3 px-4">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive"
                            onClick={() => handleDeleteMaterial(material.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
