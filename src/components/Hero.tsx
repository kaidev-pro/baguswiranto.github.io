"use client";

import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * Hero — text-first layout, video band below the fold.
 * Ported from Tailwind ref to project CSS (globals.css .hero-v2 scope).
 *
 * Non-negotiable:
 * - preload="none" + IntersectionObserver (LCP = h1).
 * - prefers-reduced-motion renders <img>, not <video>.
 * - aspect-[21/9] band (cinematic; crops cleanly on mobile).
 * - Band uses radial vignette mask to melt fake dashboard metrics from source clip.
 */

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServer() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getReducedMotionServer);
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const band = bandRef.current;
    if (!video || !band || reducedMotion) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* autoplay blocked — poster remains */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(band);
    return () => io.disconnect();
  }, [reducedMotion]);

  return (
    <section id="top" className="hero-v2">
      <div className="hero-v2-copy">
        <p className="hero-v2-eyebrow">
          <span aria-hidden="true">~ $ </span>
          Creative technologist &amp; independent builder
        </p>

        <h1 className="hero-v2-title">
          Building products, systems, and stories at the intersection of AI,
          code, and creativity.
        </h1>

        <p className="hero-v2-lead">
          I turn ideas into digital products, developer tools, learning
          platforms, and creative experiences.
        </p>

        <div className="hero-v2-actions">
          <a className="hero-v2-cta primary" href="#work">Explore my work</a>
          <a className="hero-v2-cta secondary" href="#about">Meet Kai</a>
        </div>

        <dl className="hero-v2-status">
          <div>
            <dt>Currently building</dt>
            <dd><span className="hero-v2-dot" aria-hidden="true" />8Agents</dd>
          </div>
          <div>
            <dt>Exploring</dt>
            <dd>AI agents, creative AI, digital storytelling</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Japan · independent</dd>
          </div>
        </dl>
      </div>

      {/*
        Mask vignette: STOPGAP, not styling.
        Source clip contains fictional dashboard metrics (99.99% uptime, 1.284
        deployments, "Live at kaidevlab.dev"). Vignette dissolves those panels
        to background alpha. If clip is replaced with clean footage, REMOVE mask.
      */}
      <div ref={bandRef} className="hero-v2-band">
        {reducedMotion ? (
          <Image
            src="/media/kai-hero/kai-hero-poster.webp"
            alt=""
            aria-hidden="true"
            width={1920}
            height={823}
            priority={false}
          />
        ) : (
          <video
            ref={videoRef}
            poster="/media/kai-hero/kai-hero-poster.webp"
            preload="none"
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/media/kai-hero/kai-hero.webm" type="video/webm" />
          </video>
        )}
      </div>
    </section>
  );
}
