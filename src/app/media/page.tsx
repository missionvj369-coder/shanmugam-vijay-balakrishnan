import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Media",
  description: "Music, podcasts, video, film, writing. The personal site acts as the discovery/canonical personal archive. Actual audio/video hosted externally on verified platforms.",
  openGraph: {
    title: "Media — Music, Podcasts, Video, Writing",
    description: "Creative output across music, podcasts, video, film, and writing.",
    type: "website",
  },
};

const mediaSections = [
  {
    title: "MUSIC",
    description: "Original music compositions, collaborations, and sound design work.",
    platforms: ["YouTube", "SoundCloud", "Bandcamp"],
    href: "#music",
    status: "BUILDING",
  },
  {
    title: "PODCASTS",
    description: "Conversations on community, technology, civilization, intelligence, and creation.",
    platforms: ["YouTube", "Spotify", "Apple Podcasts"],
    href: "#podcasts",
    status: "BUILDING",
  },
  {
    title: "VIDEO",
    description: "Documentary, educational, cinematic, and experimental video work.",
    platforms: ["YouTube", "Vimeo"],
    href: "#video",
    status: "BUILDING",
  },
  {
    title: "FILM",
    description: "Narrative and documentary film projects. Long-form visual storytelling.",
    platforms: ["YouTube", "Vimeo", "Film Festivals"],
    href: "#film",
    status: "RESEARCH",
  },
  {
    title: "WRITING",
    description: "Essays, articles, technical writing, and published works on ideas and systems.",
    platforms: ["Personal Blog", "Medium", "Substack", "Academic Publications"],
    href: "#writing",
    status: "BUILDING",
  },
];

const hostingNote = "Actual audio/video content is hosted externally on verified platforms. The personal site acts as the discovery layer and canonical personal archive — linking to official platforms rather than hosting media directly.";

const platformLinks = [
  { name: "YouTube", url: "https://youtube.com", description: "Primary video platform" },
  { name: "Spotify", url: "https://spotify.com", description: "Podcast distribution" },
  { name: "SoundCloud", url: "https://soundcloud.com", description: "Music hosting" },
  { name: "Bandcamp", url: "https://bandcamp.com", description: "Music and album sales" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com", description: "Podcast distribution" },
  { name: "Vimeo", url: "https://vimeo.com", description: "High-quality video hosting" },
];

export default function MediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="media-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">CREATIVE OUTPUT</p>
              <h1 id="media-heading" className="heading-xl font-light text-foreground mb-6">
                MEDIA
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Music, podcasts, video, film, writing. The personal archive and discovery layer.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="text-sm text-muted-foreground">5 Media Categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Note */}
        <section className="section-padding bg-muted/30" aria-labelledby="hosting-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card-base p-6 md:p-8">
                <h2 id="hosting-heading" className="heading-md font-light text-foreground mb-4">
                  How Media Is Hosted
                </h2>
                <p className="text-sm text-muted-foreground">{hostingNote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Sections */}
        <section className="section-padding" aria-labelledby="sections-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="sections-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Media Categories
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mediaSections.map((section) => (
                  <div key={section.title} className="card-base">
                    <h3 className="font-medium text-foreground text-xl mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {section.platforms.map((platform) => (
                        <span key={platform} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">{platform}</span>
                      ))}
                    </div>
                    <span className={`status-badge ${section.status === "OPERATING" ? "status-operating" : section.status === "BUILDING" ? "status-building" : "status-research"}`}>
                      {section.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Links */}
        <section className="section-padding bg-muted/30" aria-labelledby="platforms-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="platforms-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Verified Platforms
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Content is distributed through these verified external platforms.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-interactive group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{platform.name}</h3>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </div>
                  </a>
                ))}
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
                  <h3 className="font-medium text-foreground mb-2">No Heavy Media Admin System</h3>
                  <p>This site does not include a media management system, upload interface, or content delivery network. External platforms handle hosting, streaming, and distribution.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Discovery Layer</h3>
                  <p>The personal site serves as the canonical archive and discovery layer. Visitors understand what media exists and where to find it. Actual playback happens on external platforms.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Status Transparency</h3>
                  <p>Each media category is marked with its actual status. Film is RESEARCH (concepts in development). Music, Podcasts, Video, Writing are BUILDING (content being produced and published).</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Platform Links Are Placeholder</h3>
                  <p>Platform URLs shown are examples. Replace with actual verified profile URLs when available. Do not link to unverified or unofficial sources.</p>
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
                  { title: "OpenMontage", description: "AI-assisted video creation pipeline.", href: "/technology/openmontage", status: "BUILDING" },
                  { title: "Technology / Creative Technology", description: "Creative technology systems.", href: "/technology", status: "BUILDING" },
                  { title: "Creator Community", description: "Execution layer for media projects.", href: "/creator-community", status: "BUILDING" },
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
                <Link href="/technology/openmontage" className="btn-outline">
                  OpenMontage
                </Link>
                <Link href="/connect" className="btn-secondary">
                  Get in Touch
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