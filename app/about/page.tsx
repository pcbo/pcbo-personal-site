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
            I'm Pedro, based in Lisbon.
          </p>

          <p>
            Building <a href="https://ubrobotics.ai/" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              UB Robotics
            </a> – UGV Intelligence.
          </p>

          <p>
            Previously co-founded <a href="https://talentprotocol.com" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Talent Protocol
            </a> and <a href="https://paragraph.com/@talent/talent-protocol-5-years-building-for-builders" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              exited in 2026
            </a>.
          </p>

          <p>
            Previously co-founded <a href="https://landing.jobs" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              Landing.Jobs
            </a> and <a href="https://eco.sapo.pt/2025/04/02/e-um-exit-damia-group-compra-recrutadora-tech-landing-jobs/" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              exited in 2025
            </a>.
          </p>

          <p>
            Running <a href="https://ctoportugal.ai" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
              CTO Portugal
            </a>, a community of 700+ tech and AI leaders.
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
