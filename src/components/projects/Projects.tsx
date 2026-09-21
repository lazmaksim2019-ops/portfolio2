"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTilt } from "@/lib/useTilt";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);

  return (
    <Reveal delay={i * 0.06}>
      <article
        ref={cardRef}
        className={project.featured ? "project-card project-featured" : "project-card"}
        data-accent={project.accent}
      >
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              {project.role && <span>Роль: {project.role}</span>}
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
              Открыть кейс &rarr;
            </a>
          </div>
        </div>
      </article>
    </Reveal>
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
        <div className="projects-bento">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
