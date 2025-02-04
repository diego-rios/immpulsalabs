import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { headers } from "next/headers"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ImmpulsaLabs | Desarrollo de MVP Rápido y Asequible en 4-5 Semanas",
  description:
    "Convierte tu idea en un MVP en 4-5 semanas con ImmpulsaLabs. Desarrollo ágil, moderno y transparente para startups y empresas. Tecnología de última generación con integraciones sin esfuerzo.",
  keywords: [
    "MVP development",
    "desarrollo de aplicaciones",
    "startup",
    "desarrollo web",
    "aplicaciones web",
    "desarrollo ágil",
    "desarrollo rápido",
    "ImpulsaLabs",
  ],
  authors: [{ name: "Diego Rios", url: "https://www.linkedin.com/in/yourprofile" }],
  openGraph: {
    title: "ImmpulsaLabs | Desarrollo de MVP Rápido y Asequible",
    description:
      "Convierte tu idea en un MVP en 4-5 semanas. Desarrollo ágil, moderno y transparente para startups y empresas.",
    url: "https://impulsalabs.com",
    siteName: "ImmpulsaLabs",
    images: [
      {
        url: "https://impulsalabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ImpulsaLabs - Desarrollo de MVP",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImmpulsaLabs | Desarrollo de MVP Rápido y Asequible",
    description: "Convierte tu idea en un MVP en 4-5 semanas. Desarrollo ágil, moderno y transparente.",
    images: ["https://impulsalabs.com/twitter-image.jpg"],
    creator: "@ImpulsaLabs",
  },
  alternates: {
    canonical: "https://impulsalabs.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set security headers
  headers({
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; frame-src 'self' https:; worker-src 'self' blob:;",
  })

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className={inter.className}>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  )
}

