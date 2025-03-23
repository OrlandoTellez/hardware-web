import React from 'react'
import arrowLeft from "@/icons/arrow-left.svg"
import styles from "@/components/Button.module.css"
import Link from 'next/link'

interface Props{
    text: string
    url: string
}

export const Button = ({text, url}: Props) => {
  return (
    <>
        <Link href={url} className={styles.button}>
            {text} 
            <img src={arrowLeft.src} alt="arrow left icon" />
        </Link>
    </>
  )
}
