"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Copy, RotateCcw } from "lucide-react"

interface CodeEditorProps {
  value: string
  onChange: (code: string) => void
  language: string
  boilerplate?: string
  testCases?: Array<{ input: string; expectedOutput: string }>
}

export function CodeEditor({ value, onChange, language, boilerplate, testCases }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleReset = () => {
    onChange(boilerplate || "")
  }

  const handleCopy = () => {
    if (textareaRef.current) {
      navigator.clipboard.writeText(value)
    }
  }

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-secondary/50 p-2 rounded-lg border border-border/30">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">{language.toUpperCase()}</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" onClick={handleCopy} className="text-xs h-8">
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button size="sm" variant="ghost" onClick={handleReset} className="text-xs h-8">
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
          <Button size="sm" className="text-xs h-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Play className="w-3 h-3 mr-1" />
            Run Tests
          </Button>
        </div>
      </div>

      {/* Editor */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 font-mono text-sm bg-card border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
        spellCheck="false"
      />

      {/* Test Cases */}
      {testCases && testCases.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Test Cases:</p>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {testCases.map((tc, idx) => (
              <div key={idx} className="p-2 bg-secondary/30 rounded border border-border/30 text-xs font-mono">
                <div className="text-muted-foreground">Input: {tc.input}</div>
                <div className="text-muted-foreground">Output: {tc.expectedOutput}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
