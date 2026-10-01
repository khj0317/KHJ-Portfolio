import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Archiving from "@/components/Archiving";
import Projects from "@/components/Projects";
import Career from "@/components/Career";
import ScrollTopButton from "@/components/ScrollTopButton";
import { careers } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Archiving />
        <Projects />
        {careers.length > 0 && <Career />}
      </main>
      <ScrollTopButton />
    </>
  );
}
