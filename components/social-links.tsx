"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/diegoarielrios/",
    gradientFrom: "#0077B5",
    gradientTo: "#00A0DC",
    label: "Síguenos en LinkedIn",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/diegorioscoach",
    gradientFrom: "#833AB4",
    gradientTo: "#FD1D1D",
    label: "Síguenos en Instagram",
  },
  {
    name: "X",
    icon: Twitter,
    url: "https://x.com/diegoarielrios",
    gradientFrom: "#1DA1F2",
    gradientTo: "#14171A",
    label: "Síguenos en X",
  },
]

interface SocialLinksProps {
  variant?: "default" | "footer"
  className?: string
}

export function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
  const containerClasses = variant === "footer" ? className : "justify-center"
  const iconSize = variant === "footer" ? "w-5 h-5" : "w-4 h-4"
  const buttonSize = variant === "footer" ? "w-12 h-12" : "w-10 h-10"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-6 ${containerClasses} ${className}`}
    >
      {variant === "default" && <span className="text-sm text-gray-400">Sígueme en:</span>}
      <div className="flex gap-4 items-center">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <motion.div
              key={social.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative flex items-center justify-center ${buttonSize}
                  rounded-full bg-black/40 border border-white/10
                  transition-all duration-300
                  hover:border-white/20 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black
                `}
                aria-label={social.label}
              >
                {/* Gradient background on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
                  }}
                />

                {/* Icon */}
                <Icon
                  className={`
                    ${iconSize} relative z-10
                    text-gray-400 transition-all duration-300
                    group-hover:text-white group-hover:scale-110
                  `}
                />

                {/* Subtle glow effect */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientTo})`,
                  }}
                />
              </Link>

              {/* Enhanced Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 backdrop-blur-sm rounded-lg border border-white/10 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
                {social.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/10 rotate-45" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

