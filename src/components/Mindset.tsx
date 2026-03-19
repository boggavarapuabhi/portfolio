"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mindsetItems, buildingItems } from "@/lib/data";
import { Lightbulb, Zap, Shield, Target } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  product: <Lightbulb size={20} />,
  speed: <Zap size={20} />,
  quality: <Shield size={20} />,
  ownership: <Target size={20} />,
};

export default function Mindset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mindset" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Product Mindset */}
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            How I Think
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Product Mindset
          </h3>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Writing code is the easy part. Knowing <em>what</em> to build and{" "}
            <em>why</em> — that&apos;s the real skill.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {mindsetItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  {iconMap[item.icon]}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What I'm Building */}
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Currently Exploring
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What I&apos;m Building
          </h3>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            I&apos;m always working on something. Here&apos;s where my curiosity is
            pointed right now.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildingItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine"
              >
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
