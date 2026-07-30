/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

const work = [
  { slug: "8agents", name: "8Agents", category: "AI Business System", group: "AI Systems", status: "Building", logo: "/logos/8agents-128.webp", summary: "An AI-assisted business transformation system that turns UMKM intake into structured analysis, recommendations, and founder-reviewed deliverables.", liveUrl: "https://8agents.xyz" },
  { slug: "8router", name: "8Router", category: "Developer Tool", group: "Developer Tools", status: "Beta / Active Development", logo: "/logos/8router-mark.svg", summary: "An OpenAI-compatible gateway for routing, fallback, credentials, and multi-provider AI access.", liveUrl: "https://8router.8agents.xyz" },
  { slug: "nihongogate", name: "NihongoGate", category: "Education Product", group: "Education", status: "Active Development", logo: "/logos/nihongogate-64.svg", summary: "A Japanese and SSW learning platform built around practical learning workflows.", liveUrl: "https://nihongogate.kaidevlab.com" },
  { slug: "rakusaku", name: "Rakusaku", category: "Digital Commerce Prototype", group: "Products", status: "Prototype — Payment Integration Pending", logo: "/logos/rakusaku-128.webp", summary: "A game top-up prototype exploring commerce architecture and playful branding.", liveUrl: "https://rakusaku.com" },
  { slug: "kai-revengers", name: "Kai Revengers", category: "AI-Assisted Anime Film Experiment", group: "Creative", status: "Archived Creative Prototype", logo: "/logos/kai-revengers-64.svg", summary: "An early cinematic experiment that helped define Kai’s action language, visual direction, editing workflow, and foundations later carried into Blue Vengeance.", liveUrl: "" },
  { slug: "blue-vengeance", name: "Blue Vengeance", category: "Original Manhwa Series", group: "Creative", status: "Pre-Production", logo: "/logos/kai-revengers-64.svg", summary: "An original long-form manhwa following Kai from age 17 to 27, evolving from school action into an adult investigator story.", liveUrl: "" },
  { slug: "dragon-kings-last-contract", name: "The Dragon King’s Last Contract", category: "AI Film Experiment", group: "Experiments", status: "Episode 1 Completed · Creative Experiment", logo: "/logos/kai-revengers-64.svg", summary: "A completed Episode 1 dark fantasy creative experiment built with AI filmmaking workflows.", liveUrl: "" },
];

const filters = ["All", "Products", "AI Systems", "Developer Tools", "Education", "Creative", "Experiments"] as const;
type Filter = (typeof filters)[number];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.18 } },
};

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredWork = useMemo(
    () => activeFilter === "All" ? work : work.filter((project) => project.group === activeFilter),
    [activeFilter],
  );

  return (
    <main className="section work-page">
      <p className="eyebrow">WORK</p>
      <h1>Products, AI systems, developer tools, education, creative experiments.</h1>
      <div className="work-filters" aria-label="Work filters">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "active" : ""}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="filter-count">Showing {filteredWork.length} of {work.length} projects.</p>
      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredWork.map(({ slug, name, category, status, logo, summary, liveUrl }) => (
            <motion.article
              className="project"
              key={name}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              whileHover={{ y: -5 }}
            >
              <div className="thumb project-visual">
                <div className="visual-grid" aria-hidden="true" />
                <Image src={logo} alt="" aria-hidden="true" width={88} height={88} />
                <div className="visual-lines" aria-hidden="true"><span /><span /><span /></div>
                <strong>{name}</strong>
              </div>
              <p className="chip">{category}</p>
              <h3>{name}</h3>
              <p>{summary}</p>
              <p className="status">{status}</p>
              <div className="project-actions">
                <a href={`/work/${slug}`}>View Project</a>
                {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">Live Site</a>}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <a className="secondary" href="/">Back Home</a>
    </main>
  );
}
