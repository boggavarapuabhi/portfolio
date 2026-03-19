"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            I&apos;m not just a developer.
            <br />
            <span className="text-muted">I&apos;m a product engineer.</span>
          </h3>

          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              Most developers write code. I solve problems. There&apos;s a difference.
              Every line I write is tied to a user outcome — faster load times,
              fewer clicks, clearer feedback. I think about the person using the
              software, not just the software itself.
            </p>
            <p>
              I&apos;ve spent the past several years building full-stack applications
              across SaaS, fintech, and developer tools. I&apos;m equally comfortable
              designing a database schema, building a React component system, or
              debating product strategy with a PM.
            </p>
            <p>
              What sets me apart:{" "}
              <span className="text-foreground font-medium">
                I ship fast without cutting corners.
              </span>{" "}
              I care about performance, accessibility, and clean architecture —
              but I also know that software that never ships helps nobody.
            </p>
          </div>

          {/* Tech philosophy cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              {
                label: "Full Stack",
                desc: "React to Redis. I own the entire stack.",
              },
              {
                label: "Product Thinking",
                desc: "I start with the user problem, then work backwards.",
              },
              {
                label: "AI-Forward",
                desc: "Building with LLMs, embeddings, and intelligent systems.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-colors"
              >
                <div className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
