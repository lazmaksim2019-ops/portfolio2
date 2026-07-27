"use client";

import { useEffect, useCallback, type RefObject } from "react";

export function useTilt(ref: RefObject<HTMLElement | null>) {
  const onMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -6;
    const rotateY = (x - centerX) / centerX * 6;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, [ref]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref, onMouseMove, onMouseLeave]);
}
