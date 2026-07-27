import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "marketplace-etl-pipeline",
    index: "01",
    title: "ETL-пайплайн автоматизации для маркетплейсов",
    summary:
      "Асинхронный парсинг + ИИ-уникализация контента для WB/Ozon. Полный цикл: от данных до контента.",
    stack: ["n8n", "FastAPI", "Gemini API"],
    accent: "violet",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/marketplace-etl-pipeline",
      },
    ],
  },
  {
    slug: "ai-marketplace-optimizer-saas",
    index: "02",
    title: "AI SaaS-оптимизатор для селлеров",
    summary:
      "Генерация SEO-контента и анализ изображений для маркетплейсов. Next.js + FastAPI + Gemini.",
    stack: ["Next.js", "FastAPI", "Gemini"],
    accent: "teal",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/ai-marketplace-optimizer-saas",
      },
    ],
  },
  {
    slug: "ai-habit-mentor",
    index: "03",
    title: "AI-ментор привычек",
    summary:
      "Telegram Mini App: RAG на pgvector, соответствие ФЗ-152, персонализированные рекомендации.",
    stack: ["Telegram Mini App", "FastAPI", "pgvector"],
    accent: "green",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/AI-Habit-Mentor",
      },
    ],
  },
  {
    slug: "ai-hub-sellers",
    index: "04",
    title: "AI Hub для селлеров",
    summary:
      "Telegram Mini App: SEO-оптимизация, анализ отзывов, интеграция с маркетплейсами.",
    stack: ["Next.js", "Telegram Mini App", "Gemini"],
    accent: "amber",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/ai-hub-sellers",
      },
    ],
  },
  {
    slug: "b2b-platform-kod-dashboard",
    index: "05",
    title: "B2B-портал с ролевой моделью",
    summary:
      "Смена ролей Клиент/Менеджер, аналитика на Recharts, авторизация и RBAC.",
    stack: ["Next.js 16", "React 19", "Recharts"],
    accent: "pink",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/b2b-platform-kod-dashboard",
      },
    ],
  },
  {
    slug: "b2b-platform-kod-landing",
    index: "06",
    title: "B2B-лендинг с квизом",
    summary:
      "Интерактивный лендинг: калькулятор ROI, умный квиз, Framer Motion анимации.",
    stack: ["Next.js 16", "Framer Motion", "Tailwind v4"],
    accent: "blue",
    year: 2025,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/b2b-platform-kod-landing",
      },
    ],
  },
];
