import React from 'react'
import Link from 'next/link'
import "@/components/Header.css"

export const Header = () => {
  return (
    <>
        <header>
            <div>
                <h1>Hardware<span>Class</span></h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/componentes">Componentes</Link></li>
                    <li><Link href="/principios">Principios</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
