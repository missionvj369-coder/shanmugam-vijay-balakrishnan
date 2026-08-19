import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zentium",
  description: "Creator of Zentium Coin. Decentralization/blockchain direction and technical project. Zentium blockchain, decentralized project infrastructure, community-oriented digital value, community money concept, VR, web, metaverse, future decentralized systems.",
  openGraph: {
    title: "Zentium — Decentralized Infrastructure",
    description: "Blockchain, community money, decentralized systems. Separate technical trajectory.",
    type: "website",
  },
};

const vision = [
  { title: "Zentium Blockchain", description: "Native blockchain protocol designed for community economies. Not a generic L1 — purpose-built for local value circulation, community governance, incentive alignment." },
  { title: "Decentralized Project Infrastructure", description: "Infrastructure for decentralized project coordination. DAO tooling, treasury management, contributor reputation, fork/merge governance, cross-project resource sharing." },
  { title: "Community-Oriented Digital Value", description: "Tokens that represent community contribution, not speculation. Reputation, governance rights, resource access, local purchasing power — value tied to participation." },
  { title: "Community Money Concept", description: "Exploring money as community infrastructure. Mutual credit, local currencies, time banking, resource-backed tokens. Not investment vehicles — coordination tools." },
  { title: "VR / Web / Metaverse Integration", description: "Immersive interfaces for community coordination. Virtual community spaces, 3D governance, spatial reputation, embodied digital presence. Not escapism — enhanced coordination." },
  { title: "Future Decentralized Systems", description: "Identity, storage, compute, bandwidth — decentralized at every layer. Community-owned infrastructure. No single points of control, failure, or extraction." },
];

const statusSeparation = [
  { category: "EXISTING TECHNOLOGY", items: ["Zentium coin (created)", "Basic blockchain protocol", "Initial tokenomics design", "Community concept papers"] },
  { category: "CURRENT DEVELOPMENT", items: ["Protocol upgrades", "Governance mechanism design", "Community money pilots", "DAO tooling prototypes", "VR interface research"] },
  { category: "FUTURE INTEGRATION", items: ["Boysenberry platform integration", "Creator Community token layer", "UGT ecosystem bridging", "Metaverse community spaces", "Cross-chain interoperability"] },
];

const disclaimers = [
  "❌ No investment promises. Zentium is not an investment vehicle.",
  "❌ No financial returns guaranteed. No speculative claims.",
  "❌ No passive income implied. Community money rewards participation, not holding.",
  "❌ Not all UGT projects are decentralized. Zentium is a separate technical trajectory.",
  "❌ Token/financial information uses legally responsible language only.",
  "❌ Future integration is vision — not current reality.",
];

export default function ZentiumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="zentium-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">DECENTRALIZED INFRASTRUCTURE</p>
              <h1 id="zentium-heading" className="heading-xl font-light text-foreground mb-6">
                ZENTIUM
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Creator of Zentium Coin. Decentralization/blockchain direction and technical project. Separate technical trajectory.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Blockchain / Decentralized Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="section-padding" aria-labelledby="vision-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="vision-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Future Vision
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six directions. One coherent decentralization thesis. Clearly separated from current reality.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vision.map((item) => (
                  <div key={item.title} className="card-base">
                    <h3 className="caption text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Status Separation */}
        <section className="section-padding bg-muted/30" aria-labelledby="status-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="status-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Status Separation — Critical
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Every component is explicitly categorized. No blurring of future vision with completed implementation.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {statusSeparation.map((section) => (
                  <div key={section.category} className="card-base">
                    <h3 className="caption text-primary mb-4">{section.category}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="section-padding" aria-labelledby="disclaimers-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="disclaimers-heading" className="heading-md font-light text-foreground text-center mb-8">
                Important Disclaimers
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {disclaimers.map((item) => (
                  <div key={item} className="card-base p-4 text-left">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Relationship to Other Projects */}
        <section className="section-padding bg-muted/30" aria-labelledby="relationship-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="relationship-heading" className="heading-md font-light text-foreground text-center mb-8">
                Relationship to Other Projects
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-center">
                <p>
                  Zentium is a <strong className="text-foreground">separate technical trajectory</strong>. It is not Universal Guard Trust, not Boysenberry, not Kingdom of Shiva, not Creator Community.
                </p>
                <p>
                  <strong className="text-foreground">Future integration is envisioned</strong> — Zentium could provide the decentralized infrastructure layer for Boysenberry's community economy, Creator Community's project coordination, UGT's governance. But this is FUTURE INTEGRATION — not current reality.
                </p>
                <p>
                  Do not assume all UGT projects are already decentralized. They are not. Zentium builds the infrastructure. Integration happens when ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Entity Separation */}
        <section className="section-padding" aria-labelledby="entity-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="entity-heading" className="heading-md font-light text-foreground text-center mb-8">
                Entity Separation
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Distinct Initiative</h3>
                  <p>Zentium is a distinct project. It is not Universal Guard Trust, not Boysenberry Marketing Private Limited, not Kingdom of Shiva, not Creator Community. The personal website explains relationships but does not merge identities.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">No Financial Advice</h3>
                  <p>This website is informational. No content constitutes financial advice, investment recommendation, or solicitation. Consult qualified professionals for financial decisions.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Regulatory Awareness</h3>
                  <p>Blockchain and token projects operate in evolving regulatory landscapes. Zentium development respects applicable laws. This transparency is part of responsible building.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section-padding bg-muted/30" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Related Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Boysenberry", description: "Community economy — future integration target.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer — future token coordination.", href: "/creator-community", status: "BUILDING" },
                  { title: "Universal Guard Trust", description: "Governance framework — future DAO layer.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Technology / Blockchain", description: "Technical deep dives.", href: "/technology/blockchain", status: "BUILDING" },
                  { title: "Technology / Metaverse", description: "VR/metaverse research.", href: "/technology/metaverse", status: "RESEARCH" },
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
        <section className="section-padding" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                Explore Further
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/technology/blockchain" className="btn-outline">
                  Technology / Blockchain
                </Link>
                <Link href="/boysenberry" className="btn-secondary">
                  Boysenberry
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