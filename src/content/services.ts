export interface Service {
  id: string;
  title: string;
  icon: string;
  forWhom: string;
  includes: string[];
  proof: { label: string; href: string };
  timeline: string;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Сайты и веб-приложения",
    icon: "frontend",
    forWhom: "Бизнесу: визитка, лендинг, сервис записи, дашборд, MVP",
    includes: [
      "Лендинг или многостраничник на Next.js",
      "Личный кабинет, формы, оплата, интеграции",
      "Адаптив под телефон, SEO-база, деплой",
    ],
    proof: { label: "Смотри: СВОБОДНО.online в проде", href: "/projects/svobodno-online" },
    timeline: "Лендинг — от 1–2 недель, сервис — по оценке",
  },
  {
    id: "telegram",
    title: "Telegram-боты и Mini Apps",
    icon: "telegram",
    forWhom: "Тем, кто живёт в Telegram: продажи, запись, поддержка",
    includes: [
      "Бот: команды, кнопки, уведомления, оплаты",
      "Mini App внутри Telegram как приложение",
      "Приём заявок сразу вам в личку или CRM",
    ],
    proof: { label: "Смотри: AI Hub для селлеров", href: "/projects/ai-hub-sellers" },
    timeline: "Бот — от 1 недели, Mini App — от 2–3 недель",
  },
  {
    id: "ai",
    title: "AI-инструменты",
    icon: "ai",
    forWhom: "Селлерам, авторам, командам: тексты, анализ, помощники",
    includes: [
      "Генерация SEO-текстов и описаний под WB/Ozon",
      "Анализ отзывов, фото, документов",
      "RAG-помощник по вашей базе знаний",
    ],
    proof: { label: "Смотри: AI SaaS-оптимизатор", href: "/projects/ai-marketplace-optimizer-saas" },
    timeline: "Первый рабочий прототип — от 1–2 недель",
  },
  {
    id: "automation",
    title: "Автоматизация рутины",
    icon: "devops",
    forWhom: "Малому бизнесу: таблицы, заявки, отчёты, рассылки",
    includes: [
      "n8n-пайплайны: заявки → таблица → уведомления",
      "Интеграции API: маркетплейсы, CRM, Google Sheets",
      "Мониторинг и алерты в Telegram",
    ],
    proof: { label: "Смотри: ETL-пайплайн для маркетплейсов", href: "/projects/marketplace-etl-pipeline" },
    timeline: "Первый пайплайн — от нескольких дней",
  },
  {
    id: "rescue",
    title: "Подхват и доработка кода",
    icon: "database",
    forWhom: "Агентствам и владельцам: чужой код, AI-код, баги",
    includes: [
      "Разбор чужого и AI-generated кода",
      "Багфиксы, рефакторинг, недостающие модули",
      "Тесты, CI, Docker, передача результата",
    ],
    proof: { label: "Смотри: backend с 42 тестами на GitHub", href: "https://github.com/lazmaksim2019-ops/Custom-Auth-RBAC-System" },
    timeline: "Аудит кода — от 2–3 дней",
  },
];
