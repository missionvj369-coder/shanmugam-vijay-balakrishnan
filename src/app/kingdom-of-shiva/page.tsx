import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kingdom of Shiva",
  description: "A Virtual Civilization of Hindu Knowledge, Heritage, Philosophy and Living Traditions. Texts, philosophy, temples, sacred geography, history, archaeology, science, mathematics, medicine, yoga, languages, arts, music, festivals, living traditions, global communities. Evidence-aware exploration.",
  openGraph: {
    title: "Kingdom of Shiva — Hindu Knowledge Civilization",
    description: "Virtual civilization of Hindu knowledge, heritage, philosophy and living traditions.",
    type: "website",
  },
};

const coverage = [
  "texts",
  "philosophy",
  "temples",
  "sacred geography",
  "history",
  "archaeology",
  "science",
  "mathematics",
  "medicine",
  "yoga",
  "languages",
  "arts",
  "music",
  "festivals",
  "living traditions",
  "global communities",
];

const methodology = [
  { title: "Evidence-Aware", description: "Claims are tested against textual, archaeological, scientific, and experiential evidence. Not dogma. Not revisionism. Evidence-aware." },
  { title: "Non-Sectarian", description: "Hindu civilization is not one sect. Shaiva, Vaishnava, Shakta, Smarta, and countless sampradayas — all included. No collapse into single interpretation." },
  { title: "Living Tradition", description: "Not museum curation. Practitioners, teachers, communities, lineages — living knowledge is primary. Texts are maps. Territory is lived." },
  { title: "Global Scope", description: "India is the heart. Diaspora is the circulation. Global communities, temples, teachers, students — all part of the civilization." },
  { title: "Interdisciplinary", description: "Philosophy connects to science. Mathematics connects to music. Medicine connects to yoga. Temples connect to sacred geography. No silos." },
  { title: "Open Architecture", description: "Built on UGT principles. Forkable. Composable. Community-owned. Not a walled garden. Knowledge civilization as open infrastructure." },
];

const whatItIsNot = [
  "❌ A religious organization",
  "❌ A single guru's teaching",
  "❌ A sectarian platform",
  "❌ A static archive",
  "❌ A political project",
  "❌ A replacement for tradition",
  "❌ A commercial venture",
  "❌ A completed solution",
];

export default function KingdomOfShivaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="kos-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">KNOWLEDGE CIVILIZATION</p>
              <h1 id="kos-heading" className="heading-xl font-light text-foreground mb-6">
                KINGDOM OF SHIVA
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                A Virtual Civilization of Hindu Knowledge, Heritage, Philosophy and Living Traditions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Civilizational Knowledge Initiative</span>
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
              <div className="prose-content text-muted-foreground space-y-6 text-center max-w-2xl mx-auto">
                <p>
                  Kingdom of Shiva is a <strong className="text-foreground">separate civilizational knowledge initiative</strong> — not a religious organization, not a sect, not a guru's platform.
                </p>
                <p>
                  It applies the Universal Guard Trust framework (open architecture, evidence-aware, continuous learning) to a specific knowledge tradition: <strong className="text-foreground">Hindu civilization</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Working identity:</strong> A Virtual Civilization of Hindu Knowledge, Heritage, Philosophy and Living Traditions.
                </p>
                <p>
                  The universal principles (UGT) tested in a particular domain (Hindu knowledge). Not abstract civilization — this civilization. Evidence-aware. Living. Global.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="section-padding bg-muted/30" aria-labelledby="coverage-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="coverage-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Coverage — 16 Domains
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Hindu civilization is not one thing. It is the metabolism across these interconnected domains.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                {coverage.map((domain) => (
                  <div key={domain} className="card-base text-center group">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors capitalize">{domain}</h3>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Each domain: primary sources, living practitioners, scientific interfaces, global expressions, evidence base, open questions.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding" aria-labelledby="method-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="method-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Methodology
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                How we approach Hindu knowledge civilization. Six commitments.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {methodology.map((item) => (
                  <div key={item.title} className="card-base">
                    <h3 className="caption text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What It Is Not */}
        <section className="section-padding bg-muted/30" aria-labelledby="not-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="not-heading" className="heading-md font-light text-foreground text-center mb-8">
                What This Is Not
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {whatItIsNot.map((item) => (
                  <div key={item} className="card-base p-4 text-left">{item}</div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Kingdom of Shiva is presented as <strong className="text-foreground">BUILDING</strong> — not deployed and operational unless explicitly stated.
              </p>
            </div>
          </div>
        </section>

        {/* Relationship to UGT */}
        <section className="section-padding" aria-labelledby="ugt-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="ugt-heading" className="heading-md font-light text-foreground text-center mb-8">
                Relationship to Universal Guard Trust
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-center">
                <p>
                  Kingdom of Shiva is a <strong className="text-foreground">particular application</strong> of the Universal Guard Trust universal framework.
                </p>
                <p>
                  UGT provides the architecture (principles, learning loop, flourishing metrics, open architecture). Kingdom of Shiva provides the <strong className="text-foreground">domain-specific instantiation</strong> — Hindu knowledge civilization as a living, evidence-aware, globally connected virtual civilization.
                </p>
                <p>
                  <strong className="text-foreground">UGT = Universal Framework.</strong> Kingdom of Shiva = Particular Civilization.
                </p>
                <p>
                  They are distinct entities. Kingdom of Shiva is not UGT. It expresses UGT principles in a specific civilizational context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="section-padding bg-muted/30" aria-labelledby="notes-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="notes-heading" className="heading-md font-light text-foreground text-center mb-8">
                Important Notes
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Entity Separation</h3>
                  <p>Kingdom of Shiva is a distinct initiative. It is not Universal Guard Trust, not Boysenberry, not Zentium, not Creator Community. The personal website explains relationships but does not merge identities.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Non-Sectarian Commitment</h3>
                  <p>Hindu civilization contains Shaiva, Vaishnava, Shakta, Smarta, and countless sampradayas, traditions, lineages. Kingdom of Shiva does not collapse this diversity into one sect. All are included. Evidence-aware exploration applies to all.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Living Tradition Priority</h3>
                  <p>Texts are maps. Territory is lived. Practitioners, teachers, communities, lineages — living knowledge is primary. The platform serves the tradition, not the reverse.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Status Transparency</h3>
                  <p>Clearly labeled BUILDING. Not deployed and operational unless explicitly stated. No fake launch claims. No premature announcements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="section-padding" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Related Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Universal Guard Trust", description: "The universal framework.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Heaven on Earth", description: "The civilizational blueprint.", href: "/heaven-on-earth", status: "BUILDING" },
                  { title: "Creator Community", description: "The execution layer.", href: "/creator-community", status: "BUILDING" },
                  { title: "Boysenberry", description: "Community economy model.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Integrated Intelligence", description: "Cognitive architecture research.", href: "/universal-guard-trust#integrated-intelligence", status: "RESEARCH" },
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
                <Link href="/universal-guard-trust" className="btn-outline">
                  Universal Guard Trust
                </Link>
                <Link href="/heaven-on-earth" className="btn-secondary">
                  Heaven on Earth
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