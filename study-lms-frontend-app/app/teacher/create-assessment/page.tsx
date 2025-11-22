"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { mockSubjects } from "@/lib/mock-data"
import { Plus, Trash2, Eye } from "lucide-react"

export default function CreateAssessmentPage() {
  const [assessmentType, setAssessmentType] = useState<"mcq" | "coding" | "mixed" | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    duration: "",
    totalMarks: "",
    passcode: "",
  })
  const [questions, setQuestions] = useState<any[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddQuestion = () => {
    const newQuestion = {
      id: `q_${Date.now()}`,
      type: assessmentType === "mixed" ? "mcq" : assessmentType,
      marks: 1,
    }
    setQuestions([...questions, newQuestion])
  }

  const handleRemoveQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Create Assessment</h1>
        <p className="text-muted-foreground">Create MCQ, coding, or mixed assessments for your students</p>
      </div>

      {/* Assessment Type Selection */}
      {!assessmentType ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "mcq" as const, title: "MCQ Assessment", desc: "Multiple choice questions" },
            { type: "coding" as const, title: "Coding Challenge", desc: "Programming problems" },
            { type: "mixed" as const, title: "Mixed Assessment", desc: "MCQ + Coding questions" },
          ].map(({ type, title, desc }) => (
            <Card
              key={type}
              className="border-border/50 cursor-pointer hover:border-primary/50 hover:bg-secondary/30 transition-all"
              onClick={() => setAssessmentType(type)}
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* Assessment Details */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Assessment Details</CardTitle>
              <CardDescription>Configure your assessment settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Title</label>
                  <Input
                    name="title"
                    placeholder="Assessment title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="bg-input border-border/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <select className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-foreground text-sm">
                    <option>Select subject</option>
                    {mockSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Description</label>
                <textarea
                  name="description"
                  placeholder="Assessment description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-foreground text-sm"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Duration (min)</label>
                  <Input
                    type="number"
                    name="duration"
                    placeholder="60"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="bg-input border-border/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Total Marks</label>
                  <Input
                    type="number"
                    name="totalMarks"
                    placeholder="100"
                    value={formData.totalMarks}
                    onChange={handleInputChange}
                    className="bg-input border-border/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Passcode</label>
                  <Input
                    name="passcode"
                    placeholder="1234"
                    value={formData.passcode}
                    onChange={handleInputChange}
                    className="bg-input border-border/30"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions */}
          <Card className="border-border/50">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Questions</CardTitle>
                <CardDescription>{questions.length} questions added</CardDescription>
              </div>
              <Button onClick={handleAddQuestion} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Question
              </Button>
            </CardHeader>
            <CardContent>
              {questions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No questions added yet. Click "Add Question" to begin.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {questions.map((question, idx) => (
                    <div
                      key={question.id}
                      className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border/30"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Question {idx + 1}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {question.type.toUpperCase()}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{question.marks} mark(s)</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive"
                          onClick={() => handleRemoveQuestion(question.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-2">
            <Button onClick={() => setAssessmentType(null)} variant="outline" className="flex-1">
              Back
            </Button>
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Publish Assessment
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
