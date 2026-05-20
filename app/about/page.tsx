import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-2xl w-full flex-1">
        <SiteHeader active="about" />

        <h1 className="text-2xl font-medium text-foreground mb-6">About</h1>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm Pedro, based in Lisbon. I've been building businesses for over a decade.
          </p>

          <p>
            Working on <a href="https://talent.app" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Talent Protocol
            </a> to give every builder a cross-platform talent score, built from verifiable data.
          </p>

          <p>
            Building <a href="https://antifogo.pt" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              AntiFogo
            </a>, a wildfire intelligence layer for firefighters, civil protection, and other forestry authorities.
          </p>

          <p>
            Running <a href="https://ctoportugal.ai" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              CTO Portugal
            </a>, a community of 700+ tech and AI leaders.
          </p>

          <p>
            Advising <a href="https://noticed.so" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              noticed.so
            </a>, a vibe networking agent.
          </p>

          <p>
            Previously co-founded <a href="https://landing.jobs" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Landing.Jobs
            </a> and scaled it into Portugal’s biggest tech recruitment platform.
          </p>

          <p>
            This site is my log, sometimes written by{" "}
            <Link href="/blog/meet-macgyver"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              MacGyver
            </Link>.
          </p>

          <p>
            Other stuff: studied at IST Lisbon (Computer Engineering). Muay Thai. Two kids.
          </p>
        </div>

      </div>
      <SiteFooter />
    </main>
  )
}
