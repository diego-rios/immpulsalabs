import Image from "next/image"
import Header from "@/components/header"
import Hero from "@/components/hero"
import KeyValueProps from "@/components/key-value-props"
import Portfolio from "@/components/portfolio"
import Process from "@/components/process"
import PricingSection from "@/components/pricing-section"
import Founder from "@/components/founder"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import FloatingNav from "@/components/floating-nav"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Header />
      <Hero />
      <KeyValueProps />
      <Portfolio />
      <Process />
      <PricingSection />
      <Founder />
      <FinalCTA />
      <Footer />
      <FloatingNav />
    </div>
  )
}

