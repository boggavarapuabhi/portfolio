"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import { achievements } from "@/lib/data";

export default function About3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-light/60 block mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TiltCard
              className="glass rounded-2xl p-8"
              glowColor="rgba(124, 58, 237, 0.1)"
              intensity={8}
            >
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                I&apos;m a <span className="text-primary-light font-medium">Full Stack Developer</span> with
                an MBA in Business Analytics and a B.Tech in Computer Science. I live at the intersection
                of engineering and business — building AI-powered applications that solve real problems.
              </p>
              <p className="text-white/50 leading-relaxed mb-6">
                From India to New York, I&apos;ve learned to think like a strategist while building like
                an engineer. I bring a unique combination of technical depth and business acumen —
                from TensorFlow models to Tableau dashboards, from React interfaces to REST APIs.
              </p>
              <p className="text-white/50 leading-relaxed">
                I don&apos;t just write code. I build products that people actually want to use,
                backed by data and designed for impact.
              </p>
            </TiltCard>
          </motion.div>

          {/* Right - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <TiltCard
                  className="glass rounded-xl p-6 text-center"
                  glowColor={
                    i % 3 === 0
                      ? "rgba(124, 58, 237, 0.15)"
                      : i % 3 === 1
                      ? "rgba(6, 182, 212, 0.15)"
                      : "rgba(236, 72, 153, 0.15)"
                  }
                  intensity={12}
                >
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-2xl md:text-3xl font-bold gradient-text-static block mb-1">
                    {item.metric}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    {item.label}
                  </span>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
