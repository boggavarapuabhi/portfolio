"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Where I&apos;ve made impact
          </h3>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Not just job titles — real outcomes. I measure my work by the
            problems I&apos;ve solved and the systems I&apos;ve improved.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-6 md:p-8 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Briefcase size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-muted">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 ml-14">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
