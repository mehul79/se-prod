'use client'

import * as React from 'react'

// ThemeProvider simplified: disable next-themes and always render children
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
