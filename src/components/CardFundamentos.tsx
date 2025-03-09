import React from 'react'
import Link from 'next/link'
import styles from "./CardFundamentos.module.css"

interface Props{
    id: string
    title: string
    description: string
    list: string[]
    url: string
}

export const CardFundamentos = ({id, title, description, list, url}: Props) => {
  return (
    <>
        <article className={styles.card}>
            <div>
                <p><span>0{id}</span></p>
            </div>
            <article className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>

                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </article>
            <div>
                <Link href={url} className={styles.button}>Explorar</Link>
            </div>
        </article>
    </>
  )
}
