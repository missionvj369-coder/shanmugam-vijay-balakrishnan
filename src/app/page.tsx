import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WorkMap } from "@/components/WorkMap";

export const metadata: Metadata = {
  title: "Shanmugam Vijay Balakrishnan — Creator • Founder • Systems Builder • Civilization Architect",
  description: "Building community economies, intelligent technologies and civilizational systems for a flourishing future. Personal identity hub connecting Boysenberry, Universal Guard Trust, Kingdom of Shiva, Zentium, Creator Community, and technology initiatives.",
  openGraph: {
    title: "Shanmugam Vijay Balakrishnan — Creator • Founder • Systems Builder • Civilization Architect",
    description: "Building community economies, intelligent technologies and civilizational systems for a flourishing future.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 flex flex-col" id="main-content">
        {/* Hero Section */}
        <section className="relative flex-1 flex items-center justify-center pt-16 pb-20 lg:pt-32 lg:pb-40 overflow-hidden" aria-labelledby="hero-heading">
          {/* Background atmospheric elements */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#22c55e" }} />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#3b82f6" }} />
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#8b5cf6" }} />
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="max-w-5xl mx-auto text-center">
              {/* Opening Statement */}
              <div className="animate-fade-in mb-12">
                <p className="caption text-primary/70 mb-6 tracking-widest">THE PHILOSOPHY</p>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  <p className="heading-xl font-light text-foreground leading-tight text-balance">
                    A PERSON CAN HAVE AN IDEA.
                  </p>
                  <p className="heading-xl font-light text-foreground leading-tight text-balance">
                    A CREATOR CAN TURN IT INTO A SYSTEM.
                  </p>
                  <p className="heading-xl font-light text-primary leading-tight text-balance">
                    A COMMUNITY CAN TURN THE SYSTEM INTO REALITY.
                  </p>
                </div>
              </div>

              {/* Name & Title */}
              <div className="animate-slide-up animate-fade-in mb-8" style={{ animationDelay: "200ms" }}>
                <h1 id="hero-heading" className="heading-xl font-light text-foreground leading-tight mb-6">
                  SHANMUGAM VIJAY BALAKRISHNAN
                </h1>
                <p className="heading-md font-light text-muted-foreground mb-8">
                  CREATOR • FOUNDER • SYSTEMS BUILDER • CIVILIZATION ARCHITECT
                </p>
                <p className="body-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                  Building community economies, intelligent technologies and civilizational systems for a flourishing future.
                </p>
              </div>

              {/* Primary Actions */}
              <div className="animate-slide-up animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "400ms" }}>
                <Link href="/work" className="btn-primary text-lg px-8 py-4">
                  Explore the Work
                </Link>
                <Link href="/ideas" className="btn-outline text-lg px-8 py-4">
                  Explore the Ideas
                </Link>
                <Link href="/connect" className="btn-secondary text-lg px-8 py-4">
                  Connect
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Work Map Section */}
        <section className="section-padding bg-muted/30" aria-labelledby="work-map-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="caption text-primary/70 mb-4">WORK MAP</p>
              <h2 id="work-map-heading" className="heading-lg font-light text-foreground mb-6">
                The Body of Work
              </h2>
              <p className="body-lg text-muted-foreground">
                An interactive map showing how community, intelligence, civilization, technology, decentralization, and creation connect through distinct projects and organizations — not a single entity, but a coherent body of work.
              </p>
            </div>

            <div className="relative">
              <WorkMap interactive={true} showDescriptions={true} />
            </div>

            {/* Mobile fallback notice */}
            <div className="md:hidden mt-8 p-4 rounded-xl bg-card border border-border text-center">
              <p className="text-sm text-muted-foreground">
                For the best experience, view the interactive work map on a larger screen. 
                <Link href="/work" className="text-primary underline ml-1 hover:underline-offset-2">
                  Explore all work areas →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Quick Access Cards */}
        <section className="section-padding" aria-labelledby="quick-access-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="caption text-primary/70 mb-4">KEY AREAS</p>
              <h2 id="quick-access-heading" className="heading-lg font-light text-foreground mb-6">
                Primary Work Areas
              </h2>
              <p className="body-lg text-muted-foreground">
                Each area operates independently with its own legal identity, while contributing to the broader civilizational vision.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Boysenberry",
                  href: "/boysenberry",
                  description: "Community-centered economic model combining local participation with modern business and technology",
                  status: "building",
                  category: "Community Economy",
                },
                {
                  name: "Universal Guard Trust",
                  href: "/universal-guard-trust",
                  description: "Open architecture for continuous civilizational learning and creation",
                  status: "operating",
                  category: "Global Framework",
                },
                {
                  name: "Heaven on Earth",
                  href: "/heaven-on-earth",
                  description: "Evolving working architecture for conscious civilization",
                  status: "building",
                  category: "Civilizational Architecture",
                },
                {
                  name: "Creator Community",
                  href: "/creator-community",
                  description: "369 domains, 271 patterns, 99,999 projects — the execution layer",
                  status: "building",
                  category: "Execution Layer",
                },
                {
                  name: "Kingdom of Shiva",
                  href: "/kingdom-of-shiva",
                  description: "Virtual civilization of Hindu knowledge, heritage, philosophy and living traditions",
                  status: "building",
                  category: "Knowledge Civilization",
                },
                {
                  name: "Zentium",
                  href: "/zentium",
                  description: "Decentralized project infrastructure, community-oriented digital value",
                  status: "building",
                  category: "Blockchain & Decentralization",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="card-interactive group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                        <span className={`status-badge ${item.status === "operating" ? "status-operating" : "status-building"}`}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/work" className="btn-outline">
                View All Work Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Preview */}
        <section className="section-padding bg-muted/30" aria-labelledby="philosophy-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="caption text-primary/70 mb-4">CORE PRINCIPLES</p>
                <h2 id="philosophy-heading" className="heading-lg font-light text-foreground mb-6">
                  The Ideas Behind the Work
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "GOING BACK TO OUR ROOTS",
                  "COMMUNITY BEFORE EXTRACTION",
                  "TECHNOLOGY IN SERVICE OF HUMANITY",
                  "INTEGRATED INTELLIGENCE",
                  "LOCAL ACTION + GLOBAL CONNECTION",
                  "DECENTRALIZATION",
                  "CREATION OVER CONSUMPTION",
                  "KNOWLEDGE → CAPABILITY",
                  "COMMUNITY PROSPERITY",
                  "HUMAN FLOURISHING",
                  "CONTINUOUS LEARNING",
                  "CIVILIZATION AS A LIVING SYSTEM",
                ].map((principle) => (
                  <div
                    key={principle}
                    className="card-base text-center group"
                  >
                    <p className="caption text-primary font-medium mb-3 group-hover:text-foreground transition-colors">
                      {principle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Explore how this principle shapes the work →
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href="/ideas" className="btn-primary">
                  Explore All Principles →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding" aria-labelledby="connect-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="connect-heading" className="heading-lg font-light text-foreground mb-6">
                Build With Me
              </h2>
              <p className="body-lg text-muted-foreground mb-10">
                Whether you're a builder, researcher, community organizer, technologist, or someone who resonates with this direction — there are many ways to participate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/connect" className="btn-primary text-lg px-8 py-4">
                  Get in Touch
                </Link>
                <Link href="/how-i-think" className="btn-outline text-lg px-8 py-4">
                  Understand How I Think
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}