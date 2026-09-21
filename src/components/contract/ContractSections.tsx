"use client";

import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

const formats = [
  {
    n: "01",
    title: "Проект целиком",
    text: "Небольшой сервис, MVP, web-продукт или Telegram-приложение.",
  },
  {
    n: "02",
    title: "Отдельный технический блок",
    text: "Frontend, backend, API, Telegram, AI, автоматизация.",
  },
  {
    n: "03",
    title: "Подхват существующего проекта",
    text: "Разберусь в текущем коде, исправлю ошибки, добавлю функционал.",
  },
  {
    n: "04",
    title: "Усиление команды",
    text: "Подключусь на период перегруза или под конкретный дедлайн.",
  },
  {
    n: "05",
    title: "White-label / субподряд",
    text: "Работаю внутри вашего процесса, отдаю готовый технический результат.",
  },
];

const why = [
  {
    title: "Сам разбираюсь в задаче",
    text: "Не ограничиваюсь готовым ТЗ, уточняю и закрываю пробелы.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </svg>
    ),
  },
  {
    title: "AI-assisted development",
    text: "AI ускоряет разработку, код и результат проходят инженерную проверку.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Могу работать end-to-end",
    text: "Frontend, backend, интеграции — без разрывов между подрядчиками.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Вхожу в существующий проект",
    text: "Разбираюсь в чужом и AI-generated коде, навожу порядок.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    title: "Фокус на работающем результате",
    text: "Не только код: deploy, тесты, фиксы, передача результата.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const steps = [
  { n: "1", title: "Получаю задачу", text: "ТЗ, ссылка на проект или краткое описание проблемы." },
  { n: "2", title: "Разбираюсь в системе", text: "Код, API, данные, ограничения и реальная цель." },
  { n: "3", title: "Реализую и интегрирую", text: "Код, интеграции, deploy в рабочее окружение." },
  { n: "4", title: "Проверяю и передаю", text: "Тесты, фиксы, короткая передача результата." },
];

const faq = [
  { q: "Можно ли подключиться только на часть проекта?", a: "Да. Возьму отдельный технический блок: frontend, backend, API, Telegram, AI или автоматизацию." },
  { q: "Можно ли работать white-label?", a: "Да, в рамках ваших договорённостей и процесса." },
  { q: "Можно ли доработать существующий код?", a: "Да. Разберусь в текущем коде, исправлю ошибки и добавлю функционал." },
  { q: "Работаешь ли с AI-generated кодом?", a: "Да. Проверяю, навожу порядок, довожу до рабочего состояния." },
  { q: "Можно ли работать по ТЗ и процессу команды?", a: "Да. Подстраиваюсь под ваш процесс, инструменты и дедлайны." },
  { q: "Можно ли начать с небольшой задачи?", a: "Да. Удобно начать с малого блока и дальше расширять." },
];

export function Engagement() {
  return (
    <section id="formats">
      <div className="container">
        <Reveal>
          <div className="section-label">Форматы сотрудничества</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Как могу <span className="gradient-text">подключиться</span>
          </h2>
        </Reveal>
        <div className="format-list">
          {formats.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.05}>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="format-row"
              >
                <span className="format-num">{f.n}</span>
                <span className="format-body">
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </span>
                <span className="format-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyMe() {
  return (
    <section id="why">
      <div className="container">
        <Reveal>
          <div className="section-label">Преимущества</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Почему меня <span className="gradient-text">подключают</span>
          </h2>
        </Reveal>
        <div className="why-list">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="why-row">
                <span className="why-icon" aria-hidden="true">{w.icon}</span>
                <span className="why-body">
                  <strong>{w.title}</strong>
                  <span>{w.text}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <Reveal>
          <div className="section-label">Процесс</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Как <span className="gradient-text">работаю</span>
          </h2>
        </Reveal>
        <div className="timeline-steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="step">
                <span className="step-dot" aria-hidden="true">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="process-note">
            Могу подключиться на любом этапе существующего проекта.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function AgencyCta() {
  return (
    <section id="agency">
      <div className="container">
        <Reveal>
          <div className="agency-box">
            <h2>Нужны дополнительные руки на проекте?</h2>
            <p>
              Могу подключиться к существующей команде, закрыть отдельный
              технический блок или взять небольшой проект целиком.
            </p>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Обсудить подключение
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <Reveal>
          <div className="section-label">Вопросы</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </Reveal>
        <div className="faq-list">
          {faq.map((f) => (
            <Reveal key={f.q}>
              <details className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
