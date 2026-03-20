import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Mindset from "@/components/Mindset";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="film-grain letterbox">
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Skills />
        <Projects />
        <Mindset />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
