export type ProjectGroup =
  | "Products"
  | "AI Systems"
  | "Developer Tools"
  | "Education"
  | "Creative"
  | "Experiments";

export type ProjectPreview = {
  slug: string;
  name: string;
  category: string;
  group: ProjectGroup;
  status: string;
  role: string;
  summary: string;
  logo: string;
  tone: "agent" | "router" | "education" | "commerce" | "creative" | "fantasy";
  signals: string[];
  liveUrl?: string;
  coverImage?: string;
  coverPosition?: string;
};

export const projects: ProjectPreview[] = [
  {
    slug: "8agents",
    name: "8Agents",
    category: "AI Business System",
    group: "AI Systems",
    status: "Building",
    role: "Product architecture, AI workflow, founder control",
    summary:
      "An AI-assisted business transformation system that turns UMKM intake into structured analysis, recommendations, and founder-reviewed deliverables.",
    logo: "/logos/8agents-128.webp",
    tone: "agent",
    signals: ["Business intake", "Founder review", "Reliable AI workflow"],
    liveUrl: "https://8agents.id",
    coverImage: "/project-screenshots/8agents.webp",
    coverPosition: "center top",
  },
  {
    slug: "8router",
    name: "8Router",
    category: "Developer Tool",
    group: "Developer Tools",
    status: "Beta · Active Development",
    role: "Architecture, routing, developer experience",
    summary:
      "An OpenAI-compatible gateway for routing, fallback, credentials, and multi-provider AI access.",
    logo: "/logos/8router-mark.svg",
    tone: "router",
    signals: ["OpenAI-compatible", "Fallback", "Provider routing"],
    liveUrl: "https://8router.8agents.xyz",
    coverImage: "/project-screenshots/8router.webp",
    coverPosition: "center top",
  },
  {
    slug: "nihongogate",
    name: "NihongoGate",
    category: "Education Product",
    group: "Education",
    status: "Active Development",
    role: "Product engineering, learning design",
    summary:
      "A Japanese and SSW learning platform built around structured, practical learning workflows.",
    logo: "/logos/nihongogate-64.svg",
    tone: "education",
    signals: ["JLPT N5–N1", "SSW", "Learning paths"],
    liveUrl: "https://nihongogate.kaidevlab.com",
    coverImage: "/project-screenshots/nihongogate.webp",
    coverPosition: "center top",
  },
  {
    slug: "rakusaku",
    name: "Rakusaku",
    category: "Digital Commerce Prototype",
    group: "Products",
    status: "Prototype · Payment Integration Pending",
    role: "Product interface, commerce architecture, branding",
    summary:
      "A game top-up prototype exploring commerce architecture, product experience, and playful branding.",
    logo: "/logos/rakusaku-128.webp",
    tone: "commerce",
    signals: ["Game catalog", "Commerce UX", "Payment pending"],
    liveUrl: "https://rakusaku.com",
    coverImage: "/project-screenshots/rakusaku.webp",
    coverPosition: "center top",
  },
  {
    slug: "blue-vengeance",
    name: "Blue Vengeance",
    category: "Original Anime Series",
    group: "Creative",
    status: "Pre-Production",
    role: "Creator, story direction, visual development",
    summary:
      "An original anime series following Kai and Rin through a story of gentle bonds, fading scars, and promises that become vengeance.",
    logo: "/logos/kai-revengers-64.svg",
    tone: "creative",
    signals: ["Long-form story", "Character arcs", "Visual development"],
    coverImage: "/blue-vengeance-poster.webp",
    coverPosition: "center 24%",
  },
  {
    slug: "dragon-kings-last-contract",
    name: "The Dragon King’s Last Contract",
    category: "AI Film Experiment",
    group: "Experiments",
    status: "Episode 1 Completed · Creative Experiment",
    role: "Story direction, visual direction, AI film workflow",
    summary:
      "A completed dark-fantasy Episode 1 experiment about a monster, a contract, and the girl sent to kill him.",
    logo: "/logos/kai-revengers-64.svg",
    tone: "fantasy",
    signals: ["Dark fantasy", "Episode 1", "AI filmmaking"],
    coverImage: "/dragon-kings-last-contract-poster.webp",
    coverPosition: "center 20%",
  },
];

export const featuredProjects = projects.slice(0, 4);
export const creativeProjects = projects.filter((project) => project.group === "Creative");