import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technology",
  description: "Technology as infrastructure for human possibility. AI, Blockchain, VR, Web, Creative Technology, Automation, Open Source.",
  openGraph: {
    title: "Technology — Infrastructure for Human Possibility",
    description: "AI, Blockchain, VR, Web, Metaverse, Creative Technology. Technology as instrument, not destination.",
    type: "website",
  },
};

const techAreas = [
  {
    title: "AI",
    description: "LLMs, local AI, AI-assisted creation, agent systems, cognitive architectures.",
    href: "/technology/ai",
    status: "BUILDING",
  },
  {
    title: "Blockchain",
    description: "Zentium protocol, community money, decentralized governance, DAO tooling.",
    href: "/technology/blockchain",
    status: "BUILDING",
  },
  {
    title: "VR",
    description: "Immersive interfaces, spatial computing, virtual community spaces.",
    href: "/technology/vr",
    status: "RESEARCH",
  },
  {
    title: "Web",
    description: "Modern web architectures, decentralized web, local-first software.",
    href: "/technology/web",
    status: "BUILDING",
  },
  {
    title: "Metaverse",
    description: "Persistent virtual worlds, interoperable identity, digital ownership.",
    href: "/technology/metaverse",
    status: "RESEARCH",
  },
  {
    title: "Creative Technology",
    description: "AI-assisted video, generative music, voice synthesis, cinematic pipelines.",
    href: "/technology/creative-ai",
    status: "BUILDING",
  },
  {
    title: "Automation",
    description: "Workflow automation, agent orchestration, infrastructure as code.",
    href: "/technology/automation",
    status: "BUILDING",
  },
  {
    title: "Video Generation",
    description: "Open video models, local inference, cinematic control.",
    href: "/technology/video-generation",
    status: "BUILDING",
  },
  {
    title: "Open Source Systems",
    description: "Open protocols, open models, open data, open governance.",
    href: "/technology/open-source",
    status: "BUILDING",
  },
];

const coreIdea = "Technology is not the destination. Technology is infrastructure for human possibility.";

const philosophy = [
  "Technology serves human flourishing — not the reverse.",
  "Local-first. Community-owned. Open by default.",
  "AI guides. Human decides. Always.",
  "Infrastructure over applications. Protocols over platforms.",
  "Interoperability > Walled gardens. Composability > Monoliths.",
  "Local-first software. Data sovereignty. User agency.",
  "Open source by default. Closed by exception with justification.",
  "Technology amplifies. Community directs. Values decide.",
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="tech-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">INFRASTRUCTURE FOR HUMAN POSSIBILITY</p>
              <h1 id="tech-heading" className="heading-xl font-light text-foreground mb-6">
                TECHNOLOGY
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {coreIdea}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm text-muted-foreground">9 Technology Areas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="section-padding" aria-labelledby="philosophy-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="philosophy-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Core Philosophy
              </h2>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {philosophy.map((principle) => (
                  <li key={principle} className="card-base flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Areas */}
        <section className="section-padding bg-muted/30" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Technology Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Nine technology areas.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {techAreas.map((area) => (
                  <Link key={area.title} href={area.href} className="card-interactive group">
                    <h3 className="font-medium text-foreground text-xl mb-2 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                    <span className={`status-badge ${area.status === "OPERATING" ? "status-operating" : area.status === "BUILDING" ? "status-building" : "status-research"}`}>
                      {area.status}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OpenMontage Highlight */}
        <section className="section-padding" aria-labelledby="openmontage-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card-base p-8 md:p-12 text-center">
                <h2 id="openmontage-heading" className="heading-lg font-light text-foreground mb-4">
                  OpenMontage — AI-Assisted Creative Systems
                </h2>
              <p className="body-lg text-muted-foreground mb-6">
                AI-assisted video creation. Open models. Local inference. Cinematic pipelines.
              </p>
                <Link href="/technology/openmontage" className="btn-outline inline-flex items-center gap-2">
                  Explore OpenMontage
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Relationship to Projects */}
        <section className="section-padding bg-muted/30" aria-labelledby="projects-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="projects-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Technology in the Work
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Technology powering the projects.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Boysenberry", description: "AI-assisted ecommerce, community platform, local economy tech.", href: "/boysenberry", tech: ["AI", "Web", "Automation"] },
                  { title: "Creator Community", description: "AI-guided build pipeline, GitHub automation, project orchestration.", href: "/creator-community", tech: ["AI", "Automation", "Open Source"] },
                  { title: "Zentium", description: "Blockchain protocol, DAO tooling, community money, VR interfaces.", href: "/zentium", tech: ["Blockchain", "VR", "Metaverse"] },
                  { title: "Universal Guard Trust", description: "Integrated intelligence research, governance tech, flourishing metrics.", href: "/universal-guard-trust", tech: ["AI", "Open Source", "Automation"] },
                  { title: "Kingdom of Shiva", description: "Knowledge graphs, multilingual search, VR temples, digital preservation.", href: "/kingdom-of-shiva", tech: ["AI", "VR", "Web", "Open Source"] },
                  { title: "OpenMontage", description: "Video generation, voice, music, cinematic pipelines, creative AI.", href: "/technology/openmontage", tech: ["Video Generation", "Creative Technology", "AI"] },
                ].map((project) => (
                  <Link key={project.title} href={project.href} className="card-interactive group">
                    <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">{t}</span>
                      ))}
                    </div>
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
                <Link href="/technology/openmontage" className="btn-outline">
                  OpenMontage
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