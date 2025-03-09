import React from "react"
import styles from "@/components/CardHardwareName.module.css"

interface Props {
  name: string
  icon: string
  onClick: () => void 
}

export const CardHardwareName = ({ name, icon, onClick }: Props) => {
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <picture>
          <img src={icon} alt={name} />
        </picture>
        <p>{name}</p>
      </div>
    </>
  )
}
