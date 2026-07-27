import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { cases } from "@/content/cases";
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
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — кейс · Александр Лазаренко`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
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
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const caseData = cases.find((c) => c.slug === slug);

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
        <div className="section-label">{project.index}</div>
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
            marginBottom: "32px",
          }}
        >
          {project.summary}
        </p>
        <div className="project-tags" style={{ marginBottom: "32px" }}>
          {project.stack.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links" style={{ marginBottom: "48px" }}>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {caseData ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <CaseSection title="Задача">{caseData.problem}</CaseSection>
            <CaseSection title="Решение">{caseData.solution}</CaseSection>
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
            <CaseSection title="Результаты">
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
              <CaseSection title="Ключевые особенности">
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
