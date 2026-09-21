import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    id: "web",
    title: "Web",
    icon: "frontend",
    description:
      "Сайты, лендинги, web-приложения, дашборды, личные кабинеты, MVP.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "telegram",
    title: "Telegram",
    icon: "telegram",
    description:
      "Боты, Mini Apps, WebApps, webhook-интеграции с бизнес-процессами.",
    tags: ["Bot API", "Mini Apps", "WebApps", "Webhooks"],
  },
  {
    id: "ai",
    title: "AI",
    icon: "ai",
    description:
      "LLM-функции в продукте: тексты, изображения, классификация, генерация, RAG.",
    tags: ["Gemini API", "RAG", "pgvector", "Prompt Engineering"],
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: "backend",
    description:
      "REST API, webhooks, OAuth, JSON, подключение внешних сервисов.",
    tags: ["Python", "FastAPI", "REST API", "SQLAlchemy"],
  },
  {
    id: "automation",
    title: "Automation",
    icon: "devops",
    description:
      "n8n-сценарии, ETL, уведомления, рутинные процессы под ключ.",
    tags: ["n8n", "ETL", "PostgreSQL", "Docker"],
  },
  {
    id: "rescue",
    title: "Code rescue",
    icon: "database",
    description:
      "Баги, рефакторинг, чужой и AI-generated код, недостающие интеграции.",
    tags: ["Refactoring", "Legacy", "Tests", "CI"],
  },
];
