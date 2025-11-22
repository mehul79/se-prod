import { type NextRequest, NextResponse } from "next/server"
import type { AuthResponse } from "@/lib/types"

// Mock database users (in real app, query actual database)
// NOTE: Replace with real authentication logic
const mockDatabase = {
  "student@thapar.edu": {
    id: "student-1",
    email: "student@thapar.edu",
    name: "John Student",
    role: "student" as const,
    password: "password123", // Never store plain passwords!
    studentData: {
      rollNumber: "20BCS001",
      branch: "COPC" as const,
      subjects: ["cs101", "cs102"],
    },
    createdAt: new Date().toISOString(),
  },
  "teacher@thapar.edu": {
    id: "teacher-1",
    email: "teacher@thapar.edu",
    name: "Jane Teacher",
    role: "teacher" as const,
    password: "password123", // Never store plain passwords!
    teacherData: {
      employeeId: "T001",
      subjectsTaught: ["cs101", "cs102"],
      branchesTaught: ["COPC", "COE"],
    },
    createdAt: new Date().toISOString(),
  },
}

function generateMockJWT(userId: string): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64")
  const payload = Buffer.from(JSON.stringify({ sub: userId, iat: Date.now() })).toString("base64")
  const signature = Buffer.from("mock-signature").toString("base64")
  return `${header}.${payload}.${signature}`
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
    }

    const user = mockDatabase[email as keyof typeof mockDatabase]

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const token = generateMockJWT(user.id)
    const response: AuthResponse = {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        studentData: user.studentData,
        teacherData: user.teacherData,
        createdAt: user.createdAt,
      },
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
