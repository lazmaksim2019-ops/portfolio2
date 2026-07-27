"use client";

import { useActionState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

type FormState = {
  ok: boolean;
  errors: Record<string, string[]> | null;
} | null;

async function sendContact(
  _prev: FormState,
  _formData: FormData
): Promise<FormState> {
  // Placeholder — implement with Server Action + Resend or formsubmit
  return { ok: true, errors: null };
}

export function Contact() {
  const [state, action, pending] = useActionState(sendContact, null);

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-label">Контакты</div>
        </Reveal>
        <Reveal>
          <h2 className="section-title">
            Давайте <span className="gradient-text">работать вместе</span>
          </h2>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <h3>Есть проект?</h3>
              <p>
                Всегда открыт к обсуждению новых проектов, идей и возможностей.
                Напишите мне — обсудим, как я могу помочь с вашим продуктом или
                автоматизацией.
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20/%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE`}
                className="contact-email"
              >
                {siteConfig.email}
              </a>
              <span className="contact-phone">{siteConfig.phone}</span>
              <div className="contact-links">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form
              action={action}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Расскажите о вашем проекте..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start" }}
                disabled={pending}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {pending ? "Отправка..." : "Отправить"}
              </button>
              {state?.ok && (
                <p role="status" style={{ color: "#22C55E" }}>
                  Спасибо! Свяжусь в ближайшее время.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
