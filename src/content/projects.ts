import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "svobodno-online",
    index: "01",
    title: "СВОБОДНО.online — сервис онлайн-записи",
    summary:
      "Действующий сервис онлайн-записи для частных мастеров и небольших команд: витрина, расписание, клиенты, уведомления.",
    stack: ["Next.js", "React", "PWA", "Telegram API", "VK API"],
    accent: "teal",
    year: 2026,
    kind: "Собственный продукт",
    role: "Founder / Fullstack Developer",
    status: "Действующий сервис",
    featured: true,
    image: "/shots/shot-svobodno.jpg",
    imageAlt: "СВОБОДНО.online — сервис онлайн-записи для мастеров",
    links: [
      {
        label: "Продукт",
        href: "https://свободно.online/",
      },
      {
        label: "Demo",
        href: "https://свободно.online/test-master",
      },
    ],
  },
  {
    slug: "ai-hub-sellers",
    index: "02",
    title: "AI Hub для селлеров",
    summary:
      "Telegram Mini App: SEO-генерация карточек, анализ отзывов, синхронизация с маркетплейсами.",
    stack: ["Next.js", "Telegram Mini App", "Gemini"],
    accent: "amber",
    year: 2025,
    kind: "Telegram Mini App",
    role: "Fullstack Developer",
    status: "Demo работает",
    image: "/shots/shot-hub.jpg",
    imageAlt: "AI Hub Sellers — генератор карточек и анализ отзывов",
    links: [
      {
        label: "Demo",
        href: "https://ai-hub-sellers.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/ai-hub-sellers",
      },
    ],
  },
  {
    slug: "ai-marketplace-optimizer-saas",
    index: "03",
    title: "AI SaaS-оптимизатор для селлеров",
    summary:
      "Генерация SEO-контента и анализ изображений для маркетплейсов. FastAPI + React + Gemini.",
    stack: ["FastAPI", "React", "Gemini"],
    accent: "violet",
    year: 2025,
    kind: "SaaS / AI-продукт",
    role: "Fullstack / AI Developer",
    status: "Demo работает · 22 теста · CI · Docker",
    image: "/shots/shot-optimizer.jpg",
    imageAlt: "AI Marketplace Optimizer — анализ карточки товара",
    links: [
      {
        label: "Demo",
        href: "https://frontend-delta-beryl-25.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/ai-marketplace-optimizer-saas",
      },
    ],
  },
  {
    slug: "marketplace-etl-pipeline",
    index: "04",
    title: "ETL-пайплайн автоматизации для маркетплейсов",
    summary:
      "Асинхронный парсинг и ИИ-обработка контента для WB/Ozon: n8n + FastAPI + Gemini.",
    stack: ["n8n", "FastAPI", "Gemini API"],
    accent: "green",
    year: 2025,
    kind: "Automation / ETL",
    role: "Backend / Automation Engineer",
    status: "CI · Docker · pytest",
    image: "/shots/shot-etl-schema.jpg",
    imageAlt: "Marketplace ETL Pipeline — схема n8n-пайплайна",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/marketplace-etl-pipeline",
      },
    ],
  },
  {
    slug: "ai-habit-mentor",
    index: "05",
    title: "AI-ментор привычек",
    summary:
      "Telegram Mini App с RAG на pgvector, анонимизацией данных и строгой типизацией.",
    stack: ["Telegram Mini App", "FastAPI", "pgvector"],
    accent: "blue",
    year: 2025,
    kind: "Telegram Mini App / AI",
    role: "Backend / AI Developer",
    status: "22 теста · mypy strict · CI · Docker",
    image: "/shots/shot-habit.jpg",
    imageAlt: "AI Habit Mentor — стартовый экран Mini App",
    links: [
      {
        label: "Demo",
        href: "https://ai-habit-mentor.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/AI-Habit-Mentor",
      },
    ],
  },
  {
    slug: "b2b-web-product",
    index: "06",
    title: "B2B web-product concept",
    summary:
      "Концепт B2B-портала: дашборд с ролями Клиент/Менеджер и лендинг с ROI-калькулятором и квизом.",
    stack: ["Next.js 16", "React 19", "Tailwind v4"],
    accent: "pink",
    year: 2025,
    kind: "B2B product concept",
    role: "Frontend Developer",
    status: "Concept · Demo работает",
    image: "/shots/shot-kod-dash.jpg",
    imageAlt: "B2B web-product concept — дашборд с ролями",
    links: [
      {
        label: "Demo",
        href: "https://b2b-platform-kod-dashboard.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/lazmaksim2019-ops/b2b-platform-kod-dashboard",
      },
    ],
  },
];
