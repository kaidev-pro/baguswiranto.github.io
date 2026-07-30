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
    liveUrl: "https://8agents.xyz",
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
  },
  {
    slug: "blue-vengeance",
    name: "Blue Vengeance",
    category: "Original Manhwa Series",
    group: "Creative",
    status: "Pre-Production",
    role: "Creator, story direction, visual development",
    summary:
      "A long-form original manhwa following Kai from age 17 to 27, evolving from school action into an adult investigator story.",
    logo: "/logos/kai-revengers-64.svg",
    tone: "creative",
    signals: ["Long-form story", "Character arcs", "Visual development"],
  },
  {
    slug: "kai-revengers",
    name: "Kai Revengers",
    category: "AI-Assisted Anime Film Experiment",
    group: "Creative",
    status: "Archived Creative Prototype",
    role: "Direction, editing, sound, AI film workflow",
    summary:
      "An early cinematic experiment that shaped Kai’s action language, editing workflow, and the foundations later carried into Blue Vengeance.",
    logo: "/logos/kai-revengers-64.svg",
    tone: "creative",
    signals: ["Anime experiment", "Video editing", "Archived"],
    coverImage: "/kai-revengers-poster.jpg",
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
    coverImage: "/dragon-kings-last-contract-poster.jpg",
    coverPosition: "center 20%",
  },
];

export const featuredProjects = projects.slice(0, 4);
export const creativeProjects = projects.filter((project) => project.group === "Creative");
