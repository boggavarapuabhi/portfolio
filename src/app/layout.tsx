import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhi Boggavarapu | Full Stack Developer",
  description:
    "Product-minded Full Stack Developer building high-impact software at the intersection of engineering and design. Specializing in React, Node.js, and AI-powered applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI",
    "Product Engineer",
  ],
  openGraph: {
    title: "Abhi Boggavarapu | Full Stack Developer",
    description:
      "Product-minded Full Stack Developer building high-impact software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
