"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeyChapters } from "@/lib/data";
import {
  IndianVillageSkyline,
  HyderabadSkyline,
  NYCSkyline,
  JerseyCitySkyline,
  Avatar,
} from "./journey/Skylines";

const skylineMap: Record<string, React.ReactNode> = {
  school: <IndianVillageSkyline className="w-full h-auto text-amber-400" />,
  intermediate: <IndianVillageSkyline className="w-full h-auto text-rose-400" />,
  btech: <HyderabadSkyline className="w-full h-auto text-cyan-400" />,
  nyc: <NYCSkyline className="w-full h-auto text-indigo-400" />,
  now: <JerseyCitySkyline className="w-full h-auto text-violet-400" />,
};

const avatarStageMap: Record<string, "kid" | "teen" | "college" | "professional" | "builder"> = {
  school: "kid",
  intermediate: "teen",
  btech: "college",
  nyc: "professional",
  now: "builder",
};

const avatarSizeMap: Record<string, number> = {
  school: 36,
  intermediate: 44,
  btech: 52,
  nyc: 60,
  now: 68,
};

function JourneyCard({
  chapter,
  index,
}: {
  chapter: (typeof journeyChapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:flex-row`}
    >
      {/* Timeline node — AVATAR instead of emoji */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center border-2 bg-background shadow-2xl"
          style={{ borderColor: chapter.accentColor }}
        >
          {inView && (
            <Avatar
              stage={avatarStageMap[chapter.id]}
              size={avatarSizeMap[chapter.id]}
              color={chapter.accentColor}
            />
          )}
          {/* Pulse ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] } : {}}
            transition={{ delay: 0.5, duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: chapter.accentColor }}
          />
        </motion.div>
        {/* Size label under avatar */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-[10px] font-mono mt-2 px-2 py-0.5 rounded-full border border-border bg-background text-muted-foreground"
        >
          {chapter.year.split("—")[0].trim()}
        </motion.span>
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
        className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}
      >
        <div className="relative group">
          {/* Mobile: avatar + year */}
          <div className="md:hidden flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center border-2 bg-background"
              style={{ borderColor: chapter.accentColor }}
            >
              <Avatar
                stage={avatarStageMap[chapter.id]}
                size={avatarSizeMap[chapter.id] * 0.7}
                color={chapter.accentColor}
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: chapter.accentColor }}>
                {chapter.era}
              </span>
              <p className="text-sm font-mono text-muted-foreground">{chapter.year}</p>
            </div>
          </div>

          <div
            className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-sm hover:bg-card-hover transition-all duration-500 card-shine overflow-hidden group-hover:border-opacity-50"
            style={{ "--shine-color": chapter.accentColor } as React.CSSProperties}
          >
            {/* SKYLINE BACKGROUND — the building silhouette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative w-full overflow-hidden"
              style={{ height: "120px" }}
            >
              {/* Sky gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to top, ${chapter.accentColor}15, transparent)`,
                }}
              />

              {/* Animated building construction — buildings rise from bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0"
                initial={{ y: 40 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {skylineMap[chapter.id]}
              </motion.div>

              {/* Stars / particles for nighttime feel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                className="absolute inset-0"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${15 + (i % 3) * 15}%`,
                      opacity: 0.15 + (i % 3) * 0.1,
                    }}
                    animate={{
                      opacity: [0.1, 0.35, 0.1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + i * 0.3,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Gradient accent line at the very top */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${chapter.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>

            {/* Card content */}
            <div className="p-6 md:p-8">
              {/* Corner glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: chapter.accentColor }}
              />

              {/* Year badge - desktop */}
              <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 text-xs font-mono text-muted-foreground mb-4">
                {chapter.year}
              </div>

              {/* Era (desktop only) */}
              <div className="hidden md:flex items-center gap-2 mb-2">
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
              <p className="text-sm text-muted-foreground mb-5 flex items-center gap-1.5">
                <span className="text-lg">{chapter.image}</span>
                {chapter.location}
              </p>

              <p className="text-muted leading-relaxed mb-6">{chapter.description}</p>

              {/* Milestone */}
              <div
                className="p-4 rounded-2xl border border-border/50 bg-background/30"
                style={{ borderColor: `${chapter.accentColor}20` }}
              >
                <p
                  className="text-xs font-mono uppercase tracking-wider mb-2"
                  style={{ color: chapter.accentColor }}
                >
                  Key Milestone
                </p>
                <p className="text-sm text-muted leading-relaxed">{chapter.milestone}</p>
              </div>

              {/* Sub events */}
              {chapter.subEvents && (
                <div className="mt-6 space-y-3">
                  {chapter.subEvents.map((event, ei) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + ei * 0.15 }}
                      className="flex gap-3 p-3 rounded-xl bg-background/40 border border-border/30 hover:border-accent/20 transition-colors"
                    >
                      <span className="text-xs font-mono mt-0.5 flex-shrink-0" style={{ color: chapter.accentColor }}>
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
        </div>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-[calc(50%-4rem)]" />
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
    <section id="journey" className="py-24 md:py-40 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-[0.2em]">
            The Journey
          </h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            From <span className="gradient-text-warm">India</span> to{" "}
            <span className="gradient-text-cyan">New York</span>
          </h3>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
            Every chapter shaped who I am. Scroll through the story of how a
            curious kid from India became a product-minded engineer in Manhattan.
          </p>
        </motion.div>

        {/* Avatar growth guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-end justify-center gap-6 mb-20"
        >
          {(["kid", "teen", "college", "professional", "builder"] as const).map(
            (stage, i) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <Avatar
                  stage={stage}
                  size={20 + i * 8}
                  color={
                    ["#f59e0b", "#f43f5e", "#06b6d4", "#6366f1", "#8b5cf6"][i]
                  }
                />
                <span className="text-[9px] font-mono text-muted-foreground mt-1">
                  {["Kid", "Teen", "Grad", "Pro", "Now"][i]}
                </span>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2">
            <div className="w-full h-full bg-border/20 rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full timeline-line"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {journeyChapters.map((chapter, i) => (
              <JourneyCard key={chapter.id} chapter={chapter} index={i} />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center mt-16"
          >
            <div className="w-4 h-4 rounded-full bg-accent glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
