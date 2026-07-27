import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

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
      </div>
    </article>
  );
}
