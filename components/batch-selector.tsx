"use client"

interface BatchSelectorProps {
  selected: string[]
  onChange: (batches: string[]) => void
}

const BATCHES = [
  { id: "3P12", label: "3P12 (Branch A, Section 1)" },
  { id: "3P11", label: "3P11 (Branch A, Section 2)" },
  { id: "3Q11", label: "3Q11 (Branch B, Section 1)" },
  { id: "3Q12", label: "3Q12 (Branch B, Section 2)" },
  { id: "3R11", label: "3R11 (Branch C, Section 1)" },
  { id: "3R12", label: "3R12 (Branch C, Section 2)" },
]

export function BatchSelector({ selected, onChange }: BatchSelectorProps) {
  const toggleBatch = (batchId: string) => {
    if (selected.includes(batchId)) {
      onChange(selected.filter((b) => b !== batchId))
    } else {
      onChange([...selected, batchId])
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-xs font-mono text-muted-foreground mb-3">BATCHES ASSIGNED</label>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {BATCHES.map((batch) => (
          <button
            key={batch.id}
            onClick={() => toggleBatch(batch.id)}
            className={`w-full border-2 p-3 font-mono text-xs text-left transition-all ${
              selected.includes(batch.id)
                ? "border-accent bg-accent/20 text-accent"
                : "border-foreground/20 hover:border-foreground/40 text-foreground hover:bg-foreground/5"
            }`}
          >
            <div className="font-semibold">{batch.id}</div>
            <div className="text-muted-foreground text-xs mt-1">{batch.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
