import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blockchain Systems",
  description: "Decentralized infrastructure for community economies. Zentium protocol, community money, DAO tooling.",
  keywords: "blockchain, decentralization, zentium, community money, dao, decentralized identity, open source",
  openGraph: {
    title: "Blockchain Systems — Technology",
    description: "Decentralized infrastructure for community economies and civilizational systems.",
    type: "website",
  },
};

const blockchainAreas = [
  { title: "Zentium Protocol", description: "Native blockchain protocol for community economies. Local value circulation." },
  { title: "Community Money", description: "Money as community infrastructure. Mutual credit, local currencies." },
  { title: "Decentralized Governance", description: "DAO tooling, treasury management, contributor reputation." },
  { title: "Community-Owned Infrastructure", description: "Identity, storage, compute, bandwidth — decentralized." },
];

const principles = [
  "Decentralization is structural resilience — not ideology.",
  "Community-owned. Not platform extraction.",
  "No investment promises. No speculative claims.",
];

export default function BlockchainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col" id="main-content">
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="blockchain-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="blockchain-heading" className="heading-xl font-light text-foreground mb-6">BLOCKCHAIN SYSTEMS</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Decentralized infrastructure for community economies.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Blockchain & Decentralized Systems</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">Blockchain Areas</h2>
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

        <section className="section-padding bg-muted/30" aria-labelledby="principles-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="principles-heading" className="heading-md font-light text-foreground text-center mb-8">Operating Principles</h2>
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

        <section className="section-padding bg-muted/30" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">Explore Further</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">View the Work Map</Link>
                <Link href="/zentium" className="btn-outline">Zentium</Link>
                <Link href="/technology" className="btn-secondary">Technology Overview</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
