import type { Localized } from "@/lib/i18n";

export interface Skill {
  name: Localized;
  /** Self-assessed proficiency, 0–100. PLACEHOLDER values — adjust to taste. */
  level: number;
  icon: "code" | "git" | "sheet" | "chart" | "globe" | "brain";
  description: Localized;
}

export const skills: Skill[] = [
  {
    name: { en: "Python", tr: "Python" },
    level: 80,
    icon: "code",
    description: {
      en: "My main language — scripting, data pipelines, Streamlit apps and tests with pytest.",
      tr: "Ana dilim — script, veri hatları, Streamlit uygulamaları ve pytest ile testler.",
    },
  },
  {
    name: { en: "Git & GitHub", tr: "Git & GitHub" },
    level: 75,
    icon: "git",
    description: {
      en: "Branching, pull requests and keeping a clean history across every project.",
      tr: "Her projede branch, pull request ve temiz bir commit geçmişi.",
    },
  },
  {
    name: { en: "Data Analysis", tr: "Veri Analizi" },
    level: 70,
    icon: "chart",
    description: {
      en: "pandas and NumPy for cleaning, exploring and turning data into decisions.",
      tr: "Veriyi temizlemek, keşfetmek ve karara dönüştürmek için pandas ve NumPy.",
    },
  },
  {
    name: { en: "Excel", tr: "Excel" },
    level: 75,
    icon: "sheet",
    description: {
      en: "Formulas, pivot tables and dashboards for quick business analysis.",
      tr: "Hızlı iş analizi için formüller, pivot tablolar ve paneller.",
    },
  },
  {
    name: { en: "Web Development", tr: "Web Geliştirme" },
    level: 70,
    icon: "globe",
    description: {
      en: "Next.js, TypeScript and Tailwind CSS for fast, accessible interfaces.",
      tr: "Hızlı ve erişilebilir arayüzler için Next.js, TypeScript ve Tailwind CSS.",
    },
  },
  {
    name: { en: "AI / ML Basics", tr: "Yapay Zekâ / ML Temelleri" },
    level: 45,
    icon: "brain",
    description: {
      en: "Core machine-learning concepts and model evaluation — my current focus.",
      tr: "Temel makine öğrenmesi kavramları ve model değerlendirme — şu anki odağım.",
    },
  },
];

/** Smaller tools shown as chips under the skill grid. */
export const toolbox: string[] = [
  "pandas",
  "NumPy",
  "Streamlit",
  "pytest",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "NestJS",
  "PostgreSQL",
  "Flutter",
  "Docker",
  "Linux",
];
