import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Connect",
  description: "How to engage with the work. Build, collaborate, research, technology, community, creative, partnership, media. Legitimate contact channels only. No private personal information exposed.",
  openGraph: {
    title: "Connect — Engage with the Work",
    description: "Build, collaborate, research, partner. How to engage.",
    type: "website",
  },
};

const engagementTypes = [
  {
    title: "BUILD WITH ME",
    description: "Co-build systems, projects, platforms. Technical and non-technical contributors welcome.",
    href: "#build",
    status: "BUILDING",
  },
  {
    title: "COLLABORATE",
    description: "Research collaboration, academic partnership, institutional engagement.",
    href: "#collaborate",
    status: "BUILDING",
  },
  {
    title: "RESEARCH",
    description: "Deep research partnerships. Civilizational systems, integrated intelligence, community economics.",
    href: "#research",
    status: "BUILDING",
  },
  {
    title: "TECHNOLOGY",
    description: "Technical collaboration. AI, blockchain, VR, web, creative technology, open source.",
    href: "#technology",
    status: "BUILDING",
  },
  {
    title: "COMMUNITY",
    description: "Community building, local implementation, ecosystem development.",
    href: "#community",
    status: "BUILDING",
  },
  {
    title: "CREATIVE",
    description: "Creative collaboration. Video, music, writing, design, cinematic work.",
    href: "#creative",
    status: "BUILDING",
  },
  {
    title: "PARTNERSHIP",
    description: "Strategic partnerships. Organizations, institutions, enterprises aligned with the mission.",
    href: "#partnership",
    status: "BUILDING",
  },
  {
    title: "MEDIA",
    description: "Interviews, speaking, documentary, podcast, writing contributions.",
    href: "#media",
    status: "BUILDING",
  },
];

const contactChannels = [
  { name: "Email", description: "Primary contact for all inquiries", href: "mailto:contact@example.com", icon: "email" },
  { name: "GitHub", description: "Technical collaboration and open source", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", description: "Professional networking and partnership", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter/X", description: "Updates and public conversation", href: "https://twitter.com", icon: "twitter" },
];

const guidelines = [
  "No private personal information shared on this site.",
  "All engagement through legitimate, verified contact channels only.",
  "Response time varies. Patience appreciated.",
  "Clear, specific inquiries get faster responses than generic messages.",
  "Collaboration requires alignment with core principles (see /ideas).",
  "No solicitation of financial products, investments, or schemes.",
  "No requests for personal favors outside the work.",
  "Respectful dialogue required. All forms of harassment result in immediate disengagement.",
];

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="connect-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">ENGAGE WITH THE WORK</p>
              <h1 id="connect-heading" className="heading-xl font-light text-foreground mb-6">
                CONNECT
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                How to engage with the work. Build, collaborate, research, create, partner.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="text-sm text-muted-foreground">8 Engagement Types</span>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Types */}
        <section className="section-padding" aria-labelledby="engagement-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="engagement-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Ways to Engage
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Eight categories. Each a legitimate pathway into the work.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {engagementTypes.map((type) => (
                  <div key={type.title} className="card-base">
                    <h3 className="font-medium text-foreground text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                    <span className={`status-badge ${type.status === "OPERATING" ? "status-operating" : type.status === "BUILDING" ? "status-building" : "status-research"}`}>
                      {type.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="section-padding bg-muted/30" aria-labelledby="channels-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="channels-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Contact Channels
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Legitimate contact channels only. No private information exposed.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.href}
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
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{channel.name}</h3>
                      <p className="text-xs text-muted-foreground">{channel.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Replace placeholder URLs with actual verified profiles. Do not use unverified or unofficial sources.
              </p>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="section-padding" aria-labelledby="guidelines-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="guidelines-heading" className="heading-md font-light text-foreground text-center mb-8">
                Engagement Guidelines
              </h2>
              <div className="space-y-3">
                {guidelines.map((guideline) => (
                  <div key={guideline} className="card-base flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground">{guideline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-muted/30" aria-labelledby="expect-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="expect-heading" className="heading-md font-light text-foreground text-center mb-8">
                What to Expect
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-center">
                <p>
                  <strong className="text-foreground">Response time varies.</strong> Genuine, thoughtful inquiries receive thoughtful responses. Generic messages may not receive replies.
                </p>
                <p>
                  <strong className="text-foreground">Collaboration requires alignment.</strong> Not every proposal fits. The work has clear principles (see /ideas). Alignment is prerequisite for deep collaboration.
                </p>
                <p>
                  <strong className="text-foreground">No financial solicitations.</strong> This is not a fundraising channel. No investment opportunities. No passive income schemes. Requests of this nature will not receive responses.
                </p>
                <p>
                  <strong className="text-foreground">Respectful dialogue only.</strong> All forms of harassment, manipulation, or bad-faith engagement result in immediate disengagement. No exceptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Work */}
        <section className="section-padding" aria-labelledby="related-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="related-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Related Work
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Creator Community", description: "Execution layer — build with us.", href: "/creator-community", status: "BUILDING" },
                  { title: "Universal Guard Trust", description: "Research collaboration.", href: "/universal-guard-trust", status: "OPERATING" },
                  { title: "Boysenberry", description: "Community economy partnership.", href: "/boysenberry", status: "BUILDING" },
                  { title: "Technology", description: "Technical collaboration.", href: "/technology", status: "BUILDING" },
                  { title: "Ideas", description: "Understand the principles first.", href: "/ideas", status: "BUILDING" },
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
                Explore the Work First
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Understanding the work is the best preparation for meaningful engagement.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/ideas" className="btn-outline">
                  Read the Principles
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More About the Work
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