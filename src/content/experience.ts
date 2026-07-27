import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    period: "Июнь 2025 — настоящее время",
    role: "Инженер по автоматизации бизнес-процессов",
    mode: "Фриланс · Проектная работа",
    description:
      "Сквозная автоматизация: от анализа ручных операций до end-to-end решений с ИИ. Пайплайны в n8n, интеграция CRM, БД, мессенджеров, веб-сервисов. Telegram Mini Apps.",
    stack: ["n8n", "Python", "FastAPI", "Gemini API", "PostgreSQL", "Telegram Bot API"],
    current: true,
  },
  {
    period: "Январь 2024 — настоящее время",
    role: "Fullstack-разработчик",
    mode: "Фриланс · Проектная работа",
    description:
      "Полный цикл MVP: от идеи до продукта (бэкенд + фронтенд + БД). Python/FastAPI + TypeScript/Next.js. AI-assisted разработка: Cursor, Cline, Roo Code.",
    stack: ["Python", "FastAPI", "Next.js", "React", "PostgreSQL", "Docker"],
    current: true,
  },
];

export const roles = [
  "Fullstack-разработчик",
  "Инженер по ИИ автоматизации",
  "Python / FastAPI / Next.js",
  "Создаю MVP с нуля",
  "Автоматизация бизнес-процессов",
] as const;
