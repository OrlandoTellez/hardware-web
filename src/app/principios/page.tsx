import { Description } from '@/sections/principios/Description'
import { Hero } from '@/sections/principios/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Principios",
  description: "Explora los principios fundamentales del hardware y su funcionamiento",
  keywords: "hardware, principios, fundamentos, tecnologia, computadoras",
}


export default function page(){
  return (
    <>
        <Hero />
        <Description />
    </>
  )
}
