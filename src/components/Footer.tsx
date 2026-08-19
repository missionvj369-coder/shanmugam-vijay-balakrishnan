import Link from "next/link";

const footerLinks = {
  main: [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Ideas", href: "/ideas" },
    { name: "How I Think", href: "/how-i-think" },
    { name: "Journey", href: "/journey" },
  ],
  workAreas: [
    { name: "Boysenberry", href: "/boysenberry" },
    { name: "Universal Guard Trust", href: "/universal-guard-trust" },
    { name: "Heaven on Earth", href: "/heaven-on-earth" },
    { name: "Creator Community", href: "/creator-community" },
    { name: "Kingdom of Shiva", href: "/kingdom-of-shiva" },
    { name: "Zentium", href: "/zentium" },
    { name: "Technology", href: "/technology" },
    { name: "Media", href: "/media" },
  ],
  external: [
    { name: "UGT Global", href: "https://www.ugtglobal.space", external: true },
    { name: "UGT India", href: "https://ugtindia.space", external: true },
    { name: "Creator Community", href: "https://creatorcommunity.space", external: true },
    { name: "Kingdom of Shiva", href: "https://kingdomofshiva.space", external: true },
    { name: "GitHub", href: "https://github.com/missionvj369-coder", external: true },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/neoxhuman?igsh=aDd6cjNjZGd5Nzlq&igsi=aDd6cjNjZGd5Nzlq&utm_source=qr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.16c3.2 0 3.584.01 4.85.07 1.17.05 1.805.25 2.227.41.562.21.96.48 1.38.9.41.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.21.56-.48.96-.9 1.38-.42.41-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41-.56-.21-.96-.48-1.38-.9-.41-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.21-.56.48-.96.9-1.38.42-.41.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.71-2.13 1.37S.95 3.35.65 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.71 1.46 1.37 2.13s.82.95 1.61 1.25c.76.32 1.64.52 2.91.58C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.71 2.13-1.37s.95-.82 1.25-1.61c.32-.76.52-1.64.58-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.71-1.46-1.37-2.13s-.82-.95-1.61-1.25c-.76-.32-1.64-.52-2.91-.58C15.67.01 15.26 0 12 0z" />
          <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.32A4.16 4.16 0 1 1 16.16 12a4.16 4.16 0 0 1-4.16 4.16z" />
          <circle cx="12" cy="10.4" r="1.12" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1DW2RfVP7o/?mibextid=wwXIfr",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.575v20.85C0 23.4.6 24 1.575 24H12.5V14.7h-3.05V11.3h3.05V8.41c0-3.03 1.83-4.7 4.58-4.7 1.33 0 2.47.1 2.78.15v3.2h-1.92c-1.5 0-1.8.7-1.8 1.75v2.33h3.58l-.46 3.4l3.62 3.62c.05-.34.08-.68.08-1.02V1.575C24 0 23.4 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/universal-guard-trust-ugt-b09b05394?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.65 0 4.33 2.41 4.33 5.53v6.21zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 20.45h-3.56V9c0-.53-.01-.96-.02-1.39.02.03.04.05.04.08v10.31z" />
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-medium text-foreground mb-6" aria-label="Shanmugam Vijay Balakrishnan - Home">
              <span className="text-2xl font-light tracking-tight">SVB</span>
            </Link>
            <p className="body-sm text-muted-foreground max-w-xs">
              Building community economies, intelligent technologies and civilizational systems for a flourishing future.
            </p>
            <p className="body-sm text-muted-foreground mt-4 max-w-xs">
              Creator • Founder • Systems Builder • Civilization Architect
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible-ring rounded w-8 h-8 flex items-center justify-center"
                  aria-label={`${item.name} (opens in new tab)`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <nav aria-label="Main pages">
            <h3 className="caption text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible-ring rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Work Areas */}
          <nav aria-label="Work areas">
            <h3 className="caption text-foreground mb-4">Work Areas</h3>
            <ul className="space-y-3">
              {footerLinks.workAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible-ring rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External Links */}
          <nav aria-label="External links">
            <h3 className="caption text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.external.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible-ring rounded"
                    aria-label={`${item.name} (opens in new tab)`}
                  >
                    {item.name}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shanmugam Vijay Balakrishnan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors focus-visible-ring rounded">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors focus-visible-ring rounded">
              Terms
            </Link>
            <span className="text-xs">Not a single organization — a body of work.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
