"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"

interface Assignment {
  id: string
  title: string
  description: string
  subject: string
  branch: string
  dueDate: string
  deadline: string
}

export default function StudentAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Mock assignments
    setAssignments([
      {
        id: "1",
        title: "Array Implementation",
        description: "Implement basic array operations including insert, delete, and search",
        subject: "Data Structures",
        branch: "CSE",
        dueDate: "2024-11-15",
        deadline: "2024-11-15",
      },
      {
        id: "2",
        title: "Sorting Algorithms",
        description: "Implement and compare different sorting algorithms",
        subject: "Data Structures",
        branch: "CSE",
        dueDate: "2024-12-01",
        deadline: "2024-12-01",
      },
      {
        id: "3",
        title: "Dynamic Programming",
        description: "Solve DP problems using memoization and tabulation",
        subject: "Algorithms",
        branch: "CSE",
        dueDate: "2024-12-10",
        deadline: "2024-12-10",
      },
    ])
  }, [])

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
    if (!selectedAssignment || !file) {
      setMessage("Please select an assignment and file")
      return
    }

    setSubmitting(true)
    // Mock submission
    setTimeout(() => {
      setMessage("Assignment submitted successfully!")
      setFile(null)
      setSelectedAssignment(null)
      setSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen blueprint-grid">
      <div className="construction-line absolute top-0 left-0 right-0 h-px" />

      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/student/dashboard"
          className="text-sm font-mono text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← BACK TO DASHBOARD
        </Link>

        <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">ASSIGNMENT SUBMISSION</h1>
        <div className="h-1 w-24 bg-accent mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="border-2 border-foreground/20 p-6 mb-6">
              <h2 className="text-xl font-bold font-mono mb-4">AVAILABLE ASSIGNMENTS</h2>
              <div className="space-y-3">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    onClick={() => setSelectedAssignment(assignment.id)}
                    className={`border-2 p-4 cursor-pointer transition-all duration-200 ${
                      selectedAssignment === assignment.id
                        ? "border-accent bg-accent/5"
                        : "border-foreground/20 hover:border-accent/30"
                    }`}
                  >
                    <h3 className="font-mono font-bold text-sm mb-1">{assignment.title}</h3>
                    <p className="text-xs text-muted-foreground font-mono mb-2">{assignment.subject}</p>
                    <p className="text-xs text-foreground/70 mb-2">{assignment.description}</p>
                    <p className="text-xs font-mono text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="border-2 border-accent bg-accent/5 p-6 sticky top-6">
              <h3 className="font-mono font-bold text-sm mb-4 text-accent">SUBMISSION FORM</h3>

              {selectedAssignment && (
                <>
                  <p className="text-xs font-mono text-muted-foreground mb-4">
                    Selected: {assignments.find((a) => a.id === selectedAssignment)?.title}
                  </p>
                </>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-foreground/70 mb-2">UPLOAD FILE</label>
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

                <button
                  type="submit"
                  disabled={!selectedAssignment || !file || submitting}
                  className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed p-3 font-mono text-sm font-semibold transition-colors duration-200"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
