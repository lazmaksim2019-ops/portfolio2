import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { cases } from "@/content/cases";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";
import type { ProjectLink } from "@/types/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  const caseData = cases.find((x) => x.slug === slug);
  if (!project && !caseData) return {};
  const title = project
    ? `${project.title} — кейс · Александр Лазаренко`
    : `${slug} — кейс · Александр Лазаренко`;
  const description = project?.summary ?? caseData?.problem ?? "";
  return {
    title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

/* Приоритет ссылок: главная CTA в шапке — самая «продуктовая», остальное уходит в сайдбар. */
const LINK_PRIORITY: Record<string, number> = {
  Продукт: 0,
  Demo: 1,
  GitHub: 2,
  Case: 3,
};

const LINK_LABEL: Record<string, string> = {
  Продукт: "Открыть продукт",
  Demo: "Открыть демо",
  GitHub: "Код на GitHub",
  Case: "Смотреть кейс",
};

function linkLabel(link: ProjectLink) {
  return LINK_LABEL[link.label] ?? link.label;
}

/* Дополнительные демо-ссылки для флагманского кейса. */
const EXTRA_LINKS: Record<string, { label: string; href: string }[]> = {
  "svobodno-online": [
    { label: "Демо салона", href: "https://свободно.online/demo-salon" },
    { label: "Демо партнёра", href: "https://свободно.online/partners/demo" },
    { label: "Гид", href: "https://свободно.online/gid" },
  ],
};

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none">
      <path
        d="M3.5 8h9M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = projects.find((p) => p.slug === slug);
  if (!found) notFound();
  const project = found;
  const caseData = cases.find((c) => c.slug === slug);

  const sortedLinks = [...project.links].sort(
    (a, b) => (LINK_PRIORITY[a.label] ?? 9) - (LINK_PRIORITY[b.label] ?? 9)
  );
  const primaryLink = sortedLinks[0];
  const asideLinks = sortedLinks.slice(1);
  const extraLinks = EXTRA_LINKS[project.slug] ?? [];
  const otherCases = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const facts = [
    project.role && { label: "Роль", value: project.role },
    { label: "Год", value: String(project.year) },
    project.kind && { label: "Тип", value: project.kind },
    project.status && { label: "Статус", value: project.status },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="case-page" data-accent={project.accent}>
      <div className="container">
        <Link href="/#projects" className="case-back">
          &larr; Назад к проектам
        </Link>

        {/* ─── Шапка кейса: описание + карточка фактов ─── */}
        <header className="case-hero">
          <div className="case-hero-copy">
            <div className="section-label">
              {project.index} · {project.kind ?? "Кейс"}
            </div>
            <h1 className="case-title">{project.title}</h1>
            <p className="case-summary">{project.summary}</p>

            {caseData && (
              <dl className="case-tldr" aria-label="Коротко о кейсе">
                <div className="case-tldr-row">
                  <dt>Задача</dt>
                  <dd>{caseData.tldr[0]}</dd>
                </div>
                <div className="case-tldr-row">
                  <dt>Решение</dt>
                  <dd>{caseData.tldr[1]}</dd>
                </div>
                <div className="case-tldr-row">
                  <dt>Результат</dt>
                  <dd>{caseData.tldr[2]}</dd>
                </div>
                <div className="case-tldr-row">
                  <dt>Моя роль</dt>
                  <dd>{caseData.myRole}</dd>
                </div>
              </dl>
            )}

            <div className="case-hero-ctas">
              {primaryLink && (
                <a
                  href={primaryLink.href}
                  target={primaryLink.href.startsWith("/") ? undefined : "_blank"}
                  rel={primaryLink.href.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="btn btn-primary"
                >
                  {linkLabel(primaryLink)}
                  <Arrow />
                </a>
              )}
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Обсудить задачу
              </a>
            </div>
          </div>

          <aside className="case-facts" aria-label="Ключевые факты">
            <dl className="case-facts-list">
              {facts.map((f) => (
                <div key={f.label} className="case-fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="case-facts-block">
              <span className="case-facts-label">Стек</span>
              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </header>

        {/* ─── Скриншот в рамке браузера ─── */}
        {project.image && (
          <figure className="case-frame">
            <div className="case-frame-bar" aria-hidden="true">
              <span className="case-frame-dot" />
              <span className="case-frame-dot" />
              <span className="case-frame-dot" />
            </div>
            <div className="case-frame-screen">
              <Image
                src={project.image}
                alt={project.imageAlt ?? project.title}
                width={1600}
                height={1000}
                priority
                sizes="(max-width: 1240px) 100vw, 1200px"
              />
            </div>
          </figure>
        )}

        {/* ─── Тело кейса: контент + липкий сайдбар ─── */}
        {caseData ? (
          <div className="case-grid">
            <div className="case-main">
              <section className="case-section">
                <h2 className="case-heading">Задача</h2>
                <p className="case-text">{caseData.problem}</p>
              </section>

              <section className="case-section">
                <h2 className="case-heading">Решение</h2>
                <p className="case-text">{caseData.solution}</p>
              </section>

              <section className="case-section">
                <h2 className="case-heading">Архитектура</h2>
                <ol className="case-arch">
                  {caseData.architecture.map((item, i) => (
                    <li key={item} className="case-arch-item">
                      <span className="case-arch-num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="case-arch-text">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="case-section">
                <h2 className="case-heading">Результат</h2>
                <ul className="case-results">
                  {caseData.results.map((item) => (
                    <li key={item} className="case-result">
                      <span className="case-result-mark" aria-hidden="true">
                        <Check />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {caseData.highlights.length > 0 && (
                <section className="case-section">
                  <h2 className="case-heading">Ключевые технические решения</h2>
                  <div className="case-highlights">
                    {caseData.highlights.map((item) => (
                      <div key={item} className="case-highlight">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.slug === "svobodno-online" && (
                <section className="case-section">
                  <h2 className="case-heading">Код</h2>
                  <p className="case-text">
                    Исходный код закрыт; архитектуру и код могу показать отдельно.
                  </p>
                </section>
              )}
            </div>

            <aside className="case-aside">
              <div className="case-aside-card">
                <h2 className="case-aside-title">Ссылки</h2>
                <ul className="case-aside-links">
                  {[...asideLinks, ...extraLinks].map((link) => (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("/") ? undefined : "_blank"}
                        rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                        className="case-aside-link"
                      >
                        <span>{link.label}</span>
                        <Arrow />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {caseData.quality && caseData.quality.length > 0 && (
                <div className="case-aside-card">
                  <h2 className="case-aside-title">Проверки качества</h2>
                  <div className="case-aside-tags">
                    {caseData.quality.map((q) => (
                      <span key={q} className="skill-tag">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="case-aside-card case-aside-cta">
                <p className="case-aside-cta-text">
                  Нужен похожий проект или разбор вашей задачи?
                </p>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Написать в Telegram
                  <Arrow />
                </a>
              </div>
            </aside>
          </div>
        ) : (
          <div className="case-placeholder">
            <p>Детальное описание кейса скоро будет доступно.</p>
          </div>
        )}

        {/* ─── Другие кейсы ─── */}
        {otherCases.length > 0 && (
          <section className="case-more">
            <h2 className="case-heading">Другие кейсы</h2>
            <div className="case-more-grid">
              {otherCases.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="case-more-card">
                  <span className="case-more-num">
                    {p.index} · {p.kind ?? "Проект"}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="case-more-arrow">
                    Открыть кейс
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
