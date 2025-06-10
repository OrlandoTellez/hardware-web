import React from "react"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.title}>
            Componentes del Hardware
          </h1>
          <p className={styles.sub_text}>
            Descubra los componentes esenciales del hardware de un ordenador, desde la CPU hasta la memoria RAM, y cómo cada uno contribuye al funcionamiento del sistema.
          </p>
        </article>
      </section>
    </>
  )
}
