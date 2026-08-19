import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blockchain Systems",
  description: "Decentralized infrastructure for community economies and civilizational systems. Zentium protocol, community money, decentralized governance, DAO tooling, decentralized identity, community-owned infrastructure.",
  openGraph: {
    title: "Blockchain Systems — Technology",
    description: "Decentralized infrastructure for community economies and civilizational systems.",
    type: "website",
  },
};

const blockchainAreas = [
  { title: "Zentium Protocol", description: "Native blockchain protocol designed for community economies. Purpose-built for local value circulation, community governance, incentive alignment." },
  { title: "Community Money", description: "Money as community infrastructure. Mutual credit, local currencies, time banking, resource-backed tokens. Not investment vehicles — coordination tools." },
  { title: "Decentralized Governance", description: "DAO tooling, treasury management, contributor reputation, fork/merge governance, cross-project resource sharing." },
  { title: "Decentralized Identity", description: "Self-sovereign identity, verifiable credentials, reputation systems, community membership proofs." },
  { title: "Community-Owned Infrastructure", description: "Identity, storage, compute, bandwidth — decentralized at every layer. No single points of control, failure, or extraction." },
  { title: "Interoperability", description: "Cross-chain protocols, bridges, standards. Not walled gardens — composable infrastructure." },
];

const principles = [
  "Decentralization is structural resilience — not ideology.",
  "Community-owned. Not platform extraction.",
  "No investment promises. No speculative claims.",
  "Future integration is vision — not current reality.",
  "Regulatory awareness. Responsible building.",
];

export default function BlockchainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="blockchain-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="blockchain-heading" className="heading-xl font-light text-foreground mb-6">
                BLOCKCHAIN SYSTEMS
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Decentralized infrastructure for community economies and civilizational systems.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Blockchain & Decentralized Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Blockchain Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader decentralization strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blockchainAreas.map((area) => (
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
                  { title: "Zentium", description: "Blockchain protocol and community money.", href: "/zentium", status: "BUILDING" },
                  { title: "Boysenberry", description: "Community economy — future integration target.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer — future token coordination.", href: "/creator-community", status: "BUILDING" },
                  { title: "Universal Guard Trust", description: "Governance framework — future DAO layer.", href: "/universal-guard-trust", status: "OPERATING" },
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
                <Link href="/zentium" className="btn-outline">
                  Zentium
                </Link>
                <Link href="/technology" className="btn-secondary">
                  Technology Overview
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