import fs from "fs"
import path from "path"

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: "pedro" | "macgyver"
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

function parseFrontmatter(fileContent: string): { data: Record<string, string>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = fileContent.match(frontmatterRegex)
  if (!match) return { data: {}, content: fileContent }

  const data: Record<string, string> = {}
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(": ")
    if (key && rest.length) {
      data[key.trim()] = rest.join(": ").replace(/^["']|["']$/g, "")
    }
  })
  return { data, content: match[2] }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"))
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8")
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: data.slug || file.replace(".md", ""),
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: (data.author === "macgyver" ? "macgyver" : "pedro") as "pedro" | "macgyver",
      content,
    }
  })

  // Sort by date descending (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug)
}
