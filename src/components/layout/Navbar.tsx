"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type Section = "projects" | "skills" | "process" | "formats" | "about" | "contact";

const navItems: { id: Section; label: string }[] = [
  { id: "projects", label: "Проекты" },
  { id: "skills", label: "Что делаю" },
  { id: "process", label: "Как работаю" },
  { id: "formats", label: "Форматы" },
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
                    style={{ color: activeSection === item.id ? "var(--text-primary)" : undefined }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onClick={closeMenu}
            >
              Передать задачу
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
