import { type NextRequest, NextResponse } from "next/server"
import type { AuthResponse, User, Role } from "@/lib/types"

// Mock database of users
const mockUsers: User[] = []

// Generate fake JWT (not secure, for development only)
function generateMockJWT(userId: string): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64")
  const payload = Buffer.from(JSON.stringify({ sub: userId, iat: Date.now() })).toString("base64")
  const signature = Buffer.from("mock-signature").toString("base64")
  return `${header}.${payload}.${signature}`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { email, password, name, role, ...roleData } = body

    if (!email || !password || !name || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (role === "student" && !email.endsWith("@thapar.edu")) {
      return NextResponse.json({ error: "Student email must end with @thapar.edu" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    if (mockUsers.some((u) => u.email === email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    if (role === "student") {
      const { rollNumber, branch, subjects } = roleData
      if (!rollNumber || !branch || !subjects || subjects.length === 0) {
        return NextResponse.json({ error: "Missing student-specific fields" }, { status: 400 })
      }
    } else if (role === "teacher") {
      const { employeeId, subjectsTaught, branchesTaught } = roleData
      if (!employeeId || !subjectsTaught || !branchesTaught) {
        return NextResponse.json({ error: "Missing teacher-specific fields" }, { status: 400 })
      }
    }

    const userId = `user-${Date.now()}`
    const newUser: User = {
      id: userId,
      email,
      name,
      role: role as Role,
      createdAt: new Date().toISOString(),
      ...(role === "student" && {
        studentData: roleData,
      }),
      ...(role === "teacher" && {
        teacherData: roleData,
      }),
    }

    mockUsers.push(newUser)

    const token = generateMockJWT(userId)
    const response: AuthResponse = {
      token,
      user: newUser,
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
