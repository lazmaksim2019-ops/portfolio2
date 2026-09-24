"use client";

import { Reveal } from "@/components/ui/Reveal";
import { githubMore } from "@/content/github";
import { siteConfig } from "@/content/site";
import { GitHubIcon } from "@/components/ui/Icons";

export function GithubMore() {
  return (
    <section id="code">
      <div className="container">
        <Reveal>
          <div className="section-label">Код для найма и субподряда</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Сильный код, <span className="gradient-text">который не влез в кейсы</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lead">
            Отобрал только репозитории с тестами, CI и Docker — то, что смотрят
            техлиды и агентства. Остальные 20+ —{" "}
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
              на GitHub
            </a>
            .
          </p>
        </Reveal>
        <div className="github-grid">
          {githubMore.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.06}>
              <article className="github-card">
                <div className="github-card-head">
                  <GitHubIcon />
                  <h3>{repo.name}</h3>
                </div>
                <p>{repo.summary}</p>
                <div className="github-facts">
                  {repo.facts.map((fact) => (
                    <span key={fact} className="github-fact">
                      {fact}
                    </span>
                  ))}
                </div>
                <div className="project-tags">
                  {repo.stack.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                >
                  Смотреть код →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
