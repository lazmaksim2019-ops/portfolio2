"use client";

import { useActionState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

type FormState = {
  ok: boolean;
  error: string | null;
} | null;

async function sendContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { ok: false, error: "Заполните все поля" };
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error ?? "Ошибка отправки, попробуйте позже" };
    }
    return { ok: true, error: null };
  } catch {
    return { ok: false, error: "Нет соединения, попробуйте позже" };
  }
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
            Есть задача? <span className="gradient-text">Обсудим</span>
          </h2>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <h3>Быстрый контакт</h3>
              <p>
                Telegram — самый быстрый способ. {siteConfig.responseTime}.
              </p>
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Обсудить задачу в Telegram →
              </a>
              <p className="contact-handle">@{siteConfig.telegramHandle}</p>
              <p className="contact-note">
                Ищете сотрудника или подрядчика? Пришлите вакансию или описание
                блока в Telegram — CV и ссылку на hh вышлю в ответ.
              </p>
              <div className="contact-links">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="contact-link"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="GitHub"
                >
                  GitHub — код и проекты
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form action={action} className="contact-form">
              {pending && (
                <div className="form-progress" aria-live="polite">
                  <div className="form-progress-bar">
                    <div className="form-progress-fill" />
                  </div>
                  <span className="form-progress-text">Отправка...</span>
                </div>
              )}
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
                  placeholder="Что нужно сделать?"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary contact-submit"
                disabled={pending}
              >
                {pending ? "Отправка..." : "Отправить"}
              </button>
              {state?.ok && (
                <p role="status" className="form-status form-status-ok">
                  Спасибо! Свяжусь в ближайшее время.
                </p>
              )}
              {state?.error && (
                <p role="status" className="form-status form-status-error">
                  {state.error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
