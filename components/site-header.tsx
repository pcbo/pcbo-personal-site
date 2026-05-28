import Link from "next/link"
import Image from "next/image"

type ActivePage = "writing" | "about" | "work" | null

export function SiteHeader({ active = null }: { active?: ActivePage }) {
  const linkClass = (page: Exclude<ActivePage, null>) =>
    active === page
      ? "text-foreground font-medium"
      : "hover:text-foreground transition-colors"

  return (
    <div className="flex items-center gap-4 mb-8">
      <Link href="/">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 cursor-pointer">
          <Image src="/avatars/pcbo.jpg" alt="PCBO" fill className="object-cover object-center" />
        </div>
      </Link>
      <nav className="flex gap-4 text-sm text-muted-foreground">
        <Link href="/" className={linkClass("writing")}>Writing</Link>
        <Link href="/about" className={linkClass("about")}>About</Link>
        <Link href="/work" className={linkClass("work")}>Work</Link>
      </nav>
    </div>
  )
}
