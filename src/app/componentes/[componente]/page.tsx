'use server' 

import { componentes } from "@/data/componentes"
import Link from "next/link"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { ThreeJSComponent } from "@/threejs/ThreeJSComponent"
import arrowRight from "@/icons/arrow-right.svg"

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
        <article>
          <Link href="/componentes" className={styles.boton}>
            <img src={arrowRight.src} alt="arrow right icon" />
            Volver a componentes
          </Link>        
          <h1>{item.name}</h1>
          <h2>{item.subtitle}</h2>
        </article>
        <div className={styles.render3d}>
          <h3>Modelo 3D interactivo</h3>
          <ThreeJSComponent modelo={item.modelo} />
          <p>Haz clic y arrastra para rotar. Usa la rueda del ratón para hacer zoom.</p>
        </div>
      </section>
    </>
  )
}