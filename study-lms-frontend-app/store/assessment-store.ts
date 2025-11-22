import { create } from "zustand"
import type { StudentResponse, Answer } from "@/types"

interface AssessmentStore {
  currentResponse: StudentResponse | null
  startAssessment: (studentId: string, assessmentId: string) => void
  updateAnswer: (questionId: string, answer: Answer) => void
  submitAssessment: () => void
  getAnswer: (questionId: string) => Answer | undefined
}

export const useAssessmentStore = create<AssessmentStore>((set, get) => ({
  currentResponse: null,

  startAssessment: (studentId: string, assessmentId: string) => {
    const newResponse: StudentResponse = {
      id: `response_${Date.now()}`,
      assessmentId,
      studentId,
      answers: [],
      startTime: new Date().toISOString(),
      status: "in_progress",
    }
    set({ currentResponse: newResponse })
  },

  updateAnswer: (questionId: string, answer: Answer) => {
    set((state) => {
      if (!state.currentResponse) return state

      const existingIndex = state.currentResponse.answers.findIndex((a) => a.questionId === questionId)

      const newAnswers = [...state.currentResponse.answers]
      if (existingIndex >= 0) {
        newAnswers[existingIndex] = answer
      } else {
        newAnswers.push(answer)
      }

      return {
        currentResponse: {
          ...state.currentResponse,
          answers: newAnswers,
        },
      }
    })
  },

  getAnswer: (questionId: string) => {
    const state = get()
    return state.currentResponse?.answers.find((a) => a.questionId === questionId)
  },

  submitAssessment: () => {
    set((state) => {
      if (!state.currentResponse) return state
      return {
        currentResponse: {
          ...state.currentResponse,
          status: "submitted",
          submitTime: new Date().toISOString(),
        },
      }
    })
  },
}))
