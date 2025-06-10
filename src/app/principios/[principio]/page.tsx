import { principios } from "@/data/principios"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { Hero } from "@/sections/componentes/[componente]/Hero"
import { getMarkdownContent } from "@/utils/getMarkdownContent"

interface Params {
  principio: string
}

export async function generateStaticParams() {
  return principios.map((c) => ({
    principio: c.slug,
  }))
}

export default async function PrinciplePage({ params }: { params: Promise<Params> }) {
  const { principio } = await params
  const item = principios.find((c) => c.slug === principio)

  if (!item) return notFound()

  const markdownContent = await getMarkdownContent("principios", principio)

  return (
    <>
      <section className={styles.section}>
        <Hero name={item.name} subtitle={item.subtitle} />

        <article className={styles.description}>
          <article>
            <div 
            className="markdown"
            dangerouslySetInnerHTML={{ __html: markdownContent }} 
            />
          </article>
        </article>
      </section>
    </>
  )
}