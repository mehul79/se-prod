"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: string
  type: "mcq" | "coding"
  marks: number
}

interface QuestionNavigatorProps {
  questions: Question[]
  currentQuestionId: string
  answeredQuestions: Set<string>
  onSelectQuestion: (questionId: string) => void
  timeWarning: Set<string>
}

export function QuestionNavigator({
  questions,
  currentQuestionId,
  answeredQuestions,
  onSelectQuestion,
  timeWarning,
}: QuestionNavigatorProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-foreground">Questions</h3>
      <div className="grid grid-cols-4 gap-2">
        {questions.map((question) => {
          const isAnswered = answeredQuestions.has(question.id)
          const isCurrent = currentQuestionId === question.id
          const hasWarning = timeWarning.has(question.id)

          return (
            <Button
              key={question.id}
              variant="outline"
              size="sm"
              onClick={() => onSelectQuestion(question.id)}
              className={cn(
                "h-10 relative",
                isCurrent && "ring-2 ring-primary",
                isAnswered && "bg-green-100/50 text-green-800 dark:bg-green-900/30 dark:text-green-200",
                hasWarning && "bg-yellow-100/50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
              )}
            >
              <div className="flex flex-col items-center gap-1">
                {isAnswered ? (
                  <CheckCircle className="w-4 h-4" />
                ) : hasWarning ? (
                  <AlertCircle className="w-4 h-4" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
                <span className="text-xs font-mono">{questions.indexOf(question) + 1}</span>
              </div>
            </Button>
          )
        })}
      </div>

      {/* Stats */}
      <div className="space-y-2 pt-3 border-t border-border/30">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Answered</span>
          <span className="font-bold text-foreground">
            {answeredQuestions.size}/{questions.length}
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Total Marks</span>
          <span className="font-bold text-foreground">{questions.reduce((sum, q) => sum + q.marks, 0)}</span>
        </div>
      </div>
    </div>
  )
}
