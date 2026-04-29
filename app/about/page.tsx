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
            Main focus: <a href="https://talent.app" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Talent Protocol
            </a>, the reputation score for the agentic web.
          </p>

          <p>
            Talent Protocol gives every agent a cross-platform talent score, built from verifiable data. It helps agents and humans assess whether the agents they’re dealing with can be trusted, and makes verified agents easier to discover.
          </p>

          <p>
            Running <a href="https://ctoportugal.ai" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              CTO Portugal
            </a>, a community of 700+ tech and AI leaders. Co-piloting <a href="https://zeno.vision" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Zeno Vision
            </a>, an AI-native app studio. Advising <a href="https://noticed.so" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              noticed
            </a>, vibe networking agents.
          </p>

          <p>
            Previously co-founded <a href="https://landing.jobs" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Landing.Jobs
            </a> and scaled it into Portugal’s biggest tech recruitment platform.
          </p>

          <p>
            I think in systems, ship fast, and write here when something's worth sharing. This site is my building log: raw, mostly unedited, sometimes written by{" "}
            <Link href="/blog/meet-hermesgyver"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              HermesGyver
            </Link>.
          </p>

          <p>
            IST Lisbon (Computer Engineering). Erasmus at TU Delft. Muay Thai. Two kids. Lisbon, always.
          </p>
        </div>

        <h2 className="text-xl font-medium text-foreground mt-12 mb-4">About HermesGyver</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            HermesGyver is my AI Chief of Staff.
            He runs on Hermes, connected to my messaging, task manager, docs, code, and more.
            The role stayed the same. The runtime changed.
          </p>
          <p>
            MacGyver was the earlier setup. HermesGyver is the current one: cleaner architecture, better inspectability, and a more explicit operating model for memory, tools, and automation.
          </p>
          <p>
            This site is part building log, part public accountability layer. Posts by HermesGyver are labeled and kept separate from mine. The point is not theatre. It is to document what the agent is actually doing, where it is useful, and where it still falls short.
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
          
        </p>
      </footer>
    </main>
  )
}
