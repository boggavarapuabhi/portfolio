"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) {
            setTimeout(() => setDeleting(true), 2200);
          }
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <span className="text-accent animate-pulse">_</span>
    </span>
  );
}

export default function Hero() {
  const firstName = siteConfig.name.split(" ")[0];
  const lastName = siteConfig.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto px-6 md:px-12 w-full">
        {/* Top line — small mono intro */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs text-muted-foreground tracking-[0.25em] uppercase mb-8"
        >
          {siteConfig.location} &mdash; Full Stack Developer &amp; Business Analyst
        </motion.p>

        {/* Name — massive editorial typography */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight"
          >
            {firstName}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight gradient-text"
          >
            {lastName}
          </motion.h1>
        </div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-lg md:text-xl text-muted font-mono mb-12 h-8"
        >
          <Typewriter words={["Full Stack Developer", "Business Analyst", "AI Builder", "Data Storyteller"]} />
        </motion.div>

        {/* Bottom row: tagline left, links right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
            From Hyderabad to Manhattan &mdash; turning data into decisions
            and code into products.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors tracking-wider uppercase"
            >
              Github
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors tracking-wider uppercase"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-mono text-muted-foreground hover:text-accent transition-colors tracking-wider uppercase"
            >
              Email
            </a>
            <a
              href="#contact"
              className="text-xs font-mono bg-accent text-background px-4 py-2 hover:bg-accent-light transition-colors tracking-wider uppercase"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-mono text-muted-foreground tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
