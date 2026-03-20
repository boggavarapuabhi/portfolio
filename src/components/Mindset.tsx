"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mindsetItems, certifications } from "@/lib/data";

export default function Mindset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mindset" className="py-28 md:py-40 relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-2xl"
          >
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
              How I <span className="gradient-text">Think</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Code is a tool. Thinking is the weapon.
            </p>
          </motion.div>

          {/* Mindset items — two-column editorial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-32">
            {mindsetItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="divider mb-16" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-10">
              Credentials
            </p>

            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-baseline gap-6 group"
                >
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider shrink-0 w-20">
                    {cert.date}
                  </span>
                  <div>
                    <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                      {cert.name}
                    </span>
                    <span className="text-xs text-muted-foreground ml-3">
                      {cert.issuer}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
