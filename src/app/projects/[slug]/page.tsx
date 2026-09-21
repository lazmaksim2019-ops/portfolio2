import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import { cases } from "@/content/cases";
import { siteConfig } from "@/content/site";
import type { Metadata } from "next";

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 600,
          marginBottom: "16px",
          color: "var(--cyan)",
        }}
      >
        {title}
      </h2>
      {typeof children === "string" ? (
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "72ch",
          }}
        >
          {children}
        </p>
      ) : (
        children
      )}
    </section>
  );
}

export function generateStaticParams() {
  const slugs = new Set([
    ...projects.map((p) => p.slug),
    ...cases.map((c) => c.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
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

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = projects.find((p) => p.slug === slug);
  const caseData = cases.find((c) => c.slug === slug);
  if (!found && !caseData) notFound();
  const project = found ?? {
    slug,
    index: "—",
    title: caseData?.slug ?? slug,
    summary: caseData?.problem ?? "",
    stack: [],
    links: [],
    accent: "violet" as const,
    year: 2025,
    kind: "Архивный кейс",
    role: "Frontend Developer",
    status: "Входит в B2B web-product concept",
  };

  return (
    <article style={{ padding: "var(--section-pad) 0" }}>
      <div className="container">
        <Link
          href="/#projects"
          style={{
            color: "var(--cyan)",
            fontSize: "0.85rem",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "32px",
          }}
        >
          &larr; Назад к проектам
        </Link>
        <div className="section-label">
          {project.kind ?? project.index} · {project.year}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            marginBottom: "16px",
            maxWidth: "72ch",
          }}
        >
          {project.summary}
        </p>
        {(project.role || project.status) && (
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
            {project.role && <span>Роль: {project.role}</span>}
            {project.role && project.status && <span> · </span>}
            {project.status && <span>{project.status}</span>}
          </p>
        )}
        <div className="project-tags" style={{ marginBottom: "16px" }}>
          {project.stack.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        {caseData?.quality && caseData.quality.length > 0 && (
          <div className="project-tags" style={{ marginBottom: "32px" }}>
            {caseData.quality.map((q) => (
              <span key={q} className="skill-tag">
                ✓ {q}
              </span>
            ))}
          </div>
        )}
        <div className="project-links" style={{ marginBottom: "48px" }}>
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target={link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="project-link primary"
            >
              {link.label === "Продукт" ? "Открыть продукт" : link.label}
            </a>
          ))}
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Передать задачу
          </a>
        </div>

        {project.slug === "svobodno-online" && (
          <div className="project-links" style={{ marginBottom: "48px" }}>
            <a
              href="https://свободно.online/demo-salon"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Демо салона
            </a>
            <a
              href="https://свободно.online/partners/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Демо партнёра
            </a>
            <a
              href="https://свободно.online/gid"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Гид
            </a>
          </div>
        )}

        {caseData ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <CaseSection title="Задача">{caseData.problem}</CaseSection>
            <CaseSection title="Моя работа / Решение">{caseData.solution}</CaseSection>
            <CaseSection title="Архитектура">
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {caseData.architecture.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--cyan)",
                        fontWeight: 600,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      &rsaquo;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
            <CaseSection title="Результат">
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {caseData.results.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--green)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>
            {caseData.highlights.length > 0 && (
              <CaseSection title="Ключевые технические решения">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                  {caseData.highlights.map((item) => (
                    <div
                      key={item}
                      style={{
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        borderRadius: "var(--radius)",
                        padding: "20px",
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CaseSection>
            )}
        {project.image && (
          <div className="case-shot">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {project.slug === "svobodno-online" && (
              <CaseSection title="Код">
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Исходный код закрыт; архитектуру и код могу показать отдельно.
                </p>
              </CaseSection>
            )}
          </div>
        ) : (
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              borderRadius: "var(--radius)",
              padding: "48px",
              textAlign: "center",
              color: "var(--text-secondary)",
            }}
          >
            <p>Детальное описание кейса скоро будет доступно.</p>
          </div>
        )}
      </div>
    </article>
  );
}
