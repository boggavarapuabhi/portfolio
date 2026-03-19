"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Education */}
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Academic Foundation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-accent-light font-medium">
                      {edu.major}
                    </p>
                    <p className="text-sm text-muted mt-1">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-2">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Validated Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 card-shine group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
