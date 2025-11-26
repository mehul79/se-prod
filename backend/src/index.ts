import express from "express"
import cors from "cors"
import path from "path"
import fs from "fs"
import multer from "multer"
import prisma from "./db"

const app = express()

// ----- Types & simple persistence for lab scheduling -----

type Branch = "CSE" | "ECE" | "ME" | "CE" | "ELE"
type EventType = "lab" | "presentation" | "viva" | "demo"
type LabStatus = "scheduled" | "ongoing" | "completed"

// Basic academic types for student dashboard
interface CourseGrade {
  courseId: string
  courseName: string
  credits: number
  grade: string
  gradePoint: number
}

interface SemesterReport {
  semester: number
  year: string
  totalCredits: number
  enrolledCredits: number
  courses: CourseGrade[]
  sgpa: number
  cgpa: number
}

interface StudentResult {
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

interface AssignmentSummary {
  id: string
  subjectId: string
  title: string
  description: string
  deadline: string
  totalMarks: number
}

interface AssignmentRecord {
  id: string
  subjectId: string
  title: string
  description: string
  deadline: string
  totalMarks: number
  groupSize?: number
  attachments: string[] // URLs of uploaded files
  createdDate: string
  createdBy: string
}

interface AssignmentSubmissionRecord {
  id: string
  assignmentId: string
  studentId: string
  submittedAt: string
  files: string[] // URLs
}

interface SubjectSummary {
  id: string
  code: string
  name: string
  credits: number
}

interface StudentDashboardPayload {
  student: {
    id: string
    name: string
    email: string
    rollNumber?: string
    branch: Branch
  }
  semesterReports: SemesterReport[]
  cgpaTrend: { semester: string; cgpa: number }[]
  recentResults: StudentResult[]
  pendingAssignments: AssignmentSummary[]
  subjects: SubjectSummary[]
}

interface LabEvent {
  id: string
  title: string
  description: string
  date: string // YYYY-MM-DD
  time: string // HH:mm
  duration: number // minutes
  branches: Branch[]
  eventType: EventType
  location: string
  status: LabStatus
  capacity?: number
  enrolled?: number
  // Optional linked assessment (Prisma Assessment.id)
  assessmentId?: string
}

const labEventsFile = path.join(process.cwd(), "lab-events.json")
const assignmentsFile = path.join(process.cwd(), "assignments.json")
const assignmentSubmissionsFile = path.join(process.cwd(), "assignment-submissions.json")

function loadLabEvents(): LabEvent[] {
  try {
    if (fs.existsSync(labEventsFile)) {
      const raw = fs.readFileSync(labEventsFile, "utf-8")
      const parsed = JSON.parse(raw) as LabEvent[]
      return parsed
    }
  } catch (e) {
    console.error("Failed to read lab-events.json", e)
  }

  // Seed with a couple of default events if file does not exist
  const seed: LabEvent[] = [
    {
      id: "lab1",
      title: "Data Structures Lab - Arrays",
      description: "Hands-on lab for array implementation and operations",
      date: "2024-12-15",
      time: "10:00",
      duration: 120,
      branches: ["CSE"],
      eventType: "lab",
      location: "Lab-201",
      status: "scheduled",
      capacity: 30,
      enrolled: 28,
    },
    {
      id: "lab2",
      title: "Linked List Implementation Viva",
      description: "Viva examination for linked list concepts",
      date: "2024-12-18",
      time: "14:00",
      duration: 60,
      branches: ["CSE"],
      eventType: "viva",
      location: "Lab-202",
      status: "scheduled",
      capacity: 15,
      enrolled: 14,
    },
  ]

  saveLabEvents(seed)
  return seed
}

function saveLabEvents(events: LabEvent[]) {
  try {
    fs.writeFileSync(labEventsFile, JSON.stringify(events, null, 2), "utf-8")
  } catch (e) {
    console.error("Failed to write lab-events.json", e)
  }
}

function loadAssignments(): AssignmentRecord[] {
  try {
    if (fs.existsSync(assignmentsFile)) {
      const raw = fs.readFileSync(assignmentsFile, "utf-8")
      return JSON.parse(raw) as AssignmentRecord[]
    }
  } catch (e) {
    console.error("Failed to read assignments.json", e)
  }

  const seed: AssignmentRecord[] = [
    {
      id: "assign1",
      subjectId: "sub1",
      title: "Implement Binary Search Tree",
      description: "Create a complete BST implementation with insert, delete, and search operations",
      deadline: "2024-12-25",
      totalMarks: 20,
      groupSize: 1,
      attachments: [],
      createdDate: "2024-11-15",
      createdBy: "teacher1",
    },
  ]

  saveAssignments(seed)
  return seed
}

function saveAssignments(assignments: AssignmentRecord[]) {
  try {
    fs.writeFileSync(assignmentsFile, JSON.stringify(assignments, null, 2), "utf-8")
  } catch (e) {
    console.error("Failed to write assignments.json", e)
  }
}

function loadAssignmentSubmissions(): AssignmentSubmissionRecord[] {
  try {
    if (fs.existsSync(assignmentSubmissionsFile)) {
      const raw = fs.readFileSync(assignmentSubmissionsFile, "utf-8")
      return JSON.parse(raw) as AssignmentSubmissionRecord[]
    }
  } catch (e) {
    console.error("Failed to read assignment-submissions.json", e)
  }
  return []
}

function saveAssignmentSubmissions(subs: AssignmentSubmissionRecord[]) {
  try {
    fs.writeFileSync(assignmentSubmissionsFile, JSON.stringify(subs, null, 2), "utf-8")
  } catch (e) {
    console.error("Failed to write assignment-submissions.json", e)
  }
}

let labEvents: LabEvent[] = loadLabEvents()
let assignments: AssignmentRecord[] = loadAssignments()
let assignmentSubmissions: AssignmentSubmissionRecord[] = loadAssignmentSubmissions()

const branches: Branch[] = ["CSE", "ECE", "ME", "CE", "ELE"]

// In-memory student dashboard data keyed by studentId
const studentDashboards: Record<string, StudentDashboardPayload> = {
  student1: {
    student: {
      id: "student1",
      name: "Aditya Sharma",
      email: "aditya.sharma@thapar.edu",
      rollNumber: "UE20CS012",
      branch: "CSE",
    },
    semesterReports: [
      {
        semester: 4,
        year: "2024",
        totalCredits: 20,
        enrolledCredits: 20,
        courses: [
          {
            courseId: "sub2",
            courseName: "Web Development",
            credits: 3,
            grade: "A",
            gradePoint: 9,
          },
          {
            courseId: "sub3",
            courseName: "Database Management",
            credits: 3,
            grade: "A-",
            gradePoint: 8.5,
          },
          {
            courseId: "sub1",
            courseName: "Data Structures",
            credits: 4,
            grade: "A",
            gradePoint: 9,
          },
        ],
        sgpa: 8.83,
        cgpa: 8.56,
      },
      {
        semester: 3,
        year: "2023",
        totalCredits: 22,
        enrolledCredits: 22,
        courses: [
          {
            courseId: "algo",
            courseName: "Algorithms",
            credits: 4,
            grade: "A",
            gradePoint: 9,
          },
          {
            courseId: "os",
            courseName: "Operating Systems",
            credits: 4,
            grade: "A-",
            gradePoint: 8.5,
          },
        ],
        sgpa: 8.45,
        cgpa: 8.35,
      },
    ],
    cgpaTrend: [
      { semester: "S1", cgpa: 7.8 },
      { semester: "S2", cgpa: 8.1 },
      { semester: "S3", cgpa: 8.35 },
      { semester: "S4", cgpa: 8.56 },
    ],
    recentResults: [
      {
        id: "res1",
        studentId: "student1",
        assessmentId: "assess1",
        marksObtained: 9,
        totalMarks: 10,
        percentage: 90,
        status: "completed",
        submittedAt: "2024-12-05T10:45:00",
        feedback: "Excellent performance! Well done.",
      },
      {
        id: "res2",
        studentId: "student1",
        assessmentId: "assess2",
        marksObtained: 42,
        totalMarks: 50,
        percentage: 84,
        status: "completed",
        submittedAt: "2024-12-21T12:30:00",
        feedback: "Good work. Review topics on graph algorithms.",
      },
    ],
    pendingAssignments: [
      {
        id: "assign1",
        subjectId: "sub1",
        title: "Implement Binary Search Tree",
        description:
          "Create a complete BST implementation with insert, delete, and search operations",
        deadline: "2024-12-25",
        totalMarks: 20,
      },
      {
        id: "assign2",
        subjectId: "sub1",
        title: "Graph Traversal Analysis",
        description: "Implement BFS and DFS with complexity analysis",
        deadline: "2024-12-28",
        totalMarks: 25,
      },
      {
        id: "assign3",
        subjectId: "sub2",
        title: "Build a Todo Application",
        description: "Create a fully functional todo app using React",
        deadline: "2024-12-20",
        totalMarks: 30,
      },
    ],
    subjects: [
      {
        id: "sub1",
        code: "CS201",
        name: "Data Structures",
        credits: 4,
      },
      {
        id: "sub2",
        code: "CS301",
        name: "Web Development",
        credits: 3,
      },
      {
        id: "sub3",
        code: "CS205",
        name: "Database Management",
        credits: 3,
      },
    ],
  },
}

// Basic middleware
app.use(express.json())
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  }),
)

// Ensure uploads directory exists in backend root
const uploadDir = path.join(process.cwd(), "uploads")
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Multer storage configuration for local file uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir)
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now()
    const safeOriginalName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_")
    cb(null, `${timestamp}-${safeOriginalName}`)
  },
})

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
})

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" })
})

// ----- Lab events API -----

// List lab events
app.get("/api/lab-events", (_req, res) => {
  // Sort by date/time ascending for convenience
  const sorted = [...labEvents].sort((a, b) => {
    const aDate = new Date(`${a.date}T${a.time || "00:00"}`)
    const bDate = new Date(`${b.date}T${b.time || "00:00"}`)
    return aDate.getTime() - bDate.getTime()
  })
  res.json(sorted)
})

// Create a new lab event
app.post("/api/lab-events", (req, res) => {
  const body = req.body as Partial<LabEvent>

  if (!body.title || !body.date || !body.time || !body.duration || !body.location) {
    res.status(400).json({ error: "title, date, time, duration and location are required" })
    return
  }

  const eventBranches: Branch[] = Array.isArray(body.branches)
    ? (body.branches.filter((b): b is Branch => branches.includes(b as Branch)) as Branch[])
    : []

  const newEvent: LabEvent = {
    id: `lab_${Date.now()}`,
    title: body.title,
    description: body.description || "",
    date: body.date,
    time: body.time,
    duration: Number(body.duration) || 60,
    eventType: (body.eventType as EventType) || "lab",
    location: body.location,
    branches: eventBranches.length ? eventBranches : ["CSE"],
    status: (body.status as LabStatus) || "scheduled",
    capacity: body.capacity ? Number(body.capacity) : undefined,
    enrolled: body.enrolled ? Number(body.enrolled) : 0,
    assessmentId: body.assessmentId ? String(body.assessmentId) : undefined,
  }

  labEvents.push(newEvent)
  saveLabEvents(labEvents)

  res.status(201).json(newEvent)
})

// ----- Assignments API -----

// List assignments
app.get("/api/assignments", (_req, res) => {
  // sort by deadline
  const sorted = [...assignments].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime(),
  )
  res.json(sorted)
})

// Create assignment (metadata only, file uploaded separately via /api/upload)
app.post("/api/assignments", (req, res) => {
  const body = req.body as Partial<AssignmentRecord>

  if (!body.title || !body.description || !body.deadline || !body.totalMarks || !body.subjectId) {
    res.status(400).json({
      error: "title, description, deadline, totalMarks, subjectId are required",
    })
    return
  }

  const newAssignment: AssignmentRecord = {
    id: `assign_${Date.now()}`,
    subjectId: body.subjectId,
    title: body.title,
    description: body.description,
    deadline: body.deadline,
    totalMarks: Number(body.totalMarks),
    groupSize: body.groupSize ? Number(body.groupSize) : undefined,
    attachments: Array.isArray(body.attachments) ? (body.attachments as string[]) : [],
    createdDate: new Date().toISOString().slice(0, 10),
    createdBy: body.createdBy || "teacher1",
  }

  assignments.push(newAssignment)
  saveAssignments(assignments)

  res.status(201).json(newAssignment)
})

// Submit assignment
app.post("/api/assignments/:id/submissions", (req, res) => {
  const { id } = req.params
  const body = req.body as { studentId?: string; files?: string[] }

  const assignment = assignments.find((a) => a.id === id)
  if (!assignment) {
    res.status(404).json({ error: "Assignment not found" })
    return
  }

  if (!body.studentId) {
    res.status(400).json({ error: "studentId is required" })
    return
  }

  const files = Array.isArray(body.files) ? body.files : []

  const submission: AssignmentSubmissionRecord = {
    id: `sub_${Date.now()}`,
    assignmentId: id,
    studentId: body.studentId,
    submittedAt: new Date().toISOString(),
    files,
  }

  assignmentSubmissions.push(submission)
  saveAssignmentSubmissions(assignmentSubmissions)

  res.status(201).json(submission)
})

// ----- Teacher Assessments API (Prisma-backed) -----

// Create an assessment from the teacher create-assessment page.
// This stores basic metadata in the Prisma `Assessment` model.
app.post("/api/assessments", async (req, res) => {
  const body = req.body as {
    title?: string
    subjectId?: string
    description?: string
    type?: "mcq" | "coding" | "mixed"
    duration?: number | string
    totalMarks?: number | string
    passcode?: string
  }

  if (!body.title || !body.subjectId || !body.type || !body.duration || !body.totalMarks || !body.passcode) {
    res.status(400).json({
      error: "title, subjectId, type, duration, totalMarks, passcode are required",
    })
    return
  }

  // Map frontend assessment type to Prisma enum
  const prismaType = body.type === "coding" ? "CODING" : "MCQ"

  try {
    const created = await (prisma as any).assessment.create({
      data: {
        title: body.title,
        description: body.description ?? "",
        type: prismaType,
        subjectId: body.subjectId,
        durationMin: Number(body.duration) || null,
        maxMarks: Number(body.totalMarks) || null,
        passcodeHash: body.passcode, // NOTE: stored in plain text for demo purposes
      },
    })

    // Return a simplified payload that roughly matches the frontend `Assessment` type
    res.status(201).json({
      id: created.id,
      title: created.title,
      subjectId: created.subjectId,
      description: created.description,
      type: body.type,
      duration: created.durationMin,
      totalMarks: created.maxMarks,
      passcode: body.passcode,
      createdAt: created.createdAt,
    })
  } catch (e) {
    console.error("Failed to create assessment", e)
    res.status(500).json({ error: "Failed to create assessment" })
  }
})

// List assessments for teacher UIs
app.get("/api/assessments", async (_req, res) => {
  try {
    const prismaAny = prisma as any
    const records = await prismaAny.assessment.findMany({
      orderBy: { createdAt: "desc" },
    })

    const mapped = records.map((a: any) => ({
      id: a.id,
      title: a.title,
      subjectId: a.subjectId,
      description: a.description,
      type: a.type === "CODING" ? "coding" : "mcq",
      duration: a.durationMin,
      totalMarks: a.maxMarks,
      passcode: a.passcodeHash || "",
      createdAt: a.createdAt,
    }))

    res.json(mapped)
  } catch (e) {
    console.error("Failed to list assessments", e)
    res.status(500).json({ error: "Failed to list assessments" })
  }
})

// Get a single assessment by id
app.get("/api/assessments/:id", async (req, res) => {
  const { id } = req.params

  try {
    const prismaAny = prisma as any
    const a = await prismaAny.assessment.findUnique({ where: { id } })

    if (!a) {
      res.status(404).json({ error: "Assessment not found" })
      return
    }

    const mapped = {
      id: a.id,
      title: a.title,
      subjectId: a.subjectId,
      description: a.description,
      type: a.type === "CODING" ? "coding" : "mcq",
      duration: a.durationMin,
      totalMarks: a.maxMarks,
      passcode: a.passcodeHash || "",
      createdAt: a.createdAt,
      // Expose questionsJson as-is for future use
      questionsJson: a.questionsJson ?? null,
    }

    res.json(mapped)
  } catch (e) {
    console.error("Failed to fetch assessment", e)
    res.status(500).json({ error: "Failed to fetch assessment" })
  }
})

// ----- Assessment attempts API -----

// Start a new assessment attempt for a student
app.post("/api/assessments/:id/attempts", async (req, res) => {
  const { id } = req.params
  const body = req.body as {
    studentId?: string
    attemptData?: any
    cameraOn?: boolean
    micOn?: boolean
  }

  if (!body.studentId) {
    res.status(400).json({ error: "studentId is required" })
    return
  }

  try {
    const prismaAny = prisma as any

    const attempt = await prismaAny.assessmentAttempt.create({
      data: {
        assessmentId: id,
        studentId: body.studentId,
        attemptData: body.attemptData ?? null,
        cameraOn: typeof body.cameraOn === "boolean" ? body.cameraOn : null,
        micOn: typeof body.micOn === "boolean" ? body.micOn : null,
      },
    })

    res.status(201).json(attempt)
  } catch (e) {
    console.error("Failed to create assessment attempt", e)
    res.status(500).json({ error: "Failed to create assessment attempt" })
  }
})

// Submit an existing assessment attempt
app.post("/api/assessments/:id/submit", async (req, res) => {
  const { id } = req.params
  const body = req.body as {
    studentId?: string
    answers?: any
    score?: number
  }

  if (!body.studentId || !body.answers) {
    res.status(400).json({ error: "studentId and answers are required" })
    return
  }

  try {
    const prismaAny = prisma as any

    // Find the latest attempt for this assessment + student
    const existingList = await prismaAny.assessmentAttempt.findMany({
      where: { assessmentId: id, studentId: body.studentId },
      orderBy: { createdAt: "desc" },
      take: 1,
    })

    const existing = existingList[0]

    if (!existing) {
      // If no attempt exists, create one directly in submitted state
      const created = await prismaAny.assessmentAttempt.create({
        data: {
          assessmentId: id,
          studentId: body.studentId,
          status: "SUBMITTED",
          submittedAt: new Date(),
          attemptData: { answers: body.answers },
          score: typeof body.score === "number" ? body.score : null,
        },
      })
      res.status(201).json(created)
      return
    }

    const updated = await prismaAny.assessmentAttempt.update({
      where: { id: existing.id },
      data: {
        status: "SUBMITTED",
        submittedAt: new Date(),
        attemptData: { answers: body.answers },
        score: typeof body.score === "number" ? body.score : existing.score,
      },
    })

    res.json(updated)
  } catch (e) {
    console.error("Failed to submit assessment attempt", e)
    res.status(500).json({ error: "Failed to submit assessment attempt" })
  }
})

// List attempts for an assessment (teacher view)
app.get("/api/assessments/:id/attempts", async (req, res) => {
  const { id } = req.params

  try {
    const prismaAny = prisma as any
    const attempts = await prismaAny.assessmentAttempt.findMany({
      where: { assessmentId: id },
      orderBy: { createdAt: "desc" },
    })

    res.json(attempts)
  } catch (e) {
    console.error("Failed to list assessment attempts", e)
    res.status(500).json({ error: "Failed to list assessment attempts" })
  }
})

// Grade an assessment attempt (update score + status)
app.post("/api/assessment-attempts/:attemptId/grade", async (req, res) => {
  const { attemptId } = req.params
  const body = req.body as { score?: number }

  if (typeof body.score !== "number") {
    res.status(400).json({ error: "score must be a number" })
    return
  }

  try {
    const prismaAny = prisma as any

    const updated = await prismaAny.assessmentAttempt.update({
      where: { id: attemptId },
      data: {
        score: body.score,
        status: "EVALUATED",
      },
    })

    res.json(updated)
  } catch (e) {
    console.error("Failed to grade assessment attempt", e)
    res.status(500).json({ error: "Failed to grade assessment attempt" })
  }
})

// ----- Student dashboard API -----

app.get("/api/student-dashboard/:studentId", (req, res) => {
  const { studentId } = req.params
  const data = studentDashboards[studentId]
  if (!data) {
    res.status(404).json({ error: "Student dashboard not found" })
    return
  }
  res.json(data)
})

// File upload endpoint
app.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" })
    return
  }

  const file = req.file

  // Build a URL that the frontend can use directly. If the app is deployed
  // behind a proxy, you may want to replace this with an explicit
  // configuration-based base URL instead.
  const baseUrl = `${req.protocol}://${req.get("host")}`
  const publicPath = `/uploads/${file.filename}`
  const publicUrl = `${baseUrl}${publicPath}`

  let dbId: string | null = null

  try {
    const prismaFileModel = (prisma as any).file
    if (prismaFileModel && typeof prismaFileModel.create === "function") {
      const dbFile = await prismaFileModel.create({
        data: {
          filename: file.filename,
          url: publicPath,
          mimeType: file.mimetype,
          size: typeof file.size === "number" ? file.size : undefined,
          externalId: file.filename,
          metadata: {
            originalName: file.originalname,
          },
        },
      })
      dbId = dbFile.id as string
    }
  } catch (e) {
    // If the database write fails (for example, migrations not yet run), we
    // still return a success response so that study material uploads work
    // end-to-end using the local filesystem.
    console.error("Failed to save file metadata to database", e)
  }

  res.json({
    id: dbId,
    url: publicUrl,
    filename: file.filename,
    originalName: file.originalname,
    size: file.size,
    mimetype: file.mimetype,
  })
})

// Serve uploaded files statically
app.use(
  "/uploads",
  express.static(uploadDir),
)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`)
})
