import { create } from "zustand"

type Theme = "light" | "dark" | "system"

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Light-only theme store: always returns 'light' and no-op setter.
export const useThemeStore = create<ThemeStore>(() => ({
  theme: "light",
  setTheme: () => {
    /* no-op: theming disabled, only light theme used */
  },
}))
