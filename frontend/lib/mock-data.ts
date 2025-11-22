export const MOCK_USERS = [
  {
    id: "student-1",
    email: "student@thapar.edu",
    name: "Arjun Patel",
    role: "student",
    studentData: {
      rollNumber: "20BCS001",
      branch: "COPC",
      subjects: ["cs101", "cs102", "cs103"],
    },
    createdAt: "2025-01-01",
  },
  {
    id: "teacher-1",
    email: "teacher@thapar.edu",
    name: "Dr. Rajesh Kumar",
    role: "teacher",
    teacherData: {
      employeeId: "T001",
      subjectsTaught: ["cs101", "cs102"],
      branchesTaught: ["COPC", "COE"],
    },
    createdAt: "2025-01-01",
  },
] as const

export const MOCK_SUBJECTS = [
  { id: "cs101", name: "Data Structures" },
  { id: "cs102", name: "Algorithms" },
  { id: "cs103", name: "Database Systems" },
  { id: "cs104", name: "Operating Systems" },
]

export const MOCK_BRANCHES = ["COPC", "COE", "ENC", "ECE", "MECH", "CHEM"] as const
