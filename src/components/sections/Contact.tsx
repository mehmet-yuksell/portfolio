import { ArrowUpRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Dictionary } from "@/data/dictionaries";
import { site, socialLinks } from "@/data/site";
import { externalLinkProps } from "@/lib/utils";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact({ t }: { t: Dictionary }) {
  const profiles = socialLinks.filter((link) => link.icon !== "mail");

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid absolute inset-0" />
            <div className="glow-accent absolute -bottom-40 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 opacity-70" />
          </div>

          <p className="font-mono text-xs tracking-[0.2em] text-accent-strong uppercase">
            {t.contact.label}
          </p>
          <h2
            id="contact-title"
            className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-5xl"
          >
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-pretty text-muted sm:text-lg">
            {t.contact.intro}
          </p>

          <p className="mt-8 font-mono text-sm break-all sm:text-base">
            <a
              href={`mailto:${site.email}`}
              className="text-fg decoration-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" />
              {t.contact.email}
            </ButtonLink>
            <CopyEmailButton
              email={site.email}
              labels={{
                copy: t.contact.copy,
                copied: t.contact.copied,
                failed: t.contact.copyFailed,
              }}
            />
          </div>

          <div className="mt-12">
            <h3 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
              {t.contact.elsewhere}
            </h3>
            <ul className="mt-4 flex justify-center gap-3">
              {profiles.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={`${link.label} ${t.a11y.opensInNewTab}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-muted transition-colors hover:border-border-strong hover:text-fg"
                    {...externalLinkProps}
                  >
                    <SocialIcon icon={link.icon} size={16} />
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
