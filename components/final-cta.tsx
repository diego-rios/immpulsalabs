import { SectionWrapper } from "./section-wrapper"
import { GradientButton } from "@/components/ui/gradient-button"
import { AvailabilityBadge } from "@/components/ui/availability-badge"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <SectionWrapper id="conectar">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">No Pierdas Tu Oportunidad</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Solo quedan <AvailabilityBadge variant="cta" /> para este mes. Reserva una llamada de estrategia y recibe
          respuesta en menos de 24 horas. ¡Convierte tu idea en realidad antes de que se agoten los cupos!
        </p>
        <GradientButton size="lg" asChild className="px-8">
          <Link href="https://calendar.app.google/MgNKgE5kSn6RS2828" target="_blank">
            Reserva Tu Lugar Ahora →
          </Link>
        </GradientButton>
      </div>
    </SectionWrapper>
  )
}

