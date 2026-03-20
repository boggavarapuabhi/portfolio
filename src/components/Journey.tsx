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

  // Parallax — photo moves slower than scroll
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [60, 0, 0, -40]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ============ FULL-SCREEN PHOTO BACKGROUND ============ */}
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
          quality={90}
        />
      </motion.div>

      {/* Cinematic color grading overlay */}
      <div className="absolute inset-0 z-[1] bg-black/50" />
      <div
        className="absolute inset-0 z-[1] mix-blend-multiply opacity-30"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? '30%' : '70%'} 50%, ${chapter.accentColor}40, transparent 70%)`,
        }}
      />

      {/* Heavy bottom gradient for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      {/* Vignette effect */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* ============ CHAPTER NUMBER (cinematic) ============ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className={`absolute top-8 z-10 ${isEven ? 'left-8 md:left-16' : 'right-8 md:right-16'}`}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30">
          Chapter {String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Year — top opposite corner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className={`absolute top-8 z-10 ${isEven ? 'right-8 md:right-16' : 'left-8 md:left-16'}`}
      >
        <span className="font-mono text-sm text-white/40 tracking-widest">
          {chapter.year}
        </span>
      </motion.div>

      {/* ============ MAIN CONTENT ============ */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className={`relative z-10 max-w-6xl mx-auto px-8 md:px-16 w-full ${
          isEven ? 'text-left' : 'text-right'
        }`}
      >
        <div className={`max-w-2xl ${isEven ? '' : 'ml-auto'}`}>
          {/* Era label */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-4 px-3 py-1"
              style={{
                color: chapter.accentColor,
                borderBottom: `2px solid ${chapter.accentColor}`,
              }}
            >
              {chapter.era}
            </span>
          </motion.div>

          {/* Title — cinematic large */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl"
          >
            {chapter.title}
          </motion.h2>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-white/50 font-mono tracking-wider mb-8 flex items-center gap-2"
            style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}
          >
            <span className="text-base">{chapter.image}</span>
            {chapter.location}
          </motion.p>

          {/* Description — the story */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
            style={{ marginLeft: isEven ? '0' : 'auto' }}
          >
            {chapter.description}
          </motion.p>

          {/* Milestone — the emotional beat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-block"
          >
            <div
              className="border-l-2 pl-5 py-1"
              style={{ borderColor: chapter.accentColor }}
            >
              <p className="text-sm text-white/50 leading-relaxed italic">
                &ldquo;{chapter.milestone}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Sub events */}
          {chapter.subEvents && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 space-y-3"
            >
              {chapter.subEvents.map((event, ei) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.3 + ei * 0.15 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-3 max-w-md"
                  style={{ marginLeft: isEven ? '0' : 'auto' }}
                >
                  <span
                    className="text-xs font-mono mt-0.5 flex-shrink-0 font-bold"
                    style={{ color: chapter.accentColor }}
                  >
                    {event.year}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{event.title}</p>
                    <p className="text-xs text-white/40 mt-0.5">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Photo credit */}
      {chapter.photoCredit && (
        <span className="absolute bottom-6 right-8 z-10 text-[9px] text-white/15 font-mono">
          {chapter.photoCredit} / Unsplash
        </span>
      )}

      {/* Bottom fade to next scene */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[2]" />
      {/* Top fade from prev scene */}
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[2]" />
      )}
    </section>
  );
}

export default function Journey() {
  return (
    <div id="journey">
      {/* Section intro */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#0a0a0a]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono tracking-[0.4em] uppercase text-accent mb-8"
          >
            The Journey
          </motion.p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]">
            From <span className="gradient-text-warm">India</span>
            <br />
            to <span className="gradient-text-cool">New York</span>
          </h2>

          <p className="text-muted text-lg max-w-xl mx-auto mb-12">
            Every chapter shaped who I am. This is the story of how a curious
            kid from India became a product-minded engineer in Manhattan.
          </p>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
              Scroll to experience
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Full-screen chapter scenes */}
      {journeyChapters.map((chapter, i) => (
        <ChapterScene key={chapter.id} chapter={chapter} index={i} />
      ))}
    </div>
  );
}
