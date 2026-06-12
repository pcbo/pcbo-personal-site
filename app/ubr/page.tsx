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
    kicker: "Fire perception",
    title: "Drones that can spot smoke and flame from the air.",
    body: "Computer vision experiments for detection, mapping, and faster situational awareness when the first minutes matter.",
    media: "video",
  },
  {
    kicker: "Heavy lift",
    title: "A large drone dropping water over a target zone.",
    body: "Payload delivery as a visible prototype path for wildfire response, field logistics, and other urgent terrain problems.",
    media: "signal",
  },
  {
    kicker: "Aerial + ground robotics",
    title: "A claw system for picking up a tracked robot by drone.",
    body: "A 3D-modeled concept for moving ground robots into places humans should not enter first.",
    media: "model",
  },
]

const audiences = [
  ["Operators", "Bring us ugly field problems where robots could change response time, safety, or reach."],
  ["Customers", "Hire the studio to prototype robotics systems for emergency response, agriculture, infrastructure, or field operations."],
  ["Engineers", "Join if you want to build machines that leave the lab and touch the real world."],
  ["Investors", "Back a Lisbon-based robotics studio turning high-signal experiments into products and companies."],
]

const model = [
  ["01", "Build the impossible-looking demo", "Move fast enough to make the future visible: drones, claws, tracked robots, perception systems, payloads, field tests."],
  ["02", "Find the real job", "Separate spectacle from utility. Talk to responders and operators. Define the problem before worshipping the robot."],
  ["03", "Turn signal into a product", "When something works, scale it as a product, studio business unit, or company-defining bet."],
]

export default function UBRPage() {
  return (
    <main className="min-h-screen bg-[#050607] text-stone-100 selection:bg-orange-500 selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_5%,rgba(255,84,20,0.24),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(0,180,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
      </div>

      <section className="relative min-h-screen overflow-hidden px-5 py-6 md:px-10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen"
          src="/ubr/smoke-fire-detection.mp4"
          poster="/ubr/smoke-fire-detection-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.82)_38%,rgba(5,6,7,0.25)_100%),linear-gradient(180deg,rgba(5,6,7,0)_0%,#050607_94%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-48px)] max-w-7xl flex-col">
          <nav className="flex items-center justify-between text-xs uppercase tracking-[0.34em] text-stone-400">
            <span className="text-stone-100">UBR</span>
            <span>Lisbon robotics studio</span>
          </nav>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm uppercase tracking-[0.36em] text-orange-400">Urban Beach Robotics</p>
              <h1 className="text-6xl font-semibold leading-[0.86] tracking-[-0.075em] md:text-8xl lg:text-[9.5rem]">
                We build robots for the real world.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-300 md:text-2xl md:leading-9">
                AI-powered drones, ground robots, perception systems, and field prototypes for emergency response and hard operational problems.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="mailto:pedro@pcbo.dev?subject=UBR" className="rounded-full bg-orange-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-300">Talk to UBR</a>
                <a href="#proof" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10">See what we are building</a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-6 text-sm text-stone-300 md:grid-cols-3">
            <div className="border-t border-white/20 pt-3">Smoke and fire detection from aerial footage</div>
            <div className="border-t border-white/20 pt-3">Large drone payload experiments</div>
            <div className="border-t border-white/20 pt-3">Ground robot pickup and deployment concepts</div>
          </div>
        </div>
      </section>

      <section id="proof" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">Proof, not pitch</p>
          <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-7xl">The website starts with what moves.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {proof.map((item, index) => (
            <article key={item.title} className="group min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
              <div className="relative h-64 overflow-hidden bg-stone-950">
                {item.media === "video" ? (
                  <video
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    src="/ubr/smoke-fire-detection.mp4"
                    poster="/ubr/smoke-fire-detection-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.22),transparent_34%),linear-gradient(135deg,#121416,#050607)]">
                    <div className="relative h-36 w-56">
                      <div className="absolute left-1/2 top-4 h-1 w-48 -translate-x-1/2 rounded-full bg-stone-500" />
                      <div className="absolute left-1/2 top-1 h-7 w-24 -translate-x-1/2 rounded-full border border-orange-300/60 bg-orange-400/10" />
                      <div className="absolute left-1/2 top-12 h-24 w-px -translate-x-1/2 bg-orange-300/60" />
                      <div className="absolute bottom-0 left-1/2 h-12 w-28 -translate-x-1/2 rounded-xl border border-white/20 bg-white/10" />
                      <div className="absolute bottom-4 left-1/2 h-3 w-40 -translate-x-1/2 rounded-full bg-stone-500/70" />
                    </div>
                  </div>
                )}
                <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-200 backdrop-blur">0{index + 1}</span>
              </div>
              <div className="p-6 md:p-7">
                <p className="mb-4 text-xs uppercase tracking-[0.26em] text-orange-400">{item.kicker}</p>
                <h3 className="mb-4 text-3xl font-semibold leading-none tracking-[-0.045em]">{item.title}</h3>
                <p className="text-base leading-7 text-stone-400">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">Why UBR exists</p>
            <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-6xl">Robotics is leaving sci-fi and entering operations.</h2>
          </div>
          <div className="space-y-6 text-xl leading-9 text-stone-300">
            <p>AI has been trapped on screens. The next jump is physical: machines that see, move, carry, inspect, map, and act in places where human response is slow, dangerous, or impossible.</p>
            <p>UBR is built for that edge. Start with visible prototypes. Test them against real problems. Keep the ones with signal. Turn them into products people can hire, fund, join, or deploy.</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">How we work</p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">A robotics studio for high-signal experiments.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {model.map(([number, title, body]) => (
            <div key={number} className="rounded-[2rem] border border-white/10 bg-[#101214] p-7">
              <p className="mb-16 text-orange-400">{number}</p>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
              <p className="leading-7 text-stone-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 md:px-10">
        <div className="rounded-[2.5rem] border border-orange-300/20 bg-[radial-gradient(circle_at_80%_10%,rgba(255,115,30,0.22),transparent_32%),#111315] p-7 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">Rally point</p>
              <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-6xl">If this gives you ideas, we should talk.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                  <p className="leading-7 text-stone-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:pedro@pcbo.dev?subject=UBR" className="rounded-full bg-stone-100 px-5 py-3 text-sm font-medium text-black transition hover:bg-white">Start a conversation</a>
            <span className="rounded-full border border-white/15 px-5 py-3 text-sm text-stone-300">Lisbon / Europe / field-first robotics</span>
          </div>
        </div>
      </section>
    </main>
  )
}
