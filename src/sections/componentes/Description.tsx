import { CardDescriptionComponent } from "@/components/CardDescriptionComponent"
import React from "react"
import styles from "./Description.module.css"

export const Description = () => {
  return (
    <>
      <section className={styles.section}>
        <CardDescriptionComponent
          name="Procesador"
          subtitle="El cerebro de la computadora. Ejecuta instrucciones, realiza cálculos y coordina todas las operaciones del sistema."
          src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
          textCard="La Unidad Central de Procesamiento (CPU) es el componente principal de una computadora que interpreta y ejecuta instrucciones. Actúa como el cerebro del ordenador, realizando operaciones aritméticas, lógicas y de entrada/salida especificadas por las instrucciones del programa. Los procesadores modernos incluyen múltiples núcleos, memoria caché y diversos niveles de optimización para mejorar el rendimiento."
        />
      </section>
    </>
  )
}
