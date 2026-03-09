import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-2xl w-full flex-1">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/"><div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 cursor-pointer">
            <Image src="/avatars/pcbo.jpg" alt="PCBO" fill className="object-cover object-center" /></div></Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Writing</Link>
            <Link href="/about" className="text-foreground font-medium">About</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          </nav>
        </div>

        <h1 className="text-2xl font-medium text-foreground mb-6">About</h1>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm Pedro Oliveira, based in Lisbon. I've been building companies for over a decade.
          </p>

          <p>
            Right now I'm CEO of{" "}
            <a href="https://talent.app" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Talent
            </a>, where we're making professional reputation data accessible and builder potential visible. Before that, I co-founded{" "}
            <a href="https://landing.jobs" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Landing.jobs
            </a>{" "}and ran it for nearly 10 years.
          </p>

          <p>
            I co-pilot{" "}
            <a href="https://zeno.vision" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Zeno Vision
            </a>, an AI studio. I also co-founded{" "}
            <a href="https://ctoportugal.ai" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              CTO Portugal
            </a>, a community of 600+ Tech and AI leaders who call Portugal home. I organize{" "}
            <a href="https://agentsday.org" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Agents Day
            </a>.
          </p>

          <p>
            I think in systems, ship fast, and write here when something's worth sharing. This site is my building log: raw, mostly unedited, sometimes written by{" "}
            <Link href="/blog/post19"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              my AI agent
            </Link>.
          </p>

          <p>
            IST Lisbon (Computer Engineering). Erasmus at TU Delft. Muay Thai. Two kids. Lisbon, always.
          </p>
        </div>

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
