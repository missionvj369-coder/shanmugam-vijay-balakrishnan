import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Systems",
  description: "AI-assisted platforms, creative pipelines, intelligent automation.",
  keywords: "ai, open source ai tools, creativity, creator, local ai, agent systems, integrated intelligence",
  openGraph: {
    title: "AI Systems — Technology",
    description: "AI as infrastructure for human possibility. Open models. Local inference. Human direction.",
    type: "website",
  },
};

const aiAreas = [
  { title: "Large Language Models", description: "Open-weight models, fine-tuning, RAG pipelines." },
  { title: "Local AI", description: "Inference on local hardware. Privacy-preserving." },
  { title: "Agent Systems", description: "Autonomous agents for research, coding, creative workflows." },
  { title: "AI in Community Systems", description: "AI-assisted ecommerce, community platforms." },
];

const principles = [
  "AI guides. Human decides. Always.",
  "Local-first. Privacy-preserving. No telemetry without consent.",
  "Open models first. Proprietary only when no open alternative exists.",
];

export default function AIPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="ai-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="ai-heading" className="heading-xl font-light text-foreground mb-6">
                AI SYSTEMS
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                AI as infrastructure for human possibility.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">AI Research & Systems</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                AI Areas
              </h2>
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

        <section className="section-padding bg-muted/30" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                Explore Further
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">View the Work Map</Link>
                <Link href="/technology" className="btn-outline">Technology Overview</Link>
                <Link href="/technology/openmontage" className="btn-secondary">OpenMontage</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
