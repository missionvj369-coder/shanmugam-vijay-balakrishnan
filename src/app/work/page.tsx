import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WorkMap } from "@/components/WorkMap";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore the complete body of work — community economies, intelligent technologies, civilizational systems, decentralized infrastructure, knowledge civilizations, and creative systems.",
  openGraph: {
    title: "Work — Shanmugam Vijay Balakrishnan",
    description: "Explore the complete body of work connecting community, intelligence, civilization, technology, decentralization, and creation.",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="work-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">WORK</p>
              <h1 id="work-heading" className="heading-xl font-light text-foreground mb-6">
                The Body of Work
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                An interactive map showing how community, intelligence, civilization, technology, decentralization, and creation connect through distinct projects and organizations. Each operates with its own legal identity while contributing to a coherent civilizational vision.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Work Map */}
        <section className="flex-1 section-padding" aria-labelledby="work-map-heading">
          <div className="container-custom">
            <div className="relative">
              <WorkMap interactive={true} showDescriptions={true} className="w-full" />
            </div>

            {/* Mobile/Static fallback */}
            <div className="md:hidden mt-8">
              <WorkMap interactive={false} showDescriptions={true} />
            </div>
          </div>
        </section>

        {/* Work Categories Summary */}
        <section className="section-padding bg-muted/30" aria-labelledby="categories-heading">
          <div className="container-custom">
            <h2 id="categories-heading" className="sr-only">Work Categories Summary</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  category: "COMMUNITY",
                  color: "#22c55e",
                  items: [
                    { name: "Boysenberry", status: "BUILDING", href: "/boysenberry", desc: "Community-centered economic model" },
                    { name: "Creator Community", status: "BUILDING", href: "/creator-community", desc: "Execution layer for civilizational creation" },
                  ],
                },
                {
                  category: "INTELLIGENCE",
                  color: "#3b82f6",
                  items: [
                    { name: "Universal Guard Trust", status: "OPERATING", href: "/universal-guard-trust", desc: "Global framework for civilizational learning" },
                    { name: "Integrated Intelligence", status: "RESEARCH", href: "/universal-guard-trust#integrated-intelligence", desc: "Core research on human evolution" },
                    { name: "Heaven on Earth", status: "BUILDING", href: "/heaven-on-earth", desc: "Civilizational architecture" },
                  ],
                },
                {
                  category: "CIVILIZATION",
                  color: "#f59e0b",
                  items: [
                    { name: "Heaven on Earth", status: "BUILDING", href: "/heaven-on-earth", desc: "Civilizational architecture" },
                    { name: "Kingdom of Shiva", status: "BUILDING", href: "/kingdom-of-shiva", desc: "Hindu knowledge civilization" },
                  ],
                },
                {
                  category: "DECENTRALIZATION",
                  color: "#8b5cf6",
                  items: [
                    { name: "Zentium", status: "BUILDING", href: "/zentium", desc: "Blockchain & decentralized infrastructure" },
                    { name: "Blockchain Systems", status: "RESEARCH", href: "/technology/blockchain", desc: "Decentralized infrastructure research" },
                  ],
                },
                {
                  category: "TECHNOLOGY",
                  color: "#ec4899",
                  items: [
                    { name: "AI Systems", status: "BUILDING", href: "/technology/ai", desc: "AI-assisted platforms & automation" },
                    { name: "VR & Metaverse", status: "RESEARCH", href: "/technology/vr", desc: "Immersive systems research" },
                    { name: "Web & Creative Tech", status: "BUILDING", href: "/technology/creative-ai", desc: "OpenMontage & creative pipelines" },
                  ],
                },
                {
                  category: "CREATION",
                  color: "#ef4444",
                  items: [
                    { name: "Music", status: "OPERATING", href: "/media#music", desc: "Original compositions" },
                    { name: "Podcasts", status: "OPERATING", href: "/media#podcasts", desc: "Systems & civilization conversations" },
                    { name: "Video & Film", status: "BUILDING", href: "/media#video", desc: "Cinematic creation" },
                    { name: "Writing", status: "OPERATING", href: "/media#writing", desc: "Essays & frameworks" },
                  ],
                },
              ].map((cat) => (
                <div key={cat.category} className="card-base">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: cat.color + "20" }}>
                      <svg className="w-5 h-5" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="caption text-foreground" style={{ color: cat.color }}>{cat.category}</h3>
                  </div>
                  <ul className="space-y-3" role="list">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="flex items-start gap-3 group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                              <span className={`status-badge ${item.status === "OPERATING" ? "status-operating" : item.status === "BUILDING" ? "status-building" : item.status === "RESEARCH" ? "status-research" : "status-planned"}`}>
                                {item.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                          <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status Legend */}
        <section className="section-padding" aria-labelledby="status-legend-heading">
          <div className="container-custom">
            <h2 id="status-legend-heading" className="sr-only">Work Status Definitions</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { status: "OPERATING", label: "Operating", desc: "Fully functional and actively serving users/communities", className: "status-operating" },
                  { status: "BUILDING", label: "Building", desc: "Active development with dedicated team and resources", className: "status-building" },
                  { status: "PILOT", label: "Pilot", desc: "Limited deployment testing with real users in controlled environment", className: "status-pilot" },
                  { status: "RESEARCH", label: "Research", desc: "Exploratory phase — validating concepts, feasibility, and approach", className: "status-research" },
                  { status: "PLANNED", label: "Planned", desc: "Designed and resourced — awaiting execution start", className: "status-planned" },
                  { status: "VISION", label: "Vision", desc: "Long-term directional goal — not yet actively resourced", className: "status-vision" },
                ].map((item) => (
                  <div key={item.status} className="card-base">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={item.className}>{item.status}</span>
                      <h3 className="font-medium text-foreground">{item.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Status reflects current state as of {new Date().getFullYear()}. This transparency ensures future vision is not blurred with completed implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Entity Relationship Note */}
        <section className="section-padding bg-muted/30" aria-labelledby="entity-note-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="entity-note-heading" className="heading-md font-light text-foreground mb-6">
                Important: Entity Separation
              </h2>
              <div className="text-left space-y-4 text-sm text-muted-foreground">
                <p>
                  This work map shows <strong className="text-foreground">related areas of work</strong>, not a single legal organization. Each entity maintains clear separation:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Boysenberry Marketing Private Limited</strong> — Private limited company (India)</li>
                  <li><strong>Universal Guard Trust</strong> — Global trust/framework</li>
                  <li><strong>UGT India</strong> — Indian entity under UGT</li>
                  <li><strong>Creator Community</strong> — Open execution layer / project catalogue</li>
                  <li><strong>Kingdom of Shiva</strong> — Independent knowledge civilization initiative</li>
                  <li><strong>Zentium</strong> — Decentralized blockchain project</li>
                  <li><strong>Technology / Creative Systems</strong> — Personal R&D and open source work</li>
                </ul>
                <p>
                  The personal website explains relationships between them, but does not claim they are all the same organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}