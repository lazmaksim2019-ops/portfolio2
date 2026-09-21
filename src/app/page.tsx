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
import {
  Engagement,
  WhyMe,
  Process,
  AgencyCta,
  Faq,
} from "@/components/contract/ContractSections";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useScrollSpy } from "@/lib/useScrollSpy";

export default function Home() {
  const reduce = useReducedMotion();
  const sections = ["projects", "skills", "process", "formats", "about", "contact"] as const;
  const activeSection = useScrollSpy(sections);

  return (
    <>
      {!reduce && <Cursor />}
      <ScrollProgress />
      <div className="noise-overlay" />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Engagement />
        <Skills />
        <Projects />
        <WhyMe />
        <Process />
        <AgencyCta />
        <About />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
