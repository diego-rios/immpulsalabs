"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string
  gradientTo?: string
  hoverScale?: number
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradientFrom, gradientTo, hoverScale = 1.02, children, ...props }, ref) => {
    return (
      <motion.div whileHover={{ scale: hoverScale }} className="relative group">
        <Button
          ref={ref}
          className={cn(
            "relative bg-gradient-to-r from-[#7F4FFF] to-[#FF6F3C] hover:opacity-90 transition-opacity",
            className,
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton }

