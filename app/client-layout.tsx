"use client"

import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { ToastProvider } from "@/components/providers/toast-provider"
import type React from "react"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntentPopup />
      <ToastProvider />
    </>
  )
} 