"use client";

import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/content/skills";

const skillIcons: Record<string, string> = {
  backend: "\u{1F40D}",
  frontend: "\u269B",
  ai: "\u{1F916}",
  database: "\u{1F5C4}",
  devops: "\u{1F680}",
  telegram: "\u{1F4AC}",
};

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-label">Экспертиза</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Навыки и <span className="gradient-text">технологии</span>
          </h2>
        </Reveal>
        <div className="skills-bento">
          {skills.map((skill, i) => (
            <Reveal key={skill.id} delay={i * 0.06}>
              <div className="skill-card">
                <div>
                  <div className="skill-icon">{skillIcons[skill.icon] ?? "?"}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
