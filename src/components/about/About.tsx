"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
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

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

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

export function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">Обо мне</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Создаю <span className="gradient-text">цифровые решения</span>
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
                priority
              />
            </div>
          </Reveal>
          <div className="about-text">
            <Reveal>
              <h3>Fullstack-разработчик &amp; Инженер по ИИ автоматизации</h3>
            </Reveal>
            <Reveal>
              <p>
                Разрабатываю MVP и автоматизирую бизнес-процессы с нуля до
                работающего продукта. Полный цикл: от анализа и архитектуры до
                деплоя. Специализируюсь на Python/FastAPI, Next.js/React и
                AI-интеграциях.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Мой подход — быстро переключаюсь между бэкендом и фронтендом в
                рамках одного проекта. Автоматизация рутины через n8n + ИИ,
                создание Telegram Mini Apps, проектирование БД под бизнес-задачи.
              </p>
            </Reveal>
            <Reveal>
              <div className="about-highlights">
                <span className="highlight-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Удалённо
                </span>
                <span className="highlight-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Гибкий график
                </span>
                <span className="highlight-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Быстрый старт
                </span>
              </div>
            </Reveal>
            <Reveal>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number"><CountUp target={2} suffix="+" /></div>
                  <div className="stat-label">Года опыта</div>
                </div>
                <div className="stat">
                  <div className="stat-number"><CountUp target={11} suffix="+" /></div>
                  <div className="stat-label">Проектов</div>
                </div>
                <div className="stat">
                  <div className="stat-number"><CountUp target={12} suffix="+" /></div>
                  <div className="stat-label">Технологий</div>
                </div>
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
