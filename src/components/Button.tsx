import React from 'react'
import arrowLeft from "@/icons/arrow-left.svg"
import styles from "@/components/Button.module.css"

interface Props{
    text: string
    url: string
}

export const Button = ({text, url}: Props) => {
  return (
    <>
        <a href={url} className={styles.button}>
            {text} 
            <img src={arrowLeft.src} alt="arrow left icon" />
        </a>
    </>
  )
}
