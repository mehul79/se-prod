"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function TeacherLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
  
    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }
  
    // 1️⃣ Sign in with Supabase Auth
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    if (signInError) {
      setError("Invalid email or password")
      return
    }
  
    const user = signInData.user
    if (!user) {
      setError("Unexpected error: no user returned")
      return
    }
  
    // 2️⃣ Fetch profile to confirm user role
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()
  
    if (profileError || !profile) {
      setError("Profile not found for this account")
      return
    }
  
    if (profile.role !== "teacher") {
      setError("This login is only for teachers")
      return
    }
  
    // 3️⃣ Store session + redirect
    localStorage.setItem("userType", "teacher")
    localStorage.setItem("userEmail", email)
    router.push("/teacher/dashboard")
  }

  return (
    <div className="min-h-screen blueprint-grid flex items-center justify-center p-4">
      <div className="construction-line absolute top-1/4 left-0 right-0 h-px" />

      <div className="w-full max-w-md">
        <div className="border-2 border-foreground/20 p-8 backdrop-blur-sm">
          <div className="mb-8">
            <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-foreground mb-4 inline-block">
              ← BACK
            </Link>
            <h1 className="text-3xl font-bold mb-2 font-mono tracking-tight">TEACHER LOGIN</h1>
            <div className="h-1 w-12 bg-accent" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="teacher@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="••••••••"
              />
            </div>

            {error && <div className="border-l-2 border-red-500 pl-3 py-2 text-xs font-mono text-red-500">{error}</div>}

            <button
              type="submit"
              className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-3 font-mono text-sm font-semibold transition-colors duration-200 mt-6"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-foreground/10">
            <p className="text-xs font-mono text-muted-foreground mb-3">NEW ACCOUNT?</p>
            <Link
              href="/teacher/signup"
              className="block border-2 border-foreground/30 p-3 text-center font-mono text-sm font-semibold hover:border-foreground transition-colors duration-200"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
