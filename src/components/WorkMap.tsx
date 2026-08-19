"use client";

import { useState } from "react";
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

  return (
    <div className={`${className}`} role="list" aria-label="Work areas">
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="card-base group"
            onMouseEnter={() => setHoveredCategory(cat)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: cat.color }}
              />
              <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">
                {cat.label}
              </h3>
            </div>

            {/* Category Nodes */}
            <div className="space-y-3">
              {cat.nodes.map((node) => (
                <div
                  key={node.id}
                  className="relative"
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <Link
                    href={node.href}
                    className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 border border-transparent hover:border-primary/30 group/node"
                    aria-label={`${node.label} - ${statusLabels[node.status]} - ${node.category}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground group-hover/node:text-primary transition-colors">
                            {node.label}
                          </h4>
                          {node.external && (
                            <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{node.category}</p>
                        {showDescriptions && (
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {node.description}
                          </p>
                        )}
                      </div>
                      <span className={statusStyles[node.status]} style={{ flexShrink: 0 }}>
                        {statusLabels[node.status]}
                      </span>
                    </div>
                  </Link>

                  {/* Hover Tooltip */}
                  {hoveredNode?.id === node.id && (
                    <div 
                      className="absolute z-20 p-4 rounded-xl bg-card border-2 border-primary/20 shadow-2xl animate-fade-in pointer-events-none"
                      style={{
                        left: '100%',
                        top: '0',
                        marginLeft: '1rem',
                        width: '320px',
                        maxWidth: 'calc(100vw - 2rem)'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: cat.color + '20' }}
                        >
                          <svg className="w-5 h-5" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={node.href} className="font-bold text-foreground hover:text-primary transition-colors block mb-1">
                            {node.label}
                          </Link>
                          <span className={statusStyles[node.status]}>
                            {statusLabels[node.status]}
                          </span>
                          <p className="text-xs text-muted-foreground mt-2">{node.category}</p>
                          {showDescriptions && (
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                              {node.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}