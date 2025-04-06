"use client"
import { ComponentesPrincipales } from "@/sections/app/ComponentesPrincipales"
import { FundamentosTecnicos } from "@/sections/app/FundamentosTecnicos"
import { Hero } from "@/sections/app/Hero"

export default function Home() {
  return (
    <>      
      <Hero />
      <ComponentesPrincipales />
      <FundamentosTecnicos />
    </>
  )
}
