function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;
  return "https://lazalex.vercel.app";
}

export const siteConfig = {
  name: "Александр Лазаренко",
  title: "Александр Лазаренко — Fullstack / AI Developer | Web, Telegram, AI",
  description:
    "Fullstack / AI разработчик. Сайты и веб-приложения, Telegram-боты и Mini Apps, AI-инструменты, API-интеграции и автоматизация рутины. 1 сервис в проде, 6 кейсов с демо и кодом.",
  email: "elektra-174@ya.ru",
  phone: "+7 912 796-25-03",
  telegram: "https://t.me/lazalex81",
  telegramHandle: "lazalex81",
  github: "https://github.com/lazmaksim2019-ops",
  ogImage: "/og.png",
  url: siteUrl(),
  availability: "Открыт для предложений: вакансии · субподряд для агентств · проекты под ключ",
  responseTime: "Отвечаю в течение часа в Telegram",
} as const;
