"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

interface Submission {
  id: string
  studentName: string
  studentEmail: string
  rollNumber: string
  submitDate: string
  status: "pending" | "evaluated"
  score?: number
  feedback?: string
}

interface Filter {
  branch: string
  batch: string
  subject: string
  assignment: string
}

export default function EvaluatePage() {
  const [filters, setFilters] = useState<Filter>({
    branch: "CSE",
    batch: "2024",
    subject: "Data Structures",
    assignment: "1",
  })

  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: "1",
      studentName: "John Doe",
      studentEmail: "john@example.com",
      rollNumber: "CS001",
      submitDate: "2024-11-14",
      status: "pending",
    },
    {
      id: "2",
      studentName: "Jane Smith",
      studentEmail: "jane@example.com",
      rollNumber: "CS002",
      submitDate: "2024-11-13",
      status: "evaluated",
      score: 85,
      feedback: "Good implementation. Could optimize further.",
    },
    {
      id: "3",
      studentName: "Bob Wilson",
      studentEmail: "bob@example.com",
      rollNumber: "CS003",
      submitDate: "2024-11-12",
      status: "evaluated",
      score: 92,
      feedback: "Excellent work!",
    },
  ])

  const [selectedSubmission, setSelectedSubmission] = useState<string | null>(null)
  const [evaluationForm, setEvaluationForm] = useState({
    score: "",
    feedback: "",
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleSubmissionSelect = (id: string) => {
    setSelectedSubmission(id)
    const submission = submissions.find((s) => s.id === id)
    if (submission) {
      setEvaluationForm({
        score: submission.score?.toString() || "",
        feedback: submission.feedback || "",
      })
    }
  }

  const handleEvaluationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEvaluationForm({ ...evaluationForm, [e.target.name]: e.target.value })
  }

  const handleSaveEvaluation = () => {
    if (selectedSubmission && evaluationForm.score) {
      setSubmissions(
        submissions.map((s) =>
          s.id === selectedSubmission
            ? {
                ...s,
                status: "evaluated",
                score: Number.parseInt(evaluationForm.score),
                feedback: evaluationForm.feedback,
              }
            : s,
        ),
      )
      setSelectedSubmission(null)
      setEvaluationForm({ score: "", feedback: "" })
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

        <h1 className="text-4xl font-bold font-mono tracking-tight mb-2">EVALUATE SUBMISSIONS</h1>
        <div className="h-1 w-24 bg-accent mb-8" />

        <div className="border-2 border-foreground/20 p-6 mb-6">
          <h2 className="text-sm font-bold font-mono mb-4 text-muted-foreground">FILTERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">BRANCH</label>
              <select
                name="branch"
                value={filters.branch}
                onChange={handleFilterChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">BATCH</label>
              <select
                name="batch"
                value={filters.batch}
                onChange={handleFilterChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">SUBJECT</label>
              <select
                name="subject"
                value={filters.subject}
                onChange={handleFilterChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="Data Structures">Data Structures</option>
                <option value="Algorithms">Algorithms</option>
                <option value="DBMS">DBMS</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">ASSIGNMENT</label>
              <select
                name="assignment"
                value={filters.assignment}
                onChange={handleFilterChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="1">Array Implementation</option>
                <option value="2">Sorting Algorithms</option>
                <option value="3">Dynamic Programming</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="border-2 border-foreground/20 p-6">
              <h2 className="text-lg font-bold font-mono mb-4">SUBMISSIONS</h2>
              <div className="space-y-3 max-h-screen overflow-y-auto">
                {submissions.map((submission) => (
                  <div
                    key={submission.id}
                    onClick={() => handleSubmissionSelect(submission.id)}
                    className={`border-2 p-4 cursor-pointer transition-all duration-200 ${
                      selectedSubmission === submission.id
                        ? "border-accent bg-accent/5"
                        : "border-foreground/10 hover:border-accent/30"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-mono font-bold text-sm">{submission.studentName}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{submission.rollNumber}</p>
                      </div>
                      <span
                        className={`font-mono text-xs px-3 py-1 border-2 ${
                          submission.status === "evaluated"
                            ? "border-accent text-accent bg-accent/5"
                            : "border-foreground/40 text-foreground/60"
                        }`}
                      >
                        {submission.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-foreground/10">
                      <p className="text-xs font-mono text-muted-foreground">Submitted: {submission.submitDate}</p>
                      {submission.score !== undefined && (
                        <p className="font-mono font-bold">
                          <span className="text-accent">{submission.score}</span>
                          <span className="text-muted-foreground">/100</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="border-2 border-accent bg-accent/5 p-6 sticky top-6">
              <h3 className="font-mono font-bold text-sm mb-4 text-accent">EVALUATION FORM</h3>

              {selectedSubmission ? (
                <div className="space-y-4">
                  <div className="p-3 border-l-2 border-accent">
                    <p className="text-xs font-mono text-muted-foreground mb-1">STUDENT</p>
                    <p className="text-sm font-mono font-bold">
                      {submissions.find((s) => s.id === selectedSubmission)?.studentName}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-foreground/70 mb-2">SCORE (/100)</label>
                    <input
                      type="number"
                      name="score"
                      value={evaluationForm.score}
                      onChange={handleEvaluationChange}
                      min="0"
                      max="100"
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="85"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-foreground/70 mb-2">FEEDBACK</label>
                    <textarea
                      name="feedback"
                      value={evaluationForm.feedback}
                      onChange={handleEvaluationChange}
                      className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-xs focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none min-h-24"
                      placeholder="Enter feedback here..."
                    />
                  </div>

                  <button
                    onClick={handleSaveEvaluation}
                    className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-2 font-mono text-sm font-semibold transition-colors duration-200"
                  >
                    SAVE EVALUATION
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-xs font-mono text-muted-foreground">Select a submission to evaluate</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
