"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(124, 58, 237, 0.15)",
  intensity = 15,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTransform({
      rotateX: (y - 0.5) * -intensity,
      rotateY: (x - 0.5) * intensity,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  }

  function handleMouseLeave() {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }

  return (
    <div className="perspective-container">
      <motion.div
        ref={cardRef}
        className={`tilt-card relative ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Glow follow effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-[inherit] pointer-events-none z-0 opacity-60 transition-opacity"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
