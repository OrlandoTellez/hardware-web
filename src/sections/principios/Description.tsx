import { CardDescriptionComponent } from "@/components/CardDescriptionComponent"
import React from "react"
import { principios } from "@/data/principios"
import styles from "./Description.module.css"


export const Description = () => {
  return (
    <>
      <section className={styles.section}>
      {
        principios.map((item, index) => (
            <CardDescriptionComponent key={index} {...item} />
        ))
       }
      </section>
    </>
  )
}
