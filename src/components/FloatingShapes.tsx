"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft gradient blobs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />

      {/* Subtle floating dots */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/[0.03]"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(Math.random() * 30 + 10), 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
