import { CardDescriptionComponent } from "@/components/CardDescriptionComponent"
import React from "react"
import styles from "./Description.module.css"

export const Description = () => {
    const description = [
        {
            name: "Procesador",
            subtitle: "El cerebro de la computadora. Ejecuta instrucciones, realiza cálculos y coordina todas las operaciones del sistema.",
            src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
            textCard: "La Unidad Central de Procesamiento (CPU) es el componente principal de una computadora que interpreta y ejecuta instrucciones. Actúa como el cerebro del ordenador, realizando operaciones aritméticas, lógicas y de entrada/salida especificadas por las instrucciones del programa. Los procesadores modernos incluyen múltiples núcleos, memoria caché y diversos niveles de optimización para mejorar el rendimiento."
        },
        {
            name: "Almacenamiento",
            subtitle: "Dispositivos que guardan datos permanentemente, incluyendo HDD y SSD.",
            src: "https://images.unsplash.com/photo-1563212034-a3c52118cce2?auto=format&fit=crop&w=800&q=80",
            textCard: "Los dispositivos de almacenamiento guardan datos de forma permanente, incluso cuando el equipo está apagado. Los discos duros tradicionales (HDD) utilizan platos magnéticos giratorios para almacenar información, mientras que las unidades de estado sólido (SSD) emplean memoria flash, siendo más rápidas y resistentes. El almacenamiento es esencial para guardar el sistema operativo, programas, archivos y todo tipo de datos que necesitamos conservar."
        },
        {
            name: "Memoria (RAM)",
            subtitle: "Almacenamiento temporal de alta velocidad para datos en uso activo.",
            src: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
            textCard: "La Memoria de Acceso Aleatorio (RAM) proporciona almacenamiento temporal de alta velocidad para los datos que están siendo utilizados activamente. A diferencia del almacenamiento, la RAM es volátil, lo que significa que los datos se pierden cuando se apaga la computadora. Cuanta más RAM tenga un sistema, más programas y datos podrá manejar simultáneamente sin ralentizarse. La RAM es esencial para el multitasking eficiente."
        }
    ]

  return (
    <>
      <section className={styles.section}>
      {
        description.map((item, index) => (
            <CardDescriptionComponent key={index} {...item} />
        ))
       }
      </section>
    </>
  )
}
