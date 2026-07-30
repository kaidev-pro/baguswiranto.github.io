import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kaidevlab.com";
  const staticRoutes = ["", "/work", "/about", "/contact", "/lab-notes", "/privacy", "/terms"];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);
  const noteRoutes = ["/lab-notes/behind-kaidevlab-redesign"];

  return [...staticRoutes, ...projectRoutes, ...noteRoutes].map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.75 : 0.65,
  }));
}
