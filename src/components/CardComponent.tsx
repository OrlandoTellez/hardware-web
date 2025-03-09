import React from 'react'
import { SecondaryButton } from './SecondaryButton'
import styles from "./CardComponent.module.css"

interface Props{
    name: string
    src: string
    textCard: string
    textButton: string
    urlButton: string
}

export const CardComponent = ({name, src, textCard, textButton, urlButton}: Props) => {
  return (
    <>
        <article className={styles.card}>
            <picture>
                <img src={src} alt={name} />
                <h3>{name}</h3>
            </picture>
            <article>
                <p>{textCard}</p>
                <SecondaryButton text={textButton} url={urlButton} />
            </article>
        </article>
    </>
  )
}
