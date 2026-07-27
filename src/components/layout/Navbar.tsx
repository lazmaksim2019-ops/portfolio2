"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type Section = "about" | "skills" | "projects" | "experience" | "contact";

const navItems: { id: Section; label: string }[] = [
  { id: "about", label: "Обо мне" },
  { id: "skills", label: "Навыки" },
  { id: "projects", label: "Проекты" },
  { id: "experience", label: "Опыт" },
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
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{ color: activeSection === item.id ? "var(--text-primary)" : undefined }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="nav-cta">
              Написать
            </a>
          </div>
          <button
            className={cn("hamburger", menuOpen && "active")}
            aria-label="Меню"
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
