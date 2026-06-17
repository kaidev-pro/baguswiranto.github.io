"use client";

import { motion } from "framer-motion";

export function LetterReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <>
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + i * 0.04,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}
