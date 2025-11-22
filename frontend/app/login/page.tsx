"use client"

import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full">
        <LoginForm />
        <p className="text-center text-sm text-muted-foreground mt-6">
          {"Don't"} have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-medium">
            Sign up here
          </Link>
        </p>

        <div className="mt-8 p-4 bg-muted rounded-lg text-center text-sm">
          <p className="font-medium mb-2">Demo Credentials:</p>
          <p>Student: student@thapar.edu / password123</p>
          <p>Teacher: teacher@thapar.edu / password123</p>
        </div>
      </div>
    </div>
  )
}
