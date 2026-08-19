import { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boysenberry Marketing Private Limited",
  description: "Community-centered economic model. Local participation + modern business + technology.",
  openGraph: {
    title: "Boysenberry Marketing Private Limited — Community Economy",
    description: "Building community economies through local participation, modern business, and technology.",
    type: "website",
  },
};

const communityEconomyModel = [
  {
    step: 1,
    title: "People Buy Useful Products",
    description: "Community members purchase essential, organic, and locally produced products through the community store.",
    status: "OPERATING",
  },
  {
    step: 2,
    title: "Local Participation Creates Economic Activity",
    description: "Local producers supply the store. Community members operate it. Money circulates within the pincode. Jobs and skills develop locally.",
    status: "BUILDING",
  },
  {
    step: 3,
    title: "Referral Participants Earn Incentives",
    description: "Community members who refer others can earn incentives. Rewards active community building — not passive income.",
    status: "BUILDING",
  },
  {
    step: 4,
    title: "Profit Allocation to Community Development",
    description: "A defined portion of business profit allocated to local community development. Infrastructure, education, health, ecology — decided by the community.",
    status: "PLANNED",
  },
  {
    step: 5,
    title: "Greater Local Value Circulation",
    description: "Economic value circulates within local communities rather than being extracted. More production, employment, savings, resilience.",
    status: "VISION",
  },
];

const futureDigitalSystem = {
  title: "Future Digital System (PLANNED / BUILDING)",
  description: "AI-assisted ecommerce platform designed for community economies. Not a generic marketplace — infrastructure for the community economy model.",
  roles: [
    { name: "ADMIN", description: "Platform governance, community onboarding, compliance, analytics, system health" },
    { name: "SELLER", description: "Local producers, artisans, farmers — AI-assisted listing, inventory, pricing, logistics" },
    { name: "BUYER", description: "Community members — AI-assisted discovery, personalized recommendations, local pickup/delivery" },
    { name: "COMMUNITY PARTICIPANT", description: "Referral tracking, incentive management, community development voting, local governance" },
  ],
  capabilities: [
    "AI-assisted product discovery",
    "AI-assisted seller tools",
    "Inventory management",
    "Order processing",
    "Community referrals",
    "Local store operations",
    "Analytics & insights",
    "Community development accounting",
    "Customer support automation",
    "Recommendation engine",
    "Localization (language, culture, regulations)",
  ],
};

const vision = {
  title: "Long-Term Vision: UGT Essential Store",
  description: "One store in every pincode where practical. A network of community-owned, community-operated stores selling essential products, organic products, locally produced products. Community purchasing power. Referral incentives. Community business participation. Local employment. Community development contribution.",
  functions: [
    "Essential products",
    "Organic products",
    "Locally produced products",
    "Community purchasing",
    "Referral incentives",
    "Community business participation",
    "Local employment",
    "Community development contribution",
  ],
};

export default function BoysenberryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex flex-col" id="main-content">
        {/* Page Header */}
        <section className="pt-28 pb-16 lg:pt-36 lg:pb-24" aria-labelledby="boysenberry-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary/70 mb-4">COMMUNITY ECONOMY</p>
              <h1 id="boysenberry-heading" className="heading-xl font-light text-foreground mb-6">
                BOYSENBERRY MARKETING PRIVATE LIMITED
              </h1>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Community-centered economic model. Local participation + modern business + technology.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <span className="status-badge status-building">BUILDING</span>
                <span className="text-sm text-muted-foreground">Private Limited Company (India)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Vision */}
        <section className="section-padding" aria-labelledby="vision-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="vision-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Core Vision: Going Back to Our Roots
              </h2>
              <div className="prose-content text-muted-foreground space-y-4 text-center max-w-2xl mx-auto">
                <p>
                  Modern economies extract value from communities. Boysenberry reverses this: community participation creates value that circulates locally.
                </p>
                <p>
                  Combining <strong className="text-foreground">local community participation</strong> with <strong className="text-foreground">modern business</strong> and <strong className="text-foreground">technology</strong>.
                </p>
              </div>

              {/* Conceptual Model */}
              <div className="mt-16">
                <h3 className="caption text-primary text-center mb-8">CONCEPTUAL MODEL</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    "LOCAL PRODUCTION",
                    "COMMUNITY STORE",
                    "COMMUNITY PURCHASE",
                    "LOCAL SAVINGS",
                    "REFERRAL PARTICIPATION",
                    "BUSINESS PROFIT",
                    "COMMUNITY DEVELOPMENT",
                    "LOCAL MONEY CIRCULATION",
                  ].map((step, i) => (
                    <div key={step} className="card-base text-center group relative">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <span className="text-xl font-light">{i + 1}</span>
                      </div>
                      <h4 className="font-medium text-foreground text-sm mb-2">{step}</h4>
                      <p className="text-xs text-muted-foreground">
                        {[
                          "Farmers, artisans, makers produce locally",
                          "Community-owned retail point in each pincode",
                          "Members buy essentials from community store",
                          "Money stays in community, builds local wealth",
                          "Active participation earns program incentives",
                          "Sustainable business generates surplus",
                          "Defined profit share funds local priorities",
                          "Value circulates — extraction reversed",
                        ][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Economy Model */}
        <section className="section-padding bg-muted/30" aria-labelledby="model-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="model-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Community Economy Model — How It Works
              </h2>
              <p className="body-lg text-muted-foreground text-center mb-12">
                Five steps. Each with clear status. No blurred vision.
              </p>
              <div className="space-y-6">
                {communityEconomyModel.map((step) => (
                  <div key={step.step} className="card-base relative">
                    <div className="absolute top-4 right-4">
                      <span className={`status-badge ${step.status === "OPERATING" ? "status-operating" : step.status === "BUILDING" ? "status-building" : step.status === "PLANNED" ? "status-planned" : "status-vision"}`}>
                        {step.status}
                      </span>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-light text-primary">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Status definitions: <strong className="text-foreground">OPERATING</strong> = fully functional | <strong className="text-foreground">BUILDING</strong> = active development | <strong className="text-foreground">PLANNED</strong> = designed, awaiting execution | <strong className="text-foreground">VISION</strong> = long-term directional goal
              </p>
            </div>
          </div>
        </section>

        {/* Future Digital System */}
        <section className="section-padding" aria-labelledby="digital-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="digital-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Future Digital System
              </h2>
              <div className="card-base p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="status-badge status-planned">PLANNED / BUILDING</span>
                  <h3 className="font-medium text-foreground">AI-Assisted Ecommerce Platform for Community Economies</h3>
                </div>
                <p className="text-muted-foreground">{futureDigitalSystem.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-12">
                <div className="card-base">
                  <h3 className="caption text-primary mb-4">ROLES</h3>
                  <div className="space-y-3">
                    {futureDigitalSystem.roles.map((role) => (
                      <div key={role.name} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-primary">{role.name}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{role.name}</h4>
                          <p className="text-xs text-muted-foreground">{role.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-base">
                  <h3 className="caption text-primary mb-4">POTENTIAL CAPABILITIES</h3>
                  <ul className="space-y-2">
                    {futureDigitalSystem.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Important:</strong> This system is marked PLANNED / BUILDING. It is not currently operational. No functionality is claimed beyond what is explicitly stated here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long-Term Vision */}
        <section className="section-padding bg-muted/30" aria-labelledby="longterm-heading">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 id="longterm-heading" className="heading-lg font-light text-foreground text-center mb-12">
                Long-Term Vision: UGT Essential Store
              </h2>
              <div className="card-base p-8 mb-8">
                <p className="text-muted-foreground mb-6">{vision.description}</p>
                <h3 className="caption text-primary mb-4">POSSIBLE FUNCTIONS</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {vision.functions.map((fn) => (
                    <div key={fn} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                      {fn}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                This is a <strong className="text-foreground">VISION</strong> — not a current implementation. "Where practical" acknowledges geographic, demographic, and economic realities.
              </p>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="section-padding" aria-labelledby="disclaimers-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="disclaimers-heading" className="heading-md font-light text-foreground text-center mb-8">
                Important Disclaimers
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">No Financial Guarantees</h3>
                  <p>Boysenberry does not make unsupported financial guarantees. Does not promise passive income. Does not imply guaranteed profit. Incentives and profit sharing use precise language tied to actual program design and legal structure.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Status Transparency</h3>
                  <p>Every component is clearly labeled: OPERATING, BUILDING, PILOT, RESEARCH, PLANNED, or VISION. Future vision is not blurred with completed implementation.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Entity Separation</h3>
                  <p>Boysenberry Marketing Private Limited is a distinct legal entity (Private Limited Company, India). It is not Universal Guard Trust, not Zentium, not Kingdom of Shiva, not Creator Community. The personal website explains relationships but does not merge identities.</p>
                </div>
                <div className="card-base p-4">
                  <h3 className="font-medium text-foreground mb-2">Legal & Regulatory</h3>
                  <p>All operations comply with applicable Indian law. Community economy models, referral programs, and profit allocation structures operate within legal frameworks. This website is informational — not legal advice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30" aria-labelledby="explore-heading">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="explore-heading" className="heading-lg font-light text-foreground mb-6">
                Explore Related Work
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/work" className="btn-primary">
                  View the Work Map
                </Link>
                <Link href="/universal-guard-trust" className="btn-outline">
                  Universal Guard Trust
                </Link>
                <Link href="/creator-community" className="btn-secondary">
                  Creator Community
                </Link>
                <Link href="/zentium" className="btn-secondary">
                  Zentium
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