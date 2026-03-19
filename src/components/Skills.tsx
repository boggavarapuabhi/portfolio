"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-muted group-hover:text-foreground transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs font-mono text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-border/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-[0.2em]">
              Arsenal
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Battle-tested across academic projects, internships, and personal builds.
              Every bar represents real hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="p-6 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card-hover transition-all duration-500 card-shine group"
              >
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category}
                </h4>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.15 + i * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
