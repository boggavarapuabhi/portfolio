"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Things I&apos;ve built
          </h3>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Each project started with a real problem. Here&apos;s how I turned
            frustration into features.
          </p>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-border bg-card/50 hover:bg-card-hover overflow-hidden transition-all duration-300 card-shine"
              >
                {/* Gradient accent bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-accent-light transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {project.tagline}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  {/* Story grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                        The Problem
                      </h5>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                        The Solution
                      </h5>
                      <p className="text-sm text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-6">
                    <h5 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                      Impact
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {project.impact.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-3 py-1.5 rounded-lg bg-accent/10 text-accent-light border border-accent/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-background border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
