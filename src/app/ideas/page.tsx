import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const principles = [
  {
    title: "GOING BACK TO OUR ROOTS",
    description: "Modern systems have disconnected us from local knowledge, community wisdom, and ancestral practices. The path forward requires recovering what was lost — not as nostalgia, but as foundation. Local production, community stores, indigenous knowledge, and traditional wisdom are not obstacles to progress; they are the substrate on which resilient futures are built.",
    projects: ["/boysenberry", "/kingdom-of-shiva", "/universal-guard-trust"],
    projectLabels: ["Boysenberry", "Kingdom of Shiva", "Universal Guard Trust"],
  },
  {
    title: "COMMUNITY BEFORE EXTRACTION",
    description: "Conventional business extracts value from communities. The alternative is systems where community participation creates value that circulates locally. Referral incentives, community purchasing, local employment, and profit allocation to community development — these are not add-ons. They are the architecture.",
    projects: ["/boysenberry", "/creator-community"],
    projectLabels: ["Boysenberry", "Creator Community"],
  },
  {
    title: "TECHNOLOGY IN SERVICE OF HUMANITY",
    description: "Technology is not the destination. Technology is infrastructure for human possibility. Every AI model, every blockchain, every VR environment, every automation pipeline must be evaluated against one question: does this expand human capability, agency, and flourishing? If not, it is noise.",
    projects: ["/technology", "/technology/ai", "/technology/creative-ai", "/zentium"],
    projectLabels: ["Technology", "AI Systems", "Creative AI", "Zentium"],
  },
  {
    title: "INTEGRATED INTELLIGENCE",
    description: "Human evolution → Integrated intelligence → Human flourishing → Civilization transformation → Conscious civilization → Heaven on Earth. This is the UGT chain. Intelligence is not artificial vs. natural. It is integrated — human wisdom, machine capability, collective knowledge, and ecological awareness working as one system.",
    projects: ["/universal-guard-trust", "/heaven-on-earth"],
    projectLabels: ["Universal Guard Trust", "Heaven on Earth"],
  },
  {
    title: "LOCAL ACTION + GLOBAL CONNECTION",
    description: "Global problems require local solutions that connect. A community store in one pincode. A knowledge node in one tradition. A developer in one city. When these connect through shared protocols, open standards, and common purpose, they become a planetary nervous system. Think globally, act locally — but with digital coordination.",
    projects: ["/boysenberry", "/creator-community", "/universal-guard-trust"],
    projectLabels: ["Boysenberry", "Creator Community", "Universal Guard Trust"],
  },
  {
    title: "DECENTRALIZATION",
    description: "Centralized systems create single points of failure, extraction, and control. Decentralization — in governance, in value, in knowledge, in infrastructure — is not ideological. It is structural resilience. Zentium, blockchain systems, and distributed community economies are experiments in this direction.",
    projects: ["/zentium", "/technology/blockchain", "/boysenberry"],
    projectLabels: ["Zentium", "Blockchain Systems", "Boysenberry"],
  },
  {
    title: "CREATION OVER CONSUMPTION",
    description: "The consumer economy trains passivity. The creator economy (real, not branded) trains agency. Building, coding, composing, writing, growing, designing, organizing — these are acts of civilization. The Creator Community's 99,999 projects are not a catalogue. They are an invitation to make.",
    projects: ["/creator-community", "/media", "/technology/creative-ai"],
    projectLabels: ["Creator Community", "Media", "Creative AI"],
  },
  {
    title: "KNOWLEDGE → CAPABILITY",
    description: "Knowledge that cannot be applied is decoration. The Kingdom of Shiva, UGT Blueprint, and Creator Community patterns exist to convert knowledge into capability. Texts become practices. Philosophy becomes decision frameworks. Heritage becomes living tradition. Archaeology becomes engineering insight.",
    projects: ["/kingdom-of-shiva", "/universal-guard-trust", "/creator-community"],
    projectLabels: ["Kingdom of Shiva", "Universal Guard Trust", "Creator Community"],
  },
  {
    title: "COMMUNITY PROSPERITY",
    description: "Prosperity is not GDP. It is not token price. It is: food security, health access, education quality, relationship depth, creative expression, spiritual grounding, ecological health, and agency. Boysenberry's community economy model measures what matters. UGT's flourishing metrics track what counts.",
    projects: ["/boysenberry", "/universal-guard-trust", "/heaven-on-earth"],
    projectLabels: ["Boysenberry", "Universal Guard Trust", "Heaven on Earth"],
  },
  {
    title: "HUMAN FLOURISHING",
    description: "The ultimate metric. Not users. Not revenue. Not scale. Flourishing means: autonomy, competence, relatedness, meaning, vitality, and transcendence. Every system — economic, technological, civilizational — must be evaluated against this. If it does not serve flourishing, it serves something else.",
    projects: ["/universal-guard-trust", "/heaven-on-earth", "/boysenberry"],
    projectLabels: ["Universal Guard Trust", "Heaven on Earth", "Boysenberry"],
  },
  {
    title: "CONTINUOUS LEARNING",
    description: "No blueprint is final. The UGT architecture: Understand → Connect → Create → Test → Measure → Learn → Share → Adapt → Create Again. This is not a methodology. It is the nature of living systems. Fixed systems die. Learning systems evolve. The work map is a snapshot of a moving process.",
    projects: ["/universal-guard-trust", "/creator-community", "/how-i-think"],
    projectLabels: ["Universal Guard Trust", "Creator Community", "How I Think"],
  },
  {
    title: "CIVILIZATION AS A LIVING SYSTEM",
    description: "Civilization is not a monument. It is a metabolism. It takes in energy, information, and matter. It produces culture, technology, institutions, and waste. It learns or it collapses. Heaven on Earth, Kingdom of Shiva, and UGT are attempts to design civilization as a learning, adaptive, self-correcting organism — not a static plan.",
    projects: ["/heaven-on-earth", "/kingdom-of-shiva", "/universal-guard-trust"],
    projectLabels: ["Heaven on Earth", "Kingdom of Shiva", "Universal Guard Trust"],
  },
];

export const metadata: Metadata = {
  title: "Ideas",
  description: "Core principles behind the work — Going Back to Our Roots, Community Before Extraction, Technology in Service of Humanity, Integrated Intelligence, and more. Each principle links to the projects where it lives.",
  openGraph: {
    title: "Ideas — Shanmugam Vijay Balakrishnan",
    description: "The thinking behind the work. 12 core principles connecting community, intelligence, civilization, technology, and human flourishing.",
    type: "website",
  },
};

export default function IdeasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="ideas-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">IDEAS</p>
              <h1 id="ideas-heading" className="heading-xl font-light text-foreground mb-6">
                The Principles Behind the Work
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                These are not abstract values. They are design constraints. Each principle shapes specific projects, appears in specific systems, and can be traced through the work map.
              </p>
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section className="section-padding" aria-labelledby="principles-heading">
          <div className="container-custom">
            <h2 id="principles-heading" className="sr-only">Core Principles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="card-interactive group"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span className="text-xl font-light">{index + 1}</span>
                    </div>
                    <h3 className="font-medium text-foreground flex-1 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-4 prose-content">
                    {principle.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {principle.projects.map((href, i) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-xs px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                      >
                        {principle.projectLabels[i]}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Principle Deep Dive */}
        <section className="section-padding bg-muted/30" aria-labelledby="deep-dive-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="deep-dive-heading" className="heading-lg font-light text-foreground text-center mb-12">
                How Principles Connect
              </h2>
              <div className="prose-content space-y-8 text-muted-foreground">
                <p>
                  Principles do not exist in isolation. They form a coherent system:
                </p>
                <ul className="space-y-4 list-disc list-inside">
                  <li>
                    <strong className="text-foreground">GOING BACK TO OUR ROOTS</strong> provides the cultural and knowledge substrate for <strong className="text-foreground">COMMUNITY BEFORE EXTRACTION</strong> and <strong className="text-foreground">KNOWLEDGE → CAPABILITY</strong>.
                  </li>
                  <li>
                    <strong className="text-foreground">TECHNOLOGY IN SERVICE OF HUMANITY</strong> constrains <strong className="text-foreground">DECENTRALIZATION</strong> and <strong className="text-foreground">CREATION OVER CONSUMPTION</strong> — technology serves the principles, not the reverse.
                  </li>
                  <li>
                    <strong className="text-foreground">INTEGRATED INTELLIGENCE</strong> is the cognitive architecture enabling <strong className="text-foreground">LOCAL ACTION + GLOBAL CONNECTION</strong> and <strong className="text-foreground">CONTINUOUS LEARNING</strong>.
                  </li>
                  <li>
                    <strong className="text-foreground">COMMUNITY PROSPERITY</strong> and <strong className="text-foreground">HUMAN FLOURISHING</strong> are the outcome metrics for <strong className="text-foreground">CIVILIZATION AS A LIVING SYSTEM</strong>.
                  </li>
                </ul>
                <p>
                  This is why the work map shows connections. The projects are not separate experiments — they are nodes in a principle-driven system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                See Principles in Action
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/how-i-think" className="btn-outline">
                  Understand the Methodology
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