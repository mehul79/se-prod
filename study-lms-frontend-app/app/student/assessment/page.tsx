"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { WebcamPermissionModal } from "@/components/webcam-permission-modal"
import { AssessmentTimer } from "@/components/assessment-timer"
import { CodeEditor } from "@/components/code-editor"
import { QuestionNavigator } from "@/components/question-navigator"
import { useAssessmentStore } from "@/store/assessment-store"
import { useAuthStore } from "@/store/auth-store"
import { mockAssessments } from "@/lib/mock-data"
import { AlertCircle, Send } from "lucide-react"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

type PageState = "passcode" | "permissions" | "assessment" | "submitted"

export default function AssessmentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const assessmentId = searchParams.get("assessmentId")
  const currentUser = useAuthStore((state) => state.currentUser)

  const [pageState, setPageState] = useState<PageState>("passcode")
  const [passcode, setPasscode] = useState("")
  const [passcodeFail, setPasscodeFail] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set())
  const [timeWarning, setTimeWarning] = useState<Set<string>>(new Set())
  const [remoteAssessment, setRemoteAssessment] = useState<any | null>(null)
  const [isLoadingAssessment, setIsLoadingAssessment] = useState<boolean>(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const startAssessment = useAssessmentStore((state) => state.startAssessment)
  const updateAnswer = useAssessmentStore((state) => state.updateAnswer)
  const getAnswer = useAssessmentStore((state) => state.getAnswer)
  const submitAssessment = useAssessmentStore((state) => state.submitAssessment)
  const currentResponse = useAssessmentStore((state) => state.currentResponse)

  // Load assessment metadata from backend with fallback to mock data
  useEffect(() => {
    if (!assessmentId) return

    let cancelled = false
    setIsLoadingAssessment(true)
    setLoadError(null)

    async function load() {
      try {
        const res = await fetch(`${API_URL}/api/assessments/${assessmentId}`)
        if (!res.ok) {
          setIsLoadingAssessment(false)
          return
        }
        const data = await res.json()
        if (!cancelled) {
          setRemoteAssessment(data)
        }
      } catch (e) {
        console.error("Failed to load assessment", e)
        if (!cancelled) setLoadError("Could not load assessment from server")
      } finally {
        if (!cancelled) setIsLoadingAssessment(false)
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [assessmentId])

  const mockAssessment = useMemo(
    () => mockAssessments.find((a) => a.id === assessmentId),
    [assessmentId],
  )

  const assessment = useMemo(() => {
    if (remoteAssessment) {
      // Prefer backend metadata but fall back to mock questions for now
      const base = mockAssessment || remoteAssessment
      return {
        ...base,
        ...remoteAssessment,
        questions: mockAssessment?.questions || [],
      }
    }
    return mockAssessment
  }, [mockAssessment, remoteAssessment])

  const questions = assessment?.questions || []
  const currentQuestion = questions[currentQuestionIndex]

  if (isLoadingAssessment && !assessment) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Loading assessment...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Please wait while we load your assessment.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!assessment || !currentUser) {
    return (
      <div className="p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {loadError || "Assessment not found or not authenticated"}
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === assessment.passcode) {
      setPageState("permissions")
      setPasscodeFail("")
    } else {
      setPasscodeFail("Invalid passcode. Please try again.")
    }
  }

  const handleStartAssessment = () => {
    startAssessment(currentUser.id, assessmentId!)
    setPageState("assessment")

    // Fire-and-forget backend attempt creation
    if (!assessmentId) return
    ;(async () => {
      try {
        await fetch(`${API_URL}/api/assessments/${assessmentId}/attempts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: currentUser.id,
          }),
        })
      } catch (e) {
        console.error("Failed to start assessment attempt", e)
      }
    })()
  }

  const handleTimeUp = () => {
    if (currentResponse?.status === "in_progress") {
      submitAssessment()
      void submitToBackend()
      setPageState("submitted")
    }
  }

  const handleAnswerChange = (type: "mcq" | "coding", value: any) => {
    if (!currentQuestion) return

    const answer = {
      questionId: currentQuestion.id,
      type,
    }

    if (type === "mcq") {
      updateAnswer(currentQuestion.id, { ...answer, selectedOption: value })
    } else {
      updateAnswer(currentQuestion.id, { ...answer, code: value, language: currentQuestion.language })
    }

    if (!answeredQuestions.has(currentQuestion.id)) {
      setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id))
    }
  }

  const handleNavigateQuestion = (questionId: string) => {
    const index = questions.findIndex((q) => q.id === questionId)
    if (index >= 0) {
      setCurrentQuestionIndex(index)
    }
  }

  const handleSubmit = () => {
    if (confirm("Are you sure you want to submit? You cannot change answers after submission.")) {
      submitAssessment()
      void submitToBackend()
      setPageState("submitted")
    }
  }

  const submitToBackend = async () => {
    if (!assessmentId || !currentUser || !currentResponse) return

    try {
      await fetch(`${API_URL}/api/assessments/${assessmentId}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: currentUser.id,
          answers: currentResponse.answers,
        }),
      })
    } catch (e) {
      console.error("Failed to submit assessment attempt", e)
    }
  }

  // Passcode Page
  if (pageState === "passcode") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-border/50">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">{assessment.title}</CardTitle>
            <CardDescription>Enter the exam passcode to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasscodeSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Passcode</label>
                <Input
                  type="password"
                  placeholder="Enter passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="bg-input border-border/30"
                  required
                />
              </div>

              {passcodeFail && (
                <Alert variant="destructive" className="border-destructive/30 bg-destructive/5">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{passcodeFail}</AlertDescription>
                </Alert>
              )}

              <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                <p className="text-xs font-medium text-muted-foreground mb-2">Assessment Details:</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold text-foreground">{assessment.duration} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions:</span>
                    <span className="font-semibold text-foreground">{questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Marks:</span>
                    <span className="font-semibold text-foreground">{assessment.totalMarks}</span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 font-medium"
              >
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Assessment Page
  if (pageState === "assessment" && currentQuestion) {
    const currentAnswer = getAnswer(currentQuestion.id)

    return (
      <div className="flex h-screen bg-background">
        {/* Sidebar Navigator */}
        <div className="hidden lg:block w-72 border-r border-border overflow-y-auto p-6 bg-secondary/30">
          <QuestionNavigator
            questions={questions}
            currentQuestionId={currentQuestion.id}
            answeredQuestions={answeredQuestions}
            onSelectQuestion={handleNavigateQuestion}
            timeWarning={timeWarning}
          />
        </div>

        {/* Main Assessment Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">{assessment.title}</h1>
              <p className="text-xs text-muted-foreground">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AssessmentTimer
                duration={assessment.duration}
                onTimeUp={handleTimeUp}
                isRunning={pageState === "assessment"}
              />
            </div>
          </div>

          {/* Question Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <Card className="border-border/50 mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{currentQuestion.questionText}</CardTitle>
                    <CardDescription className="text-xs">Marks: {currentQuestion.marks}</CardDescription>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 bg-secondary/50 rounded">
                    Q{currentQuestionIndex + 1}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* MCQ Question */}
                {currentQuestion.type === "mcq" && currentQuestion.options && (
                  <div className="space-y-2">
                    {currentQuestion.options.map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border/30 cursor-pointer hover:bg-secondary/30 transition-colors"
                      >
                        <input
                          type="radio"
                          name={`question_${currentQuestion.id}`}
                          value={idx}
                          checked={currentAnswer?.selectedOption === idx}
                          onChange={() => handleAnswerChange("mcq", idx)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Coding Question */}
                {currentQuestion.type === "coding" && (
                  <CodeEditor
                    value={currentAnswer?.code || currentQuestion.boilerplateCode || ""}
                    onChange={(code) => handleAnswerChange("coding", code)}
                    language={currentQuestion.language || "javascript"}
                    boilerplate={currentQuestion.boilerplateCode}
                    testCases={currentQuestion.testCases}
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Navigation & Submit */}
          <div className="border-t border-border bg-card p-6 flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </Button>
            </div>

            <Button onClick={handleSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="w-4 h-4 mr-2" />
              Submit Assessment
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Submitted Page
  if (pageState === "submitted") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-border/50">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <CardTitle className="text-2xl">Assessment Submitted!</CardTitle>
            <CardDescription>Your responses have been recorded</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-secondary/30 rounded-lg border border-border/30 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Questions Answered:</span>
                <span className="font-bold text-foreground">
                  {answeredQuestions.size}/{questions.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Time Used:</span>
                <span className="font-bold text-foreground">{assessment.duration} minutes</span>
              </div>
            </div>

            <Button
              onClick={() => router.push("/student/dashboard")}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Permissions Page
  return (
    <WebcamPermissionModal
      open={pageState === "permissions"}
      onProceed={handleStartAssessment}
      onDeny={() => setPageState("passcode")}
    />
  )
}
