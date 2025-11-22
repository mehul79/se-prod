"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockLabEvents } from "@/lib/mock-data"
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react"
import type { Branch } from "@/types"

const eventTypes = ["lab", "presentation", "viva", "demo"]
const branches: Branch[] = ["CSE", "ECE", "ME", "CE", "ELE"]

export default function LabSchedulingPage() {
  const [events, setEvents] = useState(mockLabEvents)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    eventType: "lab",
    location: "",
    selectedBranches: [] as Branch[],
    capacity: "",
  })

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

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault()
    const newEvent = {
      id: `lab_${Date.now()}`,
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      duration: Number.parseInt(formData.duration),
      eventType: formData.eventType as "lab" | "presentation" | "viva" | "demo",
      location: formData.location,
      branches: formData.selectedBranches,
      status: "scheduled" as const,
      capacity: Number.parseInt(formData.capacity),
      enrolled: 0,
    }

    setEvents([...events, newEvent])
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
    })
  }

  const eventTypeColors = {
    lab: "bg-primary/10 text-primary",
    presentation: "bg-accent/10 text-accent",
    viva: "bg-destructive/10 text-destructive",
    demo: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Lab Scheduling</h1>
          <p className="text-muted-foreground">Create and manage lab events, presentations, and vivas</p>
        </div>
        <Button onClick={() => setIsOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {events.map((event) => (
          <Card key={event.id} className="border-border/50 hover:border-primary/30 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <Badge className={eventTypeColors[event.eventType]}>
                      {event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>

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
                        {event.enrolled}/{event.capacity}
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
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Event Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Lab Event</DialogTitle>
            <DialogDescription>Schedule a new lab, presentation, or viva</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateEvent} className="space-y-4">
            {/* Title & Description */}
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
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
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
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
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
