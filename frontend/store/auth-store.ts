import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User } from "@/lib/types"

interface AuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean

  setAuth: (user: User) => void
  logout: () => void
  loadFromStorage: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: (user: User) => {
        const mockToken = `mock_token_${Date.now()}`
        set({
          user,
          token: mockToken,
          isAuthenticated: true,
        })
        localStorage.setItem("auth_token", mockToken)
        localStorage.setItem("auth_user", JSON.stringify(user))
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        })
        localStorage.removeItem("auth_token")
        localStorage.removeItem("auth_user")
      },

      loadFromStorage: () => {
        const token = localStorage.getItem("auth_token")
        const userStr = localStorage.getItem("auth_user")
        if (token && userStr) {
          try {
            const user = JSON.parse(userStr)
            set({ token, user, isAuthenticated: true })
          } catch (e) {
            console.error("Failed to parse stored user")
          }
        }
      },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
      }),
    },
  ),
)
