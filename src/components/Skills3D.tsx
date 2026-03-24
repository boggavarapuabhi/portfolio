"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { skills } from "@/lib/data";

const categoryMeta: Record<string, { icon: string; color: string; glow: string }> = {
  Languages: { icon: "🔤", color: "#7c3aed", glow: "rgba(124, 58, 237, 0.15)" },
  Frontend: { icon: "🎨", color: "#06b6d4", glow: "rgba(6, 182, 212, 0.15)" },
  "Backend & Data": { icon: "⚙️", color: "#ec4899", glow: "rgba(236, 72, 153, 0.15)" },
  "AI & ML": { icon: "🧠", color: "#f59e0b", glow: "rgba(245, 158, 11, 0.15)" },
  "Analytics & Tools": { icon: "📊", color: "#10b981", glow: "rgba(16, 185, 129, 0.15)" },
};

function SkillCategory({
  category,
  items,
  index,
}: {
  category: string;
  items: { name: string; level: number }[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const meta = categoryMeta[category] || { icon: "📦", color: "#7c3aed", glow: "rgba(124, 58, 237, 0.15)" };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <TiltCard
        className="glass rounded-2xl p-6 h-full"
        glowColor={meta.glow}
        intensity={10}
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{meta.icon}</span>
          <h3 className="text-lg font-semibold text-white">{category}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-4">
          {items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
            >
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-white/70">{skill.name}</span>
                <span className="text-white/30 font-mono text-xs">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${meta.color}, ${meta.color}80)`,
                    boxShadow: `0 0 10px ${meta.color}40`,
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.1 + i * 0.05 + 0.5,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Skills3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-light/60 block mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
