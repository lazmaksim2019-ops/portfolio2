import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    id: "backend",
    title: "Backend & API",
    icon: "backend",
    description:
      "Проектирую высоконагруженные API-серверы, REST API, интеграции с внешними сервисами и базами данных.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "REST API"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    description:
      "Современный фронтенд с SSR/SSG, типизацией и адаптивными интерфейсами.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ai",
    title: "AI & Автоматизация",
    icon: "ai",
    description:
      "AI-компоненты в бизнес-процессах: обработка текстов, классификация, генерация контента, пайплайны.",
    tags: ["n8n", "Gemini API", "Prompt Engineering", "Webhooks"],
  },
  {
    id: "database",
    title: "Базы данных",
    icon: "database",
    description:
      "Проектирование и оптимизация БД под автоматизации и веб-приложения.",
    tags: ["PostgreSQL", "MySQL", "pgvector"],
  },
  {
    id: "devops",
    title: "DevOps & Инфраструктура",
    icon: "devops",
    description:
      "Контейнеризация, CI/CD, деплой и масштабирование приложений.",
    tags: ["Docker", "Git", "Vercel", "Railway"],
  },
  {
    id: "telegram",
    title: "Telegram",
    icon: "telegram",
    description:
      "Боты, Mini Apps, WebApps для взаимодействия с автоматизациями.",
    tags: ["Bot API", "WebApps", "Mini Apps"],
  },
];
