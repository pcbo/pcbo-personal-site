import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-md flex-1">
        <h1 className="text-2xl font-medium text-foreground mb-8">All Posts</h1>

        <Link href="/" className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors">
          ← Back home
        </Link>

        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <h3 className="text-foreground font-medium mt-1 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-1">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
