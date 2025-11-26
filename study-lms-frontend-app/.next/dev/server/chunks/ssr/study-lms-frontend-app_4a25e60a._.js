module.exports = [
"[project]/study-lms-frontend-app/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockAssessments",
    ()=>mockAssessments,
    "mockAssignments",
    ()=>mockAssignments,
    "mockLabEvents",
    ()=>mockLabEvents,
    "mockQuestions",
    ()=>mockQuestions,
    "mockSemesterReports",
    ()=>mockSemesterReports,
    "mockStudentResults",
    ()=>mockStudentResults,
    "mockStudyMaterials",
    ()=>mockStudyMaterials,
    "mockSubjects",
    ()=>mockSubjects,
    "mockUsers",
    ()=>mockUsers
]);
const mockUsers = {
    student1: {
        id: "student1",
        email: "aditya.sharma@thapar.edu",
        name: "Aditya Sharma",
        rollNumber: "UE20CS012",
        branch: "CSE",
        role: "Student",
        profileImage: "/placeholder.svg?height=40&width=40"
    },
    teacher1: {
        id: "teacher1",
        email: "priya.verma@thapar.edu",
        name: "Prof. Priya Verma",
        branch: "CSE",
        role: "Teacher",
        profileImage: "/placeholder.svg?height=40&width=40"
    }
};
const mockSubjects = [
    {
        id: "sub1",
        name: "Data Structures",
        code: "CS201",
        branch: "CSE",
        semester: 3,
        credits: 4,
        faculty: "Prof. Priya Verma"
    },
    {
        id: "sub2",
        name: "Web Development",
        code: "CS301",
        branch: "CSE",
        semester: 4,
        credits: 3,
        faculty: "Prof. Neha Singh"
    },
    {
        id: "sub3",
        name: "Database Management",
        code: "CS205",
        branch: "CSE",
        semester: 3,
        credits: 3,
        faculty: "Prof. Rajesh Patel"
    }
];
const mockStudyMaterials = [
    {
        id: "mat1",
        subjectId: "sub1",
        title: "Arrays and Linked Lists",
        description: "Comprehensive guide on arrays and linked list implementations",
        type: "pdf",
        uploadedBy: "Prof. Amit Kumar",
        uploadedDate: "2024-11-15",
        fileUrl: "#",
        fileSize: "2.4 MB"
    },
    {
        id: "mat2",
        subjectId: "sub1",
        title: "Trees and Graphs - Video Lecture",
        description: "Complete video lecture on tree and graph data structures",
        type: "video",
        uploadedBy: "Prof. Amit Kumar",
        uploadedDate: "2024-11-10",
        fileUrl: "#",
        fileSize: "450 MB"
    },
    {
        id: "mat3",
        subjectId: "sub1",
        title: "Sorting Algorithms Implementation",
        description: "Detailed code examples for various sorting algorithms",
        type: "document",
        uploadedBy: "Prof. Amit Kumar",
        uploadedDate: "2024-11-08",
        fileUrl: "#",
        fileSize: "1.2 MB"
    },
    {
        id: "mat4",
        subjectId: "sub2",
        title: "React Fundamentals",
        description: "Introduction to React components and hooks",
        type: "presentation",
        uploadedBy: "Prof. Neha Singh",
        uploadedDate: "2024-11-12",
        fileUrl: "#",
        fileSize: "3.1 MB"
    },
    {
        id: "mat5",
        subjectId: "sub2",
        title: "CSS Layout Techniques",
        description: "Mastering Flexbox and Grid",
        type: "pdf",
        uploadedBy: "Prof. Neha Singh",
        uploadedDate: "2024-11-05",
        fileUrl: "#",
        fileSize: "1.8 MB"
    }
];
const mockLabEvents = [
    {
        id: "lab1",
        title: "Data Structures Lab - Arrays",
        description: "Hands-on lab for array implementation and operations",
        date: "2024-12-15",
        time: "10:00 AM",
        duration: 120,
        branches: [
            "CSE"
        ],
        eventType: "lab",
        location: "Lab-201",
        status: "scheduled",
        capacity: 30,
        enrolled: 28
    },
    {
        id: "lab2",
        title: "Linked List Implementation Viva",
        description: "Viva examination for linked list concepts",
        date: "2024-12-18",
        time: "02:00 PM",
        duration: 60,
        branches: [
            "CSE"
        ],
        eventType: "viva",
        location: "Lab-202",
        status: "scheduled",
        capacity: 15,
        enrolled: 14
    },
    {
        id: "lab3",
        title: "Web Dev Project Presentation",
        description: "Students present their web development projects",
        date: "2024-12-20",
        time: "11:00 AM",
        duration: 180,
        branches: [
            "CSE"
        ],
        eventType: "presentation",
        location: "Auditorium-A",
        status: "scheduled",
        capacity: 50,
        enrolled: 45
    },
    {
        id: "lab4",
        title: "Database Lab - SQL Basics",
        description: "Introduction to SQL queries and database operations",
        date: "2024-12-10",
        time: "09:00 AM",
        duration: 90,
        branches: [
            "CSE"
        ],
        eventType: "lab",
        location: "Lab-301",
        status: "completed",
        capacity: 25,
        enrolled: 23
    }
];
const mockQuestions = [
    {
        id: "q1",
        assessmentId: "assess1",
        type: "mcq",
        questionText: "What is the time complexity of binary search?",
        order: 1,
        marks: 1,
        options: [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n²)"
        ],
        correctAnswer: 1
    },
    {
        id: "q2",
        assessmentId: "assess1",
        type: "mcq",
        questionText: "Which data structure uses LIFO principle?",
        order: 2,
        marks: 1,
        options: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
        ],
        correctAnswer: 1
    },
    {
        id: "q3",
        assessmentId: "assess1",
        type: "coding",
        questionText: "Write a function to find the sum of all elements in an array",
        order: 3,
        marks: 5,
        language: "javascript",
        boilerplateCode: `function arraySum(arr) {
  // Write your code here
}`,
        testCases: [
            {
                id: "tc1",
                input: "[1,2,3,4,5]",
                expectedOutput: "15",
                isHidden: false
            },
            {
                id: "tc2",
                input: "[10,20,30]",
                expectedOutput: "60",
                isHidden: true
            }
        ]
    }
];
const mockAssessments = [
    {
        id: "assess1",
        title: "Data Structures Quiz",
        subjectId: "sub1",
        description: "Quick assessment on basic data structures concepts",
        type: "mcq",
        duration: 30,
        totalMarks: 10,
        passcode: "1234",
        questions: mockQuestions.filter((q)=>q.assessmentId === "assess1"),
        createdBy: "teacher1",
        createdDate: "2024-11-10",
        startTime: "2024-12-01T10:00:00",
        endTime: "2024-12-31T23:59:59",
        status: "published"
    },
    {
        id: "assess2",
        title: "Data Structures Final Exam",
        subjectId: "sub1",
        description: "Comprehensive exam including MCQs and coding problems",
        type: "mixed",
        duration: 120,
        totalMarks: 50,
        passcode: "5678",
        questions: mockQuestions,
        createdBy: "teacher1",
        createdDate: "2024-11-15",
        startTime: "2024-12-20T10:00:00",
        endTime: "2024-12-20T23:59:59",
        status: "published"
    }
];
const mockAssignments = [
    {
        id: "assign1",
        subjectId: "sub1",
        title: "Implement Binary Search Tree",
        description: "Create a complete BST implementation with insert, delete, and search operations",
        deadline: "2024-12-25",
        totalMarks: 20,
        groupSize: 1,
        attachments: [
            "bst-template.zip"
        ],
        createdDate: "2024-11-15",
        createdBy: "teacher1"
    },
    {
        id: "assign2",
        subjectId: "sub1",
        title: "Graph Traversal Analysis",
        description: "Implement BFS and DFS with complexity analysis",
        deadline: "2024-12-28",
        totalMarks: 25,
        groupSize: 2,
        attachments: [
            "graph-template.zip"
        ],
        createdDate: "2024-11-12",
        createdBy: "teacher1"
    },
    {
        id: "assign3",
        subjectId: "sub2",
        title: "Build a Todo Application",
        description: "Create a fully functional todo app using React",
        deadline: "2024-12-20",
        totalMarks: 30,
        groupSize: 1,
        attachments: [],
        createdDate: "2024-11-08",
        createdBy: "teacher1"
    }
];
const mockStudentResults = [
    {
        id: "res1",
        studentId: "student1",
        assessmentId: "assess1",
        marksObtained: 9,
        totalMarks: 10,
        percentage: 90,
        status: "completed",
        submittedAt: "2024-12-05T10:45:00",
        feedback: "Excellent performance! Well done."
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
        feedback: "Good work. Review topics on graph algorithms."
    }
];
const mockSemesterReports = [
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
                gradePoint: 9
            },
            {
                courseId: "sub3",
                courseName: "Database Management",
                credits: 3,
                grade: "A-",
                gradePoint: 8.5
            },
            {
                courseId: "sub1",
                courseName: "Data Structures",
                credits: 4,
                grade: "A",
                gradePoint: 9
            }
        ],
        sgpa: 8.83,
        cgpa: 8.56
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
                gradePoint: 9
            },
            {
                courseId: "os",
                courseName: "Operating Systems",
                credits: 4,
                grade: "A-",
                gradePoint: 8.5
            }
        ],
        sgpa: 8.45,
        cgpa: 8.35
    }
];
}),
"[project]/study-lms-frontend-app/store/auth-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/lib/mock-data.ts [app-ssr] (ecmascript)");
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        currentUser: null,
        isAuthenticated: false,
        login: (email, password)=>{
            if (!email || !password) {
                return {
                    success: false,
                    error: "Email and password are required"
                };
            }
            if (!email.includes("@thapar.edu")) {
                return {
                    success: false,
                    error: "Please use your @thapar.edu email"
                };
            }
            // Mock login - in real app, would call backend
            const mockUser = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockUsers"]).find((u)=>u.email === email);
            if (mockUser && password.length >= 6) {
                set({
                    currentUser: mockUser,
                    isAuthenticated: true
                });
                return {
                    success: true
                };
            }
            return {
                success: false,
                error: "Invalid credentials. Try aditya.sharma@thapar.edu or priya.verma@thapar.edu with password 'password'"
            };
        },
        signup: (email, password, name, rollNumber, branch, role)=>{
            if (!email || !password || !name || !branch) {
                return {
                    success: false,
                    error: "All fields are required"
                };
            }
            if (!email.includes("@thapar.edu")) {
                return {
                    success: false,
                    error: "Please use your @thapar.edu email"
                };
            }
            if (password.length < 6) {
                return {
                    success: false,
                    error: "Password must be at least 6 characters"
                };
            }
            if (role === "Student" && !rollNumber) {
                return {
                    success: false,
                    error: "Roll number is required for students"
                };
            }
            const newUser = {
                id: `user_${Date.now()}`,
                email,
                name,
                rollNumber: role === "Student" ? rollNumber : undefined,
                branch,
                role,
                profileImage: "/placeholder.svg?height=40&width=40"
            };
            // In real app, would save to backend
            set({
                currentUser: newUser,
                isAuthenticated: true
            });
            return {
                success: true
            };
        },
        logout: ()=>{
            set({
                currentUser: null,
                isAuthenticated: false
            });
        }
    }), {
    name: "auth-store"
}));
}),
"[project]/study-lms-frontend-app/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/store/auth-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.isAuthenticated);
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$store$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.currentUser);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated && currentUser) {
            if (currentUser.role === "Student") {
                router.push("/student/dashboard");
            } else if (currentUser.role === "Teacher") {
                router.push("/teacher/dashboard");
            }
        } else {
            router.push("/login");
        }
    }, [
        isAuthenticated,
        currentUser,
        router
    ]);
    return null;
}
}),
"[project]/study-lms-frontend-app/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/study-lms-frontend-app/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study-lms-frontend-app/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getState()), [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getInitialState()), [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2d$lms$2d$frontend$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/study-lms-frontend-app/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combine",
    ()=>combine,
    "createJSONStorage",
    ()=>createJSONStorage,
    "devtools",
    ()=>devtools,
    "persist",
    ()=>persist,
    "redux",
    ()=>redux,
    "subscribeWithSelector",
    ()=>subscribeWithSelector
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("study-lms-frontend-app/node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...args)=>api.dispatch(...args),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const removeStoreFromTrackedConnections = (name, store)=>{
    if (store === void 0) return;
    const connectionInfo = trackedConnections.get(name);
    if (!connectionInfo) return;
    delete connectionInfo.stores[store];
    if (Object.keys(connectionInfo.stores).length === 0) {
        trackedConnections.delete(name);
    }
};
const findCallerName = (stack)=>{
    var _a, _b;
    if (!stack) return void 0;
    const traceLines = stack.split("\n");
    const apiSetStateLineIndex = traceLines.findIndex((traceLine)=>traceLine.includes("api.setState"));
    if (apiSetStateLineIndex < 0) return void 0;
    const callerLine = ((_a = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a.trim()) || "";
    return (_b = /.+ (.+) .+/.exec(callerLine)) == null ? void 0 : _b[1];
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || findCallerName(new Error().stack) || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        api.devtools = {
            cleanup: ()=>{
                if (connection && typeof connection.unsubscribe === "function") {
                    connection.unsubscribe();
                }
                removeStoreFromTrackedConnections(options.name, store);
            }
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...args)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && args[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...args);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, fn)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) fn(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
function combine(initialState, create) {
    return (...args)=>Object.assign({}, initialState, create(...args));
}
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            return setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            return setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            const migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                            if (migration instanceof Promise) {
                                return migration.then((result)=>[
                                        true,
                                        result
                                    ]);
                            }
                            return [
                                true,
                                migration
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}),
];

//# sourceMappingURL=study-lms-frontend-app_4a25e60a._.js.map