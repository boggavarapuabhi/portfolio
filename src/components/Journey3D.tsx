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
      className={`relative flex items-center mb-16 md:mb-24 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Timeline connector dot */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-4 h-4 rounded-full border-2 border-primary bg-background"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
      >
        <TiltCard
          className="glass rounded-2xl p-6 md:p-8 overflow-hidden"
          glowColor={`${chapter.accentColor}30`}
          intensity={10}
        >
          {/* Year badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: `${chapter.accentColor}15`,
                color: chapter.accentColor,
                border: `1px solid ${chapter.accentColor}30`,
              }}
            >
              {chapter.year}
            </span>
            <span className="text-2xl">{chapter.emoji}</span>
          </div>

          {/* Era */}
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium block mb-2"
            style={{ color: chapter.accentColor }}
          >
            {chapter.era}
          </span>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {chapter.title}
          </h3>

          {/* Location */}
          <p className="text-white/30 text-sm mb-4 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {chapter.location}
          </p>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            {chapter.description}
          </p>

          {/* Milestone */}
          <div
            className="p-3 rounded-lg text-sm text-white/60 italic"
            style={{ background: `${chapter.accentColor}08`, borderLeft: `2px solid ${chapter.accentColor}40` }}
          >
            {chapter.milestone}
          </div>

          {/* Sub-events */}
          {chapter.subEvents && (
            <div className="mt-4 space-y-2">
              {chapter.subEvents.map((evt, j) => (
                <div
                  key={j}
                  className="flex gap-3 text-xs text-white/40 p-2 rounded-lg bg-white/[0.02]"
                >
                  <span className="font-mono text-primary-light shrink-0">
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
    <section id="journey" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-light/60 block mb-4">
            My Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            The Journey
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            From India to New York — five chapters that shaped everything
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          {journeyChapters.map((chapter, i) => (
            <TimelineCard key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
