"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mindsetItems, certifications } from "@/lib/data";
import { Layers, BarChart3, Gem, Rocket, Award } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  bridge: <Layers size={22} />,
  data: <BarChart3 size={22} />,
  craft: <Gem size={22} />,
  ship: <Rocket size={22} />,
};

export default function Mindset() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="mindset" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={ref}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-xs font-mono text-accent mb-4 uppercase tracking-[0.3em]">Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6">How I <span className="gradient-text">Think</span></h3>
            <p className="text-muted text-lg max-w-2xl mx-auto">Code is a tool. Thinking is the weapon. Here&apos;s the operating system behind my work.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {mindsetItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -4 }}
                className="p-7 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-500 card-shine group">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">{iconMap[item.icon]}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="text-center mb-12">
            <h2 className="text-xs font-mono text-accent mb-4 uppercase tracking-[0.3em]">Credentials</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }} whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-500 card-shine group text-center">
                <span className="text-4xl mb-4 block">{cert.emoji}</span>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent/20 transition-colors"><Award size={18} /></div>
                <h4 className="text-base font-semibold text-foreground mb-1">{cert.name}</h4>
                <p className="text-xs text-muted">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground font-mono mt-2">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
