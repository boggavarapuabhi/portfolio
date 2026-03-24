import FloatingNav from "@/components/FloatingNav";
import Hero3D from "@/components/Hero3D";
import About3D from "@/components/About3D";
import Journey3D from "@/components/Journey3D";
import Skills3D from "@/components/Skills3D";
import Projects3D from "@/components/Projects3D";
import Contact3D from "@/components/Contact3D";
import FloatingShapes from "@/components/FloatingShapes";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingShapes />
      <FloatingNav />
      <main className="relative z-10">
        <Hero3D />
        <About3D />
        <Journey3D />
        <Skills3D />
        <Projects3D />
        <Contact3D />
      </main>
    </div>
  );
}
