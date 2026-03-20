"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const allCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-28 md:py-40 relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div ref={ref}>
          {/* Header — editorial left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-2xl"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
              Toolkit
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Battle-tested across academic projects, internships, and personal builds.
            </p>
          </motion.div>

          {/* Skills grid — horizontal categories */}
          <div className="space-y-16">
            {allCategories.map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + i * 0.04 }}
                      className="group relative"
                    >
                      <span className="inline-block text-sm text-muted hover:text-foreground px-4 py-2 border border-border hover:border-accent/30 transition-all duration-300 cursor-default">
                        {skill.name}
                      </span>
                    </motion.div>
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
