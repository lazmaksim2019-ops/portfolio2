"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const onScroll = () => {
      const pastHero = window.scrollY > 420;
      const rect = contact.getBoundingClientRect();
      const contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(pastHero && !contactVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta" role="navigation" aria-label="Быстрые действия">
      <a href="#projects" className="sticky-cta-secondary">
        Проекты
      </a>
      <a
        href={siteConfig.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-primary"
      >
        Обсудить задачу
      </a>
    </div>
  );
}
