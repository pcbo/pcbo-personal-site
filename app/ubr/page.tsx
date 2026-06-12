import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UBR | Urban Beach Robotics",
  description:
    "A Lisbon-based robotics studio exploring AI-powered products for emergency response.",
}

const operatingModel = [
  ["01", "Explore", "Build fast prototypes around promising robotics use cases. Use demos, field feedback, and technical experiments to find what is real."],
  ["02", "Validate", "When a prototype gets a strong signal, sharpen the user, problem, operating environment, and evidence needed for deployment."],
  ["03", "Scale", "If a product works, scale it through the structure that fits: spin-out, business unit, or a company-defining bet."],
]

const prototypeSignals = [
  "A large drone prototype capable of dropping 100L of water.",
  "A tracked ground robot concept for rough terrain and aerial-system interaction.",
  "Early robotics experiments across agriculture, emergency response, and field operations.",
]

const startingPoints = [
  "Wildfires: detection, mapping, payload delivery, retardant support, field data capture, and operational support for responders.",
  "Flooding: monitoring, rescue support, logistics, mapping, access, and situational awareness.",
  "Other crisis scenarios where robots can help humans act faster, safer, or with better information.",
]

export default function UBRPage() {
  return (
    <main className="min-h-screen bg-[#080a0b] text-[#f3efe7] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(255,110,40,0.20),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <nav className="flex items-center justify-between text-xs tracking-[0.28em] uppercase text-[#9b958b]">
          <span>UBR</span>
          <span>Lisbon / Europe</span>
        </nav>

        <section className="min-h-[78vh] flex flex-col justify-center py-20">
          <p className="mb-5 text-sm tracking-[0.34em] uppercase text-[#ff8a3d]">Urban Beach Robotics</p>
          <h1 className="max-w-5xl text-5xl font-medium tracking-[-0.06em] leading-[0.92] md:text-8xl">
            Robotics for emergency response.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#b8b1a7] md:text-xl">
            UBR is a Lisbon-based robotics studio exploring how AI-powered machines can help humans act faster, safer, and with better information in urgent real-world situations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-[#d8d0c4]">
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2">AI + robotics</span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2">Field-tested prototypes</span>
            <span className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2">Emergency response</span>
          </div>
        </section>

        <section className="grid gap-10 border-y border-white/10 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#ff8a3d]">Why now</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">AI is moving from screens into the physical world.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#b8b1a7]">
            <p>The next 10-20 years will be shaped by AI, robotics, and their collision with real-world operations.</p>
            <p>Robotics is where software, hardware, perception, autonomy, and messy physical environments meet. UBR exists to build and test products in that space fast enough to learn, and seriously enough to scale when the signal is real.</p>
          </div>
        </section>

        <section className="grid gap-5 py-16 md:grid-cols-3">
          {operatingModel.map(([label, title, body]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="mb-12 text-sm text-[#ff8a3d]">{label}</p>
              <h3 className="mb-4 text-2xl font-medium">{title}</h3>
              <p className="leading-7 text-[#b8b1a7]">{body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 py-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#111417] p-7 md:p-9">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#ff8a3d]">Prototype signal</p>
            <h2 className="mb-6 text-3xl font-medium tracking-[-0.03em]">Already in the workshop.</h2>
            <ul className="space-y-4 text-[#b8b1a7]">
              {prototypeSignals.map((item) => <li key={item} className="border-t border-white/10 pt-4">{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111417] p-7 md:p-9">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#ff8a3d]">Starting points</p>
            <h2 className="mb-6 text-3xl font-medium tracking-[-0.03em]">Emergency response as the first wedge.</h2>
            <ul className="space-y-4 text-[#b8b1a7]">
              {startingPoints.map((item) => <li key={item} className="border-t border-white/10 pt-4">{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#ff8a3d]">Attention as a strategic asset</p>
            <h2 className="mb-6 text-3xl font-medium tracking-[-0.03em] md:text-5xl">A working prototype can communicate more than a deck.</h2>
            <div className="space-y-5 text-lg leading-8 text-[#b8b1a7]">
              <p>Robotics is unusually visual. UBR should treat demos, field footage, and public storytelling as part of the product development loop, not marketing added at the end.</p>
              <p>The goal is to make the future tangible early, attracting the right operators, engineers, partners, and funders by showing what is possible in the field.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-12 text-[#b8b1a7]">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#ff8a3d]">Near-term goal</p>
          <p className="max-w-4xl text-3xl leading-tight tracking-[-0.03em] text-[#f3efe7] md:text-5xl">
            Get to a small founding group, a clear first problem shortlist, and one or two prototype paths that can be tested in the real world quickly.
          </p>
        </section>
      </div>
    </main>
  )
}
