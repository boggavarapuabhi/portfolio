"use client";

import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono text-sm font-bold text-foreground">
              {siteConfig.name.split(" ")[0].toLowerCase()}
              <span className="text-accent">.</span>dev
            </span>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with <Heart size={10} className="text-rose" /> using Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.github, icon: <Github size={16} />, label: "GitHub" },
              { href: siteConfig.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: <Mail size={16} />, label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ y: -2 }}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
