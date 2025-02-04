"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { GradientButton } from "@/components/ui/gradient-button"
import { Logo } from "@/components/ui/logo"
import { fadeIn, stagger } from "@/utils/animations"
import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
    setMobileMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-black/90" : "bg-black/50"
      } backdrop-blur-xl border-b border-white/5`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative z-50"
          >
            <Link href="/" className="flex items-center gap-3">
              <Logo size={32} className="text-white w-8 h-8" />
              <span className="font-bold text-xl bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C] text-transparent bg-clip-text">
                ImmpulsaLabs
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.nav
              variants={stagger}
              initial="initial"
              animate="animate"
              className="hidden md:flex items-center gap-6"
            >
              {[
                { name: "Cómo Funciona", href: "#como-funciona" },
                { name: "Precios", href: "#precios" },
                { name: "Proyectos", href: "#proyectos" },
                { name: "Conectar", href: "#conectar" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Link href={item.href} onClick={handleScroll} className="relative group px-3 py-2">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C] transition-all group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeIn}>
                <GradientButton asChild>
                  <Link
                    href="https://calendar.app.google/MgNKgE5kSn6RS2828"
                    target="_blank"
                    className="whitespace-nowrap"
                  >
                    Reserva una Llamada
                  </Link>
                </GradientButton>
              </motion.div>
            </motion.nav>

            <button
              className="md:hidden relative z-50 p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 top-[73px] bg-black/95 backdrop-blur-xl z-40 md:hidden"
            >
              <div className="container h-full flex flex-col">
                <nav className="flex flex-col gap-2 py-8">
                  {[
                    { name: "Cómo Funciona", href: "#como-funciona" },
                    { name: "Precios", href: "#precios" },
                    { name: "Proyectos", href: "#proyectos" },
                    { name: "Conectar", href: "#conectar" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleScroll}
                        className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pb-8 px-4"
                >
                  <GradientButton asChild className="w-full justify-center py-6">
                    <Link
                      href="https://calendar.app.google/MgNKgE5kSn6RS2828"
                      target="_blank"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Reserva una Llamada →
                    </Link>
                  </GradientButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

