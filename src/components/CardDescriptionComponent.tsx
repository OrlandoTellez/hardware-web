import React from 'react'
import styles from "./CardDescriptionComponent.module.css"
import { Button } from './Button'


interface Props{
    name: string
    subtitle: string
    src: string
    textCard: string
    icon: string
    url: string
}

export const CardDescriptionComponent = ({name, subtitle, src, textCard, icon, url}: Props) => {
  return (
    <>
        <article className={styles.card}>
            <picture>
                <img src={src} alt={name} />
            </picture>
            <article>
                <h3>
                    <img src={icon} alt={name} className={styles.icon} />
                    {name}
                </h3>
                <h4>{subtitle}</h4>
                <p>{textCard}</p> 
                <div>
                    <Button text={`Leer más acerca de ${name}`} url={url} />
                </div>
            </article>
        </article>
    </>
  )
}
