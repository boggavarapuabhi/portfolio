"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Tech I work with
          </h3>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            I pick the right tool for the job — not the trendiest one. Here&apos;s
            my core stack, battle-tested across production systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine"
              >
                <h4 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-background border border-border text-muted hover:text-foreground hover:border-accent/30 transition-colors"
                    >
                      {skill}
                    </span>
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
