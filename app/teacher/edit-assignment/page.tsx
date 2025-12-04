"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { useSearchParams, useRouter } from "next/navigation"

export default function UploadAssignment() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const assignmentId = searchParams.get("id")

  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    branch: "",
    deadline: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [existingFilePath, setExistingFilePath] = useState<string | null>(null)

  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  // LOAD ASSIGNMENT IF EDIT MODE
  useEffect(() => {
    if (!assignmentId) return

    const loadAssignment = async () => {
      const { data: auth } = await supabase.auth.getUser()
      const user = auth.user
      if (!user) {
        router.push("/teacher/login")
        return
      }

      const { data: assignment } = await supabase
        .from("assignments")
        .select("*")
        .eq("id", assignmentId)
        .eq("teacher_id", user.id)
        .single()

      if (!assignment) return

      setIsEditing(true)
      setFormData({
        title: assignment.title,
        description: assignment.description ?? "",
        subject: assignment.subject_code,
        branch: assignment.branch_code,
        deadline: assignment.due_at.slice(0, 16),
      })
      setExistingFilePath(assignment.file_path)
    }

    loadAssignment()
  }, [assignmentId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile)
      setMessage("")
    } else {
      setMessage("File must be less than 10MB")
      setFile(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    if (!formData.title || !formData.subject || !formData.branch || !formData.deadline) {
      setMessage("Please fill in all required fields")
      return
    }

    const { data: auth } = await supabase.auth.getUser()
    const user = auth.user
    if (!user) {
      setMessage("You must be logged in to continue")
      return
    }

    setSubmitting(true)

    try {
      let filePath = existingFilePath

      // upload new file ONLY if selected
      if (file) {
        const fileName = `${Date.now()}_${file.name}`.replace(/\s+/g, "_")
        const storagePath = `assignments/${user.id}/${fileName}`

        const uploadRes = await supabase.storage.from("assignments").upload(storagePath, file!)

        if (uploadRes.error) {
          setMessage("File upload failed: " + uploadRes.error.message)
          setSubmitting(false)
          return
        }

        filePath = storagePath
      }

      const payload = {
        title: formData.title,
        description: formData.description,
        subject_code: formData.subject,
        branch_code: formData.branch,
        due_at: new Date(formData.deadline).toISOString(),
        file_path: filePath,
      }

      if (isEditing) {
        // UPDATE assignment
        const { error: updateError } = await supabase
          .from("assignments")
          .update(payload)
          .eq("id", assignmentId)

        if (updateError) {
          setMessage("DB Error: " + updateError.message)
          setSubmitting(false)
          return
        }

        setMessage("Assignment updated successfully!")
      } else {
        // CREATE assignment
        const newId = crypto.randomUUID()
        const { error: insertError } = await supabase
          .from("assignments")
          .insert({
            id: newId,
            teacher_id: user.id,
            ...payload,
          })

        if (insertError) {
          setMessage("DB Error: " + insertError.message)
          setSubmitting(false)
          return
        }

        setMessage("Assignment created successfully!")
        setFormData({ title: "", description: "", subject: "", branch: "", deadline: "" })
        setFile(null)
      }
    } catch (err) {
      setMessage("Unexpected error: " + (err as any).message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen blueprint-grid">
      <div className="construction-line absolute top-0 left-0 right-0 h-px" />

      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/teacher/dashboard"
          className="text-sm font-mono text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← BACK TO DASHBOARD
        </Link>

        <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">
          {isEditing ? "EDIT ASSIGNMENT" : "CREATE ASSIGNMENT"}
        </h1>
        <div className="h-1 w-24 bg-accent mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="border-2 border-foreground/20 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">TITLE *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    disabled={isEditing}
                    onChange={handleChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-60"
                    placeholder="Assignment Title"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">DESCRIPTION</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent min-h-24 resize-none"
                    placeholder="Assignment Description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-2">SUBJECT *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select Subject</option>
                      <option value="CHE">Chemistry</option>
                      <option value="MATH">Mathematics</option>
                      <option value="PHY">Physics</option>
                      <option value="CIV">Civil Engineering</option>
                      <option value="ELX">Electronics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-2">BRANCH *</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select Branch</option>
                      <option value="COPC">COPC</option>
                      <option value="COE">COE</option>
                      <option value="ECE">ECE</option>
                      <option value="ME">ME</option>
                      <option value="CHEM">CHEM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">DEADLINE *</label>
                  <input
                    type="datetime-local"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 16)}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50 p-3 font-mono text-sm font-semibold transition-colors duration-200 mt-6"
                >
                  {submitting ? (isEditing ? "UPDATING..." : "CREATING...") : isEditing ? "UPDATE" : "CREATE ASSIGNMENT"}
                </button>

                {message && (
                  <div
                    className={`border-l-2 pl-3 py-2 text-xs font-mono ${
                      message.includes("success") ? "border-accent text-accent" : "border-red-500 text-red-500"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FILE UPLOAD SECTION (unchanged UI) */}
          <div>
            <div className="border-2 border-accent bg-accent/5 p-6 sticky top-6">
              <h3 className="font-mono font-bold text-sm mb-4 text-accent">FILE UPLOAD</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-foreground/70 mb-2">ASSIGNMENT FILE</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                  <p className="text-xs font-mono text-muted-foreground mt-2">Max 10MB</p>
                </div>

                {file && (
                  <div className="border-l-2 border-accent pl-3 py-2">
                    <p className="text-xs font-mono text-accent">✓ {file.name.split("/").pop()?.replace(/^\d+_/, "") || file.name}</p>
                    <p className="text-xs font-mono text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                )}

                {!file && existingFilePath && (
                  <div className="border-l-2 border-accent pl-3 py-2">
                    <p className="text-xs font-mono text-accent">Existing File ✓</p>
                    <p className="text-xs text-muted-foreground font-mono break-all">{existingFilePath}</p>
                  </div>
                )}

                <div className="border-t-2 border-foreground/10 pt-4 mt-4">
                  <p className="text-xs font-mono text-muted-foreground mb-2">INFO</p>
                  <ul className="text-xs font-mono text-foreground/70 space-y-1">
                    <li>• PDF, DOC, ZIP supported</li>
                    <li>• Max file size 10MB</li>
                    <li>• Required for submission</li>
                    <li>• If you don't upload a new file, the old one remains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
