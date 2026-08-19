import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const methodologySteps = [
  {
    step: "SEE THE WHOLE",
    description: "Before optimizing parts, understand the system. Map the territory. Civilization, economy, technology, ecology, consciousness — these are not separate domains. They are one living system. The first move is always zooming out.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7",
  },
  {
    step: "QUESTION",
    description: "Every assumption is a hypothesis. Why does this system exist? Who benefits? What happens if we remove it? What would a child ask? What would an ancestor recognize? The quality of the question determines the quality of the system.",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: "CONNECT KNOWLEDGE",
    description: "No domain owns truth. Archaeology informs blockchain design. Temple architecture informs VR spaces. Indigenous economics informs community stores. Vedic mathematics informs AI architectures. The breakthrough lives at the intersections.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    step: "CREATE",
    description: "Thinking without making is hallucination. Prototype the system. Write the code. Design the incentive. Compose the music. Build the store. Record the podcast. The artifact reveals what the theory hid. Create to think.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l4 4 4-4",
  },
  {
    step: "TEST",
    description: "Deploy in reality. Not in simulation. Not in theory. Real users. Real communities. Real money. Real consequences. The test is not 'does it work?' but 'what breaks?' and 'who is harmed?' and 'what emerges?'",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    step: "MEASURE",
    description: "What you measure becomes the target. Measure flourishing, not engagement. Measure circulation, not extraction. Measure learning, not output. Measure resilience, not efficiency. The metrics are the system's DNA.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    step: "LEARN",
    description: "Data is not wisdom. Pattern recognition is not understanding. The learning step asks: what did we not expect? What assumption failed? What new question emerged? This is where the system evolves or stagnates.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    step: "SHARE",
    description: "Closed systems die. Open source the code. Publish the learnings. Document the failures. Teach the method. Fork the project. The Creator Community's 99,999 projects exist because sharing compounds. Knowledge that flows grows.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  },
  {
    step: "IMPROVE",
    description: "The loop closes by opening again. Better question. Deeper connection. Cleaner prototype. Harder test. Truer metric. Deeper learning. Wider sharing. The system that improves itself is the only system that survives.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const emphasisAreas = [
  { title: "Systems Thinking", description: "Everything connects. Optimize for the whole, not the part. Feedback loops. Emergence. Leverage points." },
  { title: "Experimentation", description: "Theory is cheap. Reality is expensive. Run the experiment. Accept failure as data. Iterate fast." },
  { title: "Technology", description: "Not for its own sake. As leverage. As infrastructure. As amplifier of human intention." },
  { title: "Human Experience", description: "Systems serve people. Not users. Not customers. People — with bodies, minds, relationships, spirits." },
  { title: "Community", description: "The unit of resilience. The unit of meaning. The unit of civilization. Design for the collective." },
  { title: "Decentralization", description: "Distribute power. Distribute value. Distribute knowledge. Distribute risk. No single points of failure." },
  { title: "Creative Thinking", description: "First principles. Analogy. Inversion. Combination. The unfamiliar angle. The question no one asked." },
  { title: "Open Learning", description: "Share everything. Learn from everyone. No gatekeeping. No prestige games. The commons grows." },
];

export const metadata: Metadata = {
  title: "How I Think",
  description: "The methodology behind the work — See the Whole, Question, Connect Knowledge, Create, Test, Measure, Learn, Share, Improve. Systems thinking, experimentation, technology as infrastructure, human experience, community, decentralization, creative thinking, open learning.",
  openGraph: {
    title: "How I Think — Shanmugam Vijay Balakrishnan",
    description: "The methodology: See the Whole → Question → Connect Knowledge → Create → Test → Measure → Learn → Share → Improve.",
    type: "website",
  },
};

export default function HowIThinkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="methodology-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">METHODOLOGY</p>
              <h1 id="methodology-heading" className="heading-xl font-light text-foreground mb-6">
                How I Think
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                A loop, not a ladder. Nine steps that repeat at every scale — from a single feature to a civilizational system.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Loop */}
        <section className="section-padding" aria-labelledby="loop-heading">
          <div className="container-custom">
            <h2 id="loop-heading" className="sr-only">The Methodology Loop</h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-9">
                {methodologySteps.map((step, index) => (
                  <article
                    key={step.step}
                    className="card-base text-center group relative"
                  >
                    {/* Connection line between steps */}
                    {index < methodologySteps.length - 1 && (
                      <div className="absolute top-10 right-0 w-full h-0.5 bg-gradient-to-r from-border to-transparent -z-10 md:w-[calc(100%+1.5rem)]" aria-hidden="true" />
                    )}
                    
                    <div className="w-20 h-20 rounded-full border border-border bg-background flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                      <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center z-20">
                      {index + 1}
                    </div>
                    
                    <h3 className="font-medium text-foreground mb-2 text-sm">{step.step}</h3>
                    <p className="text-xs text-muted-foreground prose-content">{step.description}</p>
                  </article>
                ))}
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
                This loop is not linear. You can enter at any step. You cycle through it at different speeds for different problems. The only requirement: complete the loop. Incomplete loops create fragile systems.
              </p>
            </div>
          </div>
        </section>

        {/* Emphasis Areas */}
        <section className="section-padding bg-muted/30" aria-labelledby="emphasis-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="emphasis-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Areas of Emphasis
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                The methodology is shaped by what it pays attention to. These eight areas determine what questions get asked, what connections get made, and what systems get built.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {emphasisAreas.map((area) => (
                  <div key={area.title} className="card-interactive group text-center">
                    <h3 className="font-medium text-foreground mb-3 group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Practical Application */}
        <section className="section-padding" aria-labelledby="application-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="application-heading" className="heading-lg font-light text-foreground text-center mb-12">
                In Practice
              </h2>
              <div className="prose-content space-y-8 text-muted-foreground">
                <p>
                  This methodology is not abstract. It shapes every project on the work map:
                </p>
                <ul className="space-y-4 list-disc list-inside">
                  <li>
                    <strong className="text-foreground">Boysenberry</strong> — Saw the whole (community + economy + technology), questioned extraction models, connected indigenous economics with modern platforms, created the community store prototype, testing in pilot pincodes, measuring circulation and flourishing, learning from each store, sharing the model, improving the platform.
                  </li>
                  <li>
                    <strong className="text-foreground">Universal Guard Trust</strong> — Saw the whole (civilization as living system), questioned static blueprints, connected archaeology/philosophy/science/technology, created the UGT architecture, testing through Heaven on Earth and Kingdom of Shiva, measuring flourishing metrics, learning continuously, sharing as open framework, improving through Creator Community.
                  </li>
                  <li>
                    <strong className="text-foreground">Zentium</strong> — Saw the whole (value + governance + infrastructure), questioned centralized money, connected blockchain with community economics, created decentralized protocols, testing in controlled environments, measuring adoption and resilience, learning from each iteration, sharing open source, improving the chain.
                  </li>
                  <li>
                    <strong className="text-foreground">OpenMontage / Creative AI</strong> — Saw the whole (creativity + automation + local AI), questioned cloud-dependent creation, connected cinematic pipelines with open models, created local-first video generation, testing with real creative workflows, measuring quality and latency, learning from artist feedback, sharing tools, improving pipelines.
                  </li>
                </ul>
                <p>
                  The methodology is the common thread. The projects are the varied expressions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="section-padding bg-muted/30" aria-labelledby="not-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="not-heading" className="heading-md font-light text-foreground mb-6">
                What This Is Not
              </h2>
              <div className="space-y-3 text-left text-sm text-muted-foreground">
                <p>❌ A rigid framework you must follow</p>
                <p>❌ A productivity system or life hack</p>
                <p>❌ A substitute for domain expertise</p>
                <p>❌ A guarantee of success</p>
                <p>❌ The only way to think</p>
              </div>
              <p className="body-lg text-muted-foreground mt-8">
                It is a description of what actually works — observed across decades of building, failing, learning, and building again.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                See the Methodology in Action
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/ideas" className="btn-outline">
                  Read the Principles
                </Link>
                <Link href="/journey" className="btn-secondary">
                  Trace the Evolution
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