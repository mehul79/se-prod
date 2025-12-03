"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SubjectSelector } from "@/components/subject-selector"
import { createClient } from "@/utils/supabase/client"

export default function TeacherSignup() {
  
  const supabase = createClient()
  
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    employeeId: "",
    branch: "",
    subjects: [] as string[],
    deadline: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubjectsChange = (subjects: string[]) => {
    setFormData({ ...formData, subjects })
  }


  const validateStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.employeeId || !formData.branch) {
        setError("Please fill in all basic fields")
        return false
      }
      if (!formData.password || formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        return false
      }
    } else if (step === 2) {
      if (formData.subjects.length === 0) {
        setError("Please select at least one subject")
        return false
      }
    }
    setError("")
    return true
  }

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => {
    setError("")
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!validateStep()) return
  
      setError("")
  
      // 1️⃣ Create Auth User
      // 
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
  
      console.log(formData)
      
      if (signUpError) {
        setError( signUpError.message)
        return
      }
  
      const userId = authData.user?.id
      if (!userId) {
        setError("Unexpected error: no user ID returned.")
        return
      }
      
      // 2️⃣ Insert into profiles table
      const { error: profileError } = await supabase.from("profiles").insert({
        id: userId,
        full_name: formData.name,
        role: "teacher",
        employee_id: formData.employeeId,
      })
  
      if (profileError) {
        setError(profileError.message)
        return
      }
  
      // 3️⃣ Insert teacher → branch mapping
      const { error: branchError } = await supabase.from("teacher_branches").insert({
        teacher_id: userId,
        branch_code: formData.branch,
      })
  
      if (branchError) {
        setError(branchError.message)
        return
      }
  
      // 4️⃣ Insert teacher → subjects mapping (multi)
      const subjectRows = formData.subjects.map((sub) => ({
        teacher_id: userId,
        subject_code: sub,
      }))
  
      const { error: subjectError } = await supabase.from("teacher_subjects").insert(subjectRows)
  
      if (subjectError) {
        setError(subjectError.message)
        return
      }
  
      // 5️⃣ Redirect to dashboard
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
            <h1 className="text-3xl font-bold mb-2 font-mono tracking-tight">TEACHER SIGNUP</h1>
            <div className="h-1 w-12 bg-accent" />
            <div className="mt-4 flex gap-2">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 border-2 ${
                    s === step
                      ? "border-accent bg-accent"
                      : s < step
                        ? "border-accent/40 bg-accent/20"
                        : "border-foreground/20"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs font-mono text-muted-foreground mt-3">STEP {step} OF 2</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Dr. Jane Smith"
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
                    placeholder="teacher@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">EMPLOYEE ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    className="w-full border-2 border-foreground/30 bg-background px-3 py-2 font-mono text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="EMP001"
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
                    <option value="CSE">COE</option>
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
              </>
            )}

            {/* Step 2: Subject Selection */}
            {step === 2 && <SubjectSelector selected={formData.subjects} onChange={handleSubjectsChange} />}


            {error && <div className="border-l-2 border-red-500 pl-3 py-2 text-xs font-mono text-red-500">{error}</div>}

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 border-2 border-foreground/30 bg-background text-foreground hover:border-foreground p-3 font-mono text-sm font-semibold transition-colors duration-200"
                >
                  PREVIOUS
                </button>
              )}
              {step < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-3 font-mono text-sm font-semibold transition-colors duration-200"
                >
                  NEXT
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex-1 border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground p-3 font-mono text-sm font-semibold transition-colors duration-200"
                >
                  CREATE ACCOUNT
                </button>
              )}
            </div>
          </form>

          <div className="mt-6 pt-6 border-t-2 border-foreground/10">
            <p className="text-xs font-mono text-muted-foreground mb-3">ALREADY HAVE ACCOUNT?</p>
            <Link
              href="/teacher/login"
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
