"use client"

import { motion } from "framer-motion"
import { Rocket, Target, Clock } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { AvailabilityBadge } from "@/components/ui/availability-badge"
import Link from "next/link"

export default function Hero() {
  const features = [
    {
      icon: Clock,
      title: "MVP en 4 semanas",
      description: "Desarrollo ágil y eficiente para llevar tu idea al mercado rápidamente.",
      color: "#7F4FFF",
      delay: 0.2,
    },
    {
      icon: Rocket,
      title: "Lanzamiento Rápido",
      description: "Implementación veloz con las mejores prácticas y tecnologías modernas.",
      color: "#FF6F3C",
      delay: 0.4,
    },
    {
      icon: Target,
      title: "Enfoque Estratégico",
      description: "Desarrollo centrado en tus objetivos de negocio y necesidades del mercado.",
      color: "#7F4FFF",
      delay: 0.6,
    },
  ]

  return (
    <section
      aria-label="Desarrollo de MVP Principal"
      className="min-h-[calc(100vh-2rem)] pt-28 md:pt-32 pb-20 px-4 relative overflow-hidden bg-[#111111]"
    >
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111111] to-[#111111]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L6 48 L6 0' stroke='%23ffffff' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16 relative"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <AvailabilityBadge variant="hero" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Desarrolla tu MVP en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C]">
              4 semanas
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C]">
              sin complicaciones
            </span>{" "}
            y a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C]">
              precio accesible
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            ImmpulsaLabs convierte tu idea en un Producto Mínimo Viable en semanas, no en meses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <GradientButton size="lg" asChild className="px-8 py-6 text-lg">
              <Link href="https://calendar.app.google/MgNKgE5kSn6RS2828" target="_blank">
                Reserva tu Llamada Ahora
              </Link>
            </GradientButton>
            <p className="text-sm text-gray-500 mb-12">Sin pagos por adelantado.</p>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 1],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
              className="flex justify-center"
            >
              <div className="w-8 h-8 text-gray-400 text-2xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          role="list"
          aria-label="Características principales"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20 px-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(127,79,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 lg:p-8 h-full">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(127,79,255,0.2)] to-transparent flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(127,79,255,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Icon
                          className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(127,79,255,0.2)] to-[rgba(255,111,60,0.2)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

