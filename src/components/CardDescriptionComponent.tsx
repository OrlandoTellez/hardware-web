import React from 'react'
import styles from "./CardDescriptionComponent.module.css"

interface Props{
    name: string
    subtitle: string
    src: string
    textCard: string
}

export const CardDescriptionComponent = ({name, subtitle, src, textCard}: Props) => {
  return (
    <>
        <article className={styles.card}>
            <picture>
                <img src={src} alt={name} />
            </picture>
            <article>
                <h3>{name}</h3>
                <h4>{subtitle}</h4>
                <p>{textCard}</p>
            </article>
        </article>
    </>
  )
}
