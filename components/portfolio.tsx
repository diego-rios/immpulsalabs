import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "./section-wrapper"

export default function Portfolio() {
  return (
    <SectionWrapper id="proyectos" className="bg-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyectos MVP Exitosos</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a otros fundadores a convertir sus ideas en realidad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-black/50 border-white/10 overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Interfaz de usuario de ThinkAI mostrando el dashboard principal con análisis de documentos"
              width={600}
              height={400}
              className="w-full"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">AI</Badge>
                <Badge variant="outline">EdTech</Badge>
                <Badge variant="outline">Study Companion</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">ThinkAI</h3>
              <p className="text-gray-400">
                Un asistente de estudio impulsado por IA con cuestionarios personalizados y análisis de PDFs.
              </p>
            </div>
          </Card>
          <Card className="bg-black/50 border-white/10 overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="TripChats Project"
              width={600}
              height={400}
              className="w-full"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">Mobile App</Badge>
                <Badge variant="outline">Social Networking</Badge>
                <Badge variant="outline">Solo Travelers</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">TripChats</h3>
              <p className="text-gray-400">
                Una app de viajes sociales para conectar viajeros solitarios con locales y explorar destinos de forma
                colaborativa.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  )
}

