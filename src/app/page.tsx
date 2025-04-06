import HomeClient from "./HomeClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Aprende sobre hardware y su funcionamiento",
  keywords: "hardware, componentes, tecnologia, computadoras",
}

export default function page() {
  return <HomeClient />
}