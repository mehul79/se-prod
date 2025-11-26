export type UserRole = "Student" | "Teacher"
export type Branch = "CSE" | "ECE" | "ME" | "CE" | "ELE"

export interface User {
  id: string
  email: string
  name: string
  rollNumber?: string
  branch: Branch
  role: UserRole
  profileImage?: string
}

export interface Subject {
  id: string
  name: string
  code: string
  branch: Branch
  semester: number
  credits: number
  faculty: string
}

export interface StudyMaterial {
  id: string
  subjectId: string
  title: string
  description: string
  type: "pdf" | "video" | "document" | "presentation"
  uploadedBy: string
  uploadedDate: string
  fileUrl: string
  fileSize: string
}

export interface LabEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  duration: number // minutes
  branches: Branch[]
  eventType: "lab" | "presentation" | "viva" | "demo"
  location: string
  status: "scheduled" | "ongoing" | "completed"
  capacity?: number
  enrolled?: number
  // Optional linked assessment id (Prisma Assessment.id)
  assessmentId?: string
}

export interface Assessment {
  id: string
  title: string
  subjectId: string
  description: string
  type: "mcq" | "coding" | "mixed"
  duration: number // minutes
  totalMarks: number
  passcode: string
  questions: Question[]
  createdBy: string
  createdDate: string
  startTime: string
  endTime: string
  status: "draft" | "published" | "closed"
}

export interface Question {
  id: string
  assessmentId: string
  type: "mcq" | "coding"
  questionText: string
  order: number
  marks: number
  // MCQ specific
  options?: string[]
  correctAnswer?: number
  // Coding specific
  language?: "javascript" | "python" | "cpp" | "java"
  boilerplateCode?: string
  testCases?: TestCase[]
}

export interface TestCase {
  id: string
  input: string
  expectedOutput: string
  isHidden: boolean
}

export interface StudentResponse {
  id: string
  assessmentId: string
  studentId: string
  answers: Answer[]
  startTime: string
  submitTime?: string
  status: "in_progress" | "submitted" | "auto_submitted"
  totalMarks?: number
  marksObtained?: number
}

export interface Answer {
  questionId: string
  type: "mcq" | "coding"
  // MCQ
  selectedOption?: number
  // Coding
  code?: string
  language?: string
  testsPassed?: number
  testsTotal?: number
}

export interface Assignment {
  id: string
  subjectId: string
  title: string
  description: string
  deadline: string
  totalMarks: number
  groupSize?: number
  attachments: string[]
  createdDate: string
  createdBy: string
}

export interface AssignmentSubmission {
  id: string
  assignmentId: string
  studentIds: string[]
  submissionDate: string
  files: string[]
  feedback?: string
  marksObtained?: number
  status: "submitted" | "graded" | "pending"
}

export interface StudentResult {
  id: string
  studentId: string
  assessmentId: string
  marksObtained: number
  totalMarks: number
  percentage: number
  status: "completed" | "pending"
  submittedAt: string
  feedback?: string
}

export interface SemesterReport {
  semester: number
  year: string
  totalCredits: number
  enrolledCredits: number
  courses: CourseGrade[]
  sgpa: number
  cgpa: number
}

export interface CourseGrade {
  courseId: string
  courseName: string
  credits: number
  grade: string
  gradePoint: number
}
