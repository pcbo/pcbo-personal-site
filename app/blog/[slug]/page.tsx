import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import type React from "react"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const authorLabel = post.author === "macgyver" ? " — by MacGyver 🫡" : ""
  return {
    title: post.title,
    description: post.description || `${post.title}${authorLabel}`,
    openGraph: {
      title: `${post.title}${authorLabel}`,
      description: post.description || `${post.title}${authorLabel}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}${authorLabel}`,
      description: post.description || `${post.title}${authorLabel}`,
    },
  }
}

function parseMarkdown(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let currentParagraph: string[] = []
  let currentList: { type: "ul" | "ol"; items: string[] } | null = null
  let keyCounter = 0

  const parseInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = []
    let remaining = text
    let inlineKey = 0

    while (remaining.length > 0) {
      const backtick = remaining.indexOf("`")
      const openBracket = remaining.indexOf("[")
      const tripleAsterisk = remaining.indexOf("***")
      const doubleAsterisk = remaining.indexOf("**")
      const singleAsterisk = remaining.indexOf("*")

      const markers = [
        { type: "code", pos: backtick },
        { type: "link", pos: openBracket },
        { type: "bolditalic", pos: tripleAsterisk },
        { type: "bold", pos: doubleAsterisk },
        { type: "italic", pos: singleAsterisk },
      ].filter((m) => m.pos !== -1)

      if (markers.length === 0) {
        parts.push(remaining)
        break
      }

      markers.sort((a, b) => {
        if (a.pos !== b.pos) return a.pos - b.pos
        const priority = { bolditalic: 0, bold: 1, italic: 2, code: 3, link: 4 }
        return priority[a.type as keyof typeof priority] - priority[b.type as keyof typeof priority]
      })

      const first = markers[0]

      if (first.type === "code") {
        const closeBacktick = remaining.indexOf("`", first.pos + 1)
        if (closeBacktick === -1) { parts.push(remaining); break }
        if (first.pos > 0) parts.push(remaining.slice(0, first.pos))
        parts.push(
          <code key={`code-${inlineKey++}`} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
            {remaining.slice(first.pos + 1, closeBacktick)}
          </code>,
        )
        remaining = remaining.slice(closeBacktick + 1)
        continue
      }

      if (first.type === "bolditalic") {
        const closeTriple = remaining.indexOf("***", first.pos + 3)
        if (closeTriple === -1) { parts.push(remaining); break }
        if (first.pos > 0) parts.push(remaining.slice(0, first.pos))
        parts.push(
          <strong key={`bolditalic-${inlineKey++}`} className="text-foreground font-semibold italic">
            {remaining.slice(first.pos + 3, closeTriple)}
          </strong>,
        )
        remaining = remaining.slice(closeTriple + 3)
        continue
      }

      if (first.type === "bold") {
        const closeDouble = remaining.indexOf("**", first.pos + 2)
        if (closeDouble === -1) { parts.push(remaining); break }
        if (first.pos > 0) parts.push(remaining.slice(0, first.pos))
        parts.push(
          <strong key={`bold-${inlineKey++}`} className="text-foreground font-semibold">
            {remaining.slice(first.pos + 2, closeDouble)}
          </strong>,
        )
        remaining = remaining.slice(closeDouble + 2)
        continue
      }

      if (first.type === "italic") {
        if (remaining[first.pos + 1] === "*") {
          parts.push(remaining.slice(0, first.pos + 1))
          remaining = remaining.slice(first.pos + 1)
          continue
        }
        const closeSingle = remaining.indexOf("*", first.pos + 1)
        if (closeSingle === -1) { parts.push(remaining); break }
        if (first.pos > 0) parts.push(remaining.slice(0, first.pos))
        parts.push(
          <em key={`italic-${inlineKey++}`} className="text-foreground italic">
            {remaining.slice(first.pos + 1, closeSingle)}
          </em>,
        )
        remaining = remaining.slice(closeSingle + 1)
        continue
      }

      if (first.type === "link") {
        const closeBracket = remaining.indexOf("]", first.pos)
        if (closeBracket === -1 || remaining[closeBracket + 1] !== "(") {
          parts.push(remaining.slice(0, first.pos + 1))
          remaining = remaining.slice(first.pos + 1)
          continue
        }
        const openParen = closeBracket + 1
        const closeParen = remaining.indexOf(")", openParen)
        if (closeParen === -1) { parts.push(remaining); break }
        const linkText = remaining.slice(first.pos + 1, closeBracket)
        const url = remaining.slice(openParen + 1, closeParen)
        if (first.pos > 0) parts.push(remaining.slice(0, first.pos))

        const isExternal = url.startsWith("http")
        if (isExternal) {
          parts.push(
            <a key={`link-${inlineKey++}`} href={url}
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>,
          )
        } else {
          parts.push(
            <Link key={`link-${inlineKey++}`} href={url}
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              {linkText}
            </Link>,
          )
        }
        remaining = remaining.slice(closeParen + 1)
        continue
      }

      parts.push(remaining)
      break
    }

    return parts
  }

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim()
      if (text) {
        elements.push(
          <p key={`p-${keyCounter++}`} className="text-muted-foreground mb-4 leading-relaxed">
            {parseInline(text)}
          </p>,
        )
      }
      currentParagraph = []
    }
  }

  const flushList = () => {
    if (currentList) {
      if (currentList.type === "ul") {
        elements.push(
          <ul key={`ul-${keyCounter++}`} className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
            {currentList.items.map((item, i) => (<li key={i}>{parseInline(item)}</li>))}
          </ul>,
        )
      } else {
        elements.push(
          <ol key={`ol-${keyCounter++}`} className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">
            {currentList.items.map((item, i) => (<li key={i}>{parseInline(item)}</li>))}
          </ol>,
        )
      }
      currentList = null
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()

    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph()
      flushList()
      elements.push(
        <h3 key={`h3-${keyCounter++}`} className="text-lg font-medium text-foreground mt-8 mb-4">
          {trimmed.slice(4)}
        </h3>,
      )
      continue
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph()
      if (!currentList || currentList.type !== "ul") {
        flushList()
        currentList = { type: "ul", items: [] }
      }
      currentList.items.push(trimmed.slice(2))
      continue
    }

    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/)
    if (orderedMatch) {
      flushParagraph()
      if (!currentList || currentList.type !== "ol") {
        flushList()
        currentList = { type: "ol", items: [] }
      }
      currentList.items.push(orderedMatch[2])
      continue
    }

    flushList()
    currentParagraph.push(trimmed)
  }

  flushParagraph()
  flushList()

  return elements
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <article className="mx-auto max-w-2xl w-full flex-1">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/"><div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 cursor-pointer">
            <Image src="/avatars/pcbo.jpg" alt="PCBO" fill className="object-cover object-center" /></div></Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Writing</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          </nav>
        </div>

        <h1 className="text-2xl font-medium text-foreground mb-2">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {post.date}
          {post.author === "macgyver" && (
            <span className="ml-2 text-muted-foreground/60">by MacGyver 🫡</span>
          )}
        </p>

        <div className="prose prose-invert prose-sm max-w-none">{parseMarkdown(post.content)}</div>

        <div className="mt-12 pt-8 border-t border-muted">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← All posts
          </Link>
        </div>
      </article>

      <footer className="mx-auto max-w-2xl w-full mt-16 pt-8 border-t border-muted">
        <p className="text-sm text-muted-foreground">
          <a href="https://x.com/pcbo" target="_blank" rel="noopener noreferrer"
            className="hover:text-foreground transition-colors">
            X
          </a>
          {" · "}
          <a href="https://github.com/pcbo" target="_blank" rel="noopener noreferrer"
            className="hover:text-foreground transition-colors">
            GitHub
          </a>
          {" · "}
          <a href="https://talent.app/pcbo" target="_blank" rel="noopener noreferrer"
            className="hover:text-foreground transition-colors">
            Talent
          </a>
          
        </p>
      </footer>
    </main>
  )
}
