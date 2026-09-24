"use client";

import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

const agencyPoints = [
  "White-label: работаю под вашим брендом и процессом",
  "Подхват чужого и AI-generated кода: аудит за 2–3 дня, затем фиксы",
  "Стек стыка: Python/FastAPI + Next.js/TypeScript, Docker, CI",
  "Связь в Telegram, статус каждый день, эстимейты честно",
];

const hrPoints = [
  "Backend: Django/DRF, FastAPI, PostgreSQL, JWT/RBAC, 42 pytest-теста",
  "Frontend: Next.js 16, React 19, TypeScript strict, Lighthouse 95+",
  "AI: Gemini API, RAG на pgvector, n8n-пайплайны, промпты под лимиты WB/Ozon",
  "Формат: удалённо, вакансии и проектная работа — CV и hh по запросу",
];

export function Agencies() {
  return (
    <section id="hiring">
      <div className="container">
        <Reveal>
          <div className="section-label">Сотрудничество</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Агентствам и <span className="gradient-text">HR — сюда</span>
          </h2>
        </Reveal>
        <div className="hiring-grid">
          <Reveal>
            <article className="hiring-card">
              <h3>Агентствам: субподряд без головной боли</h3>
              <ul className="hiring-list">
                {agencyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Предложить блок →
              </a>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="hiring-card">
              <h3>HR: инженер, а не «начинающий»</h3>
              <ul className="hiring-list">
                {hrPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="hiring-ctas">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Запросить CV
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
