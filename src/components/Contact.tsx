"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="text-center">
          <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ type: "spring", delay: 0.2 }} className="text-6xl mb-8">🤝</motion.div>
          <h2 className="text-xs font-mono text-accent mb-6 uppercase tracking-[0.3em]">Let&apos;s Connect</h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to build<br /><span className="gradient-text">something great?</span>
          </h3>
          <p className="text-muted text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
            I&apos;m actively seeking full-time opportunities where I can combine engineering depth with business analytics.
            If you&apos;re looking for someone who ships fast and thinks deeply — <span className="text-foreground font-medium">let&apos;s talk.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <motion.a whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background px-10 py-5 rounded-2xl font-medium text-lg transition-all duration-300 shadow-xl shadow-accent/20">
              <Mail size={22} />Send me an email<ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-border hover:border-accent/40 text-foreground px-10 py-5 rounded-2xl font-medium text-lg transition-all duration-300 hover:bg-accent/5">
              <Linkedin size={22} />Connect on LinkedIn<ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Mail size={18} />, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: <Phone size={18} />, label: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: <Github size={18} />, label: "GitHub", href: siteConfig.github },
              { icon: <MapPin size={18} />, label: siteConfig.location, href: undefined },
            ].map((item) => {
              const Tag = item.href ? "a" : "div";
              return (
                <motion.div key={item.label} whileHover={{ y: -2 }}>
                  <Tag {...(item.href ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                    className="p-4 rounded-2xl border border-border bg-card/50 hover:bg-card-hover transition-all duration-300 flex items-center gap-3 justify-center cursor-pointer">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-sm text-muted">{item.label}</span>
                  </Tag>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
