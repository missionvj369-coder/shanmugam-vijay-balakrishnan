import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Shanmugam Vijay Balakrishnan — Creator, Founder, Systems Builder. Building community economies, intelligent technologies, and civilizational systems.",
  openGraph: {
    title: "About — Shanmugam Vijay Balakrishnan",
    description: "Creator • Founder • Systems Builder • Civilization Architect",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="about-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">ABOUT</p>
              <h1 id="about-heading" className="heading-xl font-light text-foreground mb-6">
                Shanmugam Vijay Balakrishnan
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Creator • Founder • Systems Builder • Civilization Architect
              </p>
            </div>
          </div>
        </section>

        {/* Core Statement */}
        <section className="section-padding" aria-labelledby="core-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="core-heading" className="sr-only">Core Statement</h2>
              <div className="prose-content text-center mb-16">
                <p className="heading-md font-light text-foreground mb-6">
                  "Building community economies, intelligent technologies and civilizational systems for a flourishing future."
                </p>
                <p className="body-lg text-muted-foreground">
                  The through-line connecting every project, system, and community.
                </p>
              </div>

              {/* Identity & Roles */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {[
                  { title: "CREATOR", description: "Ideas → Systems → Reality." },
                  { title: "FOUNDER", description: "Boysenberry, UGT, Zentium, Kingdom of Shiva, Creator Community." },
                  { title: "SYSTEMS BUILDER", description: "Architecture that scales. Community economies. Intelligent platforms." },
                  { title: "CIVILIZATION ARCHITECT", description: "Heaven on Earth. Kingdom of Shiva. Integrated Intelligence." },
                ].map((role) => (
                  <div key={role.title} className="card-base text-center">
                    <h3 className="caption text-primary font-medium mb-3">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                ))}
              </div>

              {/* The Loop */}
              <div className="card-base p-8 md:p-12">
                <h3 className="caption text-primary mb-6 text-center">THE CREATION LOOP</h3>
                <div className="grid gap-6 md:grid-cols-7">
                  {[
                    "IDEA",
                    "SYSTEM",
                    "CREATION",
                    "COMMUNITY",
                    "IMPLEMENTATION",
                    "LEARNING",
                    "FUTURE",
                  ].map((step, i) => (
                    <div key={step} className="text-center group relative">
                      <div className="w-16 h-16 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                        <span className="text-2xl font-light text-foreground">{i + 1}</span>
                      </div>
                      <h4 className="font-medium text-foreground mb-2">{step}</h4>
                      <p className="text-sm text-muted-foreground">
                        {[
                          "See the possibility",
                          "Design the architecture",
                          "Build the prototype",
                          "Gather the people",
                          "Deploy at scale",
                          "Measure and adapt",
                          "Begin again",
                        ][i]}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-8">
                  This loop repeats at every scale — from a single feature to a civilizational system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Entity Relationships */}
        <section className="section-padding bg-muted/30" aria-labelledby="entities-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="entities-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Entity Relationships
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Clear separation between legal identities. The website explains relationships without merging them.
              </p>

              <div className="space-y-6">
                {[
                  {
                    entity: "Boysenberry Marketing Private Limited",
                    role: "Founder",
                    type: "Private Limited Company (India)",
                    description: "Community-centered economic model.",
                    status: "BUILDING",
                    href: "/boysenberry",
                  },
                  {
                    entity: "Universal Guard Trust",
                    role: "Founder",
                    type: "Global Trust / Framework",
                    description: "Open architecture for civilizational learning.",
                    status: "OPERATING",
                    href: "/universal-guard-trust",
                  },
                  {
                    entity: "UGT India",
                    role: "Founder",
                    type: "Indian Entity under UGT",
                    description: "Local implementation of UGT framework.",
                    status: "BUILDING",
                    href: "/universal-guard-trust",
                  },
                  {
                    entity: "Creator Community",
                    role: "Creator / Builder",
                    type: "Open Execution Layer",
                    description: "Execution layer for civilizational creation.",
                    status: "BUILDING",
                    href: "/creator-community",
                  },
                  {
                    entity: "Kingdom of Shiva",
                    role: "Creator",
                    type: "Knowledge Civilization Initiative",
                    description: "Virtual civilization of Hindu knowledge and living traditions.",
                    status: "BUILDING",
                    href: "/kingdom-of-shiva",
                  },
                  {
                    entity: "Zentium",
                    role: "Creator",
                    type: "Decentralized Blockchain Project",
                    description: "Decentralized project infrastructure and community value.",
                    status: "BUILDING",
                    href: "/zentium",
                  },
                  {
                    entity: "Technology / Creative Systems",
                    role: "Builder",
                    type: "Personal R&D / Open Source",
                    description: "AI, VR, Web, Metaverse, Creative Technology.",
                    status: "BUILDING",
                    href: "/technology",
                  },
                ].map((item) => (
                  <Link
                    key={item.entity}
                    href={item.href}
                    className="card-interactive group flex flex-col md:flex-row md:items-center gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.entity}</h3>
                        <span className={`status-badge ${item.status === "OPERATING" ? "status-operating" : "status-building"}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                      <p className="text-sm text-muted-foreground">Role: {item.role}</p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Don't Do */}
        <section className="section-padding" aria-labelledby="not-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="not-heading" className="heading-lg font-light text-foreground mb-6">
                What This Is Not
              </h2>
              <div className="space-y-3 text-left text-sm text-muted-foreground">
                <p>❌ A conventional résumé or corporate founder page</p>
                <p>❌ A motivational-influencer personal brand</p>
                <p>❌ A single merged organization claiming all projects</p>
                <p>❌ Financial promises or investment advice</p>
                <p>❌ Completed solutions to civilization-scale problems</p>
                <p>❌ Static portfolio — this is a living map of ongoing work</p>
              </div>
              <p className="body-lg text-muted-foreground mt-8">
                The work speaks. The systems demonstrate. The communities validate.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                Explore Further
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/ideas" className="btn-outline">
                  Read the Principles
                </Link>
                <Link href="/how-i-think" className="btn-secondary">
                  Understand the Methodology
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}