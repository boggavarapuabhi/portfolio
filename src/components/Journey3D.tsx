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
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-12 md:mb-20 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20 top-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-3 h-3 rounded-full bg-foreground border-4 border-background"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <TiltCard className="card p-6 md:p-8" intensity={8}>
          {/* Year + emoji */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-hover text-secondary border border-border">
              {chapter.year}
            </span>
            <span className="text-xl">{chapter.emoji}</span>
          </div>

          {/* Era */}
          <span className="text-xs tracking-[0.2em] uppercase text-tertiary block mb-2">
            {chapter.era}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            {chapter.title}
          </h3>

          {/* Location */}
          <p className="text-tertiary text-sm mb-4 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {chapter.location}
          </p>

          {/* Description */}
          <p className="text-secondary text-sm leading-relaxed mb-4">
            {chapter.description}
          </p>

          {/* Milestone */}
          <div className="p-3 rounded-xl bg-surface text-sm text-secondary italic border-l-2 border-foreground/20">
            {chapter.milestone}
          </div>

          {/* Sub-events */}
          {chapter.subEvents && (
            <div className="mt-4 space-y-2">
              {chapter.subEvents.map((evt, j) => (
                <div
                  key={j}
                  className="flex gap-3 text-xs text-tertiary p-2 rounded-lg bg-surface"
                >
                  <span className="font-mono text-foreground/60 shrink-0">
                    {evt.year}
                  </span>
                  <span>{evt.title}</span>
                </div>
              ))}
            </div>
          )}
        </TiltCard>
      </motion.div>
    </div>
  );
}

export default function Journey3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tertiary block mb-3">
            My Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Journey
          </h2>
          <p className="text-secondary max-w-md mx-auto text-sm">
            From India to New York — five chapters that shaped everything
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {journeyChapters.map((chapter, i) => (
            <TimelineCard key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
