"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

function ProjectSection({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative"
    >
      {/* Divider */}
      <div className="divider mb-16" />

      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-20`}>
        {/* Left/Right: metadata column */}
        <motion.div
          style={{ y }}
          className="md:w-1/3 shrink-0"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-3">
            Project {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-muted mb-6">{project.tagline}</p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                Period
              </span>
              <p className="text-xs text-muted mt-1">{project.period}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                Institution
              </span>
              <p className="text-xs text-muted mt-1">{project.institution}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-1 border border-border text-muted-foreground tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right/Left: content column */}
        <div className="md:flex-1 space-y-8">
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-rose mb-3">
              The Problem
            </p>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-success mb-3">
              The Solution
            </p>
            <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-accent mb-3">
              Impact
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {project.impact.map((item) => (
                <span key={item} className="text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 md:py-40 relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
            Projects I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Real problems. Real solutions. Every project started with a question
            and ended with working software.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectSection key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
