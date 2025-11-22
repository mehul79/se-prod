import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User, UserRole, Branch } from "@/types"
import { mockUsers } from "@/lib/mock-data"

interface AuthStore {
  currentUser: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => { success: boolean; error?: string }
  signup: (
    email: string,
    password: string,
    name: string,
    rollNumber: string,
    branch: Branch,
    role: UserRole,
  ) => { success: boolean; error?: string }
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      currentUser: null,
      isAuthenticated: false,

      login: (email: string, password: string) => {
        if (!email || !password) {
          return { success: false, error: "Email and password are required" }
        }

        if (!email.includes("@thapar.edu")) {
          return { success: false, error: "Please use your @thapar.edu email" }
        }

        // Mock login - in real app, would call backend
        const mockUser = Object.values(mockUsers).find((u) => u.email === email)
        if (mockUser && password.length >= 6) {
          set({ currentUser: mockUser, isAuthenticated: true })
          return { success: true }
        }

        return {
          success: false,
          error: "Invalid credentials. Try aditya.sharma@thapar.edu or priya.verma@thapar.edu with password 'password'",
        }
      },

      signup: (email: string, password: string, name: string, rollNumber: string, branch: Branch, role: UserRole) => {
        if (!email || !password || !name || !branch) {
          return { success: false, error: "All fields are required" }
        }

        if (!email.includes("@thapar.edu")) {
          return { success: false, error: "Please use your @thapar.edu email" }
        }
        if (password.length < 6) {
          return { success: false, error: "Password must be at least 6 characters" }
        }
        if (role === "Student" && !rollNumber) {
          return { success: false, error: "Roll number is required for students" }
        }

        const newUser: User = {
          id: `user_${Date.now()}`,
          email,
          name,
          rollNumber: role === "Student" ? rollNumber : undefined,
          branch,
          role,
          profileImage: "/placeholder.svg?height=40&width=40",
        }

        // In real app, would save to backend
        set({ currentUser: newUser, isAuthenticated: true })
        return { success: true }
      },

      logout: () => {
        set({ currentUser: null, isAuthenticated: false })
      },
    }),
    {
      name: "auth-store",
    },
  ),
)
