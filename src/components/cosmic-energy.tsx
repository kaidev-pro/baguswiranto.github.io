"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Cosmic energy background effects matching the Gojo image style.
 * Swirling blue/purple streaks, ink splashes, sparkles.
 */
export function CosmicEnergy() {
  const [isMobile, setIsMobile] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Energy streaks - curved lines matching the image */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`streak-${i}`}
          className="absolute"
          style={{
            width: "200px",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#1F5AFF" : "#8A2BE2"}, transparent)`,
            top: `${15 + i * 12}%`,
            left: `${-10 + (i % 3) * 15}%`,
            transform: `rotate(${-15 + i * 8}deg)`,
            opacity: 0.3,
            filter: "blur(1px)",
            animation: `energy-streak 4s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* Ink splash dots */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = ((i * 67 + 23) % 80) + 10;
        const y = ((i * 43 + 17) % 70) + 15;
        const size = 3 + (i % 5) * 2;
        return (
          <div
            key={`splash-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              background: i % 3 === 0 ? "#1F5AFF" : i % 3 === 1 ? "#8A2BE2" : "#D1E6FF",
              opacity: 0.15,
              filter: `blur(${1 + (i % 3)}px)`,
              animation: `splash-pulse ${3 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        );
      })}

      {/* Sparkle stars */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = ((i * 53 + 11) % 90) + 5;
        const y = ((i * 71 + 29) % 80) + 10;
        const size = 1 + (i % 3);
        return (
          <div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              background: "#FFFFFF",
              borderRadius: "50%",
              boxShadow: `0 0 ${size * 2}px rgba(209, 230, 255, 0.8)`,
              animation: `sparkle-twinkle ${2 + (i % 3)}s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        );
      })}

      {/* Swirling energy arc */}
      <div
        className="absolute"
        style={{
          top: "20%",
          right: "5%",
          width: "300px",
          height: "300px",
          border: "1px solid transparent",
          borderTop: "1px solid rgba(31, 90, 255, 0.2)",
          borderRight: "1px solid rgba(138, 43, 226, 0.15)",
          borderRadius: "50%",
          animation: "energy-arc-spin 12s linear infinite",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "25%",
          right: "8%",
          width: "250px",
          height: "250px",
          border: "1px solid transparent",
          borderBottom: "1px solid rgba(209, 230, 255, 0.15)",
          borderLeft: "1px solid rgba(31, 90, 255, 0.1)",
          borderRadius: "50%",
          animation: "energy-arc-spin 10s linear 2s infinite reverse",
          filter: "blur(1.5px)",
        }}
      />
    </div>
  );
}
