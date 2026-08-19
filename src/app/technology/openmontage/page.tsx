import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "OpenMontage — AI-Assisted Creative Systems",
  description: "AI-assisted video creation. Open models, local AI, cinematic pipelines.",
  openGraph: {
    title: "OpenMontage — AI-Assisted Creative Systems",
    description: "Open models. Local inference. Cinematic pipelines. Creative automation.",
    type: "website",
  },
};

const areas = [
  { title: "Open Models", description: "Open-weight video, audio, and language models. No vendor lock-in. Community-auditable. Locally runnable." },
  { title: "Local AI", description: "Inference on local hardware. Privacy-preserving. Offline-capable. No API dependency. Consumer GPU targets." },
  { title: "Video Generation", description: "Text-to-video, image-to-video, video-to-video. Consistency. Cinematic control. Long-form." },
  { title: "Voice", description: "Text-to-speech, voice cloning, emotional control, multilingual, singing synthesis. Local." },
  { title: "Music", description: "Generative music, stem separation, style transfer, arrangement assistance. Open models." },
  { title: "Cinematic Creation", description: "Shot composition, lighting direction, color grading, editing assistance, narrative structure." },
  { title: "Automation", description: "Pipeline orchestration, batch processing, asset management, version control, CI/CD." },
  { title: "Creative Pipelines", description: "End-to-end workflows: script → storyboard → animatic → rough cut → final. AI assists. Human directs." },
];

const status = [
  { label: "RESEARCH", items: ["Video generation model evaluation", "Local inference optimization", "Cinematic control research", "Long-form consistency"] },
  { label: "BUILDING", items: ["Pipeline orchestration framework", "Asset management system", "Voice synthesis integration", "Music generation tools"] },
  { label: "PLANNED", items: ["Full cinematic pipeline", "Real-time collaborative editing", "VR/AR creative interfaces", "Community model sharing"] },
];

const principles = [
  "Open models first. Proprietary only when no open alternative exists.",
  "Local inference by default. Cloud as fallback, not requirement.",
  "Human creative direction. AI executes. Human decides.",
  "Cinematic quality over demo quality. Production-ready output.",
  "Pipeline thinking. Not single tools — integrated workflows.",
  "Community-owned. Forkable. Extensible. Not a SaaS trap.",
  "Privacy-preserving. Local data. No telemetry without consent.",
  "Accessible. Consumer hardware targets. Not H100-only.",
];

export default function OpenMontagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="om-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">CREATIVE TECHNOLOGY</p>
              <h1 id="om-heading" className="heading-xl font-light text-foreground mb-6">
                OPENMONTAGE
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                AI-assisted video creation. Open models. Local inference. Cinematic pipelines.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">AI-Assisted Creative Systems</span>
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
              <div className="prose-content text-muted-foreground space-y-4 text-center max-w-2xl mx-auto">
                <p>
                  OpenMontage is the ongoing work around <strong className="text-foreground">AI-assisted video creation</strong> — a deep technical trajectory within the Creative Technology area.
                </p>
                <p>
                  It is not a single tool. It is a <strong className="text-foreground">pipeline architecture</strong> — open models, local inference, cinematic control, creative automation — designed for production use, not demos.
                </p>
                <p>
                  <strong className="text-foreground">Core thesis:</strong> Best creative AI runs locally, uses open models, keeps human direction central.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Areas */}
        <section className="section-padding bg-muted/30" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Relevant Areas
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Eight interconnected technical domains.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {areas.map((area) => (
                  <div key={area.title} className="card-base">
                    <h3 className="caption text-primary mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Status */}
        <section className="section-padding" aria-labelledby="status-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="status-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Development Status — Transparent
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Explicit status for every component.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {status.map((section) => (
                  <div key={section.label} className="card-base">
                    <h3 className="caption text-primary mb-4">{section.label}</h3>
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

        {/* Important Notes */}
        <section className="section-padding" aria-labelledby="notes-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="notes-heading" className="heading-md font-light text-foreground text-center mb-8">
                Important Notes
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Status Transparency</h3>
                  <p>Clearly marked BUILDING. Not production-ready unless explicitly stated. No fake launch claims. No demo-as-product confusion.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">No Verified Production Capabilities</h3>
                  <p>Do not claim production capabilities that have not been verified. Research prototypes ≠ production systems. This distinction is maintained rigorously.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Open by Default</h3>
                  <p>Code, models, pipelines — open by default. Closed by exception with justification. The creative commons grows through sharing.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Human Direction Central</h3>
                  <p>AI assists. Human directs. Creative judgment, ethical boundaries, aesthetic decisions — human. This is not "AI generates, human approves." It is human creates, AI accelerates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Work */}
        <section className="section-padding bg-muted/30" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Related Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Technology / Creative Technology", description: "Parent technology area.", href: "/technology", status: "BUILDING" },
                  { title: "Technology / Video Generation", description: "Video generation deep dive.", href: "/technology/video-generation", status: "BUILDING" },
                  { title: "Technology / AI", description: "AI research and systems.", href: "/technology/ai", status: "BUILDING" },
                  { title: "Media / Video", description: "Creative output showcase.", href: "/media#video", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer for creative projects.", href: "/creator-community", status: "BUILDING" },
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
                <Link href="/technology" className="btn-outline">
                  Technology Overview
                </Link>
                <Link href="/media" className="btn-secondary">
                  View Media
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