/* Сильный код с GitHub, не вынесенный в основные кейсы.
   Отобрано вручную: только репозитории с тестами/CI/Docker и живой пользой —
   для найма (backend-фундамент) и субподряда (интеграции, автоматизация). */

export interface GithubRepo {
  name: string;
  href: string;
  summary: string;
  stack: string[];
  facts: string[];
}

export const githubMore: GithubRepo[] = [
  {
    name: "Custom-Auth-RBAC-System",
    href: "https://github.com/lazmaksim2019-ops/Custom-Auth-RBAC-System",
    summary:
      "Backend-фундамент: аутентификация и матрица прав доступа, написанные вручную — без готовых auth-пакетов.",
    stack: ["Django", "DRF", "PostgreSQL", "JWT", "Docker"],
    facts: ["42 pytest-теста", "JWT с blacklist", "Swagger", "CI"],
  },
  {
    name: "mavico-ozon-automation",
    href: "https://github.com/lazmaksim2019-ops/mavico-ozon-automation",
    summary:
      "Живая интеграция: выгрузка Ozon Seller API в CSV, утренняя сводка в Telegram-бота, чистка каталога 19 → 12 строк.",
    stack: ["Python", "Ozon Seller API", "Telegram Bot API"],
    facts: ["Живой бот активен", "Retry 429/5xx", "Тесты"],
  },
  {
    name: "wildberries-ai-orm-pipeline",
    href: "https://github.com/lazmaksim2019-ops/wildberries-ai-orm-pipeline",
    summary:
      "Production-ready мониторинг репутации: RSS трёх СМИ → LLM-анализ тональности → Google Sheets + Telegram-алерты каждые 30 минут.",
    stack: ["n8n", "LLM", "Google Sheets API", "Telegram"],
    facts: ["CI", "Docker", "По расписанию"],
  },
];
