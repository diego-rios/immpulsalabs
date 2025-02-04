"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const faqs = [
  {
    question: "¿Qué beneficios obtengo al lanzar un MVP antes de desarrollar el producto completo?",
    answer:
      "Lanzar un MVP te permite validar tu idea rápidamente, reducir riesgos y optimizar recursos. Con un Producto Mínimo Viable, recibes feedback real de usuarios, ajustas funcionalidades y perfeccionas tu propuesta de valor antes de escalar. Así, pruebas la demanda en el mercado, mejoras tu estrategia de marketing y atraes posibles inversores. Un MVP acelera el tiempo de lanzamiento, fomenta iteraciones ágiles y crea una base sólida para el crecimiento futuro.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso desde la planeación del MVP hasta la entrega final?",
    answer:
      "Nuestro desarrollo MVP dura entre 4 y 5 semanas. Iniciamos con una consulta para definir alcance y objetivos. Luego, creamos un plan detallado y trabajamos en sprints ágiles con actualizaciones continuas. Al finalizar, obtienes un MVP funcional listo para recopilar feedback y validar tu modelo de negocio. Este enfoque acelera la salida al mercado y reduce costos.",
  },
  {
    question: "¿Qué incluye exactamente el paquete de desarrollo del MVP (tecnologías, equipo de trabajo, etc.)?",
    answer:
      "El paquete abarca diseño y publicación de tu app web o móvil, integraciones clave (pagos, auth, email marketing) y tecnología moderna (React, Node, etc.) de acuerdo a las necesidades de tu proyecto. Un equipo multidisciplinario (desarrolladores, diseñadores UI/UX y consultores en Growth) apalancados por Inteligencia Artificial, crea un producto escalable y seguro. Recibirás reportes periódicos, comunicación fluida y soporte posterior, maximizando tu potencial de mercado y validando tu modelo de negocio.",
  },
  {
    question: "¿Cómo aseguráis la escalabilidad y estabilidad del MVP para futuras mejoras o incremento de usuarios?",
    answer:
      "Utilizamos arquitecturas y tecnologías escalables (Cloud, bases de datos robustas, frameworks probados). Implementamos buenas prácticas de código y realizamos pruebas de rendimiento para asegurar estabilidad. La infraestructura se diseña para soportar picos de tráfico y facilitar la integración de nuevas funciones sin comprometer la experiencia del usuario. Así, tu MVP puede crecer gradualmente y adaptarse a las demandas del mercado.",
  },
  {
    question: "¿Cuál es el proceso paso a paso desde el inicio hasta la entrega del MVP?",
    answer:
      "1. Consulta Inicial Gratuita: Comenzamos con una consulta sin costo para entender tu visión y definir el alcance del proyecto. 2. Planificación del Producto Mínimo Viable (MVP): Creamos un plan de MVP de alto nivel que se adapte a tus necesidades. 3. Acuerdos y Contrato: Si estás de acuerdo, firmamos un Acuerdo de Confidencialidad (NDA) y un contrato. Con estos pasos completos, estarás listo para realizar el pago del paquete contratado. 4. Sesión de Kick-off: Una vez confirmado el pago, llevamos a cabo una sesión de kick-off en la que definimos un plan detallado de MVP y PDR. 5. Desarrollo Ágil: Iniciamos sprints ágiles con actualizaciones frecuentes para refinar y optimizar el producto de acuerdo a tus requerimientos. 6. Entrega y Soporte: Al finalizar, entregamos un MVP funcional y te brindamos soporte continuo para asegurar el éxito del proyecto. Cada fase se ajusta a tus metas, garantizando un resultado sólido y alineado con tu estrategia de proyecto.",
  },
  {
    question:
      "¿Cómo me mantendré informado del progreso y qué tipo de reportes o actualizaciones recibiré durante el proyecto?",
    answer:
      "Te mantenemos al día con reuniones semanales, reportes de progreso y comunicación vía correo, Slack o What'sApp. Compartimos hitos logrados, próximos objetivos y posibles bloqueos. Recibes actualizaciones sobre tareas completadas y feedback crítico para refinar el desarrollo. Este proceso te da total visibilidad y permite ajustes oportunos, asegurando un MVP que cumpla con tus expectativas.",
  },
  {
    question:
      "¿Cómo se maneja la integración de funcionalidades clave como pasarelas de pago, autenticación de usuarios o marketing por email?",
    answer:
      "Incorporamos pasarelas de pago (Stripe, Wompi, etc.), autenticación segura (OAuth, JWT) y plataformas de email marketing (MailChimp, SendGrid) según las necesidades y alcance de tu proyecto. Nuestro equipo configura cada integración de forma fluida, garantizando transacciones seguras y una experiencia de usuario eficiente. Además, mantenemos la infraestructura lista para sumar nuevas herramientas o servicios conforme crezca tu proyecto.",
  },
  {
    question:
      "Si mi idea requiere una solución personalizada o tecnologías específicas, ¿ofrecen flexibilidad en el desarrollo?",
    answer:
      "Sí, adaptamos el stack y la arquitectura según tus necesidades. Trabajamos con múltiples lenguajes y frameworks (JavaScript, Python, etc.) y diseñamos soluciones a la medida de tu visión. El objetivo es entregar un MVP escalable, alineado con tu estrategia y capaz de evolucionar con tu negocio. Siempre priorizamos la flexibilidad para crear un producto único y rentable.",
  },
  {
    question:
      "¿Qué pasa si necesito cambios o ajustes durante el desarrollo? ¿Existe un costo adicional por iteraciones extras?",
    answer:
      "Usamos metodologías ágiles que permiten incorporar cambios durante los sprints dentro del alcance del proyecto. Pequeñas modificaciones dentro del alcance inicial no generan costos extras. Si el ajuste implica funcionalidades mayores o supera lo acordado, evaluamos su impacto en tiempo y presupuesto. Así mantenemos transparencia y logramos un MVP final que realmente satisfaga tus metas de negocio.",
  },
  {
    question: "¿Qué tipo de soporte y mantenimiento ofrecen después de la entrega del MVP y cuál es su duración?",
    answer:
      "Te brindamos un soporte inicial de 2 semanas para corregir errores críticos y optimizar el rendimiento. También ofrecemos planes de mantenimiento mensuales para seguir mejorando tu producto, implementando nuevas funciones y garantizando estabilidad. Con este enfoque, tu MVP se mantiene actualizado, escalable y listo para crecer junto a tu negocio.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper id="preguntas-frecuentes" className="bg-black/40">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0)" }}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-4 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

