export function calculateAvailability(baseSpots = 30) {
  const now = new Date()
  const currentDay = now.getDate()
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const monthProgress = currentDay / lastDay

  const availableSpots = Math.max(Math.ceil(baseSpots - (baseSpots - 1) * monthProgress), 1)

  const currentMonth = now.toLocaleString("es-ES", { month: "long" })
  const capitalizedMonth = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)

  return {
    spots: availableSpots,
    currentMonth: capitalizedMonth,
  }
}

