import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shanmugamvijay.com"),
  title: {
    default: "Shanmugam Vijay Balakrishnan — Creator • Founder • Systems Builder • Civilization Architect",
    template: "%s | Shanmugam Vijay Balakrishnan",
  },
  description: "Building community economies, intelligent technologies and civilizational systems for a flourishing future. Personal identity hub connecting Boysenberry, Universal Guard Trust, Kingdom of Shiva, Zentium, Creator Community, and technology initiatives.",
  keywords: [
    "Shanmugam Vijay Balakrishnan",
    "vijay",
    "ai",
    "open source ai tools creativity creator",
    "universe",
    "universal guard trust ugt",
    "heaven on earth",
    "oneness",
    "soulconnect",
    "Creator",
    "Founder",
    "Systems Builder",
    "Civilization Architect",
    "Boysenberry",
    "Kingdom of Shiva",
    "Zentium",
    "Creator Community",
    "Community Economy",
    "Decentralization",
    "Blockchain",
    "Civilizational Systems",
    "Integrated Intelligence",
    "Open Source",
    "Local AI",
    "Agent Systems",
    "Community Money",
    "DAO",
    "VR Metaverse",
    "Creative AI",
    "Video Generation",
  ],
  authors: [{ name: "Shanmugam Vijay Balakrishnan" }],
  creator: "Shanmugam Vijay Balakrishnan",
  publisher: "Shanmugam Vijay Balakrishnan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shanmugamvijay.com",
    siteName: "Shanmugam Vijay Balakrishnan",
    title: "Shanmugam Vijay Balakrishnan — Creator • Founder • Systems Builder • Civilization Architect",
    description: "Building community economies, intelligent technologies and civilizational systems for a flourishing future.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shanmugam Vijay Balakrishnan — Personal Identity Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmugam Vijay Balakrishnan — Creator • Founder • Systems Builder • Civilization Architect",
    description: "Building community economies, intelligent technologies and civilizational systems for a flourishing future.",
    images: ["/og-image.jpg"],
    creator: "@shanmugamvijay",
  },
  verification: {
    google: "1ZeR5RwMMECk10BnidsOEt_MRAP9EluMO4ux9wg_2WU",
  },
  other: {
    "theme-color": "#0a0a0a",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Shanmugam Vijay Balakrishnan",
  "jobTitle": ["Creator", "Founder", "Systems Builder", "Civilization Architect"],
  "description": "Building community economies, intelligent technologies and civilizational systems for a flourishing future.",
  "url": "https://shanmugamvijay.com",
  "sameAs": [
    "https://www.ugtglobal.space",
    "https://ugtindia.space",
    "https://creatorcommunity.space",
    "https://kingdomofshiva.space",
    "https://github.com/missionvj369-coder",
    "https://www.instagram.com/neoxhuman",
    "https://www.linkedin.com/in/universal-guard-trust-ugt-b09b05394",
  ],
  "founderOf": [
    {
      "@type": "Organization",
      "name": "Boysenberry Marketing Private Limited",
      "url": "https://shanmugamvijay.com/boysenberry",
      "description": "Community economy / community business initiative"
    },
    {
      "@type": "Organization",
      "name": "Universal Guard Trust",
      "url": "https://www.ugtglobal.space",
      "description": "Global framework for human flourishing and civilizational transformation"
    },
    {
      "@type": "Organization",
      "name": "Creator Community",
      "url": "https://creatorcommunity.space",
      "description": "Execution layer for civilizational creation"
    },
    {
      "@type": "Organization",
      "name": "Kingdom of Shiva",
      "url": "https://kingdomofshiva.space",
      "description": "Virtual Civilization of Hindu Knowledge, Heritage, Philosophy and Living Traditions"
    }
  ],
  "creator": [
    {
      "@type": "Organization",
      "name": "Zentium",
      "url": "https://shanmugamvijay.com/zentium",
      "description": "Decentralized infrastructure and blockchain project"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.ugtglobal.space" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
