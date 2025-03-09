import React from 'react'
import styles from "@/components/SecondaryButton.module.css"

interface Props {
    text: string
    url: string
}

export const SecondaryButton = ({text, url}: Props) => {
  return (
    <>
        <a href={url} className={styles.button}>
            {text}
        </a>
    </>
  )
}
