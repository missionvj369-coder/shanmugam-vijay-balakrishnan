import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creator Community",
  description: "Execution layer for civilizational creation. 369 domains, 271 patterns, 99,999 projects.",
  openGraph: {
    title: "Creator Community — Execution Layer",
    description: "Machinery that produces systems at scale.",
    type: "website",
  },
};

const architecture = [
  { label: "369 DOMAINS", description: "Complete taxonomy of human endeavor." },
  { label: "271 PATTERNS", description: "Reusable system patterns. Forkable. Composable." },
  { label: "99,999 PROJECTS", description: "Project catalogue. A universe of possibility. Each forkable." },
];

const buildPipeline = [
  { step: "PROJECT", description: "Select or propose a project from the catalogue." },
  { step: "BUILD", description: "Initiate build. Resources allocated. Team forms." },
  { step: "AI GUIDE", description: "AI assists with architecture, code, design, research." },
  { step: "HUMAN DECISION", description: "Human reviews, approves, redirects. AI proposes. Human decides." },
  { step: "TEAM", description: "Contributors join. Roles defined. Coordination protocols activated." },
  { step: "GITHUB", description: "Code, docs, assets in version control. Open. Forkable. Transparent." },
  { step: "PROTOTYPE", description: "Working artifact deployed. Minimum viable system. Real environment." },
  { step: "TEST", description: "Flourishing metrics tracked. Evidence gathered. Assumptions validated." },
  { step: "EVIDENCE", description: "Results documented. Learnings extracted. Published to commons." },
  { step: "FORK", description: "Others fork the project. Adapt to their context. Improve." },
  { step: "REPLICATE", description: "Pattern enters the 271. Domain knowledge deepens. Cycle continues." },
];

const principles = [
  "AI guides. Human decides. Always.",
  "Open by default. Closed by exception.",
  "Evidence over narrative. Always.",
  "Forkable > Perfect. Evolution > Completion.",
  "Local context > Universal prescription.",
  "Flourishing metrics > Vanity metrics.",
  "Community ownership. Not platform extraction.",
  "Continuous learning. Not project completion.",
];

export default function CreatorCommunityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="cc-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">EXECUTION LAYER</p>
              <h1 id="cc-heading" className="heading-xl font-light text-foreground mb-6">
                CREATOR COMMUNITY
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                The execution layer for civilizational creation. 369 domains. 271 patterns. 99,999 projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Execution Layer / Project Catalogue</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture */}
        <section className="section-padding" aria-labelledby="arch-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="arch-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Core Architecture
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Three numbers. One system.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {architecture.map((item) => (
                  <div key={item.label} className="card-base text-center group">
                    <h3 className="font-medium text-foreground text-2xl mb-2 group-hover:text-primary transition-colors">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Build Pipeline */}
        <section className="section-padding bg-muted/30" aria-labelledby="pipeline-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="pipeline-heading" className="heading-lg font-light text-foreground text-center mb-12">
                The Build Pipeline
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                PROJECT → BUILD → AI GUIDE → HUMAN DECISION → TEAM → GITHUB → PROTOTYPE → TEST → EVIDENCE → FORK → REPLICATE
              </p>
              <div className="space-y-4">
                {buildPipeline.map((stage, i) => (
                  <div key={stage.step} className="card-base relative group flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span className="text-lg font-light">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{stage.step}</h3>
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                    </div>
                    {i < buildPipeline.length - 1 && (
                      <div className="flex items-center text-primary font-light text-xl" aria-hidden="true">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding" aria-labelledby="principles-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="principles-heading" className="heading-lg font-light text-foreground text-center mb-12">
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

        {/* Relationship to UGT */}
        <section className="section-padding bg-muted/30" aria-labelledby="ugt-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="ugt-heading" className="heading-md font-light text-foreground text-center mb-8">
                Relationship to Universal Guard Trust
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-center">
                <p>
                  Creator Community is the <strong className="text-foreground">execution layer</strong> for the Universal Guard Trust framework.
                </p>
                <p>
                   UGT provides the architecture. Creator Community provides the <strong className="text-foreground">machinery</strong> — the AI-guided pipeline, project catalogue, fork-and-replicate mechanism.
                </p>
                <p>
                  <strong className="text-foreground">UGT = Operating System.</strong> Creator Community = Application Factory.
                </p>
                <p>
                  They are distinct entities. Creator Community is not UGT. It expresses UGT principles in execution.
                </p>
              </div>
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
                  <h3 className="font-medium text-foreground mb-2">Project Catalogue Status</h3>
                  <p>The 99,999-project universe is a <strong className="text-foreground">catalogue of possibility</strong> — not all projects are active. The number represents addressable space.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Entity Separation</h3>
                  <p>Creator Community is a distinct initiative. It is not Universal Guard Trust, not Boysenberry, not Zentium, not Kingdom of Shiva. The personal website explains relationships but does not merge identities.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">AI Role Clarity</h3>
                  <p>AI guides (architecture, code, design, research, documentation). Human decides (approval, direction, ethics, deployment). This boundary is non-negotiable in the pipeline.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Open by Default</h3>
                  <p>Projects live on GitHub. Forkable. Transparent. The commons grows through sharing, not hoarding. Closed-by-exception requires explicit justification.</p>
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
                  { title: "Universal Guard Trust", description: "The architecture framework.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Heaven on Earth", description: "The civilizational blueprint.", href: "/heaven-on-earth", status: "BUILDING" },
                  { title: "Kingdom of Shiva", description: "Knowledge civilization project.", href: "/kingdom-of-shiva", status: "BUILDING" },
                  { title: "Boysenberry", description: "Community economy project.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Technology / AI", description: "AI systems powering the pipeline.", href: "/technology/ai", status: "BUILDING" },
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
                <Link href="/technology/ai" className="btn-secondary">
                  Technology / AI
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