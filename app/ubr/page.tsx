import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "UBR | Urban Beach Robotics",
  description:
    "A Lisbon-based robotics studio exploring AI-powered products for emergency response.",
}

const operatingModel = [
  {
    label: "01",
    title: "Explore",
    body: "Build fast prototypes around promising robotics use cases. Use demos, field feedback, and technical experiments to find what is real.",
  },
  {
    label: "02",
    title: "Validate",
    body: "When a prototype gets a strong signal, sharpen the user, problem, operating environment, and evidence needed for deployment.",
  },
  {
    label: "03",
    title: "Scale",
    body: "If a product works, scale it through the structure that fits: spin-out, business unit, or a company-defining bet.",
  },
]

const startingPoints = [
  "Wildfires: detection, mapping, payload delivery, retardant support, field data capture, and operational support for responders.",
  "Flooding: monitoring, rescue support, logistics, mapping, access, and situational awareness.",
  "Other crisis scenarios where robotics can help humans act faster, safer, or with better information.",
]

const openQuestions = [
  "Founding team and roles",
  "Governance and company structure",
  "First product path",
  "Fundraising approach for hardware, field testing, grants, partnerships, and non-dilutive capital",
]

export default function UBRPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:py-24 flex flex-col">
      <div className="mx-auto max-w-4xl w-full flex-1">
        <SiteHeader />

        <section className="border border-border/80 bg-card/30 rounded-3xl p-6 md:p-10 mb-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.10),transparent_30%)]" />
          <div className="relative">
            <p className="text-xs tracking-[0.35em] uppercase text-primary mb-6">Urban Beach Robotics</p>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground max-w-3xl">
              Robotics for emergency response.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              UBR is a Lisbon-based robotics studio exploring how AI-powered machines can help humans act faster, safer, and with better information in urgent real-world situations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="border border-border rounded-full px-4 py-2">Lisbon / Europe</span>
              <span className="border border-border rounded-full px-4 py-2">AI + robotics</span>
              <span className="border border-border rounded-full px-4 py-2">Field-tested prototypes</span>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 mb-14">
          <div>
            <p className="text-sm text-primary mb-3">Why now</p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground">AI is moving from screens into the physical world.</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The next 10-20 years will be shaped by AI, robotics, and their collision with real-world operations. Robotics is where software, hardware, perception, autonomy, and messy physical environments meet.
            </p>
            <p>
              UBR exists to build and test products in that space, with enough speed to learn fast and enough discipline to turn the right signals into real companies or business units.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <p className="text-sm text-primary mb-3">Initial mission</p>
          <div className="border-l border-primary pl-6 py-2">
            <p className="text-2xl md:text-4xl leading-tight text-foreground">
              Build AI-powered robotics products for emergency response.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
              The first wedge is broad: wildfires, flooding, and other high-urgency situations where robots can help humans act faster, safer, or with better information.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-primary mb-3">Operating model</p>
              <h2 className="text-2xl font-medium text-foreground">Studio first, product focus when the signal is real.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {operatingModel.map((item) => (
              <div key={item.label} className="border border-border rounded-2xl p-5 bg-card/20">
                <p className="text-sm text-primary mb-8">{item.label}</p>
                <h3 className="text-xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-primary mb-3">Starting points</p>
            <h2 className="text-2xl font-medium text-foreground mb-5">Emergency response is the narrative and testing ground.</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              {startingPoints.map((item) => (
                <li key={item} className="border-t border-border pt-4">{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border rounded-3xl p-6 bg-card/20">
            <p className="text-sm text-primary mb-3">Wildfire note</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The wildfire path is promising, but the exact problem should come before the robot. Early detection, active response, containment, payload delivery, and ground access are different products with different hardware, users, risks, and buyers.
            </p>
            <p className="text-foreground leading-relaxed">
              The useful question is not “which robot should we build?” It is “which emergency-response job can robotics do materially better than the current approach?”
            </p>
          </div>
        </section>

        <section className="mb-14 border border-border rounded-3xl p-6 md:p-8 bg-card/20">
          <p className="text-sm text-primary mb-3">Attention as a strategic asset</p>
          <h2 className="text-2xl font-medium text-foreground mb-4">Robotics is unusually visual.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              A working prototype can communicate more than a deck. UBR should treat demos, field footage, and public storytelling as part of the product development loop, not marketing added at the end.
            </p>
            <p>
              The goal is to make the future tangible early, attracting the right operators, engineers, partners, and funders by showing what is possible in the field.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-primary mb-3">Initial people</p>
            <ul className="space-y-3 text-muted-foreground">
              <li>Pedro Oliveira</li>
              <li>Filipe Martins</li>
              <li>João Coutinho, to be decided</li>
              <li>Francisco Leal may also be involved because of his hardware background</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-primary mb-3">Open decisions</p>
            <ul className="space-y-3 text-muted-foreground">
              {openQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="text-sm text-primary mb-3">Near-term goal</p>
          <p className="text-2xl md:text-3xl leading-tight text-foreground max-w-3xl">
            Get to a small founding group, a clear first problem shortlist, and one or two prototype paths that can be tested in the real world quickly.
          </p>
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}
