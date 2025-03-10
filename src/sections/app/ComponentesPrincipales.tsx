import React, { useState } from "react"
import { Label } from "@/components/Label"
import { CardHardwareName } from "@/components/CardHardwareName"
import IconCpu from "@/icons/cpu.svg"
import IconStorage from "@/icons/storage.svg"
import IconRam from "@/icons/ram.svg"
import IconGraphics from "@/icons/graphics.svg"
import styles from "./ComponentesPrincipales.module.css"
import { CardComponent } from "@/components/CardComponent"


export const ComponentesPrincipales = () => {
  const [selectedComponent, setSelectedComponent] = useState("Procesador")

  const componentesDetails = [
    {
      name: "Procesador",
      src: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
      textCard: "El cerebro de la computadora. Ejecuta instrucciones, realiza cálculos y coordina todas las operaciones del sistema.",
      textButton: "Aprender más sobre procesadores",
      urlButton: "/",
      icon: IconCpu.src,
    },
    {
      name: "Almacenamiento",
      src: "https://images.unsplash.com/photo-1563212034-a3c52118cce2?auto=format&fit=crop&w=800&q=80",
      textCard: "Guardan datos a largo plazo, desde el sistema operativo hasta tus archivos personales. Incluye discos duros (HDD) y unidades de estado sólido (SSD).",
      textButton: "Aprender más sobre almacenamiento",
      urlButton: "/",
      icon: IconStorage.src
    },
    {
      name: "Memoria (RAM)",
      src: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
      textCard: "Almacenamiento temporal y de acceso rápido que permite al sistema acceder a los datos en uso. Más RAM significa mejor multitarea.",
      textButton: "Aprender más sobre memoria",
      urlButton: "/",
      icon: IconRam.src
    },
    {
      name: "Pantalla/Gráficos",
      src: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80",
      textCard: "Sistemas responsables de mostrar imágenes, vídeos y todo contenido visual. Incluye monitores y tarjetas gráficas.",
      textButton: "Aprender más sobre gráficos",
      urlButton: "/",
      icon: IconGraphics.src
    }
  ]

  const handleCardClick = (name: string) => {
    setSelectedComponent(name)
  }

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

        <section className={styles.cards_section}>
          <div className={styles.cards}>
          {componentesDetails.map((componente, index) => (
            <CardHardwareName
              key={index}
              name={componente.name}
              icon={componente.icon}
              onClick={() => handleCardClick(componente.name)}
            />
          ))}
          </div>

          <section>
          {selectedComponent &&
            componentesDetails
              .filter((c) => c.name === selectedComponent)
              .map((componente, index) => (
                <CardComponent
                  key={index}
                  name={componente.name}
                  src={componente.src}
                  textCard={componente.textCard}
                  textButton={componente.textButton}
                  urlButton={componente.urlButton}
                />
              ))}
          </section>
        </section>
        

      </section>
    </>
  )
}
