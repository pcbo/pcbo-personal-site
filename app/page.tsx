"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const avatars = [
  "/avatars/cults.png",
  "/avatars/pug2.png",
  "/avatars/base-babe.png",
  "/avatars/pug.png",
  "/avatars/alliance.webp",
]

const posts = [
  { title: "Shipping in Silence", date: "May 5, 2025", slug: "log17" },
  { title: "Out of the Black Hole", date: "April 10, 2025", slug: "log16" },
  { title: "Soft-working...", date: "July 29, 2024", slug: "log15" },
  { title: "BUILDathon Report – Day 3", date: "July 1, 2024", slug: "log14" },
  { title: "BUILDathon Report – Day 2", date: "June 29, 2024", slug: "log13" },
  { title: "BUILDathon Report – Day 1", date: "June 28, 2024", slug: "log12" },
  { title: "Planning BUILDathon", date: "June 26, 2024", slug: "log11" },
  { title: "Providing Feedback to Fellow Builders", date: "June 21, 2024", slug: "log10" },
  { title: "Git Branches and PR Workflow", date: "June 19, 2024", slug: "log9" },
  { title: "Summer Builders NFT Collection: Post-Mortem", date: "June 8, 2024", slug: "log8" },
  { title: "CSS Cache Busting and Git Renaming Issue", date: "June 5, 2024", slug: "log7" },
  { title: "Summer Builders NFT Collection", date: "June 4, 2024", slug: "log6" },
  { title: "VSCode and Buildathon Prep", date: "June 3, 2024", slug: "log5" },
  { title: "Adding Image Assets", date: "May 30, 2024", slug: "log4" },
  { title: "First Commit to Talent Protocol Org", date: "May 29, 2024", slug: "log3" },
  { title: "Working with an AI Coding Assistant", date: "May 28, 2024", slug: "log2" },
  { title: "Setting Up Coding Blog on Vercel", date: "May 27, 2024", slug: "log1" },
]

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const [avatar, setAvatar] = useState(avatars[0])

  useEffect(() => {
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)]
    setAvatar(randomAvatar)
  }, [])

  const visiblePosts = showAll ? posts : posts.slice(0, 4)

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-md flex-1">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mb-6">
          <Image src={avatar || "/placeholder.svg"} alt="PCBO" fill className="object-cover object-center blur-[1px]" />
        </div>

        <p className="text-foreground leading-relaxed mb-6">
          Hi, welcome to my micro-blog where I share short writings on things I ship and thoughts I have.
        </p>

        <p className="text-foreground leading-relaxed mb-6">
          About me: I'm building{" "}
          <Link
            href="https://talent.app"
            className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Talent
          </Link>{" "}
          where 𝛼 builders get recognized for their contributions. Follow me on{" "}
          <Link
            href="https://x.com/pcbo"
            className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            X
          </Link>
          .
        </p>

        <section>
          <ul className="space-y-6">
            {visiblePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <h3 className="text-foreground font-medium mt-1 group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-block mt-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              Show all
            </button>
          )}
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
