import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VR & Metaverse",
  description: "Immersive systems for community interaction. Virtual reality, spatial computing, virtual community spaces.",
  keywords: "vr, metaverse, virtual reality, spatial computing, immersive systems, community spaces",
  openGraph: {
    title: "VR & Metaverse — Technology",
    description: "Immersive systems for community interaction and civilizational experience.",
    type: "website",
  },
};

const vrAreas = [
  { title: "Virtual Reality", description: "Immersive environments for community interaction, knowledge exploration." },
  { title: "Spatial Computing", description: "Interfaces that understand physical space. Room-scale interaction, spatial audio." },
  { title: "Virtual Community Spaces", description: "Persistent virtual worlds for community gathering. Temples, classrooms, marketplaces." },
  { title: "Knowledge Visualization", description: "Immersive exploration of knowledge. Virtual temples, historical reconstructions." },
];

const principles = [
  "Immersive systems serve community — not escapism.",
  "Human presence is primary. Technology is infrastructure.",
  "Open standards. Interoperable. Not walled gardens.",
];

export default function VRPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col" id="main-content">
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="vr-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="vr-heading" className="heading-xl font-light text-foreground mb-6">VR & METAVERSE</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Immersive systems for community interaction.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-research">RESEARCH</span>
                <span className="text-sm text-muted-foreground">Immersive Systems Research</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">VR & Metaverse Areas</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vrAreas.map((area) => (
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
              <h2 id="principles-heading" className="heading-md font-light text-foreground text-center mb-8">Operating Principles</h2>
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
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">Explore Further</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">View the Work Map</Link>
                <Link href="/technology" className="btn-outline">Technology Overview</Link>
                <Link href="/technology/metaverse" className="btn-secondary">Metaverse</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
