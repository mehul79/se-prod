"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mockStudentResults, mockAssessments } from "@/lib/mock-data"
import { CheckCircle, AlertCircle, Filter, Download } from "lucide-react"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export default function EvaluateResultsPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<"all" | "pending" | "graded">("all")
  const [results, setResults] = useState(mockStudentResults)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // When an assessment is selected, try to load attempts from backend to overlay real data.
  useEffect(() => {
    if (!selectedAssessment) return

    let cancelled = false
    setIsLoading(true)
    setError(null)

    async function loadAttempts() {
      try {
        const res = await fetch(`${API_URL}/api/assessments/${selectedAssessment}/attempts`)
        if (!res.ok) {
          setIsLoading(false)
          return
        }
        const attempts = await res.json()

        if (cancelled) return

        // Map Prisma AssessmentAttempt records into the StudentResult shape used by this page.
        const mapped = attempts.map((attempt: any, index: number) => ({
          id: attempt.id || `attempt_${index}`,
          studentId: attempt.studentId,
          assessmentId: attempt.assessmentId,
          marksObtained: attempt.score ?? 0,
          totalMarks: 100,
          percentage: attempt.score != null ? (attempt.score / 100) * 100 : 0,
          status: attempt.status === "EVALUATED" ? ("completed" as const) : ("pending" as const),
          submittedAt: attempt.submittedAt || attempt.startedAt || "",
          feedback: undefined,
        }))

        setResults(mapped)
      } catch (e) {
        console.error("Failed to load assessment attempts", e)
        if (!cancelled) setError("Could not load attempts from server; showing mock data.")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void loadAttempts()

    return () => {
      cancelled = true
    }
  }, [selectedAssessment])

  const filteredResults =
    filterType === "all"
      ? results
      : filterType === "pending"
        ? results.filter((r) => r.status === "pending")
        : results.filter((r) => r.status === "completed")

  const assessmentResults = selectedAssessment
    ? filteredResults.filter((r) => r.assessmentId === selectedAssessment)
    : filteredResults

  const handleUpdateMarks = (resultId: string, marks: number) => {
    setResults(
      results.map((r) => (r.id === resultId ? { ...r, marksObtained: marks, status: "completed" as const } : r)),
    )

    // Best-effort backend grading update
    const target = results.find((r) => r.id === resultId)
    if (!target) return

    void (async () => {
      try {
        await fetch(`${API_URL}/api/assessment-attempts/${resultId}/grade`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ score: marks }),
        })
      } catch (e) {
        console.error("Failed to update grade on server", e)
      }
    })()
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Evaluate & Grade Results</h1>
          <p className="text-muted-foreground">Review and grade student assessments</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Results
        </Button>
      </div>

      {/* Stats */}
      {error && <p className="text-sm text-destructive">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Total Submissions</p>
                <p className="text-3xl font-bold text-foreground">{results.length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Graded</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {results.filter((r) => r.status === "completed").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600/60 dark:text-green-400/60" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {results.filter((r) => r.status === "pending").length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600/60 dark:text-yellow-400/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter Results
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filterType === "all" ? "default" : "outline"}
            onClick={() => setFilterType("all")}
            className="text-xs"
          >
            All Results
          </Button>
          <Button
            variant={filterType === "pending" ? "default" : "outline"}
            onClick={() => setFilterType("pending")}
            className="text-xs"
          >
            Pending Grading
          </Button>
          <Button
            variant={filterType === "graded" ? "default" : "outline"}
            onClick={() => setFilterType("graded")}
            className="text-xs"
          >
            Graded
          </Button>
        </div>

        {/* Assessment Filter */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Assessment</label>
          <select
            value={selectedAssessment || ""}
            onChange={(e) => setSelectedAssessment(e.target.value || null)}
            className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-foreground text-sm"
          >
            <option value="">All Assessments</option>
            {mockAssessments.map((assess) => (
              <option key={assess.id} value={assess.id}>
                {assess.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Results</CardTitle>
          <CardDescription>
            {isLoading ? "Loading submissions..." : `${assessmentResults.length} submissions`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Student ID</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Assessment</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Submitted</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Marks</th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {assessmentResults.map((result) => (
                  <tr key={result.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{result.studentId}</td>
                    <td className="py-3 px-4 text-foreground">Assessment {result.assessmentId}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground text-xs">{result.submittedAt}</td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center gap-1">
                        <Input
                          type="number"
                          value={result.marksObtained || 0}
                          onChange={(e) => handleUpdateMarks(result.id, Number.parseInt(e.target.value))}
                          className="w-16 h-8 px-2 py-0 text-xs bg-input border-border/30 text-center"
                        />
                        <span className="text-xs text-muted-foreground">/{result.totalMarks}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge variant={result.status === "completed" ? "default" : "outline"} className="text-xs">
                        {result.status === "completed" ? "Graded" : "Pending"}
                      </Badge>
                    </td>
                    <td className="text-right py-3 px-4">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
