"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Languages: "🔤",
  Frontend: "🎨",
  "Backend & Data": "⚙️",
  "AI & ML": "🧠",
  "Analytics & Tools": "📊",
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <TiltCard className="card p-6 h-full" intensity={8}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl">{categoryIcons[category] || "📦"}</span>
          <h3 className="text-base font-semibold text-white">{category}</h3>
        </div>

        <div className="space-y-3.5">
          {items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.08 + i * 0.04 + 0.2 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/80">{skill.name}</span>
                <span className="text-dim font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1,
                    delay: index * 0.08 + i * 0.04 + 0.3,
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
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-dim block mb-3">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory key={category} category={category} items={items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
