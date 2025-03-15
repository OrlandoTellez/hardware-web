import React from "react"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1>
            Principios Técnicos
          </h1>
          <p className={styles.sub_text}>
            Descubra los fundamentos científicos y técnicos que hacen posible el funcionamiento de las computadoras modernas.
          </p>
        </article>
      </section>
    </>
  )
}
