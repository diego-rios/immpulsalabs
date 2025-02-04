"use client"

import { motion } from "framer-motion"
import { Layers, Zap, Monitor, ClipboardList } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

export default function KeyValueProps() {
  const features = [
    {
      icon: Layers,
      title: "Paquete Completo",
      description:
        "Tu MVP incluirá una aplicación web, landing page de alta conversión y contenido optimizado para SEO.",
      color: "#7F4FFF",
      delay: 0.2,
    },
    {
      icon: Zap,
      title: "Integraciones Sin Esfuerzo",
      description:
        "Configura pasarelas de pago, autenticación de usuarios y plataformas de email marketing sin complicaciones.",
      color: "#FF6F3C",
      delay: 0.3,
    },
    {
      icon: Monitor,
      title: "Tecnología Moderna y Escalable",
      description:
        "Usamos las últimas tecnologías y la IA para asegurarnos de que tu MVP sea rápido, estable y fácil de escalar.",
      color: "#7F4FFF",
      delay: 0.4,
    },
    {
      icon: ClipboardList,
      title: "Transparencia y Actualizaciones",
      description: "Recibe reportes de progreso periódicos y mantente al tanto de cada paso durante el desarrollo.",
      color: "#FF6F3C",
      delay: 0.5,
    },
  ]

  return (
    <SectionWrapper id="caracteristicas" className="bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beneficios Principales del Desarrollo MVP</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desarrollo ágil, tecnología moderna y transparencia total para llevar tu idea al siguiente nivel.
          </p>
        </motion.div>

        <motion.div
          role="list"
          aria-label="Lista de beneficios"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(127,79,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 h-full">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(127,79,255,0.2)] to-transparent flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(127,79,255,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Icon
                          className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(127,79,255,0.2)] to-[rgba(255,111,60,0.2)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

