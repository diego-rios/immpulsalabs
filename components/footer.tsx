"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SocialLinks } from "./social-links"
import { Logo } from "./ui/logo"
import { GradientDivider } from "./ui/gradient-divider"

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo MVP", href: "#como-funciona" },
      { name: "Consultoría", href: "#precios" },
      { name: "Soporte", href: "#precios" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { name: "Proyectos", href: "#proyectos" },
      { name: "Sobre Nosotros", href: "#fundador" },
      { name: "FAQ", href: "#preguntas-frecuentes" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Términos del Servicio", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  if (!mounted) return null

  return (
    <footer id="footer" className="relative py-16 px-4 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Brand Section */}
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="inline-block transition-transform hover:scale-105 duration-300"
                aria-label="ImpulsaLabs Home"
              >
                <Logo size={40} className="text-white" />
              </Link>
              <div className="space-y-4">
                <p className="text-gray-400 text-base">Convierte tu idea en un MVP en semanas, no en meses.</p>
                <div className="flex justify-start">
                  <SocialLinks variant="footer" className="justify-start" />
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-sm font-semibold text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                          className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <GradientDivider />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-400">
            <p className="text-sm">© {currentYear} ImmpulsaLabs. Todos los derechos reservados.</p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <motion.a
                href="mailto:contacto@impulsalabs.com"
                className="hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                contacto@immpulsalabs.com
              </motion.a>
              <span className="hidden md:inline text-white/20">•</span>
              <motion.a
                href="tel:+573158558697"
                className="hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +57 315 855 8697
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

