"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "./TiltCard";
import { achievements } from "@/lib/data";

export default function About3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tertiary block mb-3">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard className="card p-8" intensity={6}>
              <p className="text-foreground leading-relaxed mb-5 text-base">
                I&apos;m a <span className="font-semibold">Full Stack Developer</span> with
                an MBA in Business Analytics and a B.Tech in Computer Science. I live at the intersection
                of engineering and business — building AI-powered applications that solve real problems.
              </p>
              <p className="text-secondary leading-relaxed mb-5 text-sm">
                From India to New York, I&apos;ve learned to think like a strategist while building like
                an engineer. I bring a unique combination of technical depth and business acumen —
                from TensorFlow models to Tableau dashboards, from React interfaces to REST APIs.
              </p>
              <p className="text-secondary leading-relaxed text-sm">
                I don&apos;t just write code. I build products that people actually want to use,
                backed by data and designed for impact.
              </p>
            </TiltCard>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <TiltCard className="card p-6 text-center" intensity={10}>
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <span className="text-3xl font-bold text-foreground block mb-1">
                    {item.metric}
                  </span>
                  <span className="text-xs text-tertiary uppercase tracking-wider">
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
