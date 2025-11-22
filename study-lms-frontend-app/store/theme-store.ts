import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark" | "system"

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme: Theme) => {
        set({ theme })
        applyTheme(theme)
      },
    }),
    {
      name: "theme-store",
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme)
        }
      },
    },
  ),
)

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "system") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    root.classList.toggle("dark", isDark)
  } else {
    root.classList.toggle("dark", theme === "dark")
  }
}
