"use client";

import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-label">Карьера</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Опыт <span className="gradient-text">работы</span>
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="timeline-item">
                <div className="timeline-date">
                  {exp.period} · {exp.mode}
                </div>
                <h3>{exp.role}</h3>
                <h4>{exp.mode}</h4>
                <p>{exp.description}</p>
                <div className="timeline-tags">
                  {exp.stack.map((tag) => (
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
