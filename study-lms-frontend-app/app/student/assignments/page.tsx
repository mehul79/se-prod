"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Assignment } from "@/types"
import { Calendar, CheckCircle, Upload, FileText, Users, Target, User } from "lucide-react"
import { useAuthStore } from "@/store/auth-store"
import { useToast } from "@/hooks/use-toast"

const isOverdue = (deadline: string) => new Date(deadline) < new Date()

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export default function AssignmentsPage() {
  const { toast } = useToast()
  const currentUser = useAuthStore((s) => s.currentUser)
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)
  const [submissionType, setSubmissionType] = useState<"individual" | "group" | null>(null)
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement | null>(null)

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

  const handleOpenAssignment = (assignment: Assignment) => {
    setSelectedAssignment(assignment)
    setSubmissionType(null)
    setUploadedFiles([])
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || !files.length) return

    if (!selectedAssignment) return

    setIsSubmitting(true)
    const newUrls: string[] = []

    try {
      for (const file of Array.from(files)) {
        const body = new FormData()
        body.append("file", file)

        const res = await fetch(`${API_URL}/api/upload`, { method: "POST", body })
        if (!res.ok) throw new Error("Upload failed")
        const json = (await res.json()) as { url: string }
        newUrls.push(json.url)
      }

      setUploadedFiles((prev) => [...prev, ...newUrls])
      toast({ title: "Files uploaded", description: `${newUrls.length} file(s) ready for submission` })
    } catch (e) {
      console.error(e)
      toast({ title: "Upload failed", description: "Could not upload files", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
      e.target.value = ""
    }
  }

  const handleSubmitAssignment = async () => {
    if (!selectedAssignment) return
    if (!currentUser) {
      toast({ title: "Not logged in", description: "Please log in as a student", variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch(`${API_URL}/api/assignments/${selectedAssignment.id}/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: currentUser.id || "student1", files: uploadedFiles }),
      })
      if (!res.ok) throw new Error("Failed to submit")

      toast({ title: "Assignment submitted", description: selectedAssignment.title })
      setSelectedAssignment(null)
      setUploadedFiles([])
      setSubmissionType(null)
    } catch (e) {
      console.error(e)
      toast({ title: "Submission failed", description: "Could not submit assignment", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Assignments</h1>
        <p className="text-muted-foreground">Submit your coursework and track submissions</p>
      </div>

      {error && <p className="text-xs text-destructive mb-1">{error}</p>}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Pending</p>
                <p className="text-2xl font-bold text-foreground">{assignments.length}</p>
              </div>
              <Target className="w-8 h-8 text-destructive/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total Marks</p>
                <p className="text-2xl font-bold text-foreground">
                  {assignments.reduce((sum, a) => sum + a.totalMarks, 0)}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">Overdue</p>
                <p className="text-2xl font-bold text-destructive">
                  {assignments.filter((a) => isOverdue(a.deadline)).length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-destructive/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assignments List */}
      <div className="space-y-3">
        {assignments.map((assignment) => {
          const overdue = isOverdue(assignment.deadline)

          return (
            <Card
              key={assignment.id}
              className="border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => handleOpenAssignment(assignment)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {assignment.title}
                      </h3>
                      {overdue && (
                        <Badge variant="destructive" className="text-xs">
                          Overdue
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{assignment.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Deadline: {assignment.deadline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{assignment.totalMarks} marks</span>
                      </div>
                      {assignment.groupSize && assignment.groupSize > 1 && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Group ({assignment.groupSize})</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{assignment.attachments.length} files</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Assignment Detail Modal */}
      <Dialog open={selectedAssignment !== null} onOpenChange={() => setSelectedAssignment(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedAssignment && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl mb-2">{selectedAssignment.title}</DialogTitle>
                <DialogDescription>{selectedAssignment.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Deadline</p>
                    <p className="font-semibold text-foreground">{selectedAssignment.deadline}</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Total Marks</p>
                    <p className="font-semibold text-foreground">{selectedAssignment.totalMarks}</p>
                  </div>
                  {selectedAssignment.groupSize && selectedAssignment.groupSize > 1 && (
                    <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                      <p className="text-xs text-muted-foreground mb-1 font-medium">Group Size</p>
                      <p className="font-semibold text-foreground">{selectedAssignment.groupSize} members</p>
                    </div>
                  )}
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Created</p>
                    <p className="font-semibold text-foreground">{selectedAssignment.createdDate}</p>
                  </div>
                </div>

                {/* Submission Section */}
                {!submissionType ? (
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border/30 space-y-3">
                    <p className="font-semibold text-foreground">Select Submission Type</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        className="justify-start bg-transparent"
                        onClick={() => setSubmissionType("individual")}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Individual
                      </Button>
                      {selectedAssignment.groupSize && selectedAssignment.groupSize > 1 && (
                        <Button
                          variant="outline"
                          className="justify-start bg-transparent"
                          onClick={() => setSubmissionType("group")}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Group
                        </Button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">
                        {submissionType === "individual" ? "Individual Submission" : "Group Submission"}
                      </p>
                      <Button variant="ghost" size="sm" onClick={() => setSubmissionType(null)}>
                        Change
                      </Button>
                    </div>

                    {submissionType === "group" && (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Add group members:</p>
                        <div className="space-y-2">
                          {["Member 1", "Member 2", "Member 3"].map((member) => (
                            <input
                              key={member}
                              type="email"
                              placeholder={member}
                              className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-sm"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* File Upload */}
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Upload files</p>
                      <div
                        className="border-2 border-dashed border-border/30 rounded-lg p-6 text-center hover:border-primary/30 transition-colors cursor-pointer"
                        onClick={handleUploadClick}
                      >
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">Click to choose files</p>
                        <p className="text-xs text-muted-foreground">Max 10MB per file</p>
                      </div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        multiple
                        onChange={handleFileChange}
                      />
                      {uploadedFiles.length > 0 && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {uploadedFiles.length} file(s) selected
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border/30">
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleSubmitAssignment}
                    disabled={isSubmitting || uploadedFiles.length === 0}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Assignment"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    disabled={isSubmitting}
                    onClick={() => {
                      setUploadedFiles([])
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
