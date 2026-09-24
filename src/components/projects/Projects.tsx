"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

const featured = projects.find((p) => p.featured) ?? projects[0];
const rest = projects.filter((p) => p.slug !== featured.slug);

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-accent={project.accent}>
      <div className="project-bg" />
      {project.image && (
        <a
          href={`/projects/${project.slug}`}
          className="project-shot"
          aria-label={`${project.title} — открыть кейс`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            width={1600}
            height={1000}
            loading="lazy"
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 46vw, 30vw"
          />
        </a>
      )}
      <div className="project-content">
        <div className="project-number">
          {project.index} · {project.kind ?? "Проект"}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {(project.role || project.status) && (
          <p className="project-meta">
            {project.role && <span>{project.role}</span>}
            {project.role && project.status && <span> · </span>}
            {project.status && <span>{project.status}</span>}
          </p>
        )}
        <div className="project-tags">
          {project.stack.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target={link.href.startsWith("/") ? undefined : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
              className="project-link primary"
            >
              {link.label}
            </a>
          ))}
          <a href={`/projects/${project.slug}`} className="project-link">
            Кейс &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-label">Доказательства</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Проекты, которые <span className="gradient-text">можно проверить</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lead">
            Каждый проект — живое демо или код, плюс разбор «задача → решение →
            результат» внутри кейса. Начните с флагмана.
          </p>
        </Reveal>

        <Reveal>
          <article className="project-card project-featured" data-accent={featured.accent}>
            <div className="project-bg" />
            <div className="project-featured-grid">
              {featured.image && (
                <a
                  href={`/projects/${featured.slug}`}
                  className="project-shot"
                  aria-label={`${featured.title} — открыть кейс`}
                >
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? featured.title}
                    width={1600}
                    height={1000}
                    priority
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                </a>
              )}
              <div className="project-content">
                <div className="project-number">
                  {featured.index} · {featured.kind ?? "Флагман"} · в проде
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.summary}</p>
                {(featured.role || featured.status) && (
                  <p className="project-meta">
                    {featured.role && <span>{featured.role}</span>}
                    {featured.role && featured.status && <span> · </span>}
                    {featured.status && <span>{featured.status}</span>}
                  </p>
                )}
                <div className="project-tags">
                  {featured.stack.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {featured.links.map((link, i) => (
                    <a
                      key={link.href + link.label}
                      href={link.href}
                      target={link.href.startsWith("/") ? undefined : "_blank"}
                      rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
                      className={i === 0 ? "project-link primary" : "project-link"}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a href={`/projects/${featured.slug}`} className="project-link">
                    Открыть кейс &rarr;
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="projects-grid">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
