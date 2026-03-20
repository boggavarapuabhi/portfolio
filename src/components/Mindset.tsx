"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mindsetItems, certifications } from "@/lib/data";

export default function Mindset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mindset" className="py-32 md:py-44 relative bg-[#060606]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          {/* Left — sticky label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="md:sticky md:top-32 md:self-start"
          >
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/15 mb-4">
              Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 leading-tight">
              Operating
              <br />
              <span className="text-accent">System</span>
            </h2>
          </motion.div>

          {/* Right */}
          <div>
            {/* Principles */}
            <div className="space-y-14 mb-24">
              {mindsetItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-[9px] text-white/10 tracking-wider shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white/80 mb-2 group-hover:text-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-white/30 leading-[1.9] max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="h-px bg-white/[0.04] mb-12" />
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/15 mb-8">
              Credentials
            </p>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-baseline gap-6 group"
                >
                  <span className="font-mono text-[9px] text-white/10 tracking-wider shrink-0 w-20">
                    {cert.date}
                  </span>
                  <span className="text-[12px] text-white/35 group-hover:text-white/60 transition-colors duration-500">
                    {cert.name}
                  </span>
                  <span className="font-mono text-[9px] text-white/10 tracking-wider">
                    {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
