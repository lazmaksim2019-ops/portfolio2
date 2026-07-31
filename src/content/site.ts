function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "https://alexander-lazarenko.dev";
}

export const siteConfig = {
  name: "Александр Лазаренко",
  title: "Александр Лазаренко — Fullstack-разработчик & Инженер по ИИ автоматизации",
  description:
    "Fullstack-разработчик и инженер по ИИ автоматизации. Python, FastAPI, Next.js, n8n, Gemini API. MVP под ключ.",
  email: "elektra-174@ya.ru",
  phone: "+7 912 796-25-03",
  telegram: "https://t.me/lazalex81",
  github: "https://github.com/lazmaksim2019-ops",
  ogImage: "/og/og.png",
  url: siteUrl(),
} as const;
