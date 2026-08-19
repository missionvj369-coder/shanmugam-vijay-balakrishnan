import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creative AI",
  description: "AI-assisted video, generative music, voice synthesis, cinematic pipelines, creative automation, open creative tools. OpenMontage, video generation, creative automation pipelines.",
  openGraph: {
    title: "Creative AI — Technology",
    description: "AI-assisted creative systems. Open models. Local inference. Cinematic pipelines.",
    type: "website",
  },
};

const creativeAreas = [
  { title: "AI-Assisted Video", description: "Text-to-video, image-to-video, video-to-video. Consistency. Temporal coherence. Cinematic control. Long-form capability." },
  { title: "Generative Music", description: "Generative music, stem separation, style transfer, arrangement assistance, live performance tools. Open models." },
  { title: "Voice Synthesis", description: "Text-to-speech, voice cloning, emotional control, multilingual, singing synthesis. Local. Real-time capable." },
  { title: "Cinematic Pipelines", description: "Shot composition, lighting direction, color grading, editing assistance, narrative structure, pacing control." },
  { title: "Creative Automation", description: "Pipeline orchestration, batch processing, asset management, version control for creative assets, CI/CD for content." },
  { title: "Open Creative Tools", description: "Open-source creative software. Community-owned. Forkable. Extensible. Not a SaaS trap." },
];

const principles = [
  "Open models first. Proprietary only when no open alternative exists.",
  "Local inference by default. Cloud as fallback, not requirement.",
  "Human creative direction. AI executes. Human decides.",
  "Cinematic quality over demo quality. Production-ready output.",
  "Pipeline thinking. Not single tools — integrated workflows.",
  "Community-owned. Forkable. Extensible. Not a SaaS trap.",
];

export default function CreativeAIPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="creative-ai-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="creative-ai-heading" className="heading-xl font-light text-foreground mb-6">
                CREATIVE AI
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                AI-assisted creative systems. Open models. Local inference. Cinematic pipelines. Creative automation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Creative Technology Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* Creative AI Areas */}
        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Creative AI Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Six interconnected technical domains. Each feeds the broader creative strategy.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {creativeAreas.map((area) => (
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
                  { title: "Technology / AI", description: "AI research and systems.", href: "/technology/ai", status: "BUILDING" },
                  { title: "Media", description: "Creative output showcase.", href: "/media", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer for creative projects.", href: "/creator-community", status: "BUILDING" },
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
                <Link href="/technology/openmontage" className="btn-outline">
                  OpenMontage
                </Link>
                <Link href="/technology" className="btn-secondary">
                  Technology Overview
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