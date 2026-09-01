const links = [
  { label: "Archive", href: "/archive", external: false },
  { label: "X", href: "https://x.com/pcbo", external: true },
  { label: "GitHub", href: "https://github.com/pcbo", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pcboliveira", external: true },
]

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-2xl w-full mt-16 pt-8 border-t border-muted">
      <p className="text-sm text-muted-foreground">
        {links.map((link, index) => (
          <span key={link.href}>
            {index > 0 && " · "}
            <a 
              href={link.href} 
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })} 
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
    </footer>
  )
}
