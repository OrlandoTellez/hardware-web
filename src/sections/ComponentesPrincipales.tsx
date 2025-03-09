import React from "react"
import { Label } from "@/components/Label"
import { CardHardwareName } from "@/components/CardHardwareName"
import IconCpu from "@/icons/cpu.svg"
import styles from "./ComponentesPrincipales.module.css"

export const ComponentesPrincipales = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <div>
            <Label text="Componentes principales" />
          </div>
          <h2>Principales Componentes de Hardware</h2>
          <p>Descubre los elementos fundamentales que conforman un sistema de computadora y conoce sus funciones específicas.</p>
        </article>

        <div className={styles.cards}>
          <CardHardwareName name="Procesador" icon={IconCpu.src} />
          <CardHardwareName name="Procesador" icon={IconCpu.src} />
          <CardHardwareName name="Procesador" icon={IconCpu.src} />
          <CardHardwareName name="Procesador" icon={IconCpu.src} />
          
        </div>
      </section>
    </>
  )
}
