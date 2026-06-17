"use client";

import { useEffect, useState } from "react";

function useScrollReveal() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return revealed;
}

export default function MobilePage() {
  const revealed = useScrollReveal();
  const isRevealed = (id: string) => revealed.has(id);

  const sectionClass = (id: string, base = "") =>
    `section-hidden ${isRevealed(id) ? "section-revealed" : ""} ${base}`;

  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] py-24 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7EC8E3 0%, transparent 70%)" }}
        />
        <div className="text-center max-w-3xl relative z-10">
          <p className="text-sm tracking-[0.24em] uppercase mb-6 text-primary font-medium">
            Full-Stack Developer · AI Automation
          </p>
          <h1 className="text-5xl font-bold mb-6 hero-name leading-tight font-serif">
            <span className="inline-block">KAI</span>
          </h1>
          <div className="px-2">
            <p className="text-lg text-foreground/80 mb-8 leading-[1.8] font-medium">
              Building production-ready web apps and AI automations from idea to deploy.
              <br />
              <span className="text-sm text-muted mt-2 block italic opacity-80">
                Founder: 8Agents & RakuSaku. Based in Japan.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              ["2", "Live products"],
              ["15+", "AI agents"],
              ["JST", "Timezone"],
              ["Remote", "Available"],
            ].map(([value, label]) => (
              <div key={label} className="glass-card rounded-2xl px-4 py-3 text-left">
                <p className="text-lg font-bold gradient-text">{value}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects-m" className="btn-primary px-6 py-3 rounded-xl text-foreground font-medium">
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 rounded-xl text-foreground font-medium">
              LinkedIn
            </a>
            <a href="#contact-m" className="btn-outline px-6 py-3 rounded-xl text-foreground font-medium">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About */}
      <section id="about-m" data-reveal className={sectionClass("about-m", "py-20 px-4")}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">02 — Biography</span>
            <h2 className="text-3xl font-bold font-serif text-foreground">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>
          <div className="rounded-2xl p-8 glass-card">
            <div className="flex flex-col items-center gap-6 mb-4">
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30">
                  <img src="/profile.jpg" alt="Kai" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-full">
                  OPEN
                </div>
              </div>
              <div className="text-center">
                <p className="text-foreground/80 leading-[1.8] mb-4">
                  I&apos;m a self-taught full-stack developer based in Japan, focused on practical products that connect polished frontend UX with reliable backend systems and AI automation.
                </p>
                <p className="text-foreground/80 leading-[1.8] mb-4">
                  I shipped <strong className="text-orange-500">8Agents</strong>, an AI-agent SaaS platform, and <strong className="text-pink-500">RakuSaku</strong>, a digital services marketplace with payment and supplier integrations.
                </p>
                <p className="text-muted text-sm">
                  Based in Japan (JST) · Open to remote USD opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Skills */}
      <section id="skills-m" data-reveal className={sectionClass("skills-m", "py-20 px-4")} style={{ background: "rgba(126, 200, 227, 0.04)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">03 — Expertise</span>
            <h2 className="text-3xl font-bold font-serif text-foreground">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI Agents", "Next.js", "TypeScript", "Python", "FastAPI", "Docker", "PostgreSQL", "Tailwind CSS", "Vercel", "Telegram Bot API"].map((skill, i) => (
              <div key={skill} className="glass-card rounded-xl px-4 py-2.5">
                <span className="text-xs text-muted font-bold mr-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects */}
      <section id="projects-m" data-reveal className={sectionClass("projects-m", "py-20 px-4")}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-bold">04 — Portfolio</span>
            <h2 className="text-3xl font-bold font-serif text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              { title: "8Agents", desc: "Production AI-agent SaaS platform with 15+ autonomous agents, real-time task delegation, multi-provider AI integration, and Telegram-based monitoring.", url: "https://8agents.xyz", accent: "#f97316", status: "LIVE", logo: "/logos/8agents-64.webp", impact: ["15+ agents", "Multi-provider AI", "Telegram ops"] },
              { title: "RakuSaku", desc: "Digital services marketplace with payment gateway integration, automated supplier fulfillment through Digiflazz, and admin workflows for managing orders.", url: "https://rakusaku.com", accent: "#ec4899", status: "LIVE", logo: "/logos/rakusaku-64.webp", impact: ["Payments", "Supplier API", "Admin dashboard"] },
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card glass-card rounded-2xl p-6 block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: project.accent + "15" }}>
                    {project.logo && <img src={project.logo} alt="" className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg" style={{ color: project.accent }}>{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: project.accent + "20", color: project.accent }}>{project.status}</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="grid grid-cols-3 gap-2">
                  {project.impact.map((item) => (
                    <span key={item} className="text-[10px] text-center rounded-lg px-2 py-2 font-medium" style={{ background: project.accent + "14", color: project.accent }}>
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience */}
      <section id="experience-m" data-reveal className={sectionClass("experience-m", "py-20 px-4")} style={{ background: "rgba(126, 200, 227, 0.04)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl font-bold text-foreground">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(249,115,22,0.1)" }}>
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Founder & Developer</h3>
                  <p className="text-orange-500 text-sm">8Agents · 2026 - Present</p>
                  <p className="text-muted text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(236,72,153,0.1)" }}>
                  <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Founder & Developer</h3>
                  <p className="text-pink-500 text-sm">RakuSaku · 2026 - Present</p>
                  <p className="text-muted text-sm mt-1">Game top-up & digital services marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact */}
      <section id="contact-m" data-reveal className={sectionClass("contact-m", "py-20 px-4")}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl font-bold text-foreground">
              Ready to <span className="gradient-text">collaborate?</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-foreground/70 mb-8 leading-[1.8]">
            Open to remote full-stack, product engineer, and AI automation roles. Best fit: SaaS, internal tools, automation, or AI-enabled products.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { label: "Email", href: "mailto:baguswirantowicaksono@gmail.com" },
              { label: "GitHub", href: "https://github.com/baguswiranto" },
              { label: "Telegram", href: "https://t.me/kaikazukii" },
              { label: "X", href: "https://x.com/Kiminoheroo" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-foreground font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted text-sm" style={{ borderTop: "1px solid rgba(126, 200, 227, 0.15)" }}>
        <p>&copy; 2026 Kai. All rights reserved.</p>
      </footer>
    </>
  );
}
