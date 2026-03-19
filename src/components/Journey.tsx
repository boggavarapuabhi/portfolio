"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeyChapters } from "@/lib/data";

function JourneyCard({
  chapter,
  index,
}: {
  chapter: (typeof journeyChapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:flex-row`}
    >
      {/* Timeline node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 border-border bg-background shadow-xl"
          style={{ borderColor: chapter.accentColor }}
        >
          {chapter.emoji}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: [0, 1.5, 0] } : {}}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border-2 opacity-30"
            style={{ borderColor: chapter.accentColor }}
          />
        </motion.div>
      </div>

      {/* Content card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
          y: 20,
        }}
        animate={
          inView
            ? { opacity: 1, x: 0, y: 0 }
            : {}
        }
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
        className={`w-full md:w-[calc(50%-3.5rem)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
      >
        <div className="relative group">
          {/* Mobile emoji */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <span className="text-3xl">{chapter.emoji}</span>
            <span className="text-sm font-mono text-muted-foreground">{chapter.year}</span>
          </div>

          <div className="relative p-6 md:p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card-hover transition-all duration-500 card-shine overflow-hidden group-hover:border-opacity-50"
            style={{ '--shine-color': chapter.accentColor } as React.CSSProperties}
          >
            {/* Gradient accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${chapter.color} opacity-60 group-hover:opacity-100 transition-opacity`}
            />

            {/* Corner glow */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ background: chapter.accentColor }}
            />

            {/* Year badge - desktop */}
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 text-xs font-mono text-muted-foreground mb-4">
              {chapter.year}
            </div>

            {/* Era + Location */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: chapter.accentColor }}
              >
                {chapter.era}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {chapter.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-5">{chapter.location}</p>

            <p className="text-muted leading-relaxed mb-6">
              {chapter.description}
            </p>

            {/* Milestone */}
            <div
              className="p-4 rounded-2xl border border-border/50 bg-background/30"
              style={{ borderColor: `${chapter.accentColor}20` }}
            >
              <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: chapter.accentColor }}>
                Key Milestone
              </p>
              <p className="text-sm text-muted leading-relaxed">{chapter.milestone}</p>
            </div>

            {/* Sub events */}
            {chapter.subEvents && (
              <div className="mt-6 space-y-3">
                {chapter.subEvents.map((event) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex gap-3 p-3 rounded-xl bg-background/40 border border-border/30"
                  >
                    <span className="text-xs font-mono text-accent mt-0.5 flex-shrink-0">
                      {event.year}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{event.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[calc(50%-3.5rem)]" />
    </div>
  );
}

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-[0.2em]">
            The Journey
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            From <span className="gradient-text-warm">India</span> to{" "}
            <span className="gradient-text-cyan">New York</span>
          </h3>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every chapter shaped who I am. Scroll through the story of how a
            curious kid from India became a product-minded engineer in Manhattan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="w-full h-full bg-border/30 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full timeline-line"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {journeyChapters.map((chapter, i) => (
              <JourneyCard key={chapter.id} chapter={chapter} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
