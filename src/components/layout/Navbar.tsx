"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { Section } from "@/lib/useScrollSpy";
import { siteConfig } from "@/content/site";

const navItems: { id: Section; label: string }[] = [
  { id: "projects", label: "Проекты" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Как работаю" },
  { id: "about", label: "Обо мне" },
  { id: "contact", label: "Контакты" },
];

export function Navbar({ activeSection }: { activeSection: Section }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav className={cn("nav", scrolled && "scrolled")}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            Александр Лазаренко
          </a>
          <div className="nav-right">
            <ul className={cn("nav-links", menuOpen && "open")}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? "is-active" : undefined}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-mobile-only">
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-cta nav-cta-drawer"
                  onClick={closeMenu}
                >
                  Обсудить задачу
                </a>
              </li>
            </ul>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta nav-cta-desktop"
              onClick={closeMenu}
            >
              Обсудить задачу
            </a>
          </div>
          <button
            className={cn("hamburger", menuOpen && "active")}
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div
        className={cn("nav-overlay", menuOpen && "active")}
        onClick={closeMenu}
      />
    </>
  );
}
