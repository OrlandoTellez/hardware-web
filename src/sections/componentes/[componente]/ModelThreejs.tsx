import React from 'react'
import { ThreeJSComponent } from "@/threejs/ThreeJSComponent"
import styles from './ModelThreejs.module.css'

interface Props{
    modelo: string
}

export const ModelThreejs = ({modelo}: Props) => {
  return (
    <>
        <div className={styles.render3d}>
          <h3>Modelo 3D interactivo</h3>
          <ThreeJSComponent modelo={modelo} />
          <p>Haz clic y arrastra para rotar. Usa la rueda del ratón para hacer zoom.</p>
        </div>
    </>
  )
}
