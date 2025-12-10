import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import type { JSX } from "react"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// Custom markdown parser to fix Next.js compatibility
function parseMarkdown(content: string): JSX.Element[] {
  const lines = content.split("\n")
  const elements: JSX.Element[] = []
  let key = 0

  // Helper to parse inline content (links and bold text)
  const parseInline = (text: string): (string | JSX.Element)[] => {
    const result: (string | JSX.Element)[] = []
    let remaining = text
    let inlineKey = 0

    while (remaining.length > 0) {
      // Check for links [text](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]$$([^)]+)$$/)
      if (linkMatch) {
        const beforeLink = remaining.slice(0, linkMatch.index)
        if (beforeLink) result.push(beforeLink)

        result.push(
          <a
            key={`link-${inlineKey++}`}
            href={linkMatch[2]}
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkMatch[1]}
          </a>,
        )

        remaining = remaining.slice(linkMatch.index! + linkMatch[0].length)
        continue
      }

      // Check for bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/)
      if (boldMatch) {
        const beforeBold = remaining.slice(0, boldMatch.index)
        if (beforeBold) result.push(beforeBold)

        result.push(
          <strong key={`bold-${inlineKey++}`} className="text-foreground font-medium">
            {boldMatch[1]}
          </strong>,
        )

        remaining = remaining.slice(boldMatch.index! + boldMatch[0].length)
        continue
      }

      // No more special formatting, add remaining text
      result.push(remaining)
      break
    }

    return result
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-lg font-medium text-foreground mt-6 mb-4">
          {line.slice(4)}
        </h3>,
      )
    }
    // Empty lines
    else if (line.trim() === "") {
      continue
    }
    // Regular paragraphs (with potential inline formatting)
    else {
      const parsed = parseInline(line)
      elements.push(
        <p key={key++} className="text-muted-foreground mb-4 leading-relaxed">
          {parsed}
        </p>,
      )
    }
  }

  return elements
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <article className="mx-auto max-w-md flex-1">
        <h1 className="text-2xl font-medium text-foreground mb-2">{post.title}</h1>

        <Link href="/" className="inline-block mb-6 text-muted-foreground hover:text-foreground transition-colors">
          ← Back home
        </Link>

        <p className="text-sm text-muted-foreground mb-8">{post.date}</p>

        <div className="prose prose-invert prose-sm max-w-none">{parseMarkdown(post.content)}</div>
      </article>

      <footer className="mx-auto max-w-md w-full mt-16 pt-8 border-t border-muted">
        <p className="text-sm text-muted-foreground">
          Vibe coded from Lisbon by{" "}
          <a
            href="https://x.com/pcbo"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            PCBO
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
