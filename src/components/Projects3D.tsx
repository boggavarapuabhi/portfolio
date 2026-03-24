"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";

const projectColors = [
  { gradient: "from-indigo-500 to-purple-600", color: "#6366f1", glow: "rgba(99, 102, 241, 0.15)" },
  { gradient: "from-cyan-500 to-blue-600", color: "#06b6d4", glow: "rgba(6, 182, 212, 0.15)" },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const colors = projectColors[index % projectColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      <TiltCard
        className="glass rounded-2xl overflow-hidden"
        glowColor={colors.glow}
        intensity={8}
      >
        {/* Project header gradient bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${colors.color}, ${colors.color}60)`,
          }}
        />

        <div className="p-8">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-white/30 block mb-2">
                {project.period}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm italic">
                {project.tagline}
              </p>
            </div>
            <span
              className="text-xs px-3 py-1 rounded-full shrink-0 mt-1"
              style={{
                background: `${colors.color}15`,
                color: colors.color,
                border: `1px solid ${colors.color}30`,
              }}
            >
              {project.institution}
            </span>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Problem */}
            <div className="space-y-2">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Problem
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Solution
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Impact */}
            <div className="space-y-2">
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/30 flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Impact
              </h4>
              <ul className="space-y-1.5">
                {project.impact.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/40 flex items-start gap-2"
                  >
                    <span style={{ color: colors.color }} className="mt-1 text-xs">
                      ▹
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
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
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-light/60 block mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Projects
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Real-world problems solved with engineering and data
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
