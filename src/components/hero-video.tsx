"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  async function startVideo() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => void startVideo(), 0);
    return () => window.clearTimeout(timer);
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
        preload="metadata"
        poster="/media/kai-hero/kai-hero-poster.webp"
        aria-hidden="true"
        onCanPlay={() => void startVideo()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/media/kai-hero/kai-hero.webm" type="video/webm" />
        <source src="/media/kai-hero/kai-hero.mp4" type="video/mp4" />
      </video>
      {!isPlaying ? (
        <button className="video-play-button" type="button" onClick={() => void startVideo()}>
          Play video
        </button>
      ) : null}
    </div>
  );
}
