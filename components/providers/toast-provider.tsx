"use client"

import { Toaster } from "sonner"

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111111",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        className: "text-sm",
      }}
    />
  )
} 