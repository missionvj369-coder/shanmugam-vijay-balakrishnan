import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const principles = [
  {
    title: "GOING BACK TO OUR ROOTS",
    description: "Recovering local knowledge and community wisdom as foundation. Local production, community stores, traditional wisdom.",
    projects: ["/boysenberry", "/kingdom-of-shiva", "/universal-guard-trust"],
    projectLabels: ["Boysenberry", "Kingdom of Shiva", "Universal Guard Trust"],
  },
  {
    title: "COMMUNITY BEFORE EXTRACTION",
    description: "Community participation creates locally circulating value. Referral incentives, community purchasing, local employment, profit allocation.",
    projects: ["/boysenberry", "/creator-community"],
    projectLabels: ["Boysenberry", "Creator Community"],
  },
  {
    title: "TECHNOLOGY IN SERVICE OF HUMANITY",
    description: "Technology is infrastructure for human possibility. Every system must expand human capability, agency, and flourishing.",
    projects: ["/technology", "/technology/ai", "/technology/creative-ai", "/zentium"],
    projectLabels: ["Technology", "AI Systems", "Creative AI", "Zentium"],
  },
  {
    title: "INTEGRATED INTELLIGENCE",
    description: "Human wisdom, machine capability, collective knowledge, ecological awareness — working as one system. The UGT chain.",
    projects: ["/universal-guard-trust", "/heaven-on-earth"],
    projectLabels: ["Universal Guard Trust", "Heaven on Earth"],
  },
  {
    title: "LOCAL ACTION + GLOBAL CONNECTION",
    description: "Local solutions that connect through shared protocols. Community stores, knowledge nodes, developers — a planetary nervous system.",
    projects: ["/boysenberry", "/creator-community", "/universal-guard-trust"],
    projectLabels: ["Boysenberry", "Creator Community", "Universal Guard Trust"],
  },
  {
    title: "DECENTRALIZATION",
    description: "Centralized systems create single points of failure. Decentralization is structural resilience — in governance, value, knowledge, infrastructure.",
    projects: ["/zentium", "/technology/blockchain", "/boysenberry"],
    projectLabels: ["Zentium", "Blockchain Systems", "Boysenberry"],
  },
  {
    title: "CREATION OVER CONSUMPTION",
    description: "The creator economy trains agency. Building, coding, composing, writing, designing — these are acts of civilization.",
    projects: ["/creator-community", "/media", "/technology/creative-ai"],
    projectLabels: ["Creator Community", "Media", "Creative AI"],
  },
  {
    title: "KNOWLEDGE → CAPABILITY",
    description: "Knowledge that cannot be applied is decoration. Texts become practices. Philosophy becomes frameworks. Heritage becomes living tradition.",
    projects: ["/kingdom-of-shiva", "/universal-guard-trust", "/creator-community"],
    projectLabels: ["Kingdom of Shiva", "Universal Guard Trust", "Creator Community"],
  },
  {
    title: "COMMUNITY PROSPERITY",
    description: "Prosperity is not GDP. It is: food security, health access, education, relationships, creative expression, agency. Boysenberry measures what matters.",
    projects: ["/boysenberry", "/universal-guard-trust", "/heaven-on-earth"],
    projectLabels: ["Boysenberry", "Universal Guard Trust", "Heaven on Earth"],
  },
  {
    title: "HUMAN FLOURISHING",
    description: "The ultimate metric. Not users, revenue, or scale. Flourishing means: autonomy, competence, relatedness, meaning, vitality. Every system must serve this.",
    projects: ["/universal-guard-trust", "/heaven-on-earth", "/boysenberry"],
    projectLabels: ["Universal Guard Trust", "Heaven on Earth", "Boysenberry"],
  },
  {
    title: "CONTINUOUS LEARNING",
    description: "No blueprint is final. Understand → Connect → Create → Test → Measure → Learn → Adapt. Fixed systems die. Learning systems evolve.",
    projects: ["/universal-guard-trust", "/creator-community", "/how-i-think"],
    projectLabels: ["Universal Guard Trust", "Creator Community", "How I Think"],
  },
  {
    title: "CIVILIZATION AS A LIVING SYSTEM",
    description: "Civilization is a metabolism. It learns or it collapses. Heaven on Earth, Kingdom of Shiva, and UGT design civilization as a learning, adaptive organism.",
    projects: ["/heaven-on-earth", "/kingdom-of-shiva", "/universal-guard-trust"],
    projectLabels: ["Heaven on Earth", "Kingdom of Shiva", "Universal Guard Trust"],
  },
];

export const metadata: Metadata = {
  title: "Ideas",
  description: "Core principles behind the work. 12 principles connecting community, intelligence, civilization, technology, and human flourishing.",
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
                Design constraints that shape every project and system.
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
                Explore the Work
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