"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface WorkNode {
  id: string;
  label: string;
  href: string;
  category: string;
  description: string;
  status: "operating" | "building" | "pilot" | "research" | "planned" | "vision";
  external?: boolean;
}

interface WorkCategory {
  id: string;
  label: string;
  nodes: WorkNode[];
  color: string;
}

const categories: WorkCategory[] = [
  {
    id: "community",
    label: "COMMUNITY",
    color: "#22c55e",
    nodes: [
      {
        id: "boysenberry",
        label: "Boysenberry",
        href: "/boysenberry",
        category: "Community Economy",
        description: "Community-centered economic model combining local participation with modern business and technology",
        status: "operating",
      },
      {
        id: "creator-community",
        label: "Creator Community",
        href: "/creator-community",
        category: "Execution Layer",
        description: "369 domains, 271 patterns, 99,999 projects — the execution layer for civilizational creation",
        status: "building",
      },
    ],
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    color: "#3b82f6",
    nodes: [
      {
        id: "universal-guard-trust",
        label: "Universal Guard Trust",
        href: "/universal-guard-trust",
        category: "Global Framework",
        description: "Open architecture for continuous civilizational learning and creation",
        status: "operating",
      },
      {
        id: "integrated-intelligence",
        label: "Integrated Intelligence",
        href: "/universal-guard-trust#integrated-intelligence",
        category: "Core Research",
        description: "Human evolution → Integrated intelligence → Human flourishing → Civilization transformation",
        status: "research",
      },
      {
        id: "heaven-on-earth",
        label: "Heaven on Earth",
        href: "/heaven-on-earth",
        category: "Civilizational Architecture",
        description: "Evolving working architecture for conscious civilization",
        status: "building",
      },
    ],
  },
  {
    id: "civilization",
    label: "CIVILIZATION",
    color: "#f59e0b",
    nodes: [
      {
        id: "heaven-on-earth-2",
        label: "Heaven on Earth",
        href: "/heaven-on-earth",
        category: "Civilizational Architecture",
        description: "Evolving working architecture for conscious civilization",
        status: "building",
      },
      {
        id: "kingdom-of-shiva",
        label: "Kingdom of Shiva",
        href: "/kingdom-of-shiva",
        category: "Knowledge Civilization",
        description: "Virtual civilization of Hindu knowledge, heritage, philosophy and living traditions",
        status: "building",
      },
    ],
  },
  {
    id: "decentralization",
    label: "DECENTRALIZATION",
    color: "#8b5cf6",
    nodes: [
      {
        id: "zentium",
        label: "Zentium",
        href: "/zentium",
        category: "Blockchain & Decentralization",
        description: "Decentralized project infrastructure, community-oriented digital value, future decentralized systems",
        status: "building",
      },
      {
        id: "zentium-coin",
        label: "Zentium Coin",
        href: "https://ugtglobal.space",
        category: "Community Currency",
        description: "Native community currency for value circulation within the ecosystem",
        status: "operating",
        external: true,
      },
      {
        id: "ugt-global",
        label: "UGT Global",
        href: "https://ugtglobal.space",
        category: "Global Framework",
        description: "Universal Guard Trust global initiative",
        status: "operating",
        external: true,
      },
      {
        id: "ugt-india",
        label: "UGT India",
        href: "https://ugtindia.space",
        category: "National Framework",
        description: "Universal Guard Trust India initiative",
        status: "operating",
        external: true,
      },
      {
        id: "blockchain",
        label: "Blockchain Systems",
        href: "/technology/blockchain",
        category: "Technology",
        description: "Decentralized infrastructure for community economies and civilizational systems",
        status: "research",
      },
    ],
  },
  {
    id: "technology",
    label: "TECHNOLOGY",
    color: "#ec4899",
    nodes: [
      {
        id: "ai",
        label: "AI Systems",
        href: "/technology/ai",
        category: "Technology",
        description: "AI-assisted platforms, creative pipelines, intelligent automation",
        status: "building",
      },
      {
        id: "vr",
        label: "VR & Metaverse",
        href: "/technology/vr",
        category: "Technology",
        description: "Immersive systems for community interaction and civilizational experience",
        status: "research",
      },
      {
        id: "web",
        label: "Web & Creative Tech",
        href: "/technology/creative-ai",
        category: "Technology",
        description: "OpenMontage, video generation, creative automation pipelines",
        status: "building",
      },
    ],
  },
  {
    id: "creation",
    label: "CREATION",
    color: "#ef4444",
    nodes: [
      {
        id: "music",
        label: "Music",
        href: "/media#music",
        category: "Creative Work",
        description: "Original compositions and sound exploration",
        status: "operating",
      },
      {
        id: "podcasts",
        label: "Podcasts",
        href: "/media#podcasts",
        category: "Creative Work",
        description: "Conversations on systems, civilization, and human flourishing",
        status: "operating",
      },
      {
        id: "video",
        label: "Video & Film",
        href: "/media#video",
        category: "Creative Work",
        description: "Cinematic creation and visual storytelling",
        status: "building",
      },
      {
        id: "writing",
        label: "Writing",
        href: "/media#writing",
        category: "Creative Work",
        description: "Essays, frameworks, and civilizational thinking",
        status: "operating",
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  operating: "status-operating",
  building: "status-building",
  pilot: "status-pilot",
  research: "status-research",
  planned: "status-planned",
  vision: "status-vision",
};

const statusLabels: Record<string, string> = {
  operating: "OPERATING",
  building: "BUILDING",
  pilot: "PILOT",
  research: "RESEARCH",
  planned: "PLANNED",
  vision: "VISION",
};

export function WorkMap({ 
  interactive = true, 
  className = "",
  showDescriptions = true 
}: { 
  interactive?: boolean; 
  className?: string;
  showDescriptions?: boolean;
}) {
  const [hoveredNode, setHoveredNode] = useState<WorkNode | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<WorkCategory | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Static version for mobile/simple display
  if (!interactive || isMobile) {
    return (
      <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${className}`} role="list" aria-label="Work areas">
        {categories.flatMap((cat) =>
          cat.nodes.map((node) => (
            <article
              key={node.id}
              className="card-interactive group"
              role="listitem"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: cat.color + "20" }}
                >
                  <svg className="w-5 h-5" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Link href={node.href} className="font-medium text-foreground hover:text-primary transition-colors focus-visible-ring rounded">
                      {node.label}
                    </Link>
                    <span className={statusStyles[node.status]}>
                      {statusLabels[node.status]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{node.category}</p>
                  {showDescriptions && (
                    <p className="text-sm text-muted-foreground line-clamp-3">{node.description}</p>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    );
  }

  // Interactive desktop version with improved layout
  return (
    <div
      className={`relative min-h-[700px] lg:min-h-[800px] ${className}`}
      role="graphics-document"
      aria-label="Interactive work map showing connections between projects and organizations"
    >
      {/* Center Hub - Improved Design */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-primary/30 bg-gradient-to-br from-background to-muted/50 flex items-center justify-center text-center shadow-2xl">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
            <div className="absolute inset-2 rounded-full border border-primary/10" />
            <div className="relative z-10">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">MY WORK</p>
              <p className="text-xs text-muted-foreground mt-1">Central Hub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Nodes - Positioned in a circle */}
      {categories.map((cat, index) => {
        const angle = (index / categories.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 280;
        const x = 50 + (Math.cos(angle) * radius / 4);
        const y = 50 + (Math.sin(angle) * radius / 4);
        
        return (
          <div
            key={cat.id}
            className="absolute z-10 transition-all duration-500 hover:z-30"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredCategory(cat)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="relative group/cat">
              <div className="w-24 h-24 rounded-full border-3 bg-background/95 backdrop-blur-sm flex items-center justify-center text-center shadow-xl" style={{ borderColor: cat.color + "60" }}>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/cat:opacity-20 transition-opacity" style={{ backgroundColor: cat.color }} />
                <div className="relative z-10 text-foreground group-hover/cat:text-white transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider leading-tight">{cat.label}</p>
                </div>
              </div>
              
              {/* Category Label Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 rounded-lg bg-card border-2 border-border text-sm font-bold text-foreground whitespace-nowrap opacity-0 group-hover/cat:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">
                {cat.label}
              </div>
            </div>
          </div>
        );
      })}

      {/* Work Nodes - Positioned around their categories */}
      {categories.map((cat, catIndex) => {
        const angle = (catIndex / categories.length) * Math.PI * 2 - Math.PI / 2;
        const catRadius = 280;
        const catX = 50 + (Math.cos(angle) * catRadius / 4);
        const catY = 50 + (Math.sin(angle) * catRadius / 4);
        const nodeRadius = 120;

        return cat.nodes.map((node, nodeIndex) => {
          const nodeAngle = (nodeIndex / cat.nodes.length) * Math.PI * 2;
          const x = catX + (Math.cos(nodeAngle) * nodeRadius / 4);
          const y = catY + (Math.sin(nodeAngle) * nodeRadius / 4);

          return (
            <div
              key={node.id}
              className="absolute z-10 transition-all duration-500 hover:z-30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Link
                href={node.href}
                className="block group/node"
                aria-label={`${node.label} - ${statusLabels[node.status]} - ${node.category}`}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-card/95 backdrop-blur-sm border-2 flex items-center justify-center text-center shadow-xl" style={{ borderColor: cat.color + "80" }}>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/node:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />
                    <div className="relative z-10 px-2">
                      <p className="text-xs font-bold text-foreground group-hover/node:text-white transition-colors leading-tight">{node.label}</p>
                      <p className="text-[10px] text-muted-foreground group-hover/node:text-white/80 transition-colors mt-1 font-medium">{statusLabels[node.status]}</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Node Detail Tooltip */}
              {hoveredNode?.id === node.id && (
                <div
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-6 w-80 card-base z-30 animate-fade-in pointer-events-auto shadow-2xl"
                  role="tooltip"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cat.color + "20" }}>
                      <svg className="w-6 h-6" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={node.href} className="font-bold text-foreground hover:text-primary transition-colors focus-visible-ring rounded block mb-2 text-lg">
                        {node.label}
                      </Link>
                      <span className={statusStyles[node.status]}>
                        {statusLabels[node.status]}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">{node.category}</p>
                      {showDescriptions && (
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{node.description}</p>
                      )}
                      <Link
                        href={node.href}
                        className="inline-flex items-center gap-2 text-sm text-primary mt-4 hover:underline focus-visible-ring font-medium"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        });
      })}

      {/* Legend - positioned bottom-left to avoid node overlap */}
      <div className="absolute bottom-4 left-4 z-20 card-base p-4 shadow-xl">
        <p className="caption text-foreground mb-3 font-bold">Work Status</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {[
            { key: "operating", label: "Operating" },
            { key: "building", label: "Building" },
            { key: "pilot", label: "Pilot" },
            { key: "research", label: "Research" },
            { key: "planned", label: "Planned" },
            { key: "vision", label: "Vision" },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className={statusStyles[item.key]}>{statusLabels[item.key]}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}