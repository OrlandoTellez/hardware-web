import { componentes } from "@/data/componentes"
import Link from "next/link"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { ThreeJSComponent } from "@/threejs/ThreeJSComponent"
import arrowRight from "@/icons/arrow-right.svg"

export default function ComponentPage({
  params,
}: {
  params: { componente: string }
}) {
  const componente = componentes.find((c) => c.slug === params.componente)

  if (!componente) return notFound()

  return (
    <>
      <section className={styles.section}>
        <article>
          <Link href="/componentes" className={styles.boton}>
            <img src={arrowRight.src} alt="arrow right icon" />
            Volver a componentes
          </Link>        
          <h1>{componente.name}</h1>
          <h2>{componente.subtitle}</h2>
        </article>
        <div className={styles.render3d}>
          <h3>Modelo 3D interactivo</h3>
          <ThreeJSComponent 
          modelo={componente.modelo}
          />
          <p>Haz clic y arrastra para rotar. Usa la rueda del ratón para hacer zoom.</p>
        </div>
        
      </section>
    </>

  )
}