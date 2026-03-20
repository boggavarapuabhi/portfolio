"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Sprockets({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`fixed top-0 ${side === "left" ? "left-0" : "right-0"} w-6 h-full z-[45] pointer-events-none hidden lg:block`}
      style={{ background: "#0a0806" }}
    >
      <div className="relative w-full h-full overflow-hidden sprocket-strip" data-side={side}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-4 rounded-[2px] border border-white/[0.06] bg-white/[0.02]"
            style={{ top: `${i * 1.7}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function Timecode() {
  const { scrollYProgress } = useScroll();
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const totalFrames = Math.floor(v * 86400); // 24fps * 60min
      const hrs = String(Math.floor(totalFrames / 86400)).padStart(2, "0");
      const mins = String(Math.floor((totalFrames % 86400) / 1440)).padStart(2, "0");
      const secs = String(Math.floor((totalFrames % 1440) / 24)).padStart(2, "0");
      const frames = String(totalFrames % 24).padStart(2, "0");
      setTc(`${hrs}:${mins}:${secs}:${frames}`);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="fixed bottom-4 right-8 z-[45] pointer-events-none hidden md:block">
      <span className="font-mono text-[10px] text-white/15 tracking-[0.2em] tabular-nums">
        {tc}
      </span>
    </div>
  );
}

function ReelProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[2px] z-[56] pointer-events-none">
      <motion.div
        className="h-full origin-left bg-accent"
        style={{ scaleX }}
      />
    </div>
  );
}

export default function FilmOverlay() {
  return (
    <>
      <Sprockets side="left" />
      <Sprockets side="right" />
      <Timecode />
      <ReelProgress />
    </>
  );
}
