"use client";

import { useEffect, useState } from "react";

type Section = "projects" | "skills" | "process" | "formats" | "about" | "contact";

export function useScrollSpy(ids: readonly Section[]): Section {
  const [active, setActive] = useState<Section>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as Section);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
