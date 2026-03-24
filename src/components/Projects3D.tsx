"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <TiltCard className="card overflow-hidden" intensity={6}>
        <div className="p-8">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
            <div>
              <span className="text-xs font-mono text-tertiary block mb-2">
                {project.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-secondary text-sm italic">
                {project.tagline}
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-surface text-tertiary border border-border shrink-0">
              {project.institution}
            </span>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-tertiary mb-2 flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Problem
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-tertiary mb-2 flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Solution
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-tertiary mb-2 flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Impact
              </h4>
              <ul className="space-y-1.5">
                {project.impact.map((item, i) => (
                  <li key={i} className="text-sm text-secondary flex items-start gap-2">
                    <span className="text-foreground/40 mt-0.5 text-xs">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-surface text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tertiary block mb-3">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-secondary max-w-md mx-auto text-sm">
            Real-world problems solved with engineering and data
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
