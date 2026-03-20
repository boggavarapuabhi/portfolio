"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const firstName = siteConfig.name.split(" ")[0];
  const lastName = siteConfig.name.split(" ").slice(1).join(" ");

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#060606]">
      {/* Projector flicker */}
      <motion.div
        className="absolute inset-0 bg-white/[0.01]"
        animate={{ opacity: [0, 0.02, 0, 0.01, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Film burn on edges */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-900/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-900/[0.03] to-transparent pointer-events-none" />

      <div className="relative text-center px-6">
        {/* Studio card */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-mono text-[9px] tracking-[0.7em] uppercase text-white/15 mb-12"
        >
          A Portfolio by
        </motion.p>

        {/* Name — like a film title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[0.85] mb-4"
        >
          <span className="block text-white">{firstName}</span>
          <span className="block text-accent">{lastName}</span>
        </motion.h1>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="w-24 h-px bg-white/20 mx-auto my-8 origin-center"
        />

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="font-mono text-[11px] tracking-[0.4em] uppercase text-white/30"
        >
          Full Stack Developer &bull; Business Analyst
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3.2 }}
          className="text-sm text-white/15 mt-6 max-w-sm mx-auto italic"
        >
          From Hyderabad to Manhattan
        </motion.p>
      </div>

      {/* Bottom: scroll cue + reel info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.5 }}
        className="absolute bottom-10 left-0 right-0 flex justify-between items-end px-8 md:px-16"
      >
        <span className="font-mono text-[9px] text-white/10 tracking-[0.2em]">
          REEL 01 &mdash; {new Date().getFullYear()}
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[8px] text-white/15 tracking-[0.4em] uppercase">
            Scroll
          </span>
          <div className="w-px h-6 bg-white/10" />
        </motion.div>

        <span className="font-mono text-[9px] text-white/10 tracking-[0.2em]">
          {siteConfig.location}
        </span>
      </motion.div>
    </section>
  );
}
