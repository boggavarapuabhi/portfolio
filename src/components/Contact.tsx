"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s build something
            <br />
            <span className="gradient-text">together.</span>
          </h3>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
            I&apos;m actively looking for full-time opportunities where I can
            contribute, grow, and make a real impact. If you&apos;re hiring —
            let&apos;s talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail size={20} />
              Send me an email
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-muted text-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 hover:bg-card"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl border border-border bg-card/50 flex items-center gap-3 justify-center">
              <Mail size={16} className="text-accent" />
              <span className="text-sm text-muted">{siteConfig.email}</span>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-colors flex items-center gap-3 justify-center"
            >
              <Github size={16} className="text-accent" />
              <span className="text-sm text-muted">GitHub</span>
            </a>
            <div className="p-4 rounded-xl border border-border bg-card/50 flex items-center gap-3 justify-center">
              <MapPin size={16} className="text-accent" />
              <span className="text-sm text-muted">{siteConfig.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
