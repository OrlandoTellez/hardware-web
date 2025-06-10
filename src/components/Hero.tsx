import React from "react"
import styles from "./Hero.module.css"

interface Props {
    title: string
    subtitle: string
}

export const Hero = ({title, subtitle}: Props) => {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.sub_text}>
            {subtitle}
          </p>
        </article>
      </section>
    </>
  )
}
