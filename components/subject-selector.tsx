"use client"

interface SubjectSelectorProps {
  selected: string[]
  onChange: (subjects: string[]) => void
}

const SUBJECTS = [
  { code: "MATH", label: "Mathematics" },
  { code: "PHY", label: "Physics" },
  { code: "CHE", label: "Chemistry" },
  { code: "BIO", label: "Biology" },
  { code: "CS", label: "Computer Science" },
  { code: "ELX", label: "Electronics" },
  { code: "MECH", label: "Mechanical" },
  { code: "CIV", label: "Civil" },
]

export function SubjectSelector({ selected, onChange }: SubjectSelectorProps) {
  const toggleSubject = (subjectCode: string) => {
    if (selected.includes(subjectCode)) {
      onChange(selected.filter((code) => code !== subjectCode))
    } else {
      onChange([...selected, subjectCode])
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-mono text-muted-foreground mb-3">
        SUBJECTS TAUGHT (MULTI-SELECT)
      </label>

      <div className="grid grid-cols-2 gap-2">
        {SUBJECTS.map((subject) => {
          const isActive = selected.includes(subject.code)
          return (
            <button
              key={subject.code}
              type="button"
              onClick={() => toggleSubject(subject.code)}
              aria-pressed={isActive}
              className={`border-2 p-3 font-mono text-xs text-left transition-all rounded-sm ${
                isActive
                  ? "border-accent bg-accent/20 text-accent font-bold"
                  : "border-foreground/20 hover:border-foreground/40 text-foreground hover:bg-foreground/5"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{subject.label}</span>
                {isActive && <span className="text-accent text-sm">✔</span>}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
