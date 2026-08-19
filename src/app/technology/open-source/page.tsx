import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Open Source Systems",
  description: "Open protocols, open models, open data, open governance, forkable infrastructure, community-owned technology commons.",
  openGraph: {
    title: "Open Source Systems — Technology",
    description: "Open protocols and community-owned technology commons.",
    type: "website",
  },
};

const openSourceAreas = [
  { title: "Open Protocols", description: "Open communication and coordination protocols. No proprietary lock-in. Community-governed standards." },
  { title: "Open Models", description: "Open-weight AI models. Community-auditable. Locally runnable. No vendor lock-in." },
  { title: "Open Data", description: "Open datasets, open knowledge graphs, open research. The commons grows through sharing." },
  { title: "Open Governance", description: "Community governance of technology commons. Transparent decision-making. Forkable infrastructure." },
  { title: "Forkable Infrastructure", description: "Infrastructure that can be forked, adapted, and recombined. No single point of control." },
  { title: "Community-Owned Technology Commons", description: "Technology as shared resource. Not platform extraction. Community ownership and stewardship." },
];

const principles = [
  "Open by default. Closed by exception with justification.",
  "Community-owned. Not platform extraction.",
  "Forkable > Perfect. Evolution > Completion.",
  "The commons grows through sharing, not hoarding.",
  "Technology serves human flourishing — not the reverse.",
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="open-source-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="open-source-heading" className="heading-xl font-light text-foreground mb-6">
                OPEN SOURCE SYSTEMS
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Open protocols and community-owned technology commons. The commons grows through sharing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Open Source & Community Infrastructure</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Open Source Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader open source strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {openSourceAreas.map((area) => (
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
                  { title: "Creator Community", description: "Open execution layer for projects.", href: "/creator-community", status: "BUILDING" },
                  { title: "OpenMontage", description: "Open creative tools and pipelines.", href: "/technology/openmontage", status: "BUILDING" },
                  { title: "Universal Guard Trust", description: "Open architecture framework.", href: "/universal-guard-trust", status: "OPERATING" },
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
                <Link href="/creator-community" className="btn-secondary">
                  Creator Community
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