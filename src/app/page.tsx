"use client"

import { ComponentesPrincipales } from "@/sections/ComponentesPrincipales"
import { FundamentosTecnicos } from "@/sections/FundamentosTecnicos"
import { Hero } from "@/sections/Hero"

export default function Home() {
  return (
    <>      
      <Hero />
      <ComponentesPrincipales />
      <FundamentosTecnicos />
    </>
  )
}
