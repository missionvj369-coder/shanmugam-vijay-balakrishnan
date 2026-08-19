import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Heaven on Earth",
  description: "Civilizational architecture being developed through Universal Guard Trust. An evolving working architecture for conscious civilization. Domains: human life, consciousness, intelligence, relationships, education, health, economy, technology, ecology, community, civilization, measurement, projects, evidence, continuous learning.",
  openGraph: {
    title: "Heaven on Earth — Civilizational Architecture",
    description: "The working architecture for conscious civilization. Evolving. Evidence-based. Measurable.",
    type: "website",
  },
};

const domains = [
  "human life",
  "consciousness",
  "intelligence",
  "relationships",
  "education",
  "health",
  "economy",
  "technology",
  "ecology",
  "community",
  "civilization",
  "measurement",
  "projects",
  "evidence",
  "continuous learning",
];

const learningLoop = [
  { step: "UNDERSTAND", description: "Map the territory. See the whole system across all 15 domains." },
  { step: "CONNECT", description: "Link domains. Find the intersections where leverage lives." },
  { step: "CREATE", description: "Prototype systems. Build the artifacts — policies, platforms, institutions." },
  { step: "TEST", description: "Deploy in reality. Real communities. Real consequences. Not simulation." },
  { step: "MEASURE", description: "Track flourishing metrics. Not GDP. Not engagement. Flourishing." },
  { step: "LEARN", description: "Extract wisdom. What surprised us? What assumption failed?" },
  { step: "SHARE", description: "Open source the learnings. Publish. Teach. Fork. The commons grows." },
  { step: "ADAPT", description: "Adjust the architecture. Close the gap between design and reality." },
  { step: "CREATE AGAIN", description: "Begin the next cycle. Deeper understanding. Better systems." },
];

const whatItIsNot = [
  "❌ A completed solution to civilization",
  "❌ A utopia or promised paradise",
  "❌ A static master plan",
  "❌ A single organization's agenda",
  "❌ A replacement for democratic governance",
  "❌ A religious or ideological doctrine",
  "❌ A technology-only solution",
  "❌ A top-down imposition",
];

export default function HeavenOnEarthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="hoe-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">CIVILIZATIONAL ARCHITECTURE</p>
              <h1 id="hoe-heading" className="heading-xl font-light text-foreground mb-6">
                HEAVEN ON EARTH
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                The working architecture for conscious civilization. Developed through Universal Guard Trust. Evolving. Evidence-based. Measurable.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">UGT Blueprint Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="section-padding" aria-labelledby="what-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="what-heading" className="heading-lg font-light text-foreground text-center mb-12">
                What This Is
              </h2>
              <div className="prose-content text-muted-foreground space-y-6 text-center max-w-2xl mx-auto">
                <p>
                  Heaven on Earth is not a destination. It is a <strong className="text-foreground">working architecture</strong> — a living system design for conscious civilization.
                </p>
                <p>
                  Developed through the Universal Guard Trust framework. It applies the UGT core chain (Human Evolution → Integrated Intelligence → Human Flourishing → Civilization Transformation → Conscious Civilization → Heaven on Earth) as a practical, measurable, improvable system.
                </p>
                <p>
                  <strong className="text-foreground">It is an evolving blueprint.</strong> Not a completed solution. The learning loop (Understand → Connect → Create → Test → Measure → Learn → Share → Adapt → Create Again) runs continuously. Each cycle deepens the architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 15 Domains */}
        <section className="section-padding bg-muted/30" aria-labelledby="domains-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="domains-heading" className="heading-lg font-light text-foreground text-center mb-12">
                The 15 Domains
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Civilization is not one thing. It is the metabolism across these interconnected domains.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {domains.map((domain) => (
                  <div key={domain} className="card-base text-center group">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors capitalize">{domain}</h3>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Each domain has: current state assessment, flourishing metrics, active projects, evidence base, and learning loop integration.
              </p>
            </div>
          </div>
        </section>

        {/* The Learning Loop */}
        <section className="section-padding" aria-labelledby="loop-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="loop-heading" className="heading-lg font-light text-foreground text-center mb-12">
                The Continuous Learning Loop
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                This is the UGT architecture applied to civilizational design. Fixed systems die. Learning systems evolve.
              </p>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-9">
                {learningLoop.map((item, i) => (
                  <div key={item.step} className="card-base text-center group relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span className="text-lg font-light">{i + 1}</span>
                    </div>
                    <h3 className="font-medium text-foreground text-sm mb-1">{item.step}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What It Is Not */}
        <section className="section-padding bg-muted/30" aria-labelledby="not-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="not-heading" className="heading-md font-light text-foreground text-center mb-8">
                What This Is Not
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {whatItIsNot.map((item) => (
                  <div key={item} className="card-base p-4 text-left">{item}</div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Heaven on Earth is presented as an <strong className="text-foreground">evolving working architecture</strong>. The Blueprint is not claimed as a completed solution to civilization.
              </p>
            </div>
          </div>
        </section>

        {/* Relationship to UGT */}
        <section className="section-padding" aria-labelledby="ugt-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="ugt-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Relationship to Universal Guard Trust
              </h2>
              <div className="prose-content text-muted-foreground space-y-6 max-w-2xl mx-auto text-center">
                <p>
                  Heaven on Earth is the <strong className="text-foreground">civilizational architecture blueprint</strong> developed through the Universal Guard Trust framework.
                </p>
                <p>
                  UGT provides the <strong className="text-foreground">open architecture</strong> (principles, learning loop, governance model, entity structure). Heaven on Earth provides the <strong className="text-foreground">domain-specific design</strong> (15 domains, flourishing metrics, project portfolio, evidence framework).
                </p>
                <p>
                  They are distinct but inseparable. UGT is the <em>operating system</em>. Heaven on Earth is a <em>major application</em> running on it.
                </p>
              </div>
              <div className="text-center mt-10">
                <a href="https://www.ugtglobal.space/" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 mx-auto">
                  View UGT Canonical Source
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
                  { title: "Universal Guard Trust", description: "The open architecture framework.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Creator Community", description: "The execution layer for civilizational projects.", href: "/creator-community", status: "BUILDING" },
                  { title: "Kingdom of Shiva", description: "Hindu knowledge civilization — particular application.", href: "/kingdom-of-shiva", status: "BUILDING" },
                  { title: "Boysenberry", description: "Community economy — local flourishing expression.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Integrated Intelligence", description: "Cognitive architecture research.", href: "/universal-guard-trust#integrated-intelligence", status: "RESEARCH" },
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
                <Link href="/universal-guard-trust" className="btn-outline">
                  Universal Guard Trust
                </Link>
                <Link href="/ideas" className="btn-secondary">
                  Read the Principles
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