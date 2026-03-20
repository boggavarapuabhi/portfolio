"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="divider mb-20" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
            {/* Left — big text */}
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-6">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                Let&apos;s build
                <br />
                <span className="gradient-text">something great.</span>
              </h2>
              <p className="text-muted text-sm md:text-base max-w-lg leading-relaxed">
                I&apos;m seeking full-time opportunities where I can combine
                engineering depth with business analytics. If you need someone
                who ships fast and thinks deeply &mdash; let&apos;s talk.
              </p>
            </div>

            {/* Right — contact links */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                Github
              </a>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground pt-2">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
