"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TitleCard({
  act,
  title,
  subtitle,
}: {
  act: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });

  return (
    <section
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-[#060606] overflow-hidden"
    >
      {/* Horizontal rule above */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-white/[0.04]" />

      <div className="text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-[10px] tracking-[0.6em] uppercase text-white/20 mb-8"
        >
          {act}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-tight"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="font-mono text-[11px] text-white/20 mt-6 tracking-[0.2em]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Horizontal rule below */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-white/[0.04]" />
    </section>
  );
}
