import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
const projects = [
  {
    name: "Talent Protocol",
    description: "Making builder reputation data actionable.",
    url: "https://talent.app",
    role: "Co-Founder & CEO",
    active: true,
  },
  {
    name: "AntiFogo",
    description: "Wildfire intelligence layer for civil protection, fire brigades and sappers, and other forestry authorities.",
    url: "https://antifogo.pt",
    role: "Co-Founder",
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
    description: "Community of Tech and AI leaders who call Portugal home.",
    url: "https://ctoportugal.ai",
    role: "Community Steward",
    active: true,
  },
  {
    name: "Agents Day",
    description: "Full day builder event. May 1, 2026, Lisbon.",
    url: "https://agentsday.org",
    role: "Organizer",
    active: false,
  },
  {
    name: "Landing.Jobs",
    description: "Tech recruitment platform. Co-founded in 2014, exited in 2020.",
    url: "https://landing.jobs",
    role: "Co-Founder",
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

        <h1 className="text-2xl font-medium text-foreground mb-8">Work</h1>

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
