"use client";

import { motion } from "framer-motion";
import { siteConfig, achievements } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            I build products that users love and systems that scale.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Full Stack Developer with a product mindset. I turn complex problems
            into clean, performant software — from database to deploy.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border hover:border-muted text-foreground px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-card"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 mb-20">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {achievements.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {item.metric}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
