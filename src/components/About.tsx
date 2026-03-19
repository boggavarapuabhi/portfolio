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
            I don&apos;t just write code.
            <br />
            <span className="text-muted">I solve business problems.</span>
          </h3>

          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I&apos;m a results-driven developer with a unique edge: I think like
              a business analyst and build like an engineer. With a{" "}
              <span className="text-foreground font-medium">
                B.Tech in Computer Science
              </span>{" "}
              from GITAM University and an{" "}
              <span className="text-foreground font-medium">
                MBA in Business Analytics
              </span>{" "}
              from NYIT Manhattan, I bridge the gap between technical
              capabilities and business objectives.
            </p>
            <p>
              I&apos;m proficient in Python, SQL, JavaScript, React, and Next.js —
              but I don&apos;t just write code for the sake of it. I transform
              complex data into actionable insights, build AI-powered
              applications, and create dashboards that drive real decisions.
            </p>
            <p>
              What sets me apart:{" "}
              <span className="text-foreground font-medium">
                I speak both business and engineering fluently.
              </span>{" "}
              I can discuss KPI metrics with stakeholders in the morning and
              architect a TensorFlow pipeline in the afternoon.
            </p>
          </div>

          {/* Identity cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              {
                label: "Full Stack",
                desc: "React, Next.js, Node.js, Python — end to end.",
              },
              {
                label: "Analytics-Driven",
                desc: "Tableau, Power BI, SQL — data tells the story.",
              },
              {
                label: "AI-Forward",
                desc: "GPT, TensorFlow, SVD — building intelligent systems.",
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
