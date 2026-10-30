import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Dictionary } from "@/data/dictionaries";
import { site, stats } from "@/data/site";
import { skills } from "@/data/skills";
import type { Locale } from "@/lib/i18n";
import { HeroIntro } from "./HeroIntro";
import { TerminalCard } from "./TerminalCard";

export function Hero({ locale, t }: { locale: Locale; t: Dictionary }) {
  const terminalSkills = skills.slice(0, 4).map((s) => ({ name: s.name[locale], level: s.level }));

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-accent absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 opacity-60" />
        <div className="glow-accent absolute top-1/3 -right-40 h-[28rem] w-[28rem] opacity-40" />
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-4 pt-28 pb-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <HeroIntro className="flex flex-col items-start">
          {site.availableForWork ? (
            <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              {t.hero.status}
            </p>
          ) : (
            <span />
          )}

          <h1
            id="hero-title"
            className="mt-7 text-5xl leading-[0.95] font-bold tracking-tight sm:text-7xl lg:text-[5.5rem]"
          >
            <span className="mb-3 block font-mono text-base font-normal tracking-normal text-muted sm:text-lg">
              {t.hero.greeting}
            </span>
            <span className="text-gradient">{site.name}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-pretty text-muted sm:text-xl">{t.hero.role}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              {t.hero.primaryCta}
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              <Mail size={16} aria-hidden="true" />
              {t.hero.secondaryCta}
            </ButtonLink>
          </div>

          <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label.en} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-subtle sm:text-sm">{stat.label[locale]}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {typeof stat.value === "string" ? stat.value : stat.value[locale]}
                </dd>
              </div>
            ))}
          </dl>
        </HeroIntro>

        <div className="w-full max-w-md justify-self-center lg:max-w-none">
          <TerminalCard
            title={t.hero.terminalTitle}
            label={t.skills.title}
            skills={terminalSkills}
          />
        </div>
      </div>

      <a
        href="#projects"
        aria-label={t.a11y.scrollDown}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-subtle uppercase transition-colors hover:text-fg sm:flex"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-border-strong pt-1.5">
          <span className="animate-scroll-dot size-1 rounded-full bg-accent-strong" />
        </span>
        {t.hero.scroll}
      </a>
    </section>
  );
}
