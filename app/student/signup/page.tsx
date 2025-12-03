"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function StudentSignup() {
  const supabase = createClient()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
    branch: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
 
     // basic client validation
     if (!formData.name || !formData.email || !formData.password || !formData.rollNumber || !formData.branch) {
       setError("Please fill in all fields")
       return
     }
     if (formData.password !== formData.confirmPassword) {
       setError("Passwords do not match")
       return
     }
 
     setError("")
     setLoading(true)
 
     // 1️⃣ Create Auth user
     const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
       email: formData.email,
       password: formData.password,
     })
 
     if (signUpError) {
       if (signUpError.code === "user_already_exists") {
         setError("An account with this email already exists. Please login instead.")
       } else {
         setError(signUpError.message)
       }
       setLoading(false)
       return
     }
 
     const userId = signUpData.user?.id
     if (!userId) {
       setError("Unexpected error: no user ID returned.")
       setLoading(false)
       return
     }
 
     // 2️⃣ Insert into profiles table
     const { error: profileError } = await supabase.from("profiles").insert({
       id: userId,
       full_name: formData.name,
       role: "student",
       roll_number: formData.rollNumber,
       branch_code: formData.branch,    
     })
 
     if (profileError) {
       // optional rollback: delete auth user if profile insert fails
       await supabase.auth.signOut()
       setError(profileError.message)
       setLoading(false)
       return
     }
 
     // 3️⃣ Auto-assign subjects to this student based on branch
     const { data: branchSubjects, error: branchSubError } = await supabase
       .from("branch_subjects")
       .select("subject_code")
       .eq("branch_code", formData.branch)
 
     if (!branchSubError && branchSubjects && branchSubjects.length > 0) {
       const rows = branchSubjects.map((s) => ({
         student_id: userId,
         subject_code: s.subject_code,
       }))
       const { error: studentSubError } = await supabase.from("student_subjects").insert(rows)
       if (studentSubError) {
         // not fatal for signup; just log or show mild error if you want
         console.error("Error inserting student_subjects", studentSubError)
       }
     }
 
     // 4️⃣ Optionally keep minimal info in localStorage for UI
     localStorage.setItem("userType", "student")
     localStorage.setItem("userEmail", formData.email)
 
     setLoading(false)
     router.push("/student/dashboard")
   }
  
  return (
    <div className="min-h-screen blueprint-grid flex items-center justify-center p-4">
      <div className="construction-line absolute top-1/4 left-0 right-0 h-px" />

      <div className="w-full max-w-md">
        <div className="border-2 border-foreground/20 p-8 backdrop-blur-sm max-h-screen overflow-y-auto">
          <div className="mb-8">
            <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-foreground mb-4 inline-block">
              ← BACK
            </Link>
            <h1 className="text-3xl font-bold mb-2 font-mono tracking-tight">STUDENT SIGNUP</h1>
            <div className="h-1 w-12 bg-accent" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">FULL NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="student@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">ROLL NUMBER</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="CS001"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">BRANCH</label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              >
                <option value="">Select Branch</option>
                  <option value="COE">COE</option>
                  <option value="COPC">COPC</option>
                  <option value="ECE">ECE</option>
                  <option value="ME">MECH</option>
                  <option value="CIVIL">Civil</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">CONFIRM PASSWORD</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="••••••••"
              />
            </div>

            {error && <div className="border-l-2 border-red-500 pl-3 py-2 text-xs font-mono text-red-500">{error}</div>}

            <button
              type="submit"
              className="w-full border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-3 font-mono text-sm font-semibold transition-colors duration-200 mt-6"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-foreground/10">
            <p className="text-xs font-mono text-muted-foreground mb-3">ALREADY HAVE ACCOUNT?</p>
            <Link
              href="/student/login"
              className="block border-2 border-foreground/30 p-3 text-center font-mono text-sm font-semibold hover:border-foreground transition-colors duration-200"
            >
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
