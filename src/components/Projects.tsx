"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 80 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1], delay: index * 0.15 }} className="relative group">
      <motion.div style={{ y }} className="relative">
        <div className="relative rounded-2xl border border-border bg-card/80 overflow-hidden transition-all duration-500 group-hover:border-accent/30 card-shine">
          <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700" />
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent-light transition-colors">{project.title}</h4>
                <p className="text-base text-muted">{project.tagline}</p>
                <p className="text-xs font-mono text-muted-foreground mt-2">{project.institution} &middot; {project.period}</p>
              </div>
              <span className="text-6xl md:text-7xl font-bold text-border/30 group-hover:text-accent/10 transition-colors font-mono leading-none">0{index + 1}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-5 rounded-xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-rose" /><h5 className="text-xs font-mono text-rose uppercase tracking-wider">The Problem</h5></div>
                <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-5 rounded-xl bg-background/50 border border-border/30">
                <div className="flex items-center gap-2 mb-3"><span className="w-2 h-2 rounded-full bg-success" /><h5 className="text-xs font-mono text-success uppercase tracking-wider">The Solution</h5></div>
                <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
              </div>
            </div>
            <div className="mb-8">
              <h5 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">Impact</h5>
              <div className="flex flex-wrap gap-3">
                {project.impact.map((item) => (
                  <motion.span key={item} whileHover={{ scale: 1.05 }} className="text-sm px-4 py-2 rounded-xl bg-accent/10 text-accent-light border border-accent/20 hover:bg-accent/20 transition-colors">{item}</motion.span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all">{tech}</span>
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
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h2 className="text-xs font-mono text-accent mb-4 uppercase tracking-[0.3em]">Featured Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Projects I&apos;ve <span className="gradient-text">Built</span></h3>
          <p className="text-muted text-lg max-w-2xl mx-auto">Real problems. Real solutions. Every project started with a question and ended with working software.</p>
        </motion.div>
        <div className="space-y-16">
          {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>
      </div>
    </section>
  );
}
