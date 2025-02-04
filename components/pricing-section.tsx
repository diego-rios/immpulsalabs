"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"
import { AvailabilityBadge } from "@/components/ui/availability-badge"
import Link from "next/link"

export default function PricingSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <SectionWrapper id="precios">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para hacer realidad tu idea?</h2>
          <p className="text-gray-400 text-lg">Elige el paquete perfecto para tu proyecto y comienza hoy</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* MVP Development Package */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-xl p-10 min-h-[800px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-3 left-6"
            >
              <Badge className="bg-[#7F4FFF] text-white rounded-lg px-4 py-1 text-sm">Más Popular</Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-3 right-6"
            >
              <Badge variant="outline" className="bg-black text-white rounded-lg px-4 py-1 text-sm">
                Pago Único
              </Badge>
            </motion.div>
            <div className="mt-6 h-full flex flex-col justify-between">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-black"
                >
                  <a href="#como-funciona" className="hover:underline">
                    Paquete de Desarrollo de MVP
                  </a>
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-black">Desde USD$1.000</span>
                  </div>
                  <AvailabilityBadge variant="pricing" />
                </motion.div>

                <div className="mt-8">
                  <p className="font-medium text-black mb-4">¿Qué Incluye?:</p>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="space-y-4"
                  >
                    {[
                      "Desarrollo completo de MVP en 4-5 semanas",
                      "Aplicación web o móvil",
                      "Tecnología moderna y escalable",
                      "Integraciones clave (pagos, auth, etc.)",
                      "Reportes detallados y 15 días de mantenimiento incluido",
                      "Desarrollo personalizado y a la medida",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        variants={featureVariants}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <Check className="w-5 h-5 text-[#7F4FFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="w-full mt-8 bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C] hover:opacity-90 transition-opacity text-white h-14 rounded-lg"
                >
                  <Link href="https://calendar.app.google/MgNKgE5kSn6RS2828" target="_blank">
                    Empieza Ahora →
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Growth Retainer Package */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative bg-black rounded-xl p-10 min-h-[800px] border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-3 left-6"
            >
              <Badge variant="outline" className="bg-white text-black rounded-lg px-4 py-1 text-sm">
                Soporte Continuo
              </Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-3 right-6"
            >
              <Badge variant="outline" className="bg-[#1a1a1a] text-white rounded-lg px-4 py-1 text-sm">
                Mensual
              </Badge>
            </motion.div>

            <div className="mt-6 h-full flex flex-col justify-between">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-white"
                >
                  <a href="#preguntas-frecuentes" className="hover:underline">
                    Plan de Crecimiento
                  </a>
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">USD$2.000</span>
                    <span className="text-gray-400 ml-2">/al mes</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Sin compromiso de permanencia, cancela cuando quieras</p>
                </motion.div>

                <div className="mt-8">
                  <p className="font-medium text-white mb-4">Servicios Mensuales Dedicados:</p>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="space-y-4"
                  >
                    {[
                      "40 horas de desarrollo mensuales",
                      "Prioridad en la asignación de horas",
                      "Llamadas semanales y consultoría estratégica incluída",
                      "Desarrollo de funcionalidades avanzadas",
                      "Mantenimiento y optimización permanente",
                      "Soporte de emergencia el mismo día",
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        variants={featureVariants}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <Check className="w-5 h-5 text-[#FF6F3C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="w-full mt-8 bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C] hover:opacity-90 transition-opacity text-white h-14 rounded-lg"
                >
                  <Link href="https://calendar.app.google/MgNKgE5kSn6RS2828" target="_blank">
                    Agenda una Llamada →
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

