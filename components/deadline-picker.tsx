"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface DeadlinePickerProps {
  onChange: (date: string) => void
  value: string
}

export function DeadlinePicker({ onChange, value }: DeadlinePickerProps) {
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [date, time] = value.split(" ")
    onChange(`${e.target.value} ${time || "00:00"}`)
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [date] = value.split(" ")
    onChange(`${date || new Date().toISOString().split("T")[0]} ${e.target.value}`)
  }

  const [dateStr, timeStr] = value.split(" ")

  return (
    <div className="space-y-3">
      <label className="block text-xs font-mono text-muted-foreground mb-3">SUBMISSION DEADLINE</label>
      <div className="grid grid-cols-2 gap-3">
        {/* Date Picker */}
        <div className="relative">
          <input
            type="date"
            value={dateStr || ""}
            onChange={handleDateChange}
            className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
          />
          <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 pointer-events-none text-foreground/50" />
        </div>

        {/* Time Picker */}
        <div className="relative">
          <input
            type="time"
            value={timeStr || "00:00"}
            onChange={handleTimeChange}
            className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none cursor-pointer"
          />
          <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 pointer-events-none text-foreground/50" />
        </div>
      </div>
      {value && <div className="text-xs font-mono text-accent mt-2">Deadline: {value}</div>}
    </div>
  )
}
