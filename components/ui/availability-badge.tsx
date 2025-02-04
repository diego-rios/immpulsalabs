"use client"

import { useState, useEffect } from "react"

interface AvailabilityBadgeProps {
  variant?: "hero" | "pricing" | "cta"
  className?: string
}

export function AvailabilityBadge({ variant = "hero", className = "" }: AvailabilityBadgeProps) {
  const [spots, setSpots] = useState(0)
  const [currentMonth, setCurrentMonth] = useState("")

  useEffect(() => {
    const calculateAvailability = () => {
      const now = new Date()
      const currentDay = now.getDate()
      const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
      const monthProgress = currentDay / lastDay

      const baseSpots = 30
      const availableSpots = Math.max(Math.ceil(baseSpots - (baseSpots - 1) * monthProgress), 1)

      setSpots(availableSpots)
      setCurrentMonth(now.toLocaleString("es-ES", { month: "long" }))
    }

    calculateAvailability()
    // Recalculate at midnight
    const now = new Date()
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    const timeUntilMidnight = tomorrow.getTime() - now.getTime()

    const timer = setTimeout(() => {
      calculateAvailability()
    }, timeUntilMidnight)

    return () => clearTimeout(timer)
  }, [])

  if (variant === "hero") {
    return (
      <div className={`px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 ${className}`}>
        <span className="text-[#7F4FFF] font-medium">Disponibilidad Limitada:</span>{" "}
        <span className="text-[#FF6F3C]">
          {spots} cupos para {currentMonth}
        </span>
      </div>
    )
  }

  if (variant === "pricing") {
    return (
      <p className="text-red-500 text-sm mt-2">
        {spots} cupos disponibles para {currentMonth}
      </p>
    )
  }

  // CTA variant
  return <span className="text-[#FF6F3C]">{spots} cupos</span>
}

