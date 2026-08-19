import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const journeyStages = [
  {
    phase: "EARLY CREATION",
    period: "Foundational Years",
    description: "First experiments in code, design, and systems thinking. Learning the craft. Building small tools. Understanding how software shapes behavior. The creator identity forms.",
    highlights: [
      "First programming experiences",
      "Early web projects and experiments",
      "Design and systems thinking foundations",
      "Understanding technology as leverage",
    ],
    color: "#6b7280",
  },
  {
    phase: "TECHNOLOGY / EXPERIMENTATION",
    period: "Deep Technical Exploration",
    description: "Pushing boundaries across multiple technology domains. AI, blockchain, VR, web technologies, automation. Not specialization — deliberate breadth to understand the full technology stack.",
    highlights: [
      "AI/ML model experimentation",
      "Blockchain and smart contract development",
      "VR/AR prototype development",
      "Creative coding and generative systems",
      "Automation pipeline architecture",
    ],
    color: "#3b82f6",
  },
  {
    phase: "COMMUNITY / BUSINESS",
    period: "Applied Systems in Reality",
    description: "Moving from pure technology to human systems. Understanding how communities organize, how economies function, how incentives shape behavior. The bridge between code and civilization.",
    highlights: [
      "Community building experiments",
      "Economic model prototyping",
      "Incentive design research",
      "Local business engagement",
    ],
    color: "#22c55e",
  },
  {
    phase: "BOYSENBERRY",
    period: "Community Economy in Action",
    description: "Founding Boysenberry Marketing Private Limited. Translating community-first economic theory into operating reality. Community stores, local production, referral participation, profit circulation. Building the model pincode by pincode.",
    highlights: [
      "Company incorporation",
      "Community store pilot launches",
      "Local production network development",
      "Referral incentive system design",
      "Community development profit allocation",
      "UGT Essential Store vision",
    ],
    color: "#22c55e",
    status: "BUILDING",
    href: "/boysenberry",
  },
  {
    phase: "ZENTIUM",
    period: "Decentralized Infrastructure",
    description: "Creating Zentium as a decentralized blockchain project. Community-oriented digital value. Blockchain infrastructure for community economies. VR, web, metaverse integration vision. Separate from UGT — its own technical trajectory.",
    highlights: [
      "Zentium coin creation",
      "Blockchain protocol development",
      "Decentralized governance research",
      "Community money concept exploration",
      "VR/Metaverse integration vision",
    ],
    color: "#8b5cf6",
    status: "BUILDING",
    href: "/zentium",
  },
  {
    phase: "UNIVERSAL GUARD TRUST",
    period: "Global Civilizational Framework",
    description: "Establishing UGT as an open architecture for civilizational learning and creation. The core chain: Human Evolution → Integrated Intelligence → Human Flourishing → Civilization Transformation → Conscious Civilization → Heaven on Earth. Canonical source: ugtglobal.space",
    highlights: [
      "UGT framework architecture",
      "Integrated Intelligence research",
      "Global trust establishment",
      "ugtglobal.space launch",
      "Open architecture publication",
    ],
    color: "#3b82f6",
    status: "OPERATING",
    href: "/universal-guard-trust",
  },
  {
    phase: "INTEGRATED INTELLIGENCE",
    period: "Cognitive Architecture Research",
    description: "Deepening the intelligence layer of UGT. Human wisdom + machine capability + collective knowledge + ecological awareness as one integrated system. Not AI vs human — integrated intelligence.",
    highlights: [
      "Human-AI collaboration frameworks",
      "Collective intelligence protocols",
      "Ecological awareness integration",
      "Wisdom tradition digitization",
    ],
    color: "#3b82f6",
    status: "RESEARCH",
    href: "/universal-guard-trust#integrated-intelligence",
  },
  {
    phase: "HEAVEN ON EARTH",
    period: "Civilizational Architecture",
    description: "Developing the Heaven on Earth blueprint through UGT. An evolving working architecture for conscious civilization. Domains: human life, consciousness, intelligence, relationships, education, health, economy, technology, ecology, community, civilization, measurement, projects, evidence, continuous learning.",
    highlights: [
      "Blueprint architecture design",
      "14-domain civilizational model",
      "Flourishing metrics development",
      "Continuous learning loop design",
      "Evidence-based iteration framework",
    ],
    color: "#f59e0b",
    status: "BUILDING",
    href: "/heaven-on-earth",
  },
  {
    phase: "CREATOR COMMUNITY",
    period: "Execution Layer at Scale",
    description: "Building the Creator Community as the execution layer for civilizational creation. 369 domains, 271 patterns, 99,999 projects. PROJECT → BUILD → AI GUIDE → HUMAN DECISION → TEAM → GITHUB → PROTOTYPE → TEST → EVIDENCE → FORK → REPLICATE.",
    highlights: [
      "369 domain taxonomy",
      "271 reusable patterns",
      "99,999 project catalogue",
      "AI-guided build pipeline",
      "Fork-and-replicate mechanism",
    ],
    color: "#ec4899",
    status: "BUILDING",
    href: "/creator-community",
  },
  {
    phase: "KINGDOM OF SHIVA",
    period: "Hindu Knowledge Civilization",
    description: "Launching Kingdom of Shiva as a separate civilizational knowledge initiative. Virtual civilization of Hindu knowledge, heritage, philosophy, and living traditions. Texts, philosophy, temples, sacred geography, history, archaeology, science, mathematics, medicine, yoga, languages, arts, music, festivals, living traditions, global communities. Evidence-aware exploration.",
    highlights: [
      "Knowledge civilization architecture",
      "Multi-domain coverage design",
      "Evidence-aware methodology",
      "Living tradition documentation",
      "Global community connection",
    ],
    color: "#f59e0b",
    status: "BUILDING",
    href: "/kingdom-of-shiva",
  },
  {
    phase: "AI CREATION SYSTEMS",
    period: "Creative Technology Frontier",
    description: "Advancing OpenMontage and creative AI systems. Local-first video generation, voice synthesis, music creation, cinematic pipelines, automation. Open models, local AI, creative automation. Technology as instrument for human creativity.",
    highlights: [
      "OpenMontage development",
      "Local AI video generation",
      "Voice and music synthesis",
      "Cinematic automation pipelines",
      "Creative workflow integration",
    ],
    color: "#ec4899",
    status: "BUILDING",
    href: "/technology/creative-ai",
  },
  {
    phase: "FUTURE",
    period: "Ongoing Evolution",
    description: "The work continues. Each system feeds the others. The work map is a living document. New nodes emerge. Connections deepen. The loop repeats: SEE THE WHOLE → QUESTION → CONNECT KNOWLEDGE → CREATE → TEST → MEASURE → LEARN → SHARE → IMPROVE.",
    highlights: [
      "Cross-system integration",
      "New domain exploration",
      "Community expansion",
      "Technology maturation",
      "Civilizational scale learning",
    ],
    color: "#8b5cf6",
  },
];

export const metadata: Metadata = {
  title: "Journey",
  description: "The evolution of the work — from early creation through technology experimentation, community business, Boysenberry, Zentium, Universal Guard Trust, Integrated Intelligence, Heaven on Earth, Creator Community, Kingdom of Shiva, AI creation systems, to the future.",
  openGraph: {
    title: "Journey — Shanmugam Vijay Balakrishnan",
    description: "Tracing the evolution of a creator's work across community, intelligence, civilization, technology, and decentralization.",
    type: "website",
  },
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="journey-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">JOURNEY</p>
              <h1 id="journey-heading" className="heading-xl font-light text-foreground mb-6">
                The Evolution of the Work
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Not a linear career path. A spiral of deepening understanding. Each phase builds on the last. The work map is the current snapshot of a moving process.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding" aria-labelledby="timeline-heading">
          <div className="container-custom">
            <h2 id="timeline-heading" className="sr-only">Journey Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Central timeline line */}
                <div className="absolute left-8 md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" aria-hidden="true" />
                
                <div className="space-y-12">
                  {journeyStages.map((stage, index) => (
                    <article
                      key={stage.phase}
                      className="relative flex flex-col md:flex-row gap-8 group"
                    >
                      {/* Timeline dot and phase label */}
                      <div className="flex-shrink-0 w-16 md:w-32 relative z-10">
                        <div className="absolute left-8 md:left-[calc(50%-8px)] top-4 w-4 h-4 rounded-full border-4 transition-all duration-300 group-hover:scale-125" style={{ 
                          backgroundColor: stage.color,
                          borderColor: stage.color 
                        }} />
                        <div className="text-right md:text-left pr-4 md:pr-0">
                          <p className="caption font-medium text-foreground" style={{ color: stage.color }}>
                            {stage.phase}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{stage.period}</p>
                          {stage.status && (
                            <span className={`status-badge inline-block mt-2 ${stage.status === "OPERATING" ? "status-operating" : stage.status === "BUILDING" ? "status-building" : stage.status === "RESEARCH" ? "status-research" : "status-planned"}`}>
                              {stage.status}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 card-base relative pl-4 md:pl-0">
                        <p className="text-sm text-muted-foreground mb-4 prose-content">{stage.description}</p>
                        
                        <div className="grid gap-2 sm:grid-cols-2">
                          {stage.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        {stage.href && (
                          <Link
                            href={stage.href}
                            className="inline-flex items-center gap-1 text-sm text-primary mt-4 hover:underline focus-visible-ring"
                          >
                            Explore {stage.phase} →
                          </Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Transitions */}
        <section className="section-padding bg-muted/30" aria-labelledby="transitions-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="transitions-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Key Transitions
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                The journey is defined by inflection points — moments where the work fundamentally shifted direction or depth.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Technology → Human Systems",
                    description: "Realizing that code alone cannot solve civilization-scale problems. The pivot from pure technical experimentation to community economics, incentive design, and human coordination systems.",
                    from: "TECHNOLOGY / EXPERIMENTATION",
                    to: "COMMUNITY / BUSINESS",
                  },
                  {
                    title: "Single Project → Ecosystem",
                    description: "Boysenberry proved the community economy model. UGT provided the civilizational framework. Zentium added decentralized infrastructure. The insight: these are not separate projects — they are nodes in one coherent system.",
                    from: "BOYSENBERRY / ZENTIUM / UGT",
                    to: "INTEGRATED ECOSYSTEM",
                  },
                  {
                    title: "Framework → Execution",
                    description: "UGT and Heaven on Earth are architectures. Creator Community is the execution layer. The shift from designing systems to building the machinery that produces systems at scale — 99,999 projects.",
                    from: "UNIVERSAL GUARD TRUST / HEAVEN ON EARTH",
                    to: "CREATOR COMMUNITY",
                  },
                  {
                    title: "Universal → Particular",
                    description: "Kingdom of Shiva applies the civilizational framework to a specific knowledge tradition. Not abstract civilization — Hindu civilization. Evidence-aware. Living tradition. The universal principles tested in a particular domain.",
                    from: "HEAVEN ON EARTH / UGT",
                    to: "KINGDOM OF SHIVA",
                  },
                ].map((transition) => (
                  <div key={transition.title} className="card-base">
                    <h3 className="font-medium text-foreground mb-3">{transition.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{transition.description}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">{transition.from}</span>
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-primary font-medium">{transition.to}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="section-padding" aria-labelledby="focus-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="focus-heading" className="heading-lg font-light text-foreground mb-6">
                Current Focus
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-left max-w-2xl mx-auto">
                <p>
                  The work currently operates across all phases simultaneously. This is not sequential — it is parallel:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong className="text-foreground">Boysenberry</strong> — Scaling community stores, refining the economic model, building the AI-assisted platform</li>
                  <li><strong className="text-foreground">Universal Guard Trust</strong> — Deepening the Integrated Intelligence research, evolving the Heaven on Earth blueprint</li>
                  <li><strong className="text-foreground">Creator Community</strong> — Expanding the 369 domains, improving the AI-guided build pipeline, growing the project catalogue</li>
                  <li><strong className="text-foreground">Kingdom of Shiva</strong> — Building the knowledge civilization platform, documenting living traditions, connecting global communities</li>
                  <li><strong className="text-foreground">Zentium</strong> — Advancing the blockchain protocol, exploring community money mechanics, researching VR/metaverse integration</li>
                  <li><strong className="text-foreground">Technology / Creative AI</strong> — OpenMontage local video generation, creative automation pipelines, open model optimization</li>
                </ul>
                <p className="mt-4">
                  The work map shows the current state. The journey shows how we got here. The future is the next iteration of the loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                Explore the Current Work
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/ideas" className="btn-outline">
                  Read the Principles
                </Link>
                <Link href="/how-i-think" className="btn-secondary">
                  Understand the Methodology
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