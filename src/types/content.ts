export type ProjectLink = { label: "GitHub" | "Demo" | "Case" | "Продукт"; href: string };

export type AccentColor = "teal" | "amber" | "violet" | "green" | "pink" | "blue";

export interface Project {
  slug: string;
  index: string;
  title: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  accent: AccentColor;
  year: number;
  kind?: string;
  role?: string;
  status?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface Experience {
  period: string;
  role: string;
  mode: string;
  description: string;
  stack: string[];
  current?: boolean;
}
