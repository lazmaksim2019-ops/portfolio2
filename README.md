<div align="center">

# Портфолио-платформа

**Next.js 16 · React 19 · TypeScript 5 · motion · Tailwind v4**

Fullstack-разработчик и инженер по ИИ-автоматизации

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## Зачем этот репозиторий

Это не «сайт-визитка». Это **инженерный кейс**: персональный сайт-портфолио, построенный на актуальном стеке 2026 года и спроектированный так, чтобы сам по себе показать компетенцию — от архитектуры данных до доступности и производительности.

Каждое техническое решение ниже — не случайность, а осознанный выбор с обоснованием.

---

## Архитектура

```
┌─────────────────────────────────────────────────────────────┐
│                        App Router                           │
│                                                             │
│  layout.tsx ── шрифты (next/font), мета, тема              │
│       │                                                     │
│  page.tsx ── Hero · About · Skills · Projects · Exp · CTA  │
│       │                                                     │
│  /projects/[slug] ── динамические страницы кейсов (SSG)    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  components/          content/          types/              │
│  ├─ hero/             ├─ projects.ts    └─ content.ts       │
│  ├─ about/            ├─ skills.ts                         │
│  ├─ skills/           ├─ experience.ts                     │
│  ├─ projects/         └─ site.ts                           │
│  ├─ experience/                                             │
│  ├─ contact/          lib/                                  │
│  ├─ layout/           ├─ utils.ts (cn)                     │
│  └─ ui/               └─ useScrollSpy.ts                   │
│     ├─ Cursor                                              │
│     ├─ Reveal              public/                          │
│     └─ Icons              └─ me.jpg, og/                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Стек и обоснование выбора

| Слой | Решение | Почему именно это |
|------|---------|-------------------|
| **Фреймворк** | Next.js 16, App Router | SSR/SSG из коробки, Server Components, `generateMetadata` для SEO, `next/image` и `next/font` для оптимизации — всё, что ищут рекрутёры, и Lighthouse |
| **React** | React 19 | Actions, `useActionState`, Server Components — то, что спрашивают на собесах в 2026 |
| **Язык** | TypeScript 5, `strict: true` | Без `any`. Typed props, typed контент, typed API — именно это и есть «доказательство TypeScript» |
| **Стили** | Tailwind v4 + авторский CSS | Tailwind для утилит, кастомный CSS для дизайна-системы — не скатываемся в «blanket rounded-2xl» |
| **Анимации** | motion (ex Framer Motion) | `whileInView` + `useReducedMotion` — reveal-анимации с поддержкой `prefers-reduced-motion`, без ручного IntersectionObserver |
| **Шрифты** | Space Grotesk + Inter через `next/font` | Zero-layout-shift, самохостинг, `<link rel="preconnect">` автоматически |
| **Данные** | Typed `.ts`-файлы | Один источник правды — никакого рассинхрона контента |

---

## Ключевые решения

### 1. Data-driven контент

Проекты, навыки, опыт — не хардкод в JSX, а **типизированные массивы**:

```typescript
// content/projects.ts
interface Project {
  slug: string;
  index: string;          // '01'
  title: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];   // ← TypeScript не даст забыть ссылку
  accent: AccentColor;    // duotone-акцент карточки
  year: number;
}
```

**Результат:** правка в одном файле — обновление на всём сайте и в SEO-метах.

### 2. A11y и `prefers-reduced-motion`

```typescript
// components/ui/Reveal.tsx
const reduce = useReducedMotion();
<motion.div
  initial={reduce ? false : { opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
/>
```

Анимации отключаются для пользователей, которые запросили это в ОС. Кастомный курсор — только на desktop (`hover: hover` + `pointer: fine`), на тач-устройствах не загружается.

### 3. SEO без компромиссов

Каждая страница кейса — статически сгенерированная с динамическими мета-тегами:

```typescript
// app/projects/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === (await params).slug);
  return {
    title: `${project.title} — кейс · Александр Лазаренко`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}
```

### 4. Scroll spy без сторонних библиотек

```typescript
// lib/useScrollSpy.ts
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
  { rootMargin: "-20% 0px -70% 0px" }
);
```

Ноль зависимостей, 15 строк, работает.

---

## Структура файлов

```
src/
├─ app/
│  ├─ layout.tsx                 # Корневой layout: шрифты, мета, <html>, <body>
│  ├─ page.tsx                   #Главная: Hero → About → Skills → Projects → Exp → Contact
│  └─ projects/[slug]/page.tsx   # SSG-страницы кейсов + generateMetadata
│
├─ components/
│  ├─ hero/Hero.tsx              # Typewriter-роли, motion-вход, mesh-фон
│  ├─ about/About.tsx            # CountUp-счётчики, tech-stack, highlight-теги
│  ├─ skills/Skills.tsx          # Data-driven bento-сетка
│  ├─ projects/Projects.tsx      # Data-driven карточки с accent-цветами
│  ├─ experience/Experience.tsx  # Timeline с gradient-линией
│  ├─ contact/Contact.tsx        # useActionState, GitHub + Telegram ссылки
│  ├─ layout/
│  │   ├─ Navbar.tsx             # Scroll spy, hamburger, back-to-top
│  │   └─ Footer.tsx
│  └─ ui/
│       ├─ Cursor.tsx            # Кастомный курсор (desktop, reduced-motion safe)
│       ├─ Reveal.tsx            # Scroll-reveal обёртка над motion
│       └─ Icons.tsx             # SVG-иконки технологий
│
├─ content/                      # Единый источник правды
│  ├─ projects.ts                # Project[]
│  ├─ skills.ts                  # SkillGroup[]
│  ├─ experience.ts              # Experience[]
│  └─ site.ts                    # Контакты, конфиг
│
├─ types/content.ts              # Интерфейсы Project, SkillGroup, Experience
└─ lib/
    ├─ utils.ts                  # cn() — объединение классов
    └─ useScrollSpy.ts           # Хук для навбара
```

---

## Быстрый старт

```bash
git clone https://github.com/lazmaksim2019-ops/portfolio2.git
cd portfolio2
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

---

## Команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер с HMR |
| `npm run build` | Продакшн-сборка (SSG) |
| `npm start` | Запуск продакшн-сервера |
| `npm run lint` | ESLint |

---

## Редактирование контента

| Файл | Что меняется |
|------|-------------|
| `content/projects.ts` | Название, описание, стек, ссылки проектов |
| `content/skills.ts` | Карточки навыков и теги |
| `content/experience.ts` | Опыт работы и список ролей для typewriter |
| `content/site.ts` | Имя, email, телефон, Telegram, GitHub |

---

## Деплой на Render

### Шаг 1 — Репозиторий готов
Убедись, что код запушен в GitHub:
```bash
git add -A
git commit -m "deploy: ready for render"
git push
```

### Шаг 2 — Создай сервис на Render
1. Зайди на [render.com](https://render.com), войди через GitHub
2. **New +** → **Web Service**
3. Выбери репозиторий `portfolio2`

### Шаг 3 — Настройки деплоя
Заполни поля:

| Параметр | Значение |
|----------|----------|
| **Name** | `portfolio` (или любое) |
| **Region** | `Frankfurt (EU)` — ближе к РФ |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | `22` (в настройках Environment) |

### Шаг 4 — Environment Variables
В разделе **Environment** добавь:

```
NODE_ENV=production
```

### Шаг 5 — Деплой
Нажми **Create Web Service**. Render автоматически:
- Клонирует репозиторий
- Установит зависимости
- Соберёт проект (`next build`)
- Запустит сервер

Деплой занимает ~2-3 минуты. После первого деплоя каждый пуш в `main` автоматически пересобирает сайт.

### Шаг 6 — Домен (опционально)
1. В настройках сервиса → **Settings** → **Custom Domains**
2. Добавь свой домен
3. Настрой DNS: добавь `CNAME`-запись на `<твой-сервис>.onrender.com`

### Автодеплой
Render автоматически пересобирает сайт при каждом пуше в `main`. Настраивать CI/CD отдельно не нужно.

### Проверка
После деплоя открой:
```
https://<твой-сервис>.onrender.com
```

---

## Контакты

<div align="center">

[![Telegram](https://img.shields.io/badge/Telegram-lazalex81-26A5E4?logo=telegram)](https://t.me/lazalex81)
[![Email](https://img.shields.io/badge/Email-elektra--174@ya.ru-EA4335?logo=gmail)](mailto:elektra-174@ya.ru)
[![GitHub](https://img.shields.io/badge/GitHub-lazmaksim2019--ops-181717?logo=github)](https://github.com/lazmaksim2019-ops)

</div>

---

<div align="center">

Сделано с вниманием к деталям · 2026

</div>
