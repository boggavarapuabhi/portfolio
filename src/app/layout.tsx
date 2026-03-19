import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hemanth Boggavarapu | Full Stack Developer & Business Analyst",
  description:
    "Full Stack Developer with an MBA in Business Analytics and B.Tech in Computer Science. Building AI-powered applications and data-driven solutions with React, Python, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Business Analyst",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
    "Data Analytics",
    "AI",
  ],
  openGraph: {
    title: "Hemanth Boggavarapu | Full Stack Developer & Business Analyst",
    description:
      "Full Stack Developer bridging business analytics and engineering.",
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
