import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VR & Metaverse",
  description: "Immersive systems for community interaction and civilizational experience. Virtual reality, spatial computing, embodied digital presence, virtual community spaces, 3D governance interfaces.",
  openGraph: {
    title: "VR & Metaverse — Technology",
    description: "Immersive systems for community interaction and civilizational experience.",
    type: "website",
  },
};

const vrAreas = [
  { title: "Virtual Reality", description: "Immersive environments for community interaction, knowledge exploration, and creative expression. Not escapism — enhanced coordination." },
  { title: "Spatial Computing", description: "Interfaces that understand physical space. Room-scale interaction, spatial audio, haptic feedback, presence." },
  { title: "Embodied Digital Presence", description: "Digital identity with body. Avatars, gestures, spatial communication. Presence as infrastructure for community." },
  { title: "Virtual Community Spaces", description: "Persistent virtual worlds for community gathering. Temples, classrooms, marketplaces, studios — virtual spaces for real connection." },
  { title: "3D Governance Interfaces", description: "Spatial interfaces for governance. Data visualization, decision spaces, community deliberation in 3D." },
  { title: "Knowledge Visualization", description: "Immersive exploration of knowledge. Virtual temples, historical reconstructions, scientific visualization, cultural heritage." },
];

const principles = [
  "Immersive systems serve community — not escapism.",
  "Human presence is primary. Technology is infrastructure.",
  "Open standards. Interoperable. Not walled gardens.",
  "Accessible. Consumer hardware targets. Not H100-only.",
  "Research status — clearly marked. Not production-ready.",
];

export default function VRPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="vr-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="vr-heading" className="heading-xl font-light text-foreground mb-6">
                VR & METAVERSE
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Immersive systems for community interaction and civilizational experience.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-research">RESEARCH</span>
                <span className="text-sm text-muted-foreground">Immersive Systems Research</span>
              </div>
            </div>
          </div>
        </section>

        {/* VR Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                VR & Metaverse Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader immersive strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vrAreas.map((area) => (
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
                  { title: "Zentium", description: "VR/metaverse integration vision.", href: "/zentium", status: "BUILDING" },
                  { title: "Kingdom of Shiva", description: "Virtual temples and knowledge visualization.", href: "/kingdom-of-shiva", status: "BUILDING" },
                  { title: "Technology", description: "Technology overview.", href: "/technology", status: "BUILDING" },
                  { title: "Technology / Metaverse", description: "Metaverse deep dive.", href: "/technology/metaverse", status: "RESEARCH" },
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
                <Link href="/technology/metaverse" className="btn-secondary">
                  Metaverse
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