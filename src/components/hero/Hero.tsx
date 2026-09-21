"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

const flagship = projects[0];

const facts = [
  { title: "22 теста", text: "mypy strict, CI, Docker в кейсах" },
  { title: "Demo + GitHub", text: "каждый кейс можно проверить" },
  { title: "Telegram", text: "самый быстрый способ связаться" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" id="hero">
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-blob" />
        <div className="mesh-blob" />
        <div className="mesh-blob" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="dot" />
            Внешний разработчик для digital-команд и бизнеса
          </motion.div>

          <motion.h1
            className="hero-name hero-value"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Подключаюсь к проектам и довожу задачи до рабочего результата
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Веб-приложения, Telegram-боты и Mini Apps, AI-инструменты,
            API-интеграции и автоматизация. Можно передать весь небольшой
            проект или отдельный технический блок.
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-who">
              Александр Лазаренко · Fullstack / AI Developer
            </span>
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Передать задачу
            </a>
            <a href="#projects" className="btn btn-outline">
              Смотреть проекты
            </a>
          </motion.div>
          <motion.div
            className="hero-github"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-proof">
            {flagship.image && (
              <a href={`/projects/${flagship.slug}`} className="hero-proof-shot">
                <Image
                  src={flagship.image}
                  alt={flagship.imageAlt ?? flagship.title}
                  width={1600}
                  height={1000}
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </a>
            )}
            <div className="hero-proof-body">
              <span className="hero-proof-tag">{flagship.kind}</span>
              <h3>{flagship.title}</h3>
              <p>{flagship.summary}</p>
              <div className="hero-proof-links">
                {flagship.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                  >
                    {link.label === "Продукт" ? "Открыть продукт" : link.label}
                  </a>
                ))}
                <a href={`/projects/${flagship.slug}`} className="project-link">
                  Кейс &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="hero-proof-facts">
            {facts.map((f) => (
              <div key={f.title} className="hero-fact">
                <strong>{f.title}</strong>
                {f.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span>Листай</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
