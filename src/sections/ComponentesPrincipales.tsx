import React from "react"
import { Label } from "@/components/Label"
import { CardHardwareName } from "@/components/CardHardwareName"
import IconCpu from "@/icons/cpu.svg"
import styles from "./ComponentesPrincipales.module.css"
import { CardComponent } from "@/components/CardComponent"


export const ComponentesPrincipales = () => {
  const componentesDetails = [
    {
      name: "Procesador",
      src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
      textCard: "El cerebro de la computadora. Ejecuta instrucciones, realiza cálculos y coordina todas las operaciones del sistema.",
      textButton: "Aprender más sobre ...",
      urlButton: "/"
    },
    {
      name: "Almacenamiento",
      src: "https://images.unsplash.com/photo-1563212034-a3c52118cce2?auto=format&fit=crop&w=800&q=80",
      textCard: "Guardan datos a largo plazo, desde el sistema operativo hasta tus archivos personales. Incluye discos duros (HDD) y unidades de estado sólido (SSD).",
      textButton: "Aprender más sobre ...",
      urlButton: "/"
    },
    {
      name: "Memoria (RAM)",
      src: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
      textCard: "Almacenamiento temporal y de acceso rápido que permite al sistema acceder a los datos en uso. Más RAM significa mejor multitarea.",
      textButton: "Aprender más sobre ...",
      urlButton: "/"
    },
    {
      name: "Pantalla/Gráficos",
      src: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
      textCard: "Sistemas responsables de mostrar imágenes, vídeos y todo contenido visual. Incluye monitores y tarjetas gráficas.",
      textButton: "Aprender más sobre ...",
      urlButton: "/"
    }
  ]

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

        <section>
          {
            componentesDetails.map((componente, index) => (
              <CardComponent 
                key={index}
                name={componente.name}
                src={componente.src}
                textCard={componente.textCard}
                textButton={componente.textButton}
                urlButton={componente.urlButton}
              />
            ))
          }
        </section>

      </section>
    </>
  )
}
