"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig, navLinks } from "@/lib/data";

function CreditLine({
  label,
  value,
  href,
  delay,
  inView,
}: {
  label: string;
  value: string;
  href?: string;
  delay: number;
  inView: boolean;
}) {
  const Tag = href ? "a" : "span";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-baseline justify-between gap-8 py-3 border-b border-white/[0.03] group"
    >
      <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/15 shrink-0">
        {label}
      </span>
      <Tag
        {...(href
          ? {
              href,
              target: href.startsWith("http") ? "_blank" : undefined,
              rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
            }
          : {})}
        className={`text-[12px] text-white/35 text-right ${
          href
            ? "hover:text-accent transition-colors duration-500 cursor-pointer"
            : ""
        }`}
      >
        {value}
      </Tag>
    </motion.div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-[#060606] overflow-hidden">
      {/* End credits style */}
      <div className="py-32 md:py-44 max-w-[90rem] mx-auto px-8 md:px-16" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left — closing title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/15 mb-8">
              End Credits
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-[1.05] mb-8">
              Let&apos;s write
              <br />
              the next
              <br />
              <span className="text-accent">chapter.</span>
            </h2>
            <p className="text-sm text-white/25 leading-[1.9] max-w-sm">
              I&apos;m seeking roles where engineering depth meets business
              impact. If you need someone who ships fast and thinks
              deeply&mdash;let&apos;s talk.
            </p>
          </motion.div>

          {/* Right — credits roll */}
          <div className="md:pt-16">
            <CreditLine label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} delay={0.3} inView={inView} />
            <CreditLine label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone}`} delay={0.4} inView={inView} />
            <CreditLine label="LinkedIn" value="Hemanth Boggavarapu" href={siteConfig.linkedin} delay={0.5} inView={inView} />
            <CreditLine label="Github" value="boggavarapuabhi" href={siteConfig.github} delay={0.6} inView={inView} />
            <CreditLine label="Location" value={siteConfig.location} delay={0.7} inView={inView} />

            {/* Built with */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 pt-8 border-t border-white/[0.03]"
            >
              <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/8">
                Built with Next.js &middot; Tailwind CSS &middot; Framer Motion
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final footer — the absolute end */}
      <div className="border-t border-white/[0.03] py-6">
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex items-center justify-between">
          <span className="font-mono text-[8px] text-white/8 tracking-[0.3em] uppercase">
            {siteConfig.name}
          </span>
          <span className="font-mono text-[8px] text-white/8 tracking-[0.2em]">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
