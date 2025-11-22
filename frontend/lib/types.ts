// Role types
export type Role = "student" | "teacher"

// Branch enum for students
export type Branch = "COPC" | "COE" | "ENC" | "ECE" | "MECH" | "CHEM"

// Subject types
export interface Subject {
  id: string
  name: string
}

// Student-specific data
export interface StudentData {
  rollNumber: string
  branch: Branch
  subjects: string[] // subject IDs
}

// Teacher-specific data
export interface TeacherData {
  employeeId: string
  subjectsTaught: string[] // subject IDs
  branchesTaught: Branch[]
}

// User data structure
export interface User {
  id: string
  email: string
  name: string
  role: Role
  studentData?: StudentData
  teacherData?: TeacherData
  createdAt: string
}

// Auth response from API
export interface AuthResponse {
  token: string
  user: User
}

// Auth error
export interface AuthError {
  message: string
  code?: string
}
