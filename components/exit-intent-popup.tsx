"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js/min"
import { sanitizeInput } from "@/utils/security"

// Country codes data with flags
const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "España" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "México" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Perú" },
  { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
]

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCountryListOpen, setIsCountryListOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0])
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    whatsapp: "",
  })
  const [phoneError, setPhoneError] = useState("")
  const [csrfToken, setCSRFToken] = useState("")

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let lastTrigger = 0
    const cooldownPeriod = 2000 // 2 seconds cooldown between triggers

    const handleMouseLeave = (e: MouseEvent) => {
      const now = Date.now()
      if (e.clientY <= 0 && now - lastTrigger > cooldownPeriod) {
        lastTrigger = now
        timeoutId = setTimeout(() => {
          setIsVisible(true)
        }, 500)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    // Fetch CSRF token when component mounts
    fetch("/api/csrf")
      .then((res) => res.json())
      .then((data) => {
        setCSRFToken(data.csrfToken)
      })
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setPhoneError("")
  }

  const validatePhoneNumber = (number: string, countryCode: string) => {
    try {
      const fullNumber = `${countryCode}${number}`
      if (!isValidPhoneNumber(fullNumber)) {
        throw new Error("Número de teléfono inválido")
      }
      const phoneNumber = parsePhoneNumber(fullNumber)
      if (!phoneNumber || number.length < 10 || number.length > 15) {
        throw new Error("El número debe tener entre 10 y 15 dígitos")
      }
      return true
    } catch (error) {
      if (error instanceof Error) {
        setPhoneError(error.message)
      }
      return false
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove non-numeric characters
    if (value.length <= 15) {
      // Limit to 15 digits
      setFormData({ ...formData, whatsapp: value })
      if (value.length >= 10) {
        validatePhoneNumber(value, selectedCountry.code)
      } else {
        setPhoneError("")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validatePhoneNumber(formData.whatsapp, selectedCountry.code)) {
      const sanitizedFormData = {
        nombre: sanitizeInput(formData.nombre),
        apellido: sanitizeInput(formData.apellido),
        email: sanitizeInput(formData.email),
        whatsapp: sanitizeInput(formData.whatsapp),
      }

      // Send form data to server with CSRF token
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(sanitizedFormData),
      })

      if (response.ok) {
        // Format the message with sanitized form data
        const message = `Hola, soy ${sanitizedFormData.nombre} ${sanitizedFormData.apellido}. Me gustaría obtener más información sobre el desarrollo de mi MVP.`
        const encodedMessage = encodeURIComponent(message)
        // Redirect to WhatsApp
        window.open(`https://wa.me/573158558697?text=${encodedMessage}`, "_blank")
        handleClose()
      } else {
        // Handle error
        console.error("Form submission failed")
      }
    }
  }

  const getPlaceholder = () => {
    switch (selectedCountry.code) {
      case "+1":
        return "123 456 7890"
      case "+34":
        return "612 345 678"
      case "+52":
        return "55 1234 5678"
      default:
        return "123 456 7890"
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose()
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#111111] border border-white/10 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden"
        >
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">¿No estás seguro para comenzar?</h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Déjame tus datos y te contacto por WhatsApp. No pierdas más tiempo y haz realidad tus ideas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-400 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-black/40 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-400 mb-1">
                    Apellido
                  </label>
                  <Input
                    id="apellido"
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="bg-black/40 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/40 border-white/10 text-white placeholder:text-gray-500"
                  placeholder="tu@email.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  autoComplete="email"
                />
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <div className="relative">
                  <label htmlFor="codigo" className="block text-sm font-medium text-gray-400 mb-1">
                    Código País
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsCountryListOpen(!isCountryListOpen)}
                    className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-md flex items-center justify-between text-left text-white"
                  >
                    <span>
                      {selectedCountry.flag} {selectedCountry.code}
                    </span>
                    {isCountryListOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {isCountryListOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-[280px] mt-1 bg-[#111111] border border-white/10 rounded-md shadow-xl max-h-[240px] overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                      >
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country)
                              setIsCountryListOpen(false)
                              // Revalidate phone number with new country code
                              if (formData.whatsapp) {
                                validatePhoneNumber(formData.whatsapp, country.code)
                              }
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-white/5 flex items-center gap-3 transition-colors"
                          >
                            <span className="text-lg">{country.flag}</span>
                            <span className="text-base font-medium text-white">{country.code}</span>
                            <span className="text-sm text-gray-300">({country.name})</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-400 mb-1">
                    WhatsApp
                  </label>
                  <div className="space-y-1">
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={handlePhoneChange}
                      className={`bg-black/40 border-white/10 text-white placeholder:text-gray-500 ${
                        phoneError ? "border-red-500" : ""
                      }`}
                      placeholder={getPlaceholder()}
                      minLength={10}
                      maxLength={15}
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                  </div>
                </div>
              </div>

              <GradientButton
                type="submit"
                className="w-full py-4 sm:py-6 text-base sm:text-lg font-medium"
                disabled={!!phoneError || formData.whatsapp.length < 10}
              >
                ¡Quiero Comenzar Ahora en WhatsApp! →
              </GradientButton>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

