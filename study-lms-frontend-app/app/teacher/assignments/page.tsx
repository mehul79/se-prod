"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Upload, Target, FileText, Plus } from "lucide-react"
import type { Assignment } from "@/types"
import { useToast } from "@/hooks/use-toast"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export default function TeacherAssignmentsPage() {
  const { toast } = useToast()
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isUploadingFile, setIsUploadingFile] = useState(false)
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null)
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subjectId: "sub1",
    deadline: "",
    totalMarks: "",
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(`${API_URL}/api/assignments`)
        if (!res.ok) throw new Error("Failed to load assignments")
        const data = (await res.json()) as Assignment[]
        if (!cancelled) setAssignments(data)
      } catch (e) {
        console.error(e)
        if (!cancelled) setError("Could not load assignments from server")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingFile(true)
    try {
      const body = new FormData()
      body.append("file", file)

      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body,
      })
      if (!res.ok) throw new Error("Upload failed")
      const json = (await res.json()) as { url: string; originalName: string }

      setUploadedFileUrl(json.url)
      setUploadedFileName(json.originalName)
      toast({ title: "File uploaded", description: json.originalName })
    } catch (e) {
      console.error(e)
      toast({ title: "Upload failed", description: "Could not upload file", variant: "destructive" })
    } finally {
      setIsUploadingFile(false)
      e.target.value = ""
    }
  }

  const handleCreateAssignment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        subjectId: formData.subjectId,
        deadline: formData.deadline,
        totalMarks: Number.parseInt(formData.totalMarks || "0"),
        attachments: uploadedFileUrl ? [uploadedFileUrl] : [],
      }

      const res = await fetch(`${API_URL}/api/assignments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to create assignment")

      const created = (await res.json()) as Assignment
      setAssignments((prev) => [...prev, created])
      toast({ title: "Assignment created", description: created.title })

      setIsDialogOpen(false)
      setFormData({ title: "", description: "", subjectId: "sub1", deadline: "", totalMarks: "" })
      setUploadedFileUrl(null)
      setUploadedFileName(null)
    } catch (e) {
      console.error(e)
      setError("Could not create assignment")
      toast({ title: "Error", description: "Could not create assignment", variant: "destructive" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
          <p className="text-muted-foreground">Create and manage course assignments</p>
          {error && <p className="text-xs text-destructive mt-1">{error}</p>}
        </div>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setIsDialogOpen(true)}
          disabled={isLoading}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total Assignments</p>
                <p className="text-2xl font-bold text-foreground">{assignments.length}</p>
              </div>
              <Target className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments list */}
      <div className="space-y-3">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{assignment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{assignment.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {assignment.deadline}
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" /> {assignment.totalMarks} marks
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" /> {assignment.attachments.length} files
                    </span>
                  </div>
                </div>
                {assignment.attachments.length > 0 && (
                  <a
                    href={assignment.attachments[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs underline text-primary"
                  >
                    View file
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        {assignments.length === 0 && !isLoading && (
          <p className="text-sm text-muted-foreground">No assignments yet. Create your first assignment above.</p>
        )}
      </div>

      {/* Create Assignment Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Create Assignment</DialogTitle>
            <DialogDescription>Create a new assignment and attach reference files</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateAssignment} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Title</label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Assignment title"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Assignment description"
                className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-sm"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Deadline</label>
                <Input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Total Marks</label>
                <Input
                  type="number"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleInputChange}
                  placeholder="20"
                  required
                />
              </div>
            </div>

            {/* File upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Attachment</label>
              <label className="border-2 border-dashed border-border/30 rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-center cursor-pointer hover:border-primary/40">
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {uploadedFileName ? uploadedFileName : "Click to choose file (optional)"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={isUploadingFile}
                />
              </label>
              {isUploadingFile && (
                <p className="text-xs text-muted-foreground">Uploading file...</p>
              )}
            </div>

            <div className="flex gap-2 pt-4 border-t border-border/30">
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                Create Assignment
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
