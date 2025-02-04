"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      // Show after scrolling down 200px
      setIsVisible(window.scrollY > 200)

      // Check if near footer
      const footer = document.getElementById("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setIsNearFooter(footerRect.top <= window.innerHeight)
      }

      // Update active section
      const sections = ["como-funciona", "precios", "proyectos", "conectar"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "")
    }

    checkMobile()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const navItems = [
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#precios", label: "Precios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#conectar", label: "Conectar" },
  ]

  if (!isVisible || isNearFooter) return null

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center px-4 z-50 pointer-events-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl mx-auto pointer-events-auto"
        >
          <div className="border border-white/10 rounded-full bg-black/90 backdrop-blur-sm text-white py-2 px-3 shadow-lg mx-auto">
            <div className="flex items-center justify-between gap-2 md:gap-4">
              {!isMobile && (
                <nav className="flex items-center justify-center gap-2 md:gap-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className={`
                        relative px-3 py-2 text-sm font-medium transition-colors duration-200
                        ${activeSection === item.href.slice(1) ? "text-white" : "text-gray-400 hover:text-white"}
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-[rgba(127,79,255,0.2)] to-[rgba(255,111,60,0.2)] rounded-full -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.a>
                  ))}
                </nav>
              )}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full md:w-auto">
                <GradientButton
                  asChild
                  className="px-6 py-3 text-sm font-medium rounded-full w-full md:w-auto justify-center"
                >
                  <Link href="https://calendar.app.google/MgNKgE5kSn6RS2828" target="_blank">
                    {isMobile ? "Reservar Ahora →" : "Reserva una Llamada →"}
                  </Link>
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

