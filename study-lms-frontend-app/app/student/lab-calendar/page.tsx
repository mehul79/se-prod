"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { LabEvent } from "@/types"
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react"

const statusColors = {
  scheduled: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  ongoing: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  completed: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
}

const eventTypeColors = {
  lab: "bg-primary/10 text-primary",
  presentation: "bg-accent/10 text-accent",
  viva: "bg-destructive/10 text-destructive",
  demo: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

export default function LabCalendarPage() {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState<LabEvent | null>(null)
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list")
  const [events, setEvents] = useState<LabEvent[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const res = await fetch(`${API_URL}/api/lab-events`)
        if (!res.ok) {
          throw new Error("Failed to load lab events")
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

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const upcomingEvents = [...events].sort(
    (a, b) => new Date(`${a.date}T${a.time || "00:00"}`).getTime() - new Date(`${b.date}T${b.time || "00:00"}`).getTime(),
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header with View Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Lab Events</h1>
          <p className="text-muted-foreground">Schedule, notifications, and event details</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
            className="text-xs"
          >
            List View
          </Button>
          <Button
            variant={viewMode === "calendar" ? "default" : "outline"}
            onClick={() => setViewMode("calendar")}
            className="text-xs"
          >
            Calendar
          </Button>
        </div>
      </div>

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => setSelectedEvent(event)}
            >
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
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {event.enrolled}/{event.capacity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Calendar View - Simple Grid */}
      {viewMode === "calendar" && (
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Events Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 bg-secondary/30 rounded-lg border border-border/30 cursor-pointer hover:border-primary/30 hover:bg-secondary/50 transition-all"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="font-semibold text-foreground mb-2">{event.date}</div>
                  <div className="text-sm font-medium text-foreground mb-1 line-clamp-1">{event.title}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Event Detail Modal */}
      <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl mb-2">{selectedEvent.title}</DialogTitle>
                    <DialogDescription>{selectedEvent.description}</DialogDescription>
                  </div>
                  <Badge className={eventTypeColors[selectedEvent.eventType]}>
                    {selectedEvent.eventType.charAt(0).toUpperCase() + selectedEvent.eventType.slice(1)}
                  </Badge>
                </div>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Status */}
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={statusColors[selectedEvent.status]}>
                    {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                  </Badge>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Date</p>
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedEvent.date}
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Time</p>
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedEvent.time}
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Location</p>
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {selectedEvent.location}
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Duration</p>
                    <p className="font-semibold text-foreground">{selectedEvent.duration} minutes</p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Enrollment</p>
                    <p className="font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {selectedEvent.enrolled}/{selectedEvent.capacity}
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 rounded-lg border border-border/30">
                    <p className="text-xs text-muted-foreground mb-1 font-medium">Branches</p>
                    <p className="font-semibold text-foreground">{selectedEvent.branches.join(", ")}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 bg-secondary/20 rounded-lg border border-border/30">
                  <p className="text-sm font-medium text-foreground mb-2">About This Event</p>
                  <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border/30">
                  {selectedEvent.assessmentId ? (
                    <Button
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() =>
                        router.push(
                          `/student/assessment?assessmentId=${selectedEvent.assessmentId}&labEventId=${selectedEvent.id}`,
                        )
                      }
                    >
                      Start Lab Evaluation
                    </Button>
                  ) : (
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">Register</Button>
                  )}
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
