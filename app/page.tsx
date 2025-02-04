import type { Metadata } from "next"
import Script from "next/script"
import Header from "@/components/header"
import Hero from "@/components/hero"
import KeyValueProps from "@/components/key-value-props"
// import Portfolio from "@/components/portfolio"
import Process from "@/components/process"
import PricingSection from "@/components/pricing-section"
import Founder from "@/components/founder"
import { FAQSection } from "@/components/faq-section"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import FloatingNav from "@/components/floating-nav"

// Override default metadata with page-specific SEO
export const metadata: Metadata = {
  title: "Desarrollo de MVP en 4-5 Semanas | ImmpulsaLabs",
  description:
    "Especialistas en desarrollo de MVP rápido y asequible. Convierte tu idea en realidad con nuestra metodología ágil y tecnología moderna. ¡Reserva tu consulta ahora!",
}

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white">
        <Header />
        <main id="main">
          <Hero />
          <KeyValueProps />
          {/* <Portfolio /> */}
          <Process />
          <PricingSection />
          <Founder />
          <FAQSection />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingNav />
      </div>

      {/* Structured Data for Rich Results */}
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "ImmpulsaLabs",
            "image": "https://impulsalabs.com/logo.png",
            "description": "Desarrollo de MVP rápido y asequible en 4-5 semanas. Especialistas en tecnología moderna y desarrollo ágil.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ES"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "1000",
              "highPrice": "2000",
              "priceCurrency": "USD"
            },
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Desarrollo MVP",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paquete de Desarrollo de MVP",
                    "description": "Desarrollo completo de MVP en 4-5 semanas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plan de Crecimiento",
                    "description": "Soporte continuo y desarrollo mensual"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.linkedin.com/company/impulsalabs",
              "https://www.instagram.com/impulsalabs",
              "https://twitter.com/impulsalabs"
            ]
          }
        `}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué beneficios obtengo al lanzar un MVP antes de desarrollar el producto completo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lanzar un MVP te permite validar tu idea rápidamente, reducir riesgos y optimizar recursos. Con un Producto Mínimo Viable, recibes feedback real de usuarios, ajustas funcionalidades y perfeccionas tu propuesta de valor antes de escalar."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo toma el proceso desde la planeación del MVP hasta la entrega final?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nuestro desarrollo MVP dura entre 4 y 5 semanas. Iniciamos con una consulta para definir alcance y objetivos. Luego, creamos un plan detallado y trabajamos en sprints ágiles con actualizaciones continuas."
                }
              }
              // Add more questions and answers here
            ]
          }
        `}
      </Script>
    </>
  )
}

