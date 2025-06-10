import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import html from "remark-html"

export async function getMarkdownContent( dir: string, slug: string) {
  try {
    const filePath = path.resolve(process.cwd(), "src", "content", `${dir}/${slug}.md`)
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { content } = matter(fileContent)
    const processedContent = await remark().use(remarkGfm).use(html).process(content)

    return processedContent.toString()
  } catch (error) {
    console.error(`Error loading Markdown file for ${slug}:`, error)
    return "<p>Contenido no disponible.</p>"
  }
}