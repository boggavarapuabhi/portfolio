"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { journeyChapters } from "@/lib/data";

function TimelineCard({
  chapter,
  index,
}: {
  chapter: (typeof journeyChapters)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <TiltCard className="card p-6 md:p-8" intensity={6}>
        {/* Year + emoji row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {chapter.year}
          </span>
          <span className="text-xl">{chapter.emoji}</span>
        </div>

        {/* Era */}
        <span className="text-xs tracking-[0.2em] uppercase text-accent-soft block mb-2">
          {chapter.era}
        </span>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {chapter.title}
        </h3>

        {/* Location */}
        <p className="text-dim text-sm mb-4 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {chapter.location}
        </p>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4">
          {chapter.description}
        </p>

        {/* Milestone */}
        <div className="p-3 rounded-xl bg-white/[0.03] text-sm text-muted italic border-l-2 border-accent/40">
          {chapter.milestone}
        </div>

        {/* Sub-events */}
        {chapter.subEvents && (
          <div className="mt-4 space-y-2">
            {chapter.subEvents.map((evt, j) => (
              <div
                key={j}
                className="flex gap-3 text-xs text-dim p-2.5 rounded-lg bg-white/[0.02]"
              >
                <span className="font-mono text-accent shrink-0">
                  {evt.year}
                </span>
                <span>{evt.title}</span>
              </div>
            ))}
          </div>
        )}
      </TiltCard>
    </motion.div>
  );
}

export default function Journey3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-dim block mb-3">
            My Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Journey
          </h2>
          <p className="text-muted max-w-md mx-auto text-sm">
            From India to New York — five chapters that shaped everything
          </p>
        </motion.div>

        {/* Simple stacked cards */}
        {journeyChapters.map((chapter, i) => (
          <TimelineCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>
    </section>
  );
}
