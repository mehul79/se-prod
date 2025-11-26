"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react"
import type { Branch, LabEvent } from "@/types"

const eventTypes: Array<LabEvent["eventType"]> = ["lab", "presentation", "viva", "demo"]
const branches: Branch[] = ["CSE", "ECE", "ME", "CE", "ELE"]

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

const statusColors: Record<LabEvent["status"], string> = {
  scheduled: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  ongoing: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  completed: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
}

const eventTypeColors: Record<LabEvent["eventType"], string> = {
  lab: "bg-primary/10 text-primary",
  presentation: "bg-accent/10 text-accent",
  viva: "bg-destructive/10 text-destructive",
  demo: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
}

export default function LabSchedulingPage() {
  const [events, setEvents] = useState<LabEvent[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list")

  type AssessmentSummary = {
    id: string
    title: string
    subjectId?: string
    description?: string
  }

  const [assessments, setAssessments] = useState<AssessmentSummary[]>([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    eventType: "lab" as LabEvent["eventType"],
    location: "",
    selectedBranches: [] as Branch[],
    capacity: "",
    assessmentId: "",
  })

  // Fetch events from backend on mount
  useEffect(() => {
    let cancelled = false

    async function loadEvents() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(`${API_URL}/api/lab-events`)
        if (!res.ok) {
          throw new Error("Failed to load events")
        }
        const data = (await res.json()) as LabEvent[]
        if (!cancelled) {
          setEvents(data)
        }
      } catch (e) {
        console.error(e)
        if (!cancelled) setError("Could not load lab events from server")
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    async function loadAssessments() {
      try {
        const res = await fetch(`${API_URL}/api/assessments`)
        if (!res.ok) return
        const data = (await res.json()) as AssessmentSummary[]
        if (!cancelled) {
          setAssessments(data)
        }
      } catch (e) {
        console.error("Could not load assessments for lab scheduling", e)
      }
    }

    void loadEvents()
    void loadAssessments()

    return () => {
      cancelled = true
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBranchToggle = (branch: Branch) => {
    setFormData((prev) => ({
      ...prev,
      selectedBranches: prev.selectedBranches.includes(branch)
        ? prev.selectedBranches.filter((b) => b !== branch)
        : [...prev.selectedBranches, branch],
    }))
  }

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        duration: Number.parseInt(formData.duration || "60"),
        eventType: formData.eventType,
        location: formData.location,
        branches: formData.selectedBranches,
        capacity: formData.capacity ? Number.parseInt(formData.capacity) : undefined,
        assessmentId: formData.assessmentId || undefined,
      }

      const res = await fetch(`${API_URL}/api/lab-events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Failed to create event")
      }

      const created = (await res.json()) as LabEvent
      setEvents((prev) => [...prev, created])
      setIsOpen(false)
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        duration: "",
        eventType: "lab",
        location: "",
        selectedBranches: [],
        capacity: "",
        assessmentId: "",
      })
    } catch (err) {
      console.error(err)
      setError("Could not create lab event")
    } finally {
      setIsLoading(false)
    }
  }

  // Simple grouping by date for a calendar-like view
  const eventsByDate = useMemo(() => {
    const map = new Map<string, LabEvent[]>()
    for (const ev of events) {
      const key = ev.date
      if (!map.has(key)) map.set(key, [])
      map.get(key)!.push(ev)
    }
    for (const [, value] of map) {
      value.sort((a, b) => a.time.localeCompare(b.time))
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [events])

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Lab Scheduling</h1>
          <p className="text-muted-foreground">Create and manage lab events, presentations, and vivas</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            List
          </Button>
          <Button
            variant={viewMode === "calendar" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("calendar")}
          >
            Calendar
          </Button>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isLoading}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-3">
          {events.map((event) => (
            <Card key={event.id} className="border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={eventTypeColors[event.eventType]}>
                        {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                      </Badge>
                      <Badge variant="outline" className={statusColors[event.status]}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {event.enrolled ?? 0}/{event.capacity ?? "-"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      {event.branches.map((branch) => (
                        <Badge key={branch} variant="outline" className="text-xs">
                          {branch}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {events.length === 0 && !isLoading && (
            <p className="text-sm text-muted-foreground">No lab events yet. Create your first event above.</p>
          )}
        </div>
      )}

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <Card className="border-border/50">
          <CardContent className="p-4 space-y-4">
            {eventsByDate.length === 0 && !isLoading && (
              <p className="text-sm text-muted-foreground">No lab events scheduled.</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventsByDate.map(([date, items]) => (
                <div
                  key={date}
                  className="p-4 bg-secondary/30 rounded-lg border border-border/30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{date}</span>
                  </div>
                  <div className="space-y-2">
                    {items.map((ev) => (
                      <div
                        key={ev.id}
                        className="p-2 rounded-md border border-border/40 bg-background/60 flex items-center justify-between text-sm"
                      >
                        <div>
                          <div className="font-medium text-foreground line-clamp-1">{ev.title}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{ev.time}</span>
                            <span>• {ev.location}</span>
                          </div>
                        </div>
                        <Badge className={eventTypeColors[ev.eventType]}>{ev.eventType}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Create Event Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Lab Event</DialogTitle>
            <DialogDescription>Schedule a new lab, presentation, or viva</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateEvent} className="space-y-4">
            {/* Title & Event Type */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Title</label>
                <Input
                  name="title"
                  placeholder="Event title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Event Type</label>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value as LabEvent["eventType"] }))}
                >
                  <SelectTrigger className="bg-input border-border/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Linked Assessment (optional) */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Linked Assessment (optional)</label>
              <Select
                value={formData.assessmentId || "none"}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, assessmentId: value === "none" ? "" : value }))
                }
              >
                <SelectTrigger className="bg-input border-border/30">
                  <SelectValue placeholder="Select assessment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No linked assessment</SelectItem>
                  {assessments.map((assessment) => (
                    <SelectItem key={assessment.id} value={assessment.id}>
                      {assessment.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Assessments are created from the "Create Assessment" page.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Description</label>
              <textarea
                name="description"
                placeholder="Event description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border/30 rounded-lg bg-input text-foreground text-sm"
                rows={3}
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date</label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Time</label>
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Duration (minutes)</label>
                <Input
                  type="number"
                  name="duration"
                  placeholder="120"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
            </div>

            {/* Location & Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <Input
                  name="location"
                  placeholder="Lab-201"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Capacity</label>
                <Input
                  type="number"
                  name="capacity"
                  placeholder="30"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="bg-input border-border/30"
                  required
                />
              </div>
            </div>

            {/* Branches */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Select Branches</label>
              <div className="flex flex-wrap gap-2">
                {branches.map((branch) => (
                  <Button
                    key={branch}
                    type="button"
                    variant={formData.selectedBranches.includes(branch) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleBranchToggle(branch)}
                  >
                    {branch}
                  </Button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-2 pt-4 border-t border-border/30">
              <Button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                Create Event
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
