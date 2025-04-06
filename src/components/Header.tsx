"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import bars from "@/icons/bars.svg"
import styles from "@/components/Header.module.css"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
  return (
    <>
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <h1>Hardware<span>Class</span></h1>
                </div>

                <div className={styles.bars} onClick={toggleMenu}>
                    <img src={bars.src} alt="bars" />
                </div>

                <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
                    <ul className={styles.ul}>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/componentes">Componentes</Link></li>
                        <li><Link href="/principios">Principios</Link></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    </>
  )
}
