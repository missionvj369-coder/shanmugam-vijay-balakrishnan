import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web & Creative Tech",
  description: "Modern web architectures, decentralized web, local-first software, progressive enhancement, open web standards. OpenMontage, video generation, creative automation pipelines.",
  openGraph: {
    title: "Web & Creative Tech — Technology",
    description: "Modern web architectures and creative technology systems.",
    type: "website",
  },
};

const webAreas = [
  { title: "Modern Web Architectures", description: "Next.js, React, server components, edge computing, performance optimization, accessibility-first design." },
  { title: "Decentralized Web", description: "IPFS, local-first protocols, peer-to-peer systems, data sovereignty, user agency." },
  { title: "Local-First Software", description: "Applications that work offline. Data on device. Sync when connected. No cloud dependency." },
  { title: "Progressive Enhancement", description: "Core functionality first. Enhancement layers. Works everywhere. Accessible to all." },
  { title: "Open Web Standards", description: "HTML, CSS, JavaScript, WebAssembly. Open protocols. No proprietary lock-in." },
  { title: "Creative Web", description: "WebGL, canvas, generative art, interactive experiences, immersive storytelling." },
];

const principles = [
  "Open web standards. No proprietary lock-in.",
  "Local-first. Data sovereignty. User agency.",
  "Accessible by default. Progressive enhancement.",
  "Performance is a feature. Not an afterthought.",
  "Technology serves human flourishing — not the reverse.",
];

export default function WebPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="web-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="web-heading" className="heading-xl font-light text-foreground mb-6">
                WEB & CREATIVE TECH
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Modern web architectures and creative technology systems. Open standards. Local-first. Human-centered.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Web & Creative Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Web Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Web & Creative Tech Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader web strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {webAreas.map((area) => (
                  <div key={area.title} className="card-base">
                    <h3 className="caption text-primary mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding bg-muted/30" aria-labelledby="principles-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="principles-heading" className="heading-md font-light text-foreground text-center mb-8">
                Operating Principles
              </h2>
              <ul className="space-y-3">
                {principles.map((principle) => (
                  <li key={principle} className="card-base flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Work */}
        <section className="section-padding" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Related Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "OpenMontage", description: "AI-assisted video creation pipeline.", href: "/technology/openmontage", status: "BUILDING" },
                  { title: "Boysenberry", description: "AI-assisted ecommerce platform.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer for web projects.", href: "/creator-community", status: "BUILDING" },
                  { title: "Technology", description: "Technology overview.", href: "/technology", status: "BUILDING" },
                ].map((project) => (
                  <Link key={project.title} href={project.href} className="card-interactive group">
                    <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <span className={`status-badge ${project.status === "OPERATING" ? "status-operating" : project.status === "BUILDING" ? "status-building" : "status-research"}`}>
                      {project.status}
                    </span>
                  </Link>
                ))}
              </div>
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
                <Link href="/technology" className="btn-outline">
                  Technology Overview
                </Link>
                <Link href="/technology/openmontage" className="btn-secondary">
                  OpenMontage
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