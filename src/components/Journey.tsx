"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { journeyChapters } from "@/lib/data";

function Scene({
  chapter,
  index,
}: {
  chapter: (typeof journeyChapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-25%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.28, 0.72, 0.88],
    [0, 1, 1, 0]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0.12, 0.28, 0.72, 0.88],
    [40, 0, 0, -30]
  );

  const isLeft = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Photo */}
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

      {/* Grading layers */}
      <div className="absolute inset-0 z-[1] bg-black/65" />
      <div
        className="absolute inset-0 z-[1] mix-blend-multiply opacity-15"
        style={{
          background: `radial-gradient(circle at ${isLeft ? "20%" : "80%"} 50%, ${chapter.accentColor}50, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#060606] via-transparent to-[#060606]/70" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Scene number — top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute top-8 left-8 md:left-16 z-10"
      >
        <span className="font-mono text-[9px] tracking-[0.5em] text-white/12">
          SCENE {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Year — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute top-8 right-8 md:right-16 z-10"
      >
        <span className="font-mono text-[9px] text-white/12 tracking-[0.3em]">
          {chapter.year}
        </span>
      </motion.div>

      {/* Content — like film subtitles positioned in lower third */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-[90rem] mx-auto px-8 md:px-16 mt-[25vh]"
      >
        <div className={`max-w-xl ${isLeft ? "" : "ml-auto"}`}>
          {/* Era tag */}
          <motion.p
            initial={{ opacity: 0, x: isLeft ? -15 : 15 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono text-[9px] tracking-[0.5em] uppercase mb-5"
            style={{ color: `${chapter.accentColor}90` }}
          >
            {chapter.era}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5"
          >
            {chapter.title}
          </motion.h2>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-mono text-[10px] text-white/20 tracking-[0.2em] mb-6"
          >
            {chapter.location}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-white/45 leading-[1.8] mb-6"
          >
            {chapter.description}
          </motion.p>

          {/* Milestone quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div
              className="border-l pl-4"
              style={{ borderColor: `${chapter.accentColor}30` }}
            >
              <p className="text-[11px] text-white/25 italic leading-relaxed">
                {chapter.milestone}
              </p>
            </div>
          </motion.div>

          {/* Sub events */}
          {chapter.subEvents && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-8 space-y-2"
            >
              {chapter.subEvents.map((event, ei) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.4 + ei * 0.15 }}
                  className="flex items-start gap-4 bg-white/[0.03] px-4 py-2.5"
                >
                  <span
                    className="font-mono text-[9px] mt-0.5 shrink-0 tracking-wider"
                    style={{ color: `${chapter.accentColor}80` }}
                  >
                    {event.year}
                  </span>
                  <div>
                    <p className="text-[11px] font-medium text-white/60">
                      {event.title}
                    </p>
                    <p className="text-[10px] text-white/20 mt-0.5">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Credit */}
      {chapter.photoCredit && (
        <span className="absolute bottom-3 right-8 z-10 font-mono text-[7px] text-white/8">
          {chapter.photoCredit} / Unsplash
        </span>
      )}

      {/* Transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#060606] to-transparent z-[2]" />
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060606] to-transparent z-[2]" />
      )}
    </section>
  );
}

export default function Journey() {
  return (
    <div id="journey">
      {journeyChapters.map((chapter, i) => (
        <Scene key={chapter.id} chapter={chapter} index={i} />
      ))}
    </div>
  );
}
