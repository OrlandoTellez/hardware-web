import React from "react"
import styles from "@/components/CardHardwareName.module.css"

interface Props {
  name: string
  icon: string
}

export const CardHardwareName = ({ name, icon }: Props) => {
  return (
    <>
      <div className={styles.card}>
        <picture>
          <img src={icon} alt={name} />
        </picture>
        <p>{name}</p>
      </div>
    </>
  )
}
