import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for shanmugamvijay.com. How this website handles data, cookies, and user information.",
  openGraph: {
    title: "Privacy Policy — Shanmugam Vijay Balakrishnan",
    description: "How this website handles data, cookies, and user information.",
    type: "website",
  },
};

const privacySections = [
  {
    title: "Information We Collect",
    content: "This website is primarily a static informational site. We do not collect personal information unless you voluntarily provide it through contact forms, email, or other direct communication channels.",
  },
  {
    title: "Cookies",
    content: "This website may use essential cookies for basic functionality (such as theme preference). We do not use tracking cookies, advertising cookies, or third-party analytics that collect personal data without your consent.",
  },
  {
    title: "Analytics",
    content: "If analytics are used, they are privacy-respecting and aggregate-only. No individual user tracking. No cross-site tracking. No advertising profiles.",
  },
  {
    title: "External Links",
    content: "This website links to external platforms (YouTube, Spotify, GitHub, LinkedIn, ugtglobal.space, etc.). Those platforms have their own privacy policies. We are not responsible for their data practices.",
  },
  {
    title: "Data Sharing",
    content: "We do not sell, rent, or trade personal information. We do not share personal information with third parties except where required by law or where explicitly stated.",
  },
  {
    title: "Your Rights",
    content: "You have the right to request access to, correction of, or deletion of any personal information we may hold about you. Contact us through the channels listed on the Connect page.",
  },
  {
    title: "Children's Privacy",
    content: "This website is not directed at children under 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    content: "This privacy policy may be updated periodically. Changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="privacy-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">LEGAL</p>
              <h1 id="privacy-heading" className="heading-xl font-light text-foreground mb-6">
                PRIVACY POLICY
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Data handling and privacy practices.
              </p>
              <p className="text-sm text-muted-foreground mt-4">Effective Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="section-padding" aria-labelledby="sections-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="sections-heading" className="sr-only">Privacy Policy Sections</h2>
              <div className="space-y-6">
                {privacySections.map((section) => (
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
                Questions About Privacy?
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Contact through the channels listed on the Connect page.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/connect" className="btn-primary">
                  Contact
                </Link>
                <Link href="/" className="btn-outline">
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