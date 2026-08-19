import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Systems",
  description: "AI-assisted platforms, creative pipelines, intelligent automation. Large language models, local AI, agent systems, cognitive architectures, integrated intelligence research.",
  openGraph: {
    title: "AI Systems — Technology",
    description: "AI as infrastructure for human possibility. Local AI, agent systems, integrated intelligence.",
    type: "website",
  },
};

const aiAreas = [
  { title: "Large Language Models", description: "Open-weight models, fine-tuning, prompt engineering, RAG pipelines, model evaluation, local deployment." },
  { title: "Local AI", description: "Inference on local hardware. Privacy-preserving. Offline-capable. No API dependency. Consumer GPU targets." },
  { title: "AI-Assisted Creation", description: "Creative pipelines with AI at each stage. Human direction throughout. AI accelerates, human creates." },
  { title: "Agent Systems", description: "Autonomous agents for research, coding, coordination, creative workflows. Human oversight always." },
  { title: "Cognitive Architectures", description: "Integrated intelligence research. Human wisdom + machine capability + collective knowledge + ecological awareness." },
  { title: "AI in Community Systems", description: "AI-assisted ecommerce, community platforms, knowledge graphs, local economy technology." },
];

const principles = [
  "AI guides. Human decides. Always.",
  "Local-first. Privacy-preserving. No telemetry without consent.",
  "Open models first. Proprietary only when no open alternative exists.",
  "Technology serves human flourishing — not the reverse.",
  "AI amplifies. Community directs. Values decide.",
];

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="ai-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="ai-heading" className="heading-xl font-light text-foreground mb-6">
                AI SYSTEMS
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                AI as infrastructure for human possibility. Not the destination — the amplifier.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">AI Research & Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                AI Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader AI strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aiAreas.map((area) => (
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
                  { title: "Creator Community", description: "AI-guided build pipeline.", href: "/creator-community", status: "BUILDING" },
                  { title: "Universal Guard Trust", description: "Integrated intelligence research.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Boysenberry", description: "AI-assisted ecommerce platform.", href: "/boysenberry", status: "BUILDING" },
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