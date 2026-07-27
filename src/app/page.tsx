"use client";

import { useReducedMotion } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";
import { Cursor } from "@/components/ui/Cursor";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function Home() {
  const reduce = useReducedMotion();
  const sections = ["about", "skills", "projects", "experience", "contact"] as const;
  const activeSection = useScrollSpy(sections);

  return (
    <>
      {!reduce && <Cursor />}
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
