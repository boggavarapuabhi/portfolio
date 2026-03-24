"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", color: "rgba(124, 58, 237, 0.08)", delay: 0, duration: 12 },
  { size: 200, x: "80%", y: "10%", color: "rgba(6, 182, 212, 0.06)", delay: 2, duration: 15 },
  { size: 250, x: "70%", y: "60%", color: "rgba(236, 72, 153, 0.06)", delay: 4, duration: 18 },
  { size: 180, x: "20%", y: "70%", color: "rgba(124, 58, 237, 0.05)", delay: 1, duration: 14 },
  { size: 150, x: "50%", y: "40%", color: "rgba(6, 182, 212, 0.04)", delay: 3, duration: 16 },
  { size: 120, x: "90%", y: "80%", color: "rgba(236, 72, 153, 0.05)", delay: 5, duration: 20 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.12), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[40%]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(6, 182, 212, 0.06), transparent)",
        }}
      />

      {/* Floating orbs */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: shape.color,
            filter: "blur(60px)",
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${
              i % 3 === 0 ? "124, 58, 237" : i % 3 === 1 ? "6, 182, 212" : "236, 72, 153"
            }, ${Math.random() * 0.4 + 0.1})`,
          }}
          animate={{
            y: [0, -(Math.random() * 60 + 20), 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
