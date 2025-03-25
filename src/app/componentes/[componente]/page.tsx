'use server' 

import { componentes } from "@/data/componentes"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { Hero } from "@/sections/componentes/[componente]/Hero"
import { ModelThreejs } from "@/sections/componentes/[componente]/ModelThreejs"

interface Params {
  componente: string
}

export async function generateStaticParams() {
  return componentes.map((c) => ({
    componente: c.slug
  }))
}

export default async function ComponentPage({ params }: { params: Promise<Params> }) {
  const { componente } = await params
  
  const item = componentes.find((c) => c.slug === componente)

  if (!item) return notFound()

  return (
    <>
      <section className={styles.section}>
        <Hero 
        name={item.name} 
        subtitle={item.subtitle} 
        />
        <ModelThreejs modelo={item.modelo} />
        
      </section>
    </>
  )
}