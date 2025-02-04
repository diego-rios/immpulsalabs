"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const companies = [
  {
    name: "VECI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-veci-color-fdLpk3ix4IHwMTKqxinaPwJMAk80zh.webp",
    width: 220,
    height: 80,
  },
  {
    name: "Bancolombia",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bancolombianew-fY9bs9NvYpVJH1XMGSGJifpHeFeRyC.png",
    width: 220,
    height: 80,
    className: "brightness-0 invert", // Make Bancolombia logo white
  },
  {
    name: "Rappi",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rappi_logo.svg-rPGjkhwdCBiDJpfu7MQUq05koqHOMu.png",
    width: 220,
    height: 80,
  },
  {
    name: "McDonalds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_mcdonald-s-transparent-png-mcdonald-s-free-png_19909624-z4KSUsrWeZkhhqwlvU1obzUJESY1pF.png",
    width: 220,
    height: 80,
  },
  {
    name: "Ozone API",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ozone_Logo_White-uai-2064x637-RKZsu4bzAQbPgGRMHNfoeEVDiFnUFE.webp",
    width: 220,
    height: 80,
    className: "brightness-0 invert", // Make Ozone API logo white
  },
]

export function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % companies.length)
  }, [])

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + companies.length) % companies.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(nextSlide, 5000) // Increased interval for better performance
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden relative h-48 bg-gradient-to-r from-black/60 via-black/40 to-black/60 rounded-xl border border-white/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="relative flex items-center justify-center w-full h-full px-16">
                <Image
                  src={companies[currentIndex].logo || "/placeholder.svg"}
                  alt={`${companies[currentIndex].name} logo`}
                  width={companies[currentIndex].width}
                  height={companies[currentIndex].height}
                  className={`object-contain max-h-24 transition-all duration-300 ${companies[currentIndex].className || ""}`}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm h-12 w-12 border border-white/10"
          onClick={previousSlide}
          aria-label="Previous company"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm h-12 w-12 border border-white/10"
          onClick={nextSlide}
          aria-label="Next company"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {companies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

