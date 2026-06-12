import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "UBR | Urban Beach Robotics",
  },
  description:
    "A Lisbon robotics studio building AI-powered machines for emergency response and hard real-world operations.",
  openGraph: {
    title: "UBR | Urban Beach Robotics",
    description:
      "A Lisbon robotics studio building AI-powered machines for emergency response and hard real-world operations.",
    url: "https://pcbo.dev/ubr",
    siteName: "UBR",
    images: ["/ubr/smoke-fire-detection-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UBR | Urban Beach Robotics",
    description:
      "A Lisbon robotics studio building AI-powered machines for emergency response and hard real-world operations.",
    images: ["/ubr/smoke-fire-detection-poster.jpg"],
  },
}

const proof = [
  {
    label: "01 / Payload robotics",
    title: "A heavy drone dropping water where humans cannot move fast enough.",
    body: "A visible, immediate demo of robotics helping in emergency response: payloads delivered from the air when terrain and speed matter.",
  },
  {
    label: "02 / Fire perception",
    title: "Aerial systems that can identify smoke and fire from the air.",
    body: "Computer vision experiments for detection, mapping, and faster situational awareness when the first minutes matter.",
  },
  {
    label: "03 / Field robotics",
    title: "Ground and aerial systems designed to work together in hard terrain.",
    body: "The point is not a claw. The point is deploying machines into places that are dangerous, remote, or too slow for humans to reach first.",
  },
]

const invite = [
  ["Have a field problem?", "Bring the messy operational reality. We will turn it into a prototype path."],
  ["Need robotics built?", "UBR can help explore, design, and test machines for emergency response and hard terrain."],
  ["Want to build?", "We want engineers and operators who care about machines that actually leave the lab."],
]

export default function UBRPage() {
  return (
    <main className="min-h-screen bg-[#030404] text-[#f8f3ea] selection:bg-orange-400 selection:text-black">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,92,24,0.25),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(0,153,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0)_42%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <section className="relative min-h-screen px-5 py-6 md:px-10">
        <div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl flex-col">
          <nav className="z-10 flex items-center justify-between text-xs uppercase tracking-[0.34em] text-stone-400">
            <span className="font-semibold text-stone-100">UBR</span>
            <span>Urban Beach Robotics</span>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-10">
              <p className="mb-5 text-sm uppercase tracking-[0.36em] text-orange-400">Lisbon robotics studio</p>
              <h1 className="max-w-4xl text-6xl font-semibold leading-[0.84] tracking-[-0.08em] md:text-8xl xl:text-[10rem]">
                Robots for the first hour.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-300 md:text-2xl md:leading-9">
                UBR builds AI-powered machines for the moments when response time, terrain, and human safety collide.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="mailto:pedro@pcbo.dev?subject=UBR" className="rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-300">Talk to UBR</a>
                <a href="#proof" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/10">See the prototypes</a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-orange-300/30 bg-[#0c0e10] shadow-2xl shadow-orange-950/30">
                <div className="absolute left-5 top-5 z-20 rounded-full border border-orange-300/30 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.22em] text-orange-200 backdrop-blur">Hero asset</div>
                <div className="relative aspect-[4/5] min-h-[540px] overflow-hidden bg-[radial-gradient(circle_at_50%_18%,rgba(255,142,55,0.30),transparent_22%),linear-gradient(180deg,#151719,#050607)]">
                  <div className="absolute inset-x-10 top-20 h-28 rounded-full border border-white/15 bg-white/[0.03] blur-[1px]" />
                  <div className="absolute left-1/2 top-24 h-2 w-72 -translate-x-1/2 rounded-full bg-stone-200/80 shadow-[0_0_70px_rgba(255,255,255,0.35)]" />
                  <div className="absolute left-1/2 top-16 h-20 w-36 -translate-x-1/2 rounded-[2rem] border border-orange-200/40 bg-orange-400/15 shadow-[0_0_90px_rgba(255,120,40,0.35)]" />
                  <div className="absolute left-1/2 top-36 h-56 w-px -translate-x-1/2 bg-gradient-to-b from-orange-200/80 to-transparent" />
                  <div className="absolute bottom-24 left-1/2 h-56 w-40 -translate-x-1/2 rounded-b-[3rem] bg-gradient-to-b from-sky-200/85 via-sky-300/35 to-transparent blur-sm" />
                  <div className="absolute bottom-16 left-1/2 h-24 w-72 -translate-x-1/2 rounded-[100%] bg-sky-200/20 blur-2xl" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050607] to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="mb-3 text-xs uppercase tracking-[0.28em] text-orange-300">Payload response</p>
                    <h2 className="text-4xl font-semibold leading-none tracking-[-0.055em] md:text-5xl">Machines that move before the fire spreads.</h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-stone-300">Drones, perception, and field robotics built around the first hour of emergency response.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-6 text-sm text-stone-300 md:grid-cols-3">
            <div className="border-t border-white/20 pt-3">Water-drop drone as the emotional proof</div>
            <div className="border-t border-white/20 pt-3">Smoke/fire detection as the intelligence layer</div>
            <div className="border-t border-white/20 pt-3">Field robotics as the studio platform</div>
          </div>
        </div>
      </section>

      <section id="proof" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">What people should feel</p>
          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-8xl">
            Wait. These people can actually build this.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.85fr]">
          <article className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035]">
            <div className="relative aspect-video overflow-hidden bg-stone-950">
              <video
                className="h-full w-full object-cover opacity-95"
                src="/ubr/smoke-fire-detection.mp4"
                poster="/ubr/smoke-fire-detection-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-orange-300">Live media available</p>
                <h3 className="text-3xl font-semibold tracking-[-0.045em] md:text-5xl">Drone vision for smoke and fire.</h3>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {proof.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-[#101214] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-orange-400">{item.label}</p>
                <h3 className="mb-4 text-2xl font-semibold leading-none tracking-[-0.04em]">{item.title}</h3>
                <p className="leading-7 text-stone-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">The thesis</p>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-7xl">Robotics becomes obvious when people see it move.</h2>
          </div>
          <div className="space-y-6 text-xl leading-9 text-stone-300">
            <p>The best UBR story is not a paragraph. It is a machine lifting, seeing, flying, dropping, mapping, carrying, and working in a place where people need help now.</p>
            <p>That is why the website should behave like a live demo reel: enough words to frame the ambition, but the emotional proof comes from the prototypes.</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="rounded-[2.5rem] border border-orange-300/20 bg-[radial-gradient(circle_at_80%_10%,rgba(255,115,30,0.22),transparent_32%),#111315] p-7 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">Rally point</p>
              <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-7xl">Bring us the impossible field problem.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {invite.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                  <p className="leading-7 text-stone-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:pedro@pcbo.dev?subject=UBR" className="rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white">Start a conversation</a>
            <span className="rounded-full border border-white/15 px-5 py-3 text-sm text-stone-300">Lisbon / emergency response / field robotics</span>
          </div>
        </div>
      </section>
    </main>
  )
}
