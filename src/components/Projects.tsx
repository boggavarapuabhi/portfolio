"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

function ProjectScene({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="relative"
    >
      {/* Top rule */}
      <div className="h-px bg-white/[0.04] mb-12" />

      {/* Project number — large ghost number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute -top-2 right-0 font-mono text-[120px] md:text-[180px] font-bold text-white/[0.015] leading-none pointer-events-none select-none"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>

      <motion.div style={{ y: contentY }}>
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/15 block mb-3">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white/90 leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-white/15 tracking-wider">
              {project.period}
            </span>
            <span className="font-mono text-[9px] text-white/15 tracking-wider">
              {project.institution}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-white/40 italic mb-14 max-w-2xl">
          {project.tagline}
        </p>

        {/* Three columns: problem, solution, impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-rose/60 block mb-4">
              Problem
            </span>
            <p className="text-[12px] text-white/35 leading-[1.9]">
              {project.problem}
            </p>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-success/60 block mb-4">
              Solution
            </span>
            <p className="text-[12px] text-white/35 leading-[1.9]">
              {project.solution}
            </p>
          </div>

          <div>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-accent/60 block mb-4">
              Impact
            </span>
            <div className="space-y-3">
              {project.impact.map((item) => (
                <p key={item} className="text-[12px] text-white/50">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[8px] tracking-wider text-white/15 px-2 py-1 border border-white/[0.03]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-44 relative bg-[#060606]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="space-y-32">
          {projects.map((project, i) => (
            <ProjectScene key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
