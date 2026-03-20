"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig, achievements } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="text-accent animate-pulse">|</span>
    </span>
  );
}

function AnimatedCounter({ target }: { target: string }) {
  const isNumber = /^\d+$/.test(target.replace(/[+,]/g, ""));
  if (!isNumber) return <span>{target}</span>;
  const num = parseInt(target.replace(/[+,]/g, ""));
  const hasPlus = target.includes("+");
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(num / 125);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [num]);
  return <span>{count.toLocaleString()}{hasPlus ? "+" : ""}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-warm/4 rounded-full blur-[140px] pointer-events-none animate-float-delayed" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm text-sm text-accent-light mb-10"
          >
            <span className="relative w-2 h-2 rounded-full bg-success">
              <span className="absolute inset-0 rounded-full bg-success animate-ping" />
            </span>
            Open to opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="block md:inline">{siteConfig.name.split(" ")[0]} </span>
            <span className="gradient-text">{siteConfig.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted mb-3 h-10"
          >
            <Typewriter
              words={["Full Stack Developer", "Business Analyst", "AI Builder", "Data Storyteller", "Product Thinker"]}
              className="font-light"
            />
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From Hyderabad to Manhattan — I turn data into decisions and code
            into products. MBA in Analytics. B.Tech in CS.{" "}
            <span className="text-foreground font-medium">Building what&apos;s next.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-background px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              My Journey
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-foreground px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-accent/5 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center justify-center gap-6 mb-20"
          >
            {[
              { href: siteConfig.github, icon: <Github size={22} />, label: "GitHub" },
              { href: siteConfig.linkedin, icon: <Linkedin size={22} />, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: <Mail size={22} />, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + i * 0.1, type: "spring" }}
                className="text-center p-4 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={item.metric} />
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
