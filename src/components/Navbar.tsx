"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-8 md:px-16 h-12 flex items-center justify-between bg-[#060606]/80 backdrop-blur-xl border-b border-white/[0.03]">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/25">
          HB
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent/50 hover:text-accent transition-colors duration-500"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
