import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    title: "Shipping in Silence",
    description: "Catching up after a quiet but productive...",
    date: "May 5, 2025",
    slug: "log17",
  },
  {
    title: "Out of the Black Hole",
    description: "What happened since last Summer",
    date: "April 10, 2025",
    slug: "log16",
  },
  {
    title: "Soft-working...",
    description: "Shipping quietly matters too",
    date: "July 29, 2024",
    slug: "log15",
  },
  {
    title: "BUILDathon Report – Day 3",
    description: "GETFIT is a reality",
    date: "July 1, 2024",
    slug: "log14",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-md flex-1">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mb-6">
          <Image src="/avatar.jpg" alt="PCBO" fill className="object-cover object-top blur-[1px]" />
        </div>

        <p className="text-foreground leading-relaxed mb-6">
          Hi, welcome to my micro-blog. I'm building{" "}
          <Link
            href="https://talent.app"
            className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Talent
          </Link>{" "}
          where 𝛼 builders get recognized for their contributions.
        </p>

        <section>
          <p className="text-foreground mb-6">Short writings on things I ship and thoughts I have.</p>
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
          <Link
            href="/blog"
            className="inline-block mt-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Show all posts
          </Link>
        </section>
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
