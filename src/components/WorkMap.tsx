"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface WorkNode {
  id: string;
  label: string;
  href: string;
  category: string;
  description: string;
  status: "operating" | "building" | "pilot" | "research" | "planned" | "vision";
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface WorkCategory {
  id: string;
  label: string;
  nodes: WorkNode[];
  color: string;
  x?: number;
  y?: number;
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
        status: "building",
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
  const [layoutReady, setLayoutReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const categoryRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Calculate positions for force-directed layout
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    // Position categories in a circle around center
    const categoryRadius = Math.min(width, height) * 0.35;
    categories.forEach((cat, i) => {
      const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
      cat.x = centerX + Math.cos(angle) * categoryRadius;
      cat.y = centerY + Math.sin(angle) * categoryRadius;
    });

    // Position nodes around their categories
    categories.forEach((cat) => {
      if (cat.x === undefined || cat.y === undefined) return;
      const nodeRadius = 140;
      const catX = cat.x;
      const catY = cat.y;
      cat.nodes.forEach((node, j) => {
        const angle = (j / cat.nodes.length) * Math.PI * 2;
        node.x = catX + Math.cos(angle) * nodeRadius;
        node.y = catY + Math.sin(angle) * nodeRadius;
        node.vx = 0;
        node.vy = 0;
      });
    });

    setLayoutReady(true);
  }, []);

  // Draw connections using SVG
  const drawConnections = () => {
    if (!layoutReady || !containerRef.current) return null;

    const connections: React.ReactElement[] = [];
    const processedPairs = new Set<string>();

    for (const cat of categories) {
      if (cat.x === undefined || cat.y === undefined) continue;
      const catX = cat.x;
      const catY = cat.y;

      // Center to category
      connections.push(
        <line
          key={`center-${cat.id}`}
          x1={containerRef.current!.clientWidth / 2}
          y1={containerRef.current!.clientHeight / 2}
          x2={catX}
          y2={catY}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4,4"
          opacity="0.15"
          className="transition-opacity duration-300"
          style={{ color: cat.color }}
        />
      );

      // Category to nodes
      cat.nodes.forEach((node) => {
        if (node.x === undefined || node.y === undefined) return;
        const pairKey = `${cat.id}-${node.id}`;
        if (processedPairs.has(pairKey)) return;
        processedPairs.add(pairKey);

        const isHovered = hoveredCategory?.id === cat.id || hoveredNode?.id === node.id;
        connections.push(
          <line
            key={pairKey}
            x1={catX}
            y1={catY}
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth={isHovered ? 2 : 1}
            opacity={isHovered ? 0.6 : 0.2}
            className="transition-all duration-300"
            style={{ color: cat.color }}
          />
        );
      });
    }

    return <svg className="absolute inset-0 pointer-events-none" aria-hidden="true">{connections}</svg>;
  };

  if (!interactive) {
    // Static version for mobile/simple display
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

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[600px] lg:min-h-[700px] ${className}`}
      role="graphics-document"
      aria-label="Interactive work map showing connections between projects and organizations"
    >
      {drawConnections()}

      {/* Center Node */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-scale-in"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-24 h-24 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center text-center relative">
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
          <div className="relative z-10">
            <p className="text-xs font-medium text-foreground uppercase tracking-wider">MY WORK</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Central Hub</p>
          </div>
        </div>
      </div>

      {/* Category Nodes */}
      {categories.map((cat) => (
        <div
          key={cat.id}
          ref={(el) => { if (el) categoryRefs.current.set(cat.id, el); }}
          className="absolute z-10 transition-all duration-500"
          style={{
            left: cat.x ? `${cat.x}px` : 0,
            top: cat.y ? `${cat.y}px` : 0,
            transform: "translate(-50%, -50%)",
            opacity: layoutReady ? 1 : 0,
          }}
          onMouseEnter={() => setHoveredCategory(cat)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="w-20 h-20 rounded-full border-2 bg-background flex items-center justify-center text-center relative group/cat" style={{ borderColor: cat.color + "80" }}>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover/cat:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />
            <div className="relative z-10 text-white">
              <p className="text-xs font-medium uppercase tracking-wider">{cat.label}</p>
            </div>
          </div>
          
          {/* Category Label Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded bg-card border border-border text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover/cat:opacity-100 transition-opacity pointer-events-none z-20">
            {cat.label}
          </div>
        </div>
      ))}

      {/* Work Nodes */}
      {categories.flatMap((cat) =>
        cat.nodes.map((node) => (
          <div
            key={node.id}
            ref={(el) => { if (el) nodeRefs.current.set(node.id, el); }}
            className="absolute z-10 transition-all duration-500"
            style={{
              left: node.x ? `${node.x}px` : 0,
              top: node.y ? `${node.y}px` : 0,
              transform: "translate(-50%, -50%)",
              opacity: layoutReady ? 1 : 0,
            }}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <Link
              href={node.href}
              className="block group/node"
              aria-label={`${node.label} - ${statusLabels[node.status]} - ${node.category}`}
            >
              <div className="w-16 h-16 rounded-xl bg-card border-2 flex items-center justify-center text-center relative shadow-lg" style={{ borderColor: cat.color + "80" }}>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover/node:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />
                <div className="relative z-10 px-2">
                  <p className="text-xs font-medium text-foreground group-hover/node:text-white transition-colors leading-tight">{node.label}</p>
                  <p className="text-[10px] text-muted-foreground group-hover/node:text-white/70 transition-colors mt-0.5">{statusLabels[node.status]}</p>
                </div>
              </div>
            </Link>

            {/* Node Detail Tooltip */}
            {hoveredNode?.id === node.id && (
              <div
                className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-72 card-base z-30 animate-fade-in pointer-events-auto"
                role="tooltip"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cat.color + "20" }}>
                    <svg className="w-5 h-5" style={{ color: cat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={node.href} className="font-medium text-foreground hover:text-primary transition-colors focus-visible-ring rounded block mb-1">
                      {node.label}
                    </Link>
                    <span className={statusStyles[node.status]}>
                      {statusLabels[node.status]}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{node.category}</p>
                    {showDescriptions && (
                      <p className="text-sm text-muted-foreground mt-2">{node.description}</p>
                    )}
                    <Link
                      href={node.href}
                      className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline focus-visible-ring"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:bottom-4 md:right-4 md:w-56 card-base z-20">
        <p className="caption text-foreground mb-3">Work Status</p>
        <div className="space-y-2">
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