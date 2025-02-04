"use client"
import { useState, useEffect } from "react"
import { calculateAvailability } from "@/utils/availability"

export function useAvailability(baseSpots = 10) {
  const [availability, setAvailability] = useState(() => calculateAvailability(baseSpots))

  useEffect(() => {
    // Update availability at midnight
    const now = new Date()
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    const timeUntilMidnight = tomorrow.getTime() - now.getTime()

    const timer = setTimeout(() => {
      setAvailability(calculateAvailability(baseSpots))
    }, timeUntilMidnight)

    return () => clearTimeout(timer)
  }, [baseSpots])

  return availability
}

