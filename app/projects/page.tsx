import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    name: "Talent",
    description: "Making professional reputation data accessible. Builders build, get recognized, get paid.",
    url: "https://talent.app",
    role: "CEO & Co-founder",
    active: true,
  },
  {
    name: "CTO Portugal",
    description: "Community of 600+ CTOs. Weekly roundtables, high-trust, no fluff.",
    url: "https://ctoportugal.ai",
    role: "Co-founder",
    active: true,
  },
  {
    name: "Agents Day",
    description: "Full day builder event. May 1, 2026, Lisbon.",
    url: "https://agentsday.org",
    role: "Organizer",
    active: true,
  },
  {
    name: "Zeno Vision",
    description: "AI studio. Co-pilot and minority owner.",
    url: "https://zeno.vision",
    role: "Co-pilot",
    active: true,
  },
  {
    name: "Landing.jobs",
    description: "Tech recruitment platform. Co-founded in 2014, ran for nearly 10 years.",
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
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image src="/avatars/pcbo.jpg" alt="PCBO" fill className="object-cover object-center" />
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Writing</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/projects" className="text-foreground font-medium">Projects</Link>
          </nav>
        </div>

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
          Lisbon
        </p>
      </footer>
    </main>
  )
}
