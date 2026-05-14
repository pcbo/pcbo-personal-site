import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const projects = [
  {
    name: "Talent",
    description: "Making professional reputation data accessible. Builders build, get recognized, get paid.",
    url: "https://talent.app",
    role: "CEO & Co-founder",
    active: true,
  },
  {
    name: "Zeno Vision",
    description: "AI studio building applied intelligence products. AntiFogo is the breakout project: a rural fire intelligence layer for Civil Protection, fire brigades, sappers, and forestry authorities.",
    url: "https://zeno.vision",
    role: "Co-pilot & minority owner",
    active: true,
  },
  {
    name: "AntiFogo",
    description: "Rural fire intelligence for Portugal, built by Zeno Vision.",
    url: "https://antifogo.pt",
    role: "Breakout project from Zeno Vision",
    active: true,
    featured: true,
  },
  {
    name: "noticed",
    description: "Context and relationship intelligence for founders and operators.",
    url: "https://noticed.so",
    role: "Advisor",
    active: true,
  },
  {
    name: "CTO Portugal",
    description: "Community of 600+ Tech and AI leaders who call Portugal home.",
    url: "https://ctoportugal.ai",
    role: "Co-founder",
    active: true,
  },
  {
    name: "Agents Day",
    description: "Full day builder event. May 1, 2026, Lisbon.",
    url: "https://agentsday.org",
    role: "Organizer (past)",
    active: false,
  },
  {
    name: "Landing.jobs",
    description: "Tech recruitment platform. Co-founded in 2014, exited in 2020.",
    url: "https://landing.jobs",
    role: "Co-founder (past)",
    active: false,
  },
]

export default function ProjectsPage() {
  const active = projects.filter((p) => p.active)
  const past = projects.filter((p) => !p.active)

  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-2xl w-full flex-1">
        <SiteHeader active="projects" />

        <h1 className="text-2xl font-medium text-foreground mb-8">Projects</h1>

        <section className="mb-12">
          <ul className="space-y-6">
            {active.map((project) => (
              <li key={project.name}>
                <div className="group">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                        {project.name}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-foreground font-medium">{project.name}</h3>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{project.role}</p>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {past.length > 0 && (
          <section>
            <h2 className="text-foreground font-medium mb-6">Past</h2>
            <ul className="space-y-6">
              {past.map((project) => (
                <li key={project.name}>
                  <div className="group">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                          {project.name}
                        </h3>
                      </a>
                    ) : (
                      <h3 className="text-foreground font-medium">{project.name}</h3>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{project.role}</p>
                    <p className="text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <SiteFooter />
    </main>
  )
}
