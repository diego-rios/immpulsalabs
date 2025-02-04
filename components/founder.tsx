"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { CompanyCarousel } from "./company-carousel"
import { SocialLinks } from "./social-links"

export default function Founder() {
  return (
    <SectionWrapper id="fundador" className="bg-black/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          {/* Profile Photo Container - Fixed width and centered */}
          <div className="w-[300px] flex-shrink-0 mb-8 md:mb-0">
            <div className="relative w-[300px] h-[300px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#7F4FFF]/20 to-[#FF6F3C]/20 rounded-full blur-xl" />

              {/* Dark border ring */}
              <div className="absolute -inset-[1px] rounded-full bg-black/80" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diego%20Rios.jpg-bJBmdkzXXNJ7h56E3ZQ3OVexg3Of9e.jpeg"
                  alt="Diego Rios - Fundador de ImpulsaLabs"
                  fill
                  sizes="300px"
                  className="object-cover scale-[1.15] hover:scale-[1.18] transition-transform duration-700"
                  priority
                />
              </div>

              {/* Decorative outer rings */}
              <div className="absolute -inset-6 border border-white/5 rounded-full" />
              <div className="absolute -inset-4 border border-white/5 rounded-full" />
            </div>
          </div>

          {/* Content Container - Flex-grow to take remaining space */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-grow md:pl-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Conoce al Fundador</h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  Soy Diego Rios, fundador de ImmpulsaLabs, una agencia de desarrollo de Productos Mínimos Viables que
                  convierte tus ideas en realidad.
                </p>
                <p>
                  Con más de 15 años de experiencia en tecnología y Fintech, soy Coach Ejecutivo, mentor de Startups e
                  Inversionista Ángel.
                </p>
                <p>He construido productos exitosos en VECI, Bancolombia y Rappi.</p>
                <p>
                  Con ImmpulsaLabs, mi objetivo es ayudar a los próximos emprendedores a convertir sus ideas en realidad
                  y apoyar en el crecimiento de sus empresas.
                </p>
                <p>Sólo tomo pocos proyectos al mes, para asegurar un acompañamiento personalizado y de calidad.</p>
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 text-center max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-12">Empresas en las que he trabajado:</h3>
          <CompanyCarousel />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

