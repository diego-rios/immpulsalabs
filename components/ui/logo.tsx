"use client"

import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="closed"
        animate="open"
        whileHover="hover"
      >
        {/* Box bottom */}
        <motion.path
          d="M2 23L16 30L30 23V16L16 23L2 16V23Z"
          fill="url(#gradient-2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Box sides */}
        <motion.path
          d="M2 16L16 23L30 16L16 9L2 16Z"
          fill="url(#gradient-1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* Box lid */}
        <motion.path
          d="M2 9L16 16L30 9L16 2L2 9Z"
          fill="url(#gradient-1)"
          initial={{ rotateX: 0, transformOrigin: "50% 100%" }}
          animate={{ rotateX: [-20, 0] }}
          whileHover={{ rotateX: -20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            whileHover: { duration: 0.3 },
          }}
        />

        <defs>
          <linearGradient id="gradient-1" x1="2" y1="9" x2="30" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F4FFF" />
            <stop offset="1" stopColor="#FF6F3C" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="2" y1="23" x2="30" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F4FFF" />
            <stop offset="1" stopColor="#FF6F3C" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

