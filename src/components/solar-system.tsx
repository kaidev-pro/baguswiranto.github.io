"use client";

import { motion } from "framer-motion";

const PLANETS = [
  {
    name: "Mercury",
    size: 6,
    color: "#94a3b8",
    orbitW: 140,
    orbitH: 120,
    duration: 8,
    glow: "rgba(148,163,184,0.4)",
  },
  {
    name: "Venus",
    size: 10,
    color: "#fbbf24",
    orbitW: 220,
    orbitH: 180,
    duration: 12,
    glow: "rgba(251,191,36,0.4)",
  },
  {
    name: "Earth",
    size: 11,
    color: "#3b82f6",
    orbitW: 320,
    orbitH: 260,
    duration: 16,
    glow: "rgba(59,130,246,0.4)",
  },
  {
    name: "Mars",
    size: 9,
    color: "#ef4444",
    orbitW: 420,
    orbitH: 340,
    duration: 22,
    glow: "rgba(239,68,68,0.3)",
  },
  {
    name: "Jupiter",
    size: 18,
    color: "#f97316",
    orbitW: 560,
    orbitH: 440,
    duration: 32,
    glow: "rgba(249,115,22,0.3)",
  },
  {
    name: "Saturn",
    size: 15,
    color: "#eab308",
    orbitW: 700,
    orbitH: 540,
    duration: 44,
    glow: "rgba(234,179,8,0.3)",
    hasRing: true,
  },
];

export function SolarSystem() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Orbit rings */}
      {PLANETS.map((planet, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full border border-white/[0.04]"
          style={{
            width: planet.orbitW * 2,
            height: planet.orbitH * 2,
            top: `calc(50% - ${planet.orbitH}px)`,
            left: `calc(50% - ${planet.orbitW}px)`,
          }}
        />
      ))}

      {/* Planets */}
      {PLANETS.map((planet, i) => (
        <motion.div
          key={planet.name}
          className="absolute"
          style={{
            width: planet.size,
            height: planet.size,
            top: `calc(50% - ${planet.size / 2}px)`,
            left: `calc(50% - ${planet.size / 2}px)`,
          }}
          animate={{
            x: [planet.orbitW, 0, -planet.orbitW, 0, planet.orbitW],
            y: [0, -planet.orbitH, 0, planet.orbitH, 0],
          }}
          transition={{
            duration: planet.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Planet body */}
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${planet.color}, ${planet.color}88)`,
              boxShadow: `0 0 ${planet.size}px ${planet.glow}, inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0,0,0,0.5)`,
            }}
          />
          {/* Saturn ring */}
          {planet.hasRing && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-yellow-500/30"
              style={{
                width: planet.size * 2.2,
                height: planet.size * 0.7,
                transform: "translate(-50%, -50%) rotateX(70deg)",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
