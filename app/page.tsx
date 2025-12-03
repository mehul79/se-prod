"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [userType, setUserType] = useState<"student" | "teacher" | null>(null)

  return (
    <div className="min-h-screen blueprint-grid flex items-center justify-center p-4">
      <div className="construction-line absolute top-0 left-0 right-0 h-px" />
      <div className="construction-line absolute bottom-0 left-0 right-0 h-px" />

      <div className="w-full max-w-md">
        <div className="border-2 border-foreground/20 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 font-mono tracking-tight">LAB GEN</h1>
            <div className="h-1 w-16 bg-accent" />
          </div>

          {!userType ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-mono">SELECT USER TYPE</p>
              <button
                onClick={() => setUserType("student")}
                className="w-full border-2 border-foreground p-4 hover:bg-foreground hover:text-background transition-colors duration-200 font-mono text-sm font-semibold"
              >
                STUDENT
              </button>
              <button
                onClick={() => setUserType("teacher")}
                className="w-full border-2 border-foreground p-4 hover:bg-foreground hover:text-background transition-colors duration-200 font-mono text-sm font-semibold"
              >
                TEACHER
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground font-mono">AUTHENTICATION</p>
              <Link
                href={`/${userType}/login`}
                className="block border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-4 text-center font-mono text-sm font-semibold transition-colors duration-200"
              >
                LOGIN
              </Link>
              <Link
                href={`/${userType}/signup`}
                className="block border-2 border-foreground/30 p-4 text-center font-mono text-sm font-semibold hover:border-foreground transition-colors duration-200"
              >
                SIGNUP
              </Link>
              <button
                onClick={() => setUserType(null)}
                className="w-full border-2 border-foreground/20 p-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                BACK
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
