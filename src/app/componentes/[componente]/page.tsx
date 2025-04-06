import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { componentes } from "@/data/componentes"
import { notFound } from "next/navigation"
import styles from "./page.module.css"
import { Hero } from "@/sections/componentes/[componente]/Hero"
import { ModelThreejs } from "@/sections/componentes/[componente]/ModelThreejs"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const item = componentes.find((c) => c.slug === params.componente)

  if (!item) return {}

  return {
    title: `${item.name}`,
    description: `Información detallada sobre el componente ${item.name}`,
    keywords: ["hardware", item.name, "componentes", "tecnología", "computadoras"],
  }
}

interface Params {
  componente: string
}

async function getMarkdownContent(slug: string) {
  try {
    const filePath = path.resolve(process.cwd(), "src", "content", `${slug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { content } = matter(fileContent)
    const processedContent = await remark().use(html).process(content)

    return processedContent.toString()
  } catch (error) {
    console.error(`Error loading Markdown file for ${slug}:`, error)
    return "<p>Contenido no disponible.</p>"
  }
}

export async function generateStaticParams() {
  return componentes.map((c) => ({
    componente: c.slug,
  }))
}

export default async function ComponentPage({ params }: { params: Promise<Params> }) {
  const { componente } = await params
  const item = componentes.find((c) => c.slug === componente)

  if (!item) return notFound()

  const markdownContent = await getMarkdownContent(componente)

  return (
    <>
      <section className={styles.section}>
        <Hero name={item.name} subtitle={item.subtitle} />
        <ModelThreejs modelo={item.modelo} />

        <article className={styles.description}>
          <article>
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
          </article>
        </article>
      </section>
    </>
  )
}
