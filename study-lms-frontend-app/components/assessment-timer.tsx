"use client"

import { useEffect, useState } from "react"
import { Clock, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AssessmentTimerProps {
  duration: number // minutes
  onTimeUp: () => void
  isRunning?: boolean
}

export function AssessmentTimer({ duration, onTimeUp, isRunning = true }: AssessmentTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60) // convert to seconds

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isWarning = timeLeft < 300 // less than 5 minutes
  const isCritical = timeLeft < 60 // less than 1 minute

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-sm font-bold",
        isCritical && "bg-destructive/20 text-destructive animate-pulse",
        isWarning && !isCritical && "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
        !isWarning && "bg-muted text-foreground",
      )}
    >
      {isCritical || isWarning ? <AlertCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  )
}
