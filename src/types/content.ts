export type ProjectLink = { label: "GitHub" | "Demo" | "Case"; href: string };

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
