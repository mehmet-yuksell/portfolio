import type { Localized } from "@/lib/i18n";

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Stat {
  value: string | Localized;
  label: Localized;
}

export const site = {
  name: "Mehmet Yüksel",
  shortName: "MY",
  url: "https://mehmetyuksel.online",
  email: "mehmetyuksell475@gmail.com",
  location: { en: "Adana, Turkey", tr: "Adana, Türkiye" } satisfies Localized,
  university: "Kafkas University",
  studyYears: "2024–2028",
  // Set to false to hide the "available for work" badge.
  availableForWork: true,
  github: "https://github.com/mehmet-yuksell",
  linkedin: "https://www.linkedin.com/in/mehmet-y%C3%BCksel-32831834a",
} as const;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const stats: Stat[] = [
  { value: "4", label: { en: "Shipped projects", tr: "Yayınlanmış proje" } },
  { value: { en: "3rd", tr: "3." }, label: { en: "Year in MIS", tr: "YBS sınıfı" } },
  { value: "15+", label: { en: "Tools & technologies", tr: "Araç ve teknoloji" } },
];
