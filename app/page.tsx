import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skill from "./components/skills"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-16 py-8 overflow-x-hidden overflow-y-auto">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </main>
  );
}
