"use client";

import { useRef } from "react";
import { useTilt } from "@/lib/useTilt";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

function ProjectCard({ project, i }: { project: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);

  return (
    <Reveal delay={i * 0.08}>
      <article ref={cardRef} className="project-card" data-accent={project.accent}>
        <div className="project-bg" />
        <div className="project-content">
          <div className="project-number">{project.index}</div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
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
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`/projects/${project.slug}`}
              className="project-link"
            >
              Кейс &rarr;
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
          <div className="section-label">Портфолио</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Избранные <span className="gradient-text">проекты</span>
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
