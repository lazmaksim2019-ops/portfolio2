"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  PythonIcon,
  FastAPIIcon,
  NextJSIcon,
  ReactIcon,
  TSIcon,
  N8NIcon,
  PGIcon,
  DockerIcon,
} from "@/components/ui/Icons";

const techIcons = [
  { title: "Python", icon: <PythonIcon />, brand: "#3776AB" },
  { title: "FastAPI", icon: <FastAPIIcon />, brand: "#009688" },
  { title: "Next.js", icon: <NextJSIcon />, brand: "#FFFFFF" },
  { title: "React", icon: <ReactIcon />, brand: "#61DAFB" },
  { title: "TypeScript", icon: <TSIcon />, brand: "#3178C6" },
  { title: "n8n", icon: <N8NIcon />, brand: "#EA4B71" },
  { title: "PostgreSQL", icon: <PGIcon />, brand: "#4169E1" },
  { title: "Docker", icon: <DockerIcon />, brand: "#2496ED" },
];

const domains = ["Web", "AI", "Telegram", "Automation"];

export function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">Обо мне</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Создаю <span className="gradient-text">рабочие решения</span>
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-avatar">
              <Image
                src="/me.jpg"
                alt="Александр Лазаренко"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius)", objectFit: "cover" }}
              />
            </div>
          </Reveal>
          <div className="about-text">
            <Reveal>
              <h3>Fullstack / AI Developer · проектная разработка</h3>
            </Reveal>
            <Reveal>
              <p>
                Беру небольшие проекты целиком или отдельные технические блоки:
                web-приложения, Telegram-боты и Mini Apps, AI-инструменты,
                API-интеграции и автоматизация. Разбираюсь в чужом коде и
                довожу задачу до рабочего результата.
              </p>
            </Reveal>
            <Reveal>
              <div className="about-highlights">
                <span className="highlight-tag">Удалённо</span>
                <span className="highlight-tag">Гибкий график</span>
                <span className="highlight-tag">Быстрый старт</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="stats stats-domains">
                {domains.map((d) => (
                  <div key={d} className="stat">
                    <div className="stat-number stat-domain">{d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="tech-stack">
                {techIcons.map((t) => (
                  <div
                    key={t.title}
                    className="tech-icon"
                    title={t.title}
                    style={{ "--brand": t.brand } as React.CSSProperties}
                  >
                    {t.icon}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
