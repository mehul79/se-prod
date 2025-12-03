"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function UploadAssignment() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    branch: "",
    batch: "",
    deadline: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

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
    if (!formData.title || !formData.subject || !formData.branch || !formData.deadline || !file) {
      setMessage("Please fill in all required fields")
      return
    }

    setSubmitting(true)
    setTimeout(() => {
      setMessage("Assignment created successfully!")
      setFormData({ title: "", description: "", subject: "", branch: "", batch: "", deadline: "" })
      setFile(null)
      setSubmitting(false)
    }, 1500)
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

        <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">CREATE ASSIGNMENT</h1>
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
                    onChange={handleChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
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
                      <option value="Data Structures">Data Structures</option>
                      <option value="Algorithms">Algorithms</option>
                      <option value="DBMS">DBMS</option>
                      <option value="Web Dev">Web Development</option>
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
                      <option value="CSE">Computer Science</option>
                      <option value="ECE">Electronics</option>
                      <option value="ME">Mechanical</option>
                      <option value="CIVIL">Civil</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-2">BATCH</label>
                    <select
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select Batch</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-2">DEADLINE *</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50 p-3 font-mono text-sm font-semibold transition-colors duration-200 mt-6"
                >
                  {submitting ? "CREATING..." : "CREATE ASSIGNMENT"}
                </button>
              </form>
            </div>
          </div>

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
                    <p className="text-xs font-mono text-accent">✓ {file.name}</p>
                    <p className="text-xs font-mono text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                )}

                {message && (
                  <div
                    className={`border-l-2 pl-3 py-2 text-xs font-mono ${
                      message.includes("successfully") ? "border-accent text-accent" : "border-red-500 text-red-500"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <div className="border-t-2 border-foreground/10 pt-4 mt-4">
                  <p className="text-xs font-mono text-muted-foreground mb-2">INFO</p>
                  <ul className="text-xs font-mono text-foreground/70 space-y-1">
                    <li>• PDF, DOC, ZIP supported</li>
                    <li>• Max file size 10MB</li>
                    <li>• Required for submission</li>
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
