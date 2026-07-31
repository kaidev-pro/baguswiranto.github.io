"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    void video.play().catch(() => undefined);
  }, []);

  return (
    <div className="media-panel" aria-label="Kai holographic coding hero video">
      <div className="media-status" aria-hidden="true">
        <span><i /> KAI_WEB · ONLINE</span>
        <span>BUILD / CODE / CREATE</span>
      </div>
      <video
        ref={videoRef}
        width="1920"
        height="1080"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/kai-hero/kai-hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/media/kai-hero/kai-hero.webm" type="video/webm" />
        <source src="/media/kai-hero/kai-hero.mp4" type="video/mp4" />
      </video>
      <Image
        className="reduced-motion-poster"
        src="/media/kai-hero/kai-hero-poster.webp"
        alt="Kai working behind a transparent holographic coding interface"
        width={1920}
        height={1080}
        priority
      />
    </div>
  );
}
