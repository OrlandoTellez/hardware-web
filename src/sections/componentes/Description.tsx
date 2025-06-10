import { CardDescriptionComponent } from "@/components/CardDescriptionComponent"
import React from "react"
import styles from "./Description.module.css"
import { componentes } from "@/data/componentes";

export const Description = () => {
  return (
    <>
      <section className={styles.section}>
      {
        componentes.map((item, index) => (
            <CardDescriptionComponent key={index} {...item} />
        ))
       }
      </section>
    </>
  )
}
