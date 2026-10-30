import {
  Brain,
  ChartNoAxesCombined,
  CodeXml,
  GitBranch,
  Globe,
  Sheet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import type { Dictionary } from "@/data/dictionaries";
import { skills, toolbox, type Skill } from "@/data/skills";
import type { Locale } from "@/lib/i18n";
import { SkillBar } from "./SkillBar";

const icons: Record<Skill["icon"], LucideIcon> = {
  code: CodeXml,
  git: GitBranch,
  sheet: Sheet,
  chart: ChartNoAxesCombined,
  globe: Globe,
  brain: Brain,
};

export function Skills({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        id="skills"
        label={t.skills.label}
        title={t.skills.title}
        intro={t.skills.intro}
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon];
          const name = skill.name[locale];
          return (
            <Reveal
              as="li"
              key={skill.name.en}
              delay={(i % 3) * 0.08}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-bg-elevated text-accent-strong">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-subtle">{skill.level}%</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{name}</h3>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-muted">
                {skill.description[locale]}
              </p>
              <SkillBar level={skill.level} label={`${name} — ${t.skills.proficiency}`} />
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-10">
        <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">
          {t.skills.toolbox}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {toolbox.map((tool) => (
            <li key={tool}>
              <Tag>{tool}</Tag>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
