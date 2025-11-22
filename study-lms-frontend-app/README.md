# StudyLMS - Complete Frontend Learning Management System

A production-ready, fully-featured Learning Management System built with **Next.js 16 + TypeScript + Tailwind CSS + ShadCN UI** for Thapar University. This is a **frontend-only implementation** with complete mock data, no backend APIs required.

## Features Overview

### 🎓 Student Features
- **Dashboard**: CGPA tracking, semester reports, pending work overview
- **Study Materials**: Browse and download subject-organized course materials (PDFs, videos, documents)
- **Lab Calendar**: View upcoming lab events with list/calendar views, detailed event modals
- **Assignments**: Submit individual/group assignments with deadline tracking
- **Results**: View grades, GPA trends, course performance metrics
- **Assessment System**: 
  - Webcam/microphone permission prompts
  - Passcode-protected access
  - MCQ and coding question types
  - Real-time countdown timers
  - Auto-submit on timeout
  - Code editor with test case execution
  - Question navigator with progress tracking

### 👨‍🏫 Teacher Features
- **Dashboard**: Analytics, salary/fees overview, quick actions
- **Lab Scheduling**: Create/manage lab events, presentations, vivas with branch selection
- **Study Materials**: Upload, manage, and organize study materials by subject
- **Create Assessments**: Authoring tool for MCQ, coding, and mixed assessments
- **Evaluate Results**: Grade submissions, auto-grade MCQ, manual code grading
- **Performance Tracking**: Student performance analytics and reporting

## Project Architecture

### Directory Structure
\`\`\`
src/
├── app/
│   ├── login/                          # Login page
│   ├── signup/                         # Registration page
│   ├── student/
│   │   ├── layout.tsx                  # Student layout wrapper
│   │   ├── dashboard/page.tsx          # Main dashboard
│   │   ├── study-materials/page.tsx    # Materials listing
│   │   ├── lab-calendar/page.tsx       # Lab events
│   │   ├── assignments/page.tsx        # Assignment management
│   │   ├── results/page.tsx            # Grades & performance
│   │   └── assessment/page.tsx         # Assessment taker
│   ├── teacher/
│   │   ├── layout.tsx                  # Teacher layout wrapper
│   │   ├── dashboard/page.tsx          # Teacher dashboard
│   │   ├── lab-scheduling/page.tsx     # Lab creation
│   │   ├── study-materials/page.tsx    # Material management
│   │   ├── create-assessment/page.tsx  # Assessment creation
│   │   └── evaluate-results/page.tsx   # Grading interface
│   ├── globals.css                     # Theme & styling
│   └── layout.tsx                      # Root layout
│
├── components/
│   ├── student-sidebar.tsx             # Student navigation
│   ├── student-topnav.tsx              # Student header
│   ├── teacher-sidebar.tsx             # Teacher navigation
│   ├── teacher-topnav.tsx              # Teacher header
│   ├── assessment-timer.tsx            # Countdown timer
│   ├── code-editor.tsx                 # Code input component
│   ├── question-navigator.tsx          # Question selector
│   ├── webcam-permission-modal.tsx     # Permission request
│   └── ui/*                            # ShadCN UI components
│
├── store/
│   ├── auth-store.ts                   # Zustand auth management
│   └── assessment-store.ts             # Assessment state
│
├── lib/
│   ├── mock-data.ts                    # Complete mock dataset
│   └── utils.ts                        # Utility functions
│
└── types/
    └── index.ts                        # TypeScript interfaces
\`\`\`

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + ShadCN UI
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: ShadCN UI pre-configured

## Authentication

### Login Credentials (Demo)
The system uses **client-side only validation** with the following demo credentials:

**Student Account:**
- Email: `aditya.sharma@thapar.edu`
- Password: `password`
- Roll: `UE20CS012`
- Branch: `CSE`

**Teacher Account:**
- Email: `prof.amit@thapar.edu`
- Password: `password`
- Branch: `CSE`

### Validation Rules
- Email must end with `@thapar.edu`
- Password must be at least 6 characters
- Students must provide roll number and branch
- All credentials are stored in browser localStorage (development only)

## Assessment System Details

### Features
1. **Passcode Protection**: Students enter assessment passcode before starting
2. **Permissions**: Requests webcam and microphone access (mock implementation)
3. **Question Types**:
   - **MCQ**: Multiple choice with single correct answer
   - **Coding**: Interactive code editor with test cases
4. **Timers**: 
   - Global countdown timer with visual warnings
   - Auto-submit when time expires
   - 5-minute warning (yellow), 1-minute critical (red)
5. **Question Navigation**: Visual indicator for answered/pending questions
6. **Auto-Submit**: Automatic submission on timeout with user confirmation

### Assessment URL
Access assessments via query parameter: `/student/assessment?assessmentId=assess1`

## State Management

### Auth Store (Zustand)
\`\`\`typescript
useAuthStore.getState() -> {
  currentUser: User | null
  isAuthenticated: boolean
  login(email, password)
  signup(email, password, name, rollNumber, branch, role)
  logout()
}
\`\`\`

### Assessment Store (Zustand)
\`\`\`typescript
useAssessmentStore.getState() -> {
  currentResponse: StudentResponse | null
  startAssessment(studentId, assessmentId)
  updateAnswer(questionId, answer)
  submitAssessment()
  getAnswer(questionId)
}
\`\`\`

## Mock Data Structure

### Database Entities
- **Users**: Student and teacher profiles with roles
- **Subjects**: Courses with semester and credit information
- **StudyMaterials**: PDFs, videos, documents organized by subject
- **LabEvents**: Scheduled labs, presentations, vivas with capacity
- **Assessments**: MCQ and coding questions with metadata
- **Assignments**: Coursework with deadlines and group options
- **Results**: Student performance and grading records
- **SemesterReports**: Academic transcripts with GPA/SGPA

All data is in `/lib/mock-data.ts` - easily modify for your needs.

## Styling & Theme

### Color System
- **Primary**: Professional teal (`oklch(0.45 0.15 200)`)
- **Accent**: Light slate for highlights
- **Neutrals**: White, grays, black variants
- **Destructive**: Red for errors/warnings

### Components
- Modern card-based layouts with borders
- Responsive grid systems
- Sidebar navigation (collapsible on mobile)
- Modal dialogs for details/forms
- Data tables with sorting and filtering
- Charts using Recharts

## Key Components

### Assessment Timer
\`\`\`tsx
<AssessmentTimer 
  duration={120}  // minutes
  onTimeUp={handleSubmit}
  isRunning={true}
/>
\`\`\`

### Code Editor
\`\`\`tsx
<CodeEditor
  value={code}
  onChange={setCode}
  language="javascript"
  boilerplate={template}
  testCases={[...]}
/>
\`\`\`

### Question Navigator
\`\`\`tsx
<QuestionNavigator
  questions={questions}
  currentQuestionId={current}
  answeredQuestions={answered}
  onSelectQuestion={navigate}
/>
\`\`\`

## Development Guide

### Adding New Students/Teachers
Edit `/lib/mock-data.ts`:
\`\`\`typescript
export const mockUsers: Record<string, User> = {
  'newuser': {
    id: 'newuser',
    email: 'new@thapar.edu',
    name: 'New User',
    branch: 'CSE',
    role: 'Student',
  }
}
\`\`\`

### Creating Assessments
1. Add questions to `mockQuestions`
2. Create assessment in `mockAssessments`
3. Access via `/student/assessment?assessmentId=<id>`

### Customizing Branches
Modify the `Branch` type in `/types/index.ts`:
\`\`\`typescript
export type Branch = 'CSE' | 'ECE' | 'ME' | 'CE' | 'ELE' | 'YOUR_BRANCH';
\`\`\`

## Running Locally

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
open http://localhost:3000
\`\`\`

## Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## File Size Optimization

The project uses:
- Tree-shaking for unused code
- Code splitting per route
- Image optimization placeholders
- Minimal external dependencies

## Security Notes

⚠️ **This is a frontend-only demo**:
- All data is client-side only
- No encryption or secure authentication
- Credentials visible in mock data
- Not suitable for production without backend

For production:
- Add proper backend API
- Implement JWT authentication
- Secure database
- Validate all inputs server-side
- Implement proper authorization checks

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License
Open source for educational purposes.

## Next Steps
1. Clone/download the project
2. Run `npm install && npm run dev`
3. Login with demo credentials
4. Explore student/teacher features
5. Modify mock data as needed
6. Deploy to Vercel (one-click deployment)

## Support
For issues or questions, refer to the code comments and component documentation.
