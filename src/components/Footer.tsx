import Link from "next/link";

const footerLinks = {
  main: [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Ideas", href: "/ideas" },
    { name: "How I Think", href: "/how-i-think" },
    { name: "Journey", href: "/journey" },
    { name: "Connect", href: "/connect" },
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
    { name: "GitHub", href: "https://github.com/shanmugamvijay", external: true },
    { name: "Twitter", href: "https://twitter.com/shanmugamvijay", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/shanmugamvijay", external: true },
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