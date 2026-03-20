"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { journeyChapters } from "@/lib/data";

function ChapterScene({
  chapter,
  index,
}: {
  chapter: (typeof journeyChapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.06]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [50, 0, 0, -30]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-bleed photo */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: photoY, scale: photoScale }}
      >
        <Image
          src={chapter.photo}
          alt={chapter.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index < 2}
          quality={85}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Color tint */}
      <div
        className="absolute inset-0 z-[1] mix-blend-multiply opacity-20"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? "25%" : "75%"} 50%, ${chapter.accentColor}50, transparent 70%)`,
        }}
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/60" />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
      />

      {/* Chapter marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className={`absolute top-10 z-10 ${isEven ? "left-6 md:left-12" : "right-6 md:right-12"}`}
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Year */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className={`absolute top-10 z-10 ${isEven ? "right-6 md:right-12" : "left-6 md:left-12"}`}
      >
        <span className="font-mono text-[11px] text-white/25 tracking-[0.3em]">
          {chapter.year}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className={`relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full ${isEven ? "text-left" : "text-right"}`}
      >
        <div className={`max-w-2xl ${isEven ? "" : "ml-auto"}`}>
          {/* Era */}
          <motion.p
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-[10px] tracking-[0.4em] uppercase mb-6"
            style={{ color: chapter.accentColor }}
          >
            {chapter.era}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            {chapter.title}
          </motion.h2>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-mono text-xs text-white/30 tracking-wider mb-8"
          >
            {chapter.location}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-lg"
            style={{ marginLeft: isEven ? "0" : "auto" }}
          >
            {chapter.description}
          </motion.p>

          {/* Milestone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="inline-block"
          >
            <div
              className="border-l pl-4 py-1"
              style={{ borderColor: `${chapter.accentColor}60` }}
            >
              <p className="text-xs text-white/35 leading-relaxed italic">
                &ldquo;{chapter.milestone}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Sub events */}
          {chapter.subEvents && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="mt-10 space-y-3"
            >
              {chapter.subEvents.map((event, ei) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.3 + ei * 0.15 }}
                  className="flex items-start gap-4 bg-white/[0.04] backdrop-blur-sm px-5 py-3 max-w-sm"
                  style={{ marginLeft: isEven ? "0" : "auto" }}
                >
                  <span
                    className="text-[10px] font-mono mt-0.5 shrink-0 tracking-wider"
                    style={{ color: chapter.accentColor }}
                  >
                    {event.year}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-white/80">{event.title}</p>
                    <p className="text-[11px] text-white/30 mt-0.5">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Credit */}
      {chapter.photoCredit && (
        <span className="absolute bottom-4 right-6 z-10 text-[8px] text-white/10 font-mono">
          {chapter.photoCredit} / Unsplash
        </span>
      )}

      {/* Scene transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060606] to-transparent z-[2]" />
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#060606] to-transparent z-[2]" />
      )}
    </section>
  );
}

export default function Journey() {
  return (
    <div id="journey">
      {/* Section intro */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606] to-[#060606]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-10">
            The Journey
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1]">
            From <span className="gradient-text-warm">India</span>
            <br />
            to <span className="gradient-text-cool">New York</span>
          </h2>

          <p className="text-muted text-sm md:text-base max-w-md mx-auto mb-14">
            Every chapter shaped who I am. A curious kid from India
            became a product-minded engineer in Manhattan.
          </p>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
              Scroll to experience
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {journeyChapters.map((chapter, i) => (
        <ChapterScene key={chapter.id} chapter={chapter} index={i} />
      ))}
    </div>
  );
}
