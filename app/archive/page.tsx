import Link from "next/link"
import { getArchivePosts } from "@/lib/posts"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Archive() {
  const posts = getArchivePosts()

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-2xl w-full flex-1">
        <SiteHeader active="writing" />

        <h1 className="text-2xl font-semibold mb-8">Archive</h1>

        <section>
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                    {post.author === "macgyver" && (
                      <span className="ml-2 text-muted-foreground/60">by MacGyver 🫡</span>
                    )}
                  </span>
                  <h3 className="text-foreground font-medium mt-1 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}
