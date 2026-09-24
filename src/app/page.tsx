"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Services } from "@/components/services/Services";
import { Projects } from "@/components/projects/Projects";
import { GithubMore } from "@/components/github/GithubMore";
import { Agencies } from "@/components/agencies/Agencies";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";
import { HowIWork, Faq } from "@/components/contract/ContractSections";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { useScrollSpy } from "@/lib/useScrollSpy";

/* Массив вынесен на уровень модуля: раньше он создавался внутри Home на каждый
   рендер, а useScrollSpy держит его в зависимостях эффекта — из-за этого
   IntersectionObserver пересоздавался при каждом изменении активной секции. */
const SECTIONS = ["projects", "services", "process", "about", "contact"] as const;

export default function Home() {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Перейти к содержанию
      </a>
      <Cursor />
      <ScrollProgress />
      <div className="noise-overlay" />
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <Projects />
        <section className="section-alt">
          <Services />
        </section>
        <Skills />
        <section className="section-alt">
          <HowIWork />
        </section>
        <About />
        <Experience />
        <section className="section-alt">
          <GithubMore />
        </section>
        <Agencies />
        <section className="section-alt">
          <Faq />
        </section>
        <Contact />
      </main>
      <StickyMobileCta />
      <Footer />
    </>
  );
}
