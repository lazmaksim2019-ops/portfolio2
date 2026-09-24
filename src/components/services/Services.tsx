"use client";

import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal>
          <div className="section-label">Услуги</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Чем могу быть <span className="gradient-text">полезен</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="section-lead">
            Пять понятных пакетов. У каждого — что входит, живой пример и честный
            ориентир по срокам. Цену называю после 10-минутного разбора задачи —{" "}
            <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
              напишите в Telegram
            </a>
            .
          </p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.06}>
              <article className="service-card">
                <div className="service-top">
                  <h3>{service.title}</h3>
                  <p className="service-for">{service.forWhom}</p>
                </div>
                <ul className="service-list">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="service-foot">
                  <span className="service-timeline">{service.timeline}</span>
                  <a
                    href={service.proof.href}
                    target={service.proof.href.startsWith("/") ? undefined : "_blank"}
                    rel={service.proof.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="service-proof"
                  >
                    {service.proof.label} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
