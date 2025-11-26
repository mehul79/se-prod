"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const labEventsFile = path_1.default.join(process.cwd(), "lab-events.json");
const assignmentsFile = path_1.default.join(process.cwd(), "assignments.json");
const assignmentSubmissionsFile = path_1.default.join(process.cwd(), "assignment-submissions.json");
function loadLabEvents() {
    try {
        if (fs_1.default.existsSync(labEventsFile)) {
            const raw = fs_1.default.readFileSync(labEventsFile, "utf-8");
            const parsed = JSON.parse(raw);
            return parsed;
        }
    }
    catch (e) {
        console.error("Failed to read lab-events.json", e);
    }
    // Seed with a couple of default events if file does not exist
    const seed = [
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
    ];
    saveLabEvents(seed);
    return seed;
}
function saveLabEvents(events) {
    try {
        fs_1.default.writeFileSync(labEventsFile, JSON.stringify(events, null, 2), "utf-8");
    }
    catch (e) {
        console.error("Failed to write lab-events.json", e);
    }
}
function loadAssignments() {
    try {
        if (fs_1.default.existsSync(assignmentsFile)) {
            const raw = fs_1.default.readFileSync(assignmentsFile, "utf-8");
            return JSON.parse(raw);
        }
    }
    catch (e) {
        console.error("Failed to read assignments.json", e);
    }
    const seed = [
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
    ];
    saveAssignments(seed);
    return seed;
}
function saveAssignments(assignments) {
    try {
        fs_1.default.writeFileSync(assignmentsFile, JSON.stringify(assignments, null, 2), "utf-8");
    }
    catch (e) {
        console.error("Failed to write assignments.json", e);
    }
}
function loadAssignmentSubmissions() {
    try {
        if (fs_1.default.existsSync(assignmentSubmissionsFile)) {
            const raw = fs_1.default.readFileSync(assignmentSubmissionsFile, "utf-8");
            return JSON.parse(raw);
        }
    }
    catch (e) {
        console.error("Failed to read assignment-submissions.json", e);
    }
    return [];
}
function saveAssignmentSubmissions(subs) {
    try {
        fs_1.default.writeFileSync(assignmentSubmissionsFile, JSON.stringify(subs, null, 2), "utf-8");
    }
    catch (e) {
        console.error("Failed to write assignment-submissions.json", e);
    }
}
let labEvents = loadLabEvents();
let assignments = loadAssignments();
let assignmentSubmissions = loadAssignmentSubmissions();
const branches = ["CSE", "ECE", "ME", "CE", "ELE"];
// In-memory student dashboard data keyed by studentId
const studentDashboards = {
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
                description: "Create a complete BST implementation with insert, delete, and search operations",
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
};
// Basic middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
}));
// Ensure uploads directory exists in backend root
const uploadDir = path_1.default.join(process.cwd(), "uploads");
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir, { recursive: true });
}
// Multer storage configuration for local file uploads
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const timestamp = Date.now();
        const safeOriginalName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_");
        cb(null, `${timestamp}-${safeOriginalName}`);
    },
});
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB
    },
});
// Health check
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
// ----- Lab events API -----
// List lab events
app.get("/api/lab-events", (_req, res) => {
    // Sort by date/time ascending for convenience
    const sorted = [...labEvents].sort((a, b) => {
        const aDate = new Date(`${a.date}T${a.time || "00:00"}`);
        const bDate = new Date(`${b.date}T${b.time || "00:00"}`);
        return aDate.getTime() - bDate.getTime();
    });
    res.json(sorted);
});
// Create a new lab event
app.post("/api/lab-events", (req, res) => {
    const body = req.body;
    if (!body.title || !body.date || !body.time || !body.duration || !body.location) {
        res.status(400).json({ error: "title, date, time, duration and location are required" });
        return;
    }
    const eventBranches = Array.isArray(body.branches)
        ? body.branches.filter((b) => branches.includes(b))
        : [];
    const newEvent = {
        id: `lab_${Date.now()}`,
        title: body.title,
        description: body.description || "",
        date: body.date,
        time: body.time,
        duration: Number(body.duration) || 60,
        eventType: body.eventType || "lab",
        location: body.location,
        branches: eventBranches.length ? eventBranches : ["CSE"],
        status: body.status || "scheduled",
        capacity: body.capacity ? Number(body.capacity) : undefined,
        enrolled: body.enrolled ? Number(body.enrolled) : 0,
    };
    labEvents.push(newEvent);
    saveLabEvents(labEvents);
    res.status(201).json(newEvent);
});
// ----- Assignments API -----
// List assignments
app.get("/api/assignments", (_req, res) => {
    // sort by deadline
    const sorted = [...assignments].sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
    res.json(sorted);
});
// Create assignment (metadata only, file uploaded separately via /api/upload)
app.post("/api/assignments", (req, res) => {
    const body = req.body;
    if (!body.title || !body.description || !body.deadline || !body.totalMarks || !body.subjectId) {
        res.status(400).json({
            error: "title, description, deadline, totalMarks, subjectId are required",
        });
        return;
    }
    const newAssignment = {
        id: `assign_${Date.now()}`,
        subjectId: body.subjectId,
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        totalMarks: Number(body.totalMarks),
        groupSize: body.groupSize ? Number(body.groupSize) : undefined,
        attachments: Array.isArray(body.attachments) ? body.attachments : [],
        createdDate: new Date().toISOString().slice(0, 10),
        createdBy: body.createdBy || "teacher1",
    };
    assignments.push(newAssignment);
    saveAssignments(assignments);
    res.status(201).json(newAssignment);
});
// Submit assignment
app.post("/api/assignments/:id/submissions", (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const assignment = assignments.find((a) => a.id === id);
    if (!assignment) {
        res.status(404).json({ error: "Assignment not found" });
        return;
    }
    if (!body.studentId) {
        res.status(400).json({ error: "studentId is required" });
        return;
    }
    const files = Array.isArray(body.files) ? body.files : [];
    const submission = {
        id: `sub_${Date.now()}`,
        assignmentId: id,
        studentId: body.studentId,
        submittedAt: new Date().toISOString(),
        files,
    };
    assignmentSubmissions.push(submission);
    saveAssignmentSubmissions(assignmentSubmissions);
    res.status(201).json(submission);
});
// ----- Student dashboard API -----
app.get("/api/student-dashboard/:studentId", (req, res) => {
    const { studentId } = req.params;
    const data = studentDashboards[studentId];
    if (!data) {
        res.status(404).json({ error: "Student dashboard not found" });
        return;
    }
    res.json(data);
});
// File upload endpoint
app.post("/api/upload", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const file = req.file;
    const publicUrl = `/uploads/${file.filename}`;
    try {
        // Using `as any` here to avoid compile-time issues if the Prisma client
        // types are not regenerated after schema changes. At runtime this will
        // call the `file` model on the Prisma client if it exists.
        const dbFile = yield db_1.default.file.create({
            data: {
                filename: file.filename,
                url: publicUrl,
                mimeType: file.mimetype,
                size: typeof file.size === "number" ? file.size : undefined,
                externalId: file.filename,
                metadata: {
                    originalName: file.originalname,
                },
            },
        });
        res.json({
            id: dbFile.id,
            url: publicUrl,
            filename: file.filename,
            originalName: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
        });
    }
    catch (e) {
        console.error("Failed to save file metadata to database", e);
        res.status(500).json({ error: "Failed to save file metadata" });
    }
}));
// Serve uploaded files statically
app.use("/uploads", express_1.default.static(uploadDir));
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
});
