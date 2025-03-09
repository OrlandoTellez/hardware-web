import React from 'react'
import styles from "@/components/Label.module.css"

interface Props{
    text: string
}

export const Label = (text: Props) => {
  return (
    <>
        <div className={styles.label}>
            <p><span>{text.text}</span></p>
        </div>
    </>
  )
}
