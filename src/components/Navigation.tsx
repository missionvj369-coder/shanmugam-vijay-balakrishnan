"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Ideas", href: "/ideas" },
  { name: "How I Think", href: "/how-i-think" },
  { name: "Journey", href: "/journey" },
];

const workAreas = [
  { name: "Boysenberry", href: "/boysenberry", category: "Community" },
  { name: "Universal Guard Trust", href: "/universal-guard-trust", category: "Intelligence" },
  { name: "Heaven on Earth", href: "/heaven-on-earth", category: "Civilization" },
  { name: "Creator Community", href: "/creator-community", category: "Creation" },
  { name: "Kingdom of Shiva", href: "/kingdom-of-shiva", category: "Knowledge" },
  { name: "Zentium", href: "/zentium", category: "Decentralization" },
  { name: "Technology", href: "/technology", category: "Technology" },
  { name: "Media", href: "/media", category: "Creative" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
  }, [pathname]);

  const handleBack = () => {
    router.back();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container-custom"
        aria-label="Main navigation"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-foreground focus-visible-ring rounded-md px-2 py-1"
            aria-label="Shanmugam Vijay Balakrishnan - Home"
          >
            <span className="text-xl font-light tracking-tight">SVB</span>
            <span className="hidden sm:inline text-sm text-muted-foreground">Shanmugam Vijay Balakrishnan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {/* Back & Home Buttons */}
            <div className="flex items-center gap-1 mr-2">
              <button
                onClick={handleBack}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus-visible-ring"
                aria-label="Go back"
                title="Back"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <Link
                href="/"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus-visible-ring"
                aria-label="Home"
                title="Home"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10h14V10" />
                </svg>
              </Link>
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible-ring ${
                  pathname === item.href
                    ? "text-white bg-primary shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Work Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setWorkDropdownOpen(true)} onMouseLeave={() => setWorkDropdownOpen(false)}>
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible-ring ${
                  pathname.startsWith("/boysenberry") ||
                  pathname.startsWith("/universal-guard-trust") ||
                  pathname.startsWith("/heaven-on-earth") ||
                  pathname.startsWith("/creator-community") ||
                  pathname.startsWith("/kingdom-of-shiva") ||
                  pathname.startsWith("/zentium") ||
                  pathname.startsWith("/technology") ||
                  pathname.startsWith("/media")
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                aria-expanded={workDropdownOpen}
                aria-haspopup="true"
                aria-label="Work areas"
              >
                Work Areas
                <svg
                  className={`w-4 h-4 transition-transform ${workDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {workDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-border bg-card py-2 shadow-lg animate-fade-in z-50" role="menu">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Community & Economy
                  </div>
                  <Link
                    href="/boysenberry"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/boysenberry" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Boysenberry</span>
                    <span className="block text-xs text-muted-foreground">Community Economy</span>
                  </Link>
                  <Link
                    href="/creator-community"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/creator-community" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Creator Community</span>
                    <span className="block text-xs text-muted-foreground">Execution Layer</span>
                  </Link>

                  <div className="border-t border-border my-2" />
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Intelligence & Civilization
                  </div>
                  <Link
                    href="/universal-guard-trust"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/universal-guard-trust" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Universal Guard Trust</span>
                    <span className="block text-xs text-muted-foreground">Global Framework</span>
                  </Link>
                  <Link
                    href="/heaven-on-earth"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/heaven-on-earth" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Heaven on Earth</span>
                    <span className="block text-xs text-muted-foreground">Civilizational Architecture</span>
                  </Link>
                  <Link
                    href="/kingdom-of-shiva"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/kingdom-of-shiva" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Kingdom of Shiva</span>
                    <span className="block text-xs text-muted-foreground">Hindu Knowledge Civilization</span>
                  </Link>

                  <div className="border-t border-border my-2" />
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Decentralization & Technology
                  </div>
                  <Link
                    href="/zentium"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/zentium" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Zentium</span>
                    <span className="block text-xs text-muted-foreground">Blockchain & Decentralization</span>
                  </Link>
                  <Link
                    href="/technology"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/technology" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Technology</span>
                    <span className="block text-xs text-muted-foreground">AI, VR, Web, Creative Systems</span>
                  </Link>

                  <div className="border-t border-border my-2" />
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Creative Work
                  </div>
                  <Link
                    href="/media"
                    className={`block px-3 py-2 text-sm transition-colors ${
                      pathname === "/media" ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                    role="menuitem"
                  >
                    <span className="font-medium">Media</span>
                    <span className="block text-xs text-muted-foreground">Music, Podcasts, Video, Writing</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Link
              href="/connect"
              className="btn-primary text-sm"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus-visible-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Fixed positioning to avoid overlay issues */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg z-40 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 py-4">
              {/* Back & Home in Mobile */}
              <div className="flex items-center gap-2 px-3 py-2">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent focus-visible-ring"
                  aria-label="Go back"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent focus-visible-ring"
                  aria-label="Home"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10h14V10" />
                  </svg>
                  Home
                </Link>
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-primary text-white shadow-lg"
                      : "text-foreground hover:bg-accent"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {/* Work Areas in Mobile */}
              <div className="border-t border-border my-2 pt-2">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Work Areas
                </div>
                {workAreas.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                      pathname === item.href ? "bg-accent text-primary" : "text-foreground hover:bg-accent"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </Link>
                ))}
              </div>

              <div className="border-t border-border my-2 pt-4">
                <Link
                  href="/connect"
                  className="btn-primary w-full justify-center"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
