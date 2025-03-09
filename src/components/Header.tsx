import React from 'react'
import Link from 'next/link'
import bars from "@/icons/bars.svg"
import styles from "@/components/Header.module.css"

export const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <div>
                <h1>Hardware<span>Class</span></h1>
            </div>

            <div className={styles.bars}>
                <img src={bars.src} alt="bars" />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/componentes">Componentes</Link></li>
                    <li><Link href="/principios">Principios</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
