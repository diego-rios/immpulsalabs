"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  photoSrc?: string
  companyLogos?: string[]
}

export function SectionWrapper({ id, children, className, photoSrc, companyLogos }: SectionWrapperProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = React.useState(0)

  const nextLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % (companyLogos?.length || 1))
  }

  const prevLogo = () => {
    setCurrentLogoIndex((prevIndex) => (prevIndex - 1 + (companyLogos?.length || 1)) % (companyLogos?.length || 1))
  }

  return (
    <section id={id} className={`py-12 md:py-24 scroll-mt-20 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {photoSrc && (
            <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-xl"
              >
                <Image src={photoSrc || "/placeholder.svg"} alt="Profile" layout="fill" objectFit="cover" />
              </motion.div>
            </div>
          )}
          <div className="flex-1 space-y-6">
            <div className="prose prose-invert max-w-none">{children}</div>
            {companyLogos && companyLogos.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Companies I've Worked With</h3>
                <div className="relative">
                  <motion.div
                    key={currentLogoIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center h-24"
                  >
                    <Image
                      src={companyLogos[currentLogoIndex] || "/placeholder.svg"}
                      alt={`Company logo ${currentLogoIndex + 1}`}
                      width={150}
                      height={80}
                      objectFit="contain"
                    />
                  </motion.div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    onClick={prevLogo}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    onClick={nextLogo}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

