import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Universal Guard Trust",
  description: "Open architecture for civilizational learning and creation.",
  openGraph: {
    title: "Universal Guard Trust — Civilizational Framework",
    description: "Open architecture for continuous civilizational learning and creation.",
    type: "website",
  },
};

const coreChain = [
  {
    step: 1,
    title: "HUMAN EVOLUTION",
    description: "Biological, cultural, cognitive, spiritual evolution. The substrate of future possibility.",
  },
  {
    step: 2,
    title: "INTEGRATED INTELLIGENCE",
    description: "Human wisdom + machine capability + collective knowledge + ecological awareness. Integrated intelligence.",
  },
  {
    step: 3,
    title: "HUMAN FLOURISHING",
    description: "The metric: autonomy, competence, relatedness, meaning, vitality, transcendence.",
  },
  {
    step: 4,
    title: "CIVILIZATION TRANSFORMATION",
    description: "Economy, governance, education, health, ecology, technology — redesigned for flourishing.",
  },
  {
    step: 5,
    title: "CONSCIOUS CIVILIZATION",
    description: "A civilization that knows itself. Self-monitoring, self-correcting, learning continuously.",
  },
  {
    step: 6,
    title: "HEAVEN ON EARTH",
    description: "A living system design for conscious civilization. Evolving, evidence-based, measurable.",
  },
];

const architecturePrinciples = [
  "Open architecture — no gatekeeping, no proprietary lock-in",
  "Continuous learning — Understand → Connect → Create → Test → Measure → Learn → Adapt",
  "Evidence-aware — claims tested, measured, documented, shared",
  "Principle-driven — 12 core principles shape every layer",
  "Modular — domains, patterns, projects can be forked, adapted, recombined",
  "Global — not bound to one geography, culture, or institution",
  "Decentralized — no single point of control, failure, or extraction",
  "Human-centered — technology serves flourishing, not the reverse",
];

const myRole = [
  {
    title: "Founder",
    description: "Established UGT as a global trust/framework for civilizational architecture.",
  },
  {
    title: "Architect",
    description: "Designed the core chain, Integrated Intelligence framework, Heaven on Earth blueprint.",
  },
  {
    title: "Builder",
    description: "Building the execution layer (Creator Community), knowledge civilization (Kingdom of Shiva), and community economy (Boysenberry).",
  },
  {
    title: "Steward",
    description: "Maintaining ugtglobal.space as the canonical UGT entity source. Ensuring entity separation. Publishing learnings openly.",
  },
];

export default function UniversalGuardTrustPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="ugt-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">CIVILIZATIONAL FRAMEWORK</p>
              <h1 id="ugt-heading" className="heading-xl font-light text-foreground mb-6">
                UNIVERSAL GUARD TRUST
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Open architecture for civilizational learning and creation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-operating">OPERATING</span>
                <span className="text-sm text-muted-foreground">Global Trust / Framework</span>
                <a href="https://www.ugtglobal.space/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                  Canonical Source →
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Chain */}
        <section className="section-padding" aria-labelledby="chain-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="chain-heading" className="heading-lg font-light text-foreground text-center mb-12">
                The Core Chain
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six stages. Each enables the next. A design specification.
              </p>
              <div className="space-y-6">
                {coreChain.map((stage) => (
                  <div key={stage.title} className="card-base relative group">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <span className="text-2xl font-light text-primary">{stage.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-2">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                    {stage.step < coreChain.length && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent -z-10" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Principles */}
        <section className="section-padding bg-muted/30" aria-labelledby="principles-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="principles-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Architecture Principles
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Principles that constrain every layer of UGT.
              </p>
              <ul className="space-y-3">
                {architecturePrinciples.map((principle) => (
                  <li key={principle} className="card-base flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
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
                Not a methodology. The nature of living systems.
              </p>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-9">
                {[
                  "UNDERSTAND",
                  "CONNECT",
                  "CREATE",
                  "TEST",
                  "MEASURE",
                  "LEARN",
                  "SHARE",
                  "ADAPT",
                  "CREATE AGAIN",
                ].map((step, i) => (
                  <div key={step} className="card-base text-center group relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span className="text-lg font-light">{i + 1}</span>
                    </div>
                    <h3 className="font-medium text-foreground text-sm mb-1">{step}</h3>
                    <p className="text-xs text-muted-foreground">
                      {[
                        "Map the territory. See the whole system.",
                        "Link domains. Find the intersections.",
                        "Prototype. Build the artifact.",
                        "Deploy in reality. Not simulation.",
                        "Track flourishing. Not vanity metrics.",
                        "Extract wisdom. Not just data.",
                        "Open source. Publish. Teach. Fork.",
                        "Adjust the system. Close the gap.",
                        "Begin the next cycle. Deeper.",
                      ][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* My Role & Relationship */}
        <section className="section-padding bg-muted/30" aria-labelledby="role-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="role-heading" className="heading-lg font-light text-foreground text-center mb-12">
                My Role & Relationship to UGT
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                UGT is a global framework. This website explains my role.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {myRole.map((role) => (
                  <div key={role.title} className="card-base">
                    <h3 className="caption text-primary mb-3">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section-padding" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Projects Expressing UGT Principles
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Distinct entities. Shared principles. Not UGT.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Heaven on Earth", description: "The civilizational architecture blueprint developed through UGT.", href: "/heaven-on-earth", status: "BUILDING" },
                  { title: "Creator Community", description: "The execution layer — 369 domains, 271 patterns, 99,999 projects.", href: "/creator-community", status: "BUILDING" },
                  { title: "Kingdom of Shiva", description: "Hindu knowledge civilization — particular application of universal framework.", href: "/kingdom-of-shiva", status: "BUILDING" },
                  { title: "Boysenberry", description: "Community economy model — local expression of flourishing metrics.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Zentium", description: "Decentralized infrastructure — separate technical trajectory.", href: "/zentium", status: "BUILDING" },
                  { title: "Integrated Intelligence", description: "Cognitive architecture research within UGT.", href: "/universal-guard-trust#integrated-intelligence", status: "RESEARCH" },
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

        {/* Important Notes */}
        <section className="section-padding bg-muted/30" aria-labelledby="notes-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="notes-heading" className="heading-md font-light text-foreground text-center mb-8">
                Important Notes
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Canonical Source</h3>
                  <p>The canonical UGT source is <a href="https://www.ugtglobal.space/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ugtglobal.space</a>. This website explains my role and relationship to UGT.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Entity Separation</h3>
                  <p>Universal Guard Trust is a global trust/framework. It is not Boysenberry, Zentium, Kingdom of Shiva, or Creator Community. The website explains relationships without merging identities.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">No Completed Solution Claim</h3>
                  <p>UGT does not claim the Blueprint is a completed solution. It is an evolving working architecture. The learning loop is continuous.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">UGT India</h3>
                  <p>UGT India is the local implementation of UGT in India. Distinct entity. Same principles. Local context.</p>
                </div>
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
                <a href="https://www.ugtglobal.space/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                  Visit ugtglobal.space
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link href="/heaven-on-earth" className="btn-outline">
                  Heaven on Earth
                </Link>
                <Link href="/work" className="btn-secondary">
                  View the Work Map
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