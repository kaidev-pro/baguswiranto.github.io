"use client";

import { motion } from "framer-motion";

const PLANETS = [
  {
    name: "Mercury",
    size: 5,
    orbitW: 120,
    orbitH: 100,
    duration: 30,
    gradient: "radial-gradient(circle at 35% 35%, #b5b5b5, #7a7a7a, #555)",
    glow: "rgba(180,180,180,0.2)",
    hasRing: false,
  },
  {
    name: "Venus",
    size: 8,
    orbitW: 180,
    orbitH: 150,
    duration: 45,
    gradient: "radial-gradient(circle at 35% 35%, #ffe4a0, #dba040, #b07820)",
    glow: "rgba(255,200,80,0.25)",
    hasRing: false,
  },
  {
    name: "Earth",
    size: 9,
    orbitW: 260,
    orbitH: 210,
    duration: 60,
    gradient: "radial-gradient(circle at 35% 35%, #7ec8e3, #3b82f6, #1e40af)",
    glow: "rgba(59,130,246,0.25)",
    hasRing: false,
  },
  {
    name: "Mars",
    size: 7,
    orbitW: 340,
    orbitH: 270,
    duration: 80,
    gradient: "radial-gradient(circle at 35% 35%, #f09070, #c1440e, #8b2500)",
    glow: "rgba(220,80,40,0.2)",
    hasRing: false,
  },
  {
    name: "Jupiter",
    size: 18,
    orbitW: 460,
    orbitH: 360,
    duration: 120,
    gradient: "radial-gradient(circle at 35% 35%, #f0c888, #d4944a, #b07030)",
    glow: "rgba(220,160,80,0.2)",
    hasRing: false,
    hasBands: true,
  },
  {
    name: "Saturn",
    size: 15,
    orbitW: 580,
    orbitH: 450,
    duration: 180,
    gradient: "radial-gradient(circle at 35% 35%, #f5e6a8, #d4b868, #a08030)",
    glow: "rgba(220,190,100,0.2)",
    hasRing: true,
  },
  {
    name: "Uranus",
    size: 12,
    orbitW: 700,
    orbitH: 540,
    duration: 240,
    gradient: "radial-gradient(circle at 35% 35%, #a8e8e8, #60c8c8, #308888)",
    glow: "rgba(96,200,200,0.15)",
    hasRing: false,
  },
];

export function SolarSystem() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Orbit rings */}
      {PLANETS.map((planet, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full"
          style={{
            width: planet.orbitW * 2,
            height: planet.orbitH * 2,
            top: `calc(50% - ${planet.orbitH}px)`,
            left: `calc(50% - ${planet.orbitW}px)`,
            border: "1px solid rgba(255,255,255,0.03)",
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
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background: planet.gradient,
              boxShadow: `0 0 ${planet.size}px ${planet.glow}, inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0,0,0,0.6)`,
            }}
          >
            {/* Jupiter bands */}
            {planet.hasBands && (
              <>
                <div
                  className="absolute w-full"
                  style={{
                    top: "30%",
                    height: "8%",
                    background: "rgba(180,120,60,0.3)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "50%",
                    height: "10%",
                    background: "rgba(200,140,60,0.25)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "68%",
                    height: "6%",
                    background: "rgba(160,100,50,0.3)",
                    borderRadius: "50%",
                  }}
                />
              </>
            )}
          </div>

          {/* Saturn ring */}
          {planet.hasRing && (
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: planet.size * 2.4,
                height: planet.size * 0.6,
                transform: "translate(-50%, -50%) rotateX(75deg)",
                borderRadius: "50%",
                border: "2px solid rgba(210,180,100,0.25)",
                boxShadow: "0 0 8px rgba(210,180,100,0.1)",
              }}
            />
          )}

          {/* Planet name tooltip (subtle) */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[8px] text-white/20 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {planet.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
