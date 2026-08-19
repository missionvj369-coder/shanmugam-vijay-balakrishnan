import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Metaverse",
  description: "Persistent virtual worlds, interoperable identity, digital ownership, community economies.",
  openGraph: {
    title: "Metaverse — Technology",
    description: "Persistent virtual worlds and community economies in virtual spaces.",
    type: "website",
  },
};

const metaverseAreas = [
  { title: "Persistent Virtual Worlds", description: "Continuous virtual environments. Community spaces that persist and evolve." },
  { title: "Interoperable Identity", description: "Digital identity that works across worlds. Portable reputation and social graph." },
  { title: "Digital Ownership", description: "Community-owned virtual assets. Infrastructure for community economies." },
  { title: "Community Economies in Virtual Spaces", description: "Virtual marketplaces, stores, services. Community value circulation." },
  { title: "Cross-World Portability", description: "Assets, identity, and relationships that move between worlds. Open standards." },
  { title: "Virtual Governance", description: "Community governance in virtual spaces. DAOs, deliberation, decision-making." },
];

const principles = [
  "Metaverse serves community — not escapism.",
  "Interoperable. Open standards. No walled gardens.",
  "Digital ownership serves community economies — not speculation.",
  "Research status — clearly marked. Not production-ready.",
  "Human presence is primary. Technology is infrastructure.",
];

export default function MetaversePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="metaverse-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="metaverse-heading" className="heading-xl font-light text-foreground mb-6">
                METAVERSE
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Virtual worlds. Community economies. Research phase.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-research">RESEARCH</span>
                <span className="text-sm text-muted-foreground">Immersive Systems Research</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metaverse Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Metaverse Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {metaverseAreas.map((area) => (
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
                  { title: "Zentium", description: "Blockchain with VR/metaverse integration.", href: "/zentium", status: "BUILDING" },
                  { title: "Technology / VR", description: "VR deep dive.", href: "/technology/vr", status: "RESEARCH" },
                  { title: "Kingdom of Shiva", description: "Virtual temples and knowledge visualization.", href: "/kingdom-of-shiva", status: "BUILDING" },
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
                <Link href="/technology/vr" className="btn-secondary">
                  VR
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