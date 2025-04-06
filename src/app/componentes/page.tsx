import ComponenteClient from "./ComponenteClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Componentes",
  description: "Aprende sobre los componentes de hardware y su funcionamiento",

  keywords: "hardware, componentes, tecnologia, computadoras",
}

export default function page() {
  return <ComponenteClient />
}