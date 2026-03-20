import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Mindset from "@/components/Mindset";
import Contact from "@/components/Contact";
import TitleCard from "@/components/TitleCard";
import FilmOverlay from "@/components/FilmOverlay";

export default function Home() {
  return (
    <div className="film-grain letterbox scanline">
      <FilmOverlay />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TitleCard
          act="Act I"
          title="The Journey"
          subtitle="From India to New York — five chapters that shaped everything"
        />
        <Journey />
        <TitleCard
          act="Act II"
          title="The Craft"
          subtitle="Tools, technologies, and the projects that put them to work"
        />
        <Skills />
        <Projects />
        <TitleCard
          act="Act III"
          title="The Philosophy"
          subtitle="How I think, what I believe, and where this goes next"
        />
        <Mindset />
        <Contact />
      </main>
    </div>
  );
}
