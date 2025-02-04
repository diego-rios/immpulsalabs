"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, Zap, Box, Layers } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

export default function Process() {
  const steps = [
    {
      icon: Calendar,
      title: "Consulta Inicial",
      description:
        "Agenda una llamada sin costo con nuestro fundador para discutir tu visión. Exploraremos tu idea y entenderemos tus objetivos de negocio en detalle.",
      delay: 0.2,
      color: "#FF6F3C",
    },
    {
      icon: FileText,
      title: "Planificación de MVP & PRD",
      description:
        "Recibe un plan detallado de MVP seguido de un PRD completo con enfoque técnico de implementación para total claridad.",
      delay: 0.3,
      color: "#FF6F3C",
    },
    {
      icon: Zap,
      title: "Sprint de Desarrollo",
      description:
        "Una vez aprobada la propuesta, comienza el desarrollo. Tu MVP estará listo en 4 semanas con actualizaciones regulares durante el proceso.",
      delay: 0.4,
      color: "#FF6F3C",
    },
    {
      icon: Box,
      title: "Entrega del MVP",
      description:
        "Obtén tu MVP completamente funcional con todas las características planificadas, listo para el lanzamiento al mercado y la adquisición de usuarios.",
      delay: 0.5,
      color: "#FF6F3C",
    },
    {
      icon: Layers,
      title: "Mantenimiento & Soporte",
      description:
        "Disfruta de 4 semanas de soporte de mantenimiento que incluye corrección de errores críticos y optimizaciones necesarias.",
      delay: 0.6,
      color: "#FF6F3C",
    },
  ]

  return (
    <SectionWrapper id="como-funciona">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Cómo funciona nuestro proceso de desarrollo?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Un proceso transparente y rápido desde tu idea inicial hasta un MVP listo para el mercado en solo 4 semanas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step, index) => (
            <ProcessCard key={index} {...step} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.slice(3).map((step, index) => (
            <ProcessCard key={index + 3} {...step} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

interface ProcessCardProps {
  icon: any
  title: string
  description: string
  delay: number
  color: string
}

function ProcessCard({ icon: Icon, title, description, delay, color }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(127,79,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-8 h-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgba(127,79,255,0.2)] to-[rgba(255,111,60,0.2)] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

            {/* Icon container */}
            <div className="relative w-16 h-16 rounded-full bg-[#1a1f37] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(127,79,255,0.5)] to-transparent opacity-60" />
              <Icon
                className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: "#FF6F3C" }}
              />
            </div>
          </div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
            className="text-xl font-semibold"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-gray-400"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

