import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/posts"

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-2xl w-full flex-1">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/"><div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 cursor-pointer">
            <Image src="/avatars/pcbo.jpg" alt="PCBO" fill className="object-cover object-center" /></div></Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="text-foreground font-medium">Writing</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          </nav>
        </div>

        <p className="text-foreground leading-relaxed mb-4">
          I'm Pedro. I build things around talent and reputation. Lisbon.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          Some posts by{" "}
          <Link href="/blog/my-ai-agent-wrote-this"
            className="underline underline-offset-4 hover:text-foreground transition-colors">
            MacGyver
          </Link>, my AI chief of staff in training.
        </p>

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
          {" · "}
          Lisbon
        </p>
      </footer>
    </main>
  )
}
