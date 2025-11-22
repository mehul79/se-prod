# StudyLMS - Complete File Structure & Overview

## Project Hierarchy

\`\`\`
studylms/
├── app/
│   ├── page.tsx                    # Root redirector to login/dashboard
│   ├── layout.tsx                  # Root layout with fonts & metadata
│   ├── globals.css                 # Global styles & theme tokens
│   │
│   ├── login/
│   │   └── page.tsx                # Email/password login with @thapar.edu validation
│   │
│   ├── signup/
│   │   └── page.tsx                # Registration with role & branch selection
│   │
│   ├── student/
│   │   ├── layout.tsx              # Student layout wrapper (auth protected)
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Main dashboard with CGPA, results, pending work
│   │   ├── study-materials/
│   │   │   └── page.tsx            # Course materials browser with filters
│   │   ├── lab-calendar/
│   │   │   └── page.tsx            # Lab events with list/calendar views
│   │   ├── assignments/
│   │   │   └── page.tsx            # Assignment list with submission UI
│   │   ├── results/
│   │   │   └── page.tsx            # Grades, GPA trends, performance charts
│   │   └── assessment/
│   │       ├── page.tsx            # Assessment taker with timer & questions
│   │       └── loading.tsx         # Loading state
│   │
│   ├── teacher/
│   │   ├── layout.tsx              # Teacher layout wrapper (auth protected)
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Overview with analytics & quick actions
│   │   ├── lab-scheduling/
│   │   │   └── page.tsx            # Create/manage lab events
│   │   ├── study-materials/
│   │   │   └── page.tsx            # Upload & manage materials
│   │   ├── create-assessment/
│   │   │   └── page.tsx            # Assessment authoring interface
│   │   └── evaluate-results/
│   │       └── page.tsx            # Grade submissions & results
│   │
│   └── icon*.png, apple-icon.png  # Favicon assets
│
├── components/
│   ├── student-sidebar.tsx         # Student navigation (mobile collapsible)
│   ├── student-topnav.tsx          # Student header with search & profile
│   ├── teacher-sidebar.tsx         # Teacher navigation (mobile collapsible)
│   ├── teacher-topnav.tsx          # Teacher header with search & profile
│   ├── assessment-timer.tsx        # Countdown timer with warnings
│   ├── code-editor.tsx             # Code input with test case display
│   ├── question-navigator.tsx      # Question selector with progress
│   ├── webcam-permission-modal.tsx # Permission request dialog
│   │
│   └── ui/                         # ShadCN UI Components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       ├── select.tsx
│       ├── badge.tsx
│       ├── alert.tsx
│       ├── dropdown-menu.tsx
│       ├── avatar.tsx
│       └── ... (all other ShadCN components)
│
├── store/
│   ├── auth-store.ts               # Zustand auth state (login, signup, logout)
│   └── assessment-store.ts         # Zustand assessment state (questions, answers)
│
├── lib/
│   ├── mock-data.ts                # Complete mock database
│   │   ├── mockUsers
│   │   ├── mockSubjects
│   │   ├── mockStudyMaterials
│   │   ├── mockLabEvents
│   │   ├── mockQuestions
│   │   ├── mockAssessments
│   │   ├── mockAssignments
│   │   ├── mockStudentResults
│   │   └── mockSemesterReports
│   └── utils.ts                    # Utility functions (cn, etc.)
│
├── types/
│   └── index.ts                    # TypeScript interfaces
│       ├── User, UserRole, Branch
│       ├── Subject
│       ├── StudyMaterial
│       ├── LabEvent
│       ├── Assessment, Question, TestCase
│       ├── StudentResponse, Answer
│       ├── Assignment, AssignmentSubmission
│       ├── StudentResult
│       └── SemesterReport
│
├── hooks/
│   ├── use-mobile.tsx              # Mobile detection hook
│   └── use-toast.ts                # Toast notifications
│
├── public/
│   ├── icon*.png                   # Favicons
│   ├── apple-icon.png
│   └── placeholder.svg             # Placeholder images
│
├── next.config.mjs                 # Next.js configuration
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies & scripts
├── tailwind.config.js              # Tailwind CSS config
├── README.md                       # Project documentation
└── PROJECT_STRUCTURE.md            # This file
\`\`\`

## Key Files Explained

### Types (`types/index.ts`)
Defines all TypeScript interfaces:
- **User**: Student/Teacher with roles
- **Subject**: Course info with credits
- **Assessment**: Tests with questions
- **StudentResponse**: Answer submissions
- **SemesterReport**: Academic records

### Mock Data (`lib/mock-data.ts`)
Complete in-memory database:
- 2 users (1 student, 1 teacher)
- 3 subjects with materials
- 4 lab events
- 2 assessments with 3 questions
- 3 assignments
- 2 results
- 2 semester reports

### Auth Store (`store/auth-store.ts`)
Zustand store for authentication:
- Client-side validation
- Email domain checking (@thapar.edu)
- localStorage persistence
- Role-based state

### Assessment Store (`store/assessment-store.ts`)
Manages assessment state during exams:
- Current assessment & answers
- Question navigation
- Auto-save functionality
- Submit handling

### Routing Structure

**Public Routes:**
\`\`\`
/ → Login page (if not authenticated)
/login → Login form
/signup → Registration form
\`\`\`

**Student Routes (Protected):**
\`\`\`
/student/dashboard → Main student dashboard
/student/study-materials → Course materials
/student/lab-calendar → Lab events calendar
/student/assignments → Assignment list
/student/results → Grades & performance
/student/assessment?assessmentId=<id> → Take assessment
\`\`\`

**Teacher Routes (Protected):**
\`\`\`
/teacher/dashboard → Main teacher dashboard
/teacher/lab-scheduling → Create/manage labs
/teacher/study-materials → Manage materials
/teacher/create-assessment → Create tests
/teacher/evaluate-results → Grade submissions
\`\`\`

## Component Relationships

### Student Dashboard Layout
\`\`\`
StudentLayout (page-level protection)
├── StudentSidebar (navigation)
├── StudentTopnav (search, profile)
└── Page Content
    ├── Dashboard/Materials/Calendar/Assignments/Results
\`\`\`

### Teacher Dashboard Layout
\`\`\`
TeacherLayout (page-level protection)
├── TeacherSidebar (navigation)
├── TeacherTopnav (search, profile)
└── Page Content
    ├── Dashboard/Labs/Materials/Assessments/Grading
\`\`\`

### Assessment Page
\`\`\`
Assessment/Page
├── WebcamPermissionModal (initial)
├── PasscodeInput (before start)
├── AssessmentInterface
│   ├── AssessmentTimer (countdown)
│   ├── QuestionNavigator (question selector)
│   ├── Question Display
│   │   ├── MCQ: Radio options
│   │   └── Coding: CodeEditor
│   └── Navigation Buttons
└── SubmissionConfirmation
\`\`\`

## Data Flow

### Authentication Flow
\`\`\`
Login/Signup Form
  ↓
useAuthStore.login() / signup()
  ↓
Validate @thapar.edu email
  ↓
Store in localStorage
  ↓
Redirect to dashboard
\`\`\`

### Assessment Flow
\`\`\`
Assessment List
  ↓
Click Assessment → /student/assessment?assessmentId=X
  ↓
Request Permissions (webcam/mic)
  ↓
Enter Passcode
  ↓
useAssessmentStore.startAssessment()
  ↓
Display Questions
  ↓
Answer Questions (updateAnswer)
  ↓
Submit or Timeout
  ↓
Store in assessment store
\`\`\`

## Styling System

### Global CSS (`app/globals.css`)
- **Tailwind v4** with CSS variables
- **Theme tokens**: colors, radius, fonts
- **Light & Dark modes** with custom-variant
- **Design system**: semantic color names

### Component Styles
- ShadCN UI components use design tokens
- Tailwind utility classes throughout
- Responsive prefixes (md:, lg:)
- Focus/hover states for accessibility

### Color Palette
\`\`\`
Primary:      Teal (#45B399)
Secondary:    Slate (#D8E4F0)
Accent:       Light Blue (#5C7FA6)
Destructive:  Red (#EF5350)
Muted:        Gray (#757575)
\`\`\`

## Performance Optimizations

1. **Code Splitting**: Each route is a separate chunk
2. **Image Optimization**: Placeholder images from API
3. **State Management**: Zustand (minimal overhead)
4. **Component Lazy Loading**: Dialog/modals load on demand
5. **CSS-in-JS**: Tailwind doesn't generate unused styles

## Accessibility Features

- Semantic HTML (main, header, nav)
- ARIA labels and roles
- Keyboard navigation (tabs, enter)
- Screen reader support
- Color contrast compliance
- Focus indicators

## Browser Compatibility

Targets modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Module Dependencies

**Core:**
- next 16
- react 19
- typescript

**UI:**
- @radix-ui/* (base components)
- shadcn/ui (pre-built components)
- lucide-react (icons)
- class-variance-authority (styling)

**State & Data:**
- zustand (state management)
- date-fns (date utilities)

**Charts:**
- recharts (charting library)

**Dev:**
- tailwindcss v4
- tailwindcss/typography
- tailwind-merge

## Common Tasks

### Adding a New Student
Edit `lib/mock-data.ts`:
\`\`\`typescript
export const mockUsers: Record<string, User> = {
  'newstudent': {
    id: 'newstudent',
    email: 'name@thapar.edu',
    name: 'Student Name',
    rollNumber: 'UE20CS999',
    branch: 'CSE',
    role: 'Student'
  }
}
\`\`\`

### Creating an Assessment
1. Add questions to `mockQuestions`
2. Create assessment in `mockAssessments`
3. Link questions in assessment
4. Access via `/student/assessment?assessmentId=assess_id`

### Modifying Branches
Edit `types/index.ts`:
\`\`\`typescript
export type Branch = 'CSE' | 'ECE' | 'ME' | 'CE' | 'ELE' | 'BT';
\`\`\`

### Changing Theme Colors
Edit `app/globals.css` CSS variables section.

## Deployment

### To Vercel (Recommended)
\`\`\`bash
vercel deploy
\`\`\`

### Self-Hosted
\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables
None required for this frontend-only version. To add backend:
- `NEXT_PUBLIC_API_URL` - Backend API endpoint
- `NEXT_PUBLIC_AUTH_SECRET` - Client-side secret (if needed)

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Author**: v0 (Vercel AI)
