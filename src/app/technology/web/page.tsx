import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web & Creative Tech",
  description: "Modern web architectures, decentralized web, local-first software, open web standards.",
  keywords: "web, creative tech, open web standards, local-first, decentralized web, nextjs, react",
  openGraph: {
    title: "Web & Creative Tech — Technology",
    description: "Modern web architectures and creative technology systems.",
    type: "website",
  },
};

const webAreas = [
  { title: "Modern Web Architectures", description: "Next.js, React, server components, edge computing." },
  { title: "Decentralized Web", description: "IPFS, local-first protocols, peer-to-peer systems." },
  { title: "Local-First Software", description: "Applications that work offline. Data on device." },
  { title: "Creative Web", description: "WebGL, canvas, generative art, interactive experiences." },
];

const principles = [
  "Open web standards. No proprietary lock-in.",
  "Local-first. Data sovereignty. User agency.",
  "Accessible by default. Progressive enhancement.",
];

export default function WebPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col" id="main-content">
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="web-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">TECHNOLOGY</p>
              <h1 id="web-heading" className="heading-xl font-light text-foreground mb-6">WEB & CREATIVE TECH</h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Modern web and creative technology systems.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Web & Creative Systems</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" aria-labelledby="areas-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="areas-heading" className="heading-lg font-light text-foreground text-center mb-12">Web & Creative Tech Areas</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {webAreas.map((area) => (
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
                <Link href="/technology/openmontage" className="btn-secondary">OpenMontage</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
