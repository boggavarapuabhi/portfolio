"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const allCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-32 md:py-44 relative bg-[#060606]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16" ref={ref}>
        {/* Two-column layout: label left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          {/* Left — sticky label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="md:sticky md:top-32 md:self-start"
          >
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/15 mb-4">
              Toolkit
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 leading-tight">
              Technical
              <br />
              <span className="text-accent">Arsenal</span>
            </h2>
          </motion.div>

          {/* Right — skill categories */}
          <div className="space-y-12">
            {allCategories.map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.12 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/20">
                    {category}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.04]" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + i * 0.03 }}
                      className="text-[11px] text-white/35 hover:text-white/70 px-3 py-1.5 border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
