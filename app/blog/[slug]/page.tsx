import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
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

        <div className="prose prose-invert prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h3: ({ children }) => <h3 className="text-lg font-medium text-foreground mt-6 mb-4">{children}</h3>,
              p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
              strong: ({ children }) => <strong className="text-foreground font-medium">{children}</strong>,
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">{children}</ol>
              ),
              li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">{children}</code>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <footer className="mx-auto max-w-md w-full mt-16 pt-8 border-t border-muted">
        <p className="text-sm text-muted-foreground">
          Vibe coded from Lisbon by{" "}
          <Link href="https://x.com/pcbo" className="hover:text-foreground transition-colors">
            PCBO
          </Link>
          .
        </p>
      </footer>
    </main>
  )
}
