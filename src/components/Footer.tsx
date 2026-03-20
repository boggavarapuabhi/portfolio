"use client";

import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
          {siteConfig.name}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
