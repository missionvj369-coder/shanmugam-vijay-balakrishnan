import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for shanmugamvijay.com. How this website may be used, disclaimers, and legal notices.",
  openGraph: {
    title: "Terms of Use — Shanmugam Vijay Balakrishnan",
    description: "How this website may be used, disclaimers, and legal notices.",
    type: "website",
  },
};

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this website, you accept and agree to be bound by these terms of use. If you do not agree to these terms, please do not use this website.",
  },
  {
    title: "Informational Purpose",
    content: "This website is provided for informational purposes only. It describes ongoing work, projects, and ideas. It is not a commercial offer, investment solicitation, or legal document.",
  },
  {
    title: "No Financial Advice",
    content: "Nothing on this website constitutes financial advice, investment recommendation, or solicitation. No content implies guaranteed returns, passive income, or investment opportunities. Consult qualified professionals for financial decisions.",
  },
  {
    title: "Entity Separation",
    content: "This website describes multiple distinct entities and projects. Each operates with its own legal identity. The website explains relationships between them but does not merge or claim they are the same organization.",
  },
  {
    title: "Status Transparency",
    content: "Projects are labeled with status: OPERATING, BUILDING, PILOT, RESEARCH, PLANNED, or VISION. These labels reflect current state. Future vision is not presented as completed implementation.",
  },
  {
    title: "Intellectual Property",
    content: "Content on this website is provided for personal, non-commercial use. Unless otherwise stated, content may not be reproduced, distributed, or used for commercial purposes without permission.",
  },
  {
    title: "External Links",
    content: "This website links to external platforms and resources. We are not responsible for the content, policies, or practices of external websites.",
  },
  {
    title: "No Warranty",
    content: "This website is provided 'as is' without warranties of any kind, express or implied. We do not warrant that the website will be error-free, uninterrupted, or free from harmful components.",
  },
  {
    title: "Limitation of Liability",
    content: "To the maximum extent permitted by law, we shall not be liable for any damages arising from the use of or inability to use this website, including but not limited to direct, indirect, incidental, or consequential damages.",
  },
  {
    title: "Changes to These Terms",
    content: "These terms may be updated periodically. Changes will be posted on this page with an updated effective date.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="terms-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">LEGAL</p>
              <h1 id="terms-heading" className="heading-xl font-light text-foreground mb-6">
                TERMS OF USE
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                How this website may be used, disclaimers, and legal notices.
              </p>
              <p className="text-sm text-muted-foreground mt-4">Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="section-padding" aria-labelledby="sections-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="sections-heading" className="sr-only">Terms of Use Sections</h2>
              <div className="space-y-6">
                {termsSections.map((section) => (
                  <div key={section.title} className="card-base">
                    <h2 className="font-medium text-foreground mb-3">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-padding bg-muted/30" aria-labelledby="contact-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="contact-heading" className="heading-md font-light text-foreground mb-6">
                Questions About These Terms?
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Contact through the channels listed on the Connect page.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/connect" className="btn-primary">
                  Contact
                </Link>
                <Link href="/privacy" className="btn-outline">
                  Privacy Policy
                </Link>
                <Link href="/" className="btn-secondary">
                  Home
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