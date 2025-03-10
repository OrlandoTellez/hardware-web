import React from "react"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1>
            Componentes del Hardware
          </h1>
          <p className={styles.sub_text}>
            Una plataforma educativa donde aprenderás todo sobre los componentes
            de una computadora, su funcionamiento y los principios técnicos
            detrás de la tecnología moderna.
          </p>
        </article>
      </section>
    </>
  )
}
