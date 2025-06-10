import React from 'react'
import Link from 'next/link'
import arrowRight from "@/icons/arrow-right.svg"
import styles from './Hero.module.css'

interface Props {
    name: string
    subtitle: string
}

export const Hero = ({name, subtitle}: Props) => {
  return (
    <>
        <article className={styles.hero}>
          <Link href="/componentes" className={styles.boton}>
            <img src={arrowRight.src} alt="arrow right icon" />
            Volver a componentes
          </Link>        
          <h1>{name}</h1>
          <h2>{subtitle}</h2>
        </article>
    </>
  )
}
