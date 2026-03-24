"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const floatingIcons = [
  { icon: "⚛️", x: "15%", y: "25%", size: 40, delay: 0 },
  { icon: "🐍", x: "82%", y: "20%", size: 36, delay: 1.5 },
  { icon: "📊", x: "8%", y: "65%", size: 32, delay: 0.5 },
  { icon: "🧠", x: "88%", y: "60%", size: 38, delay: 2 },
  { icon: "💻", x: "25%", y: "80%", size: 30, delay: 1 },
  { icon: "🚀", x: "75%", y: "78%", size: 34, delay: 2.5 },
  { icon: "⚡", x: "5%", y: "45%", size: 28, delay: 3 },
  { icon: "🔮", x: "92%", y: "40%", size: 32, delay: 0.8 },
];

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Floating tech icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{ left: item.x, top: item.y, fontSize: item.size }}
            animate={{
              y: [0, -20, 5, -15, 0],
              rotate: [0, 5, -5, 3, 0],
              opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Profile Image - Floating 3D */}
        <motion.div
          className="relative mb-8"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-xl animate-pulse" />
          <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-tr from-secondary via-accent to-primary opacity-30 blur-md" />

          {/* Profile container */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden profile-glow">
            <Image
              src="/profile.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50"
            style={{ top: "50%", left: "50%", marginTop: -6, marginLeft: -6 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary"
              style={{ transform: "translateX(100px)" }}
            />
          </motion.div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-full px-4 py-1.5 mb-6 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-white/60 tracking-wide uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-white/50 mb-4 font-light max-w-xl"
        >
          {siteConfig.title} & Business Analyst
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-white/30 mb-10 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          {siteConfig.location}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full glass text-white/70 hover:text-white font-medium text-sm transition-all hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/20"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
