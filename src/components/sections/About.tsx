import { GraduationCap, MapPin, Target } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/data/dictionaries";
import { site } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export function About({ locale, t }: { locale: Locale; t: Dictionary }) {
  const facts = [
    {
      icon: GraduationCap,
      label: t.about.facts.education,
      value: `${t.about.facts.degree} · ${site.university}`,
      meta: site.studyYears,
    },
    { icon: MapPin, label: t.about.facts.location, value: site.location[locale] },
    { icon: Target, label: t.about.facts.focus, value: t.about.facts.focusValue },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading id="about" label={t.about.label} title={t.about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {t.about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {facts.map(({ icon: Icon, label, value, meta }) => (
              <div key={label} className="flex gap-4 p-5">
                <Icon size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-strong" />
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium">{value}</dd>
                  {meta && <dd className="mt-0.5 font-mono text-xs text-subtle">{meta}</dd>}
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
