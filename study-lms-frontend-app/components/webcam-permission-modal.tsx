"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Smartphone, Mic, AlertCircle } from "lucide-react"

interface WebcamPermissionModalProps {
  open: boolean
  onProceed: () => void
  onDeny: () => void
}

export function WebcamPermissionModal({ open, onProceed, onDeny }: WebcamPermissionModalProps) {
  const [loading, setLoading] = useState(false)

  const handleRequest = async () => {
    setLoading(true)
    try {
      // Request webcam and microphone permissions
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: true,
      })

      // Stop the stream (we just need permissions)
      stream.getTracks().forEach((track) => track.stop())
      onProceed()
    } catch (error) {
      console.error("Permission denied:", error)
      // Still allow proceeding even if denied
      onProceed()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Enable Webcam & Microphone</DialogTitle>
          <DialogDescription>For proctoring purposes, we need access to your webcam and microphone</DialogDescription>
        </DialogHeader>

        <Alert className="border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-900/20 dark:text-blue-300">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This is required for exam integrity. Your camera and mic will be used only during this assessment.
          </AlertDescription>
        </Alert>

        <div className="space-y-3 py-4">
          <div className="flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Webcam</p>
              <p className="text-sm text-muted-foreground">Access to camera for live monitoring</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mic className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Microphone</p>
              <p className="text-sm text-muted-foreground">Access to microphone for audio verification</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={onDeny} disabled={loading}>
            Deny
          </Button>
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleRequest}
            disabled={loading}
          >
            {loading ? "Requesting..." : "Allow & Continue"}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          You can change permissions in your browser settings later
        </p>
      </DialogContent>
    </Dialog>
  )
}
