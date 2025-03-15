import { CardDescriptionComponent } from "@/components/CardDescriptionComponent"
import React from "react"
import styles from "./Description.module.css"

export const Description = () => {
    const description = [
        {
            name: "Código Binario",
            subtitle: "El lenguaje fundamental de las computadoras",
            src: "	https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
            textCard: "Las computadoras utilizan el sistema binario para representar y procesar datos. Este sistema solo tiene dos dígitos: 0 y 1, que representan estados eléctricos (apagado/encendido). El cálculo se lleva a cabo mediante operaciones lógicas y aritméticas basadas en estos dígitos.",
            numberPrincipio: "Principio 1",
            url: "/"
        },
        {
            name: "Arquitectura de Computadoras",
            subtitle: "El diseño y estructura del sistema",
            src: "	https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80",
            textCard: "La arquitectura de computadoras define cómo los diferentes componentes de hardware interactúan entre sí para formar un sistema funcional. La arquitectura de una computadora incluye el procesador, memoria, unidades de almacenamiento y periféricos, que permiten la comunicación y el acceso a los datos.",
            numberPrincipio: "Principio 2",
            url: "/"
        },
        {
            name: "Procesamiento de Datos",
            subtitle: "Transformación y manipulación de información",
            src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
            textCard: "La Memoria de Acceso Aleatorio (RAM) proporciona almacenamiento temporal de alta velocidad para los datos que están siendo utilizados activamente. A diferencia del almacenamiento, la RAM es volátil, lo que significa que los datos se pierden cuando se apaga la computadora. Cuanta más RAM tenga un sistema, más programas y datos podrá manejar simultáneamente sin ralentizarse. La RAM es esencial para el multitasking eficiente.",
            numberPrincipio: "Principio 3",
            url: "/"
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
