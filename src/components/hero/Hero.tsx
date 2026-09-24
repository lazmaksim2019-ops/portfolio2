"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/content/site";
import { GitHubIcon } from "@/components/ui/Icons";

type Audience = "client" | "agency" | "hr";

const audiences: Record<
  Audience,
  { tab: string; title: ReactNode; sub: string; cta: string; ctaHref: string; secondary: string }
> = {
  client: {
    tab: "Мне нужно",
    title: (
      <>
        Сайт, бот или автоматизация{" "}
        <span className="gradient-text">под ключ — от идеи до работы</span>
      </>
    ),
    sub: "Делаю сайты, Telegram-ботов и Mini Apps, AI-инструменты и автоматизацию рутины. Один живой сервис в проде, 6 кейсов с демо — посмотрите, прежде чем писать.",
    cta: "Обсудить задачу в Telegram",
    ctaHref: siteConfig.telegram,
    secondary: "Смотреть проекты",
  },
  agency: {
    tab: "Я агентство",
    title: (
      <>
        Подхвачу ваш backend, frontend или AI-блок{" "}
        <span className="gradient-text">без срыва сроков</span>
      </>
    ),
    sub: "White-label, усиление команды, подхват чужого и AI-generated кода. Python/FastAPI + Next.js/TypeScript, тесты, CI, Docker. Отвечаю в течение часа.",
    cta: "Написать в Telegram",
    ctaHref: siteConfig.telegram,
    secondary: "Смотреть код на GitHub",
  },
  hr: {
    tab: "Я HR",
    title: (
      <>
        Fullstack / AI&nbsp;Developer:{" "}
        <span className="gradient-text">Python + Next.js + AI в проде</span>
      </>
    ),
    sub: "1 сервис в продакшене, RAG на pgvector, ETL-пайплайны на n8n, B2B-лендинг с Lighthouse 95+. Код, тесты и CI — всё открыто на GitHub.",
    cta: "Смотреть GitHub",
    ctaHref: siteConfig.github,
    secondary: "Смотреть проекты",
  },
};

type DemoTab = "bot" | "miniapp" | "ai" | "auto";

const demo: Record<DemoTab, { tab: string; lines: { who: string; text: string }[] }> = {
  bot: {
    tab: "Бот",
    lines: [
      { who: "Клиент", text: "Хочу записаться на завтра к 14:00" },
      { who: "Бот", text: "Готово! Завтра 14:00, мастер Анна. Напомню за 2 часа 🙌" },
      { who: "Вы", text: "Получили заявку в Telegram — без звонков" },
    ],
  },
  miniapp: {
    tab: "Mini App",
    lines: [
      { who: "Селлер", text: "Загружает фото товара в Mini App" },
      { who: "AI", text: "Генерирует SEO-карточку под лимиты WB + триггеры для обложки" },
      { who: "Вы", text: "Копируете готовый текст — 2 минуты вместо часа" },
    ],
  },
  ai: {
    tab: "AI",
    lines: [
      { who: "Отзыв", text: "«Доставка долгая, но товар отличный»" },
      { who: "AI", text: "Тональность: смешанная. Проблема: логистика. Ответ для клиента готов." },
      { who: "Вы", text: "Видите, что чинить, до потери рейтинга" },
    ],
  },
  auto: {
    tab: "Авто",
    lines: [
      { who: "n8n", text: "Каждые 30 мин: RSS → LLM-анализ → Google Sheets" },
      { who: "Триггер", text: "Негативное упоминание? → алерт вам в Telegram" },
      { who: "Вы", text: "Рутина идёт сама, вы занимаетесь делом" },
    ],
  },
};

const stats = [
  { number: "1", label: "сервис в проде" },
  { number: "6", label: "кейсов с демо и кодом" },
  { number: "9", label: "сильных репо на GitHub" },
];

const order: Audience[] = ["client", "agency", "hr"];
const demoOrder: DemoTab[] = ["bot", "miniapp", "ai", "auto"];

export function Hero() {
  const [audience, setAudience] = useState<Audience>("client");
  const [demoTab, setDemoTab] = useState<DemoTab>("bot");
  const a = audiences[audience];

  return (
    <section className="hero" id="hero">
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-blob" />
        <div className="mesh-blob" />
        <div className="mesh-blob" />
      </div>
      <div className="hero-content hero-split">
        <div className="hero-copy">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="dot" />
            {siteConfig.availability}
          </motion.div>

          <div className="hero-doors" role="tablist" aria-label="Кто вы?">
            {order.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={audience === key}
                className={audience === key ? "hero-door active" : "hero-door"}
                onClick={() => setAudience(key)}
              >
                {audiences[key].tab}
              </button>
            ))}
          </div>

          <motion.h1
            key={audience}
            className="hero-name hero-value"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {a.title}
          </motion.h1>

          <motion.p
            key={`sub-${audience}`}
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {a.sub}
          </motion.p>

          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero-metric">
                <span className="hero-metric-number">{stat.number}</span>
                <span className="hero-metric-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={a.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {a.cta}
            </a>
            <a
              href={audience === "agency" ? siteConfig.github : "#projects"}
              target={audience === "agency" ? "_blank" : undefined}
              rel={audience === "agency" ? "noopener noreferrer" : undefined}
              className="btn btn-outline"
            >
              {a.secondary}
            </a>
          </motion.div>

          <motion.div
            className="hero-github"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet"
            >
              <GitHubIcon />
              GitHub — код, тесты, CI
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-demo"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="demo-card" aria-live="polite">
            <div className="demo-bar" aria-hidden="true">
              <span className="demo-dot" />
              <span className="demo-dot" />
              <span className="demo-dot" />
              <span className="demo-title">как это выглядит в работе</span>
            </div>
            <div className="demo-tabs" role="tablist" aria-label="Примеры">
              {demoOrder.map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={demoTab === key}
                  className={demoTab === key ? "demo-tab active" : "demo-tab"}
                  onClick={() => setDemoTab(key)}
                >
                  {demo[key].tab}
                </button>
              ))}
            </div>
            <div className="demo-lines" key={demoTab}>
              {demo[demoTab].lines.map((line, i) => (
                <motion.div
                  key={line.text}
                  className={line.who === "Вы" ? "demo-line demo-line-you" : "demo-line"}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                >
                  <span className="demo-who">{line.who}</span>
                  <span>{line.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="demo-note">{siteConfig.responseTime} · CV и hh — по запросу в Telegram</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-hidden="true"
      >
        <span>Листай</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
