# Role-Based System & Theming Guide

## Overview

StudyLMS implements a comprehensive role-based access control system with two main user roles: **Student** and **Teacher**. Each role has distinct permissions, features, and UI layouts.

## Roles

### Student Role
**Email**: `aditya.sharma@thapar.edu`  
**Password**: `password`

**Features & Access:**
- Dashboard with academic performance metrics
- Study Materials (subject-wise organized resources)
- Lab Evaluation Calendar (with timeline/kanban views)
- Assignments (list, submission, deadlines)
- Results & Performance tracking
- Assessment participation with webcam/mic permissions
- Personal information management

**Routes:**
- `/student/dashboard` - Main dashboard
- `/student/study-materials` - Study resources
- `/student/lab-calendar` - Lab schedule
- `/student/assignments` - Assignment list
- `/student/results` - Academic results
- `/student/assessment` - Take assessments

### Teacher Role
**Email**: `priya.verma@thapar.edu`  
**Password**: `password`

**Features & Access:**
- Dashboard with teaching statistics
- Lab Evaluation Scheduling (create and manage events)
- Study Materials Management (upload/organize resources)
- Assessment Creation & Authoring
- Result Grading & Feedback
- Student progress tracking

**Routes:**
- `/teacher/dashboard` - Main dashboard
- `/teacher/lab-scheduling` - Create/manage lab events
- `/teacher/study-materials` - Manage resources
- `/teacher/create-assessment` - Author assessments
- `/teacher/evaluate-results` - Grade submissions

## Authentication Flow

### Login Page (`/login`)
1. Select role (Student or Teacher)
2. Credentials auto-populate for demo
3. System validates email format (@thapar.edu)
4. Successful login redirects to role-specific dashboard

### Signup Page (`/signup`)
1. Select role during registration
2. Role-specific fields appear dynamically
3. Students must provide roll number
4. Teachers skip roll number field
5. Validation ensures @thapar.edu email

## Theming System

### Theme Store
Located in `store/theme-store.ts`, manages theme state:
- **light** - Light mode
- **dark** - Dark mode
- **system** - Follows system preference (default)

### Theme Provider
`components/theme-provider.tsx` - Initializes theme on app load and syncs with localStorage

### Theme Toggle
`components/theme-toggle.tsx` - Available on all pages:
- Dropdown menu with three options
- Stored in browser localStorage
- Persists across sessions

### Design Tokens (globals.css)
Professional color palette with role-agnostic theming:

**Light Mode:**
- Primary: Professional Teal (oklch 0.45 0.15 200)
- Secondary: Muted Slate (oklch 0.92 0.02 210)
- Background: Off-white (oklch 0.98 0 0)

**Dark Mode:**
- Primary: Lighter Teal (oklch 0.65 0.12 200)
- Secondary: Dark Slate (oklch 0.25 0.02 210)
- Background: Near-black (oklch 0.12 0 0)

### Using Theme in Components

\`\`\`tsx
// Colors automatically adapt based on current theme
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Action Button
  </button>
</div>
\`\`\`

## Role-Based Navigation

### Student Sidebar (`components/student-sidebar.tsx`)
Navigation links specific to student features with role-based icon indicators

### Teacher Sidebar (`components/teacher-sidebar.tsx`)
Navigation links specific to teacher features with role-based styling

### Protection
- Root page (`/app/page.tsx`) redirects unauthenticated users to `/login`
- Dashboards protected by role-check in layout
- Failed authentication returns to login

## Authentication Store

Located in `store/auth-store.ts`:

\`\`\`typescript
// Login
const result = login(email, password)
// Returns: { success: boolean, error?: string }

// Signup
const result = signup(email, password, name, rollNumber, branch, role)
// Returns: { success: boolean, error?: string }

// Logout
logout()

// Check current user
const currentUser = useAuthStore(state => state.currentUser)
const isAuthenticated = useAuthStore(state => state.isAuthenticated)
\`\`\`

## Demo Credentials

### Student Login
- Email: `aditya.sharma@thapar.edu`
- Password: `password`
- Branch: CSE

### Teacher Login
- Email: `priya.verma@thapar.edu`
- Password: `password`
- Branch: CSE

## Validation Rules

### Email
- Must end with `@thapar.edu`
- Checked on both login and signup
- Client-side only (no backend validation)

### Password
- Minimum 6 characters
- No complexity requirements for demo
- Stored client-side only (localStorage via Zustand persist)

### Roll Number (Students Only)
- Required for student signup
- Format: Free-text (e.g., UE20CS001)
- Not required for teacher registration

### Branch
- Required for both roles
- Options: CSE, ECE, ME, CE, ELE
- Determines access to subject-specific content

## Security Notes

This is a **frontend-only demo** with these limitations:

- Passwords stored in localStorage (NOT production-safe)
- No backend validation
- No real authentication tokens
- No server-side session management
- For production, implement:
  - Backend authentication service
  - Secure token storage (httpOnly cookies)
  - Server-side session validation
  - OTP/2FA for enhanced security

## Extending Roles

To add a new role:

1. Update `types/index.ts` - Add to `UserRole` type
2. Update `store/auth-store.ts` - Add role validation logic
3. Create new sidebar: `components/<role>-sidebar.tsx`
4. Create layout: `app/<role>/layout.tsx`
5. Create pages in `app/<role>/` directory
6. Update login/signup pages with role option

## Component Structure

\`\`\`
app/
├── login/page.tsx (role selector)
├── signup/page.tsx (role selector, dynamic fields)
├── student/
│   ├── layout.tsx
│   ├── dashboard/page.tsx
│   └── [other pages]
└── teacher/
    ├── layout.tsx
    ├── dashboard/page.tsx
    └── [other pages]

components/
├── theme-toggle.tsx
├── theme-provider.tsx
├── student-sidebar.tsx
├── student-topnav.tsx
├── teacher-sidebar.tsx
└── teacher-topnav.tsx

store/
├── auth-store.ts
└── theme-store.ts
