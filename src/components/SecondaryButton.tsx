import React from 'react'
import styles from "@/components/SecondaryButton.module.css"
import Link from 'next/link'

interface Props {
    text: string
    url: string
}

export const SecondaryButton = ({text, url}: Props) => {
  return (
    <>
        <Link href={url} className={styles.button}>
            {text}
        </Link>
    </>
  )
}
