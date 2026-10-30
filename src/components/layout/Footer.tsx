import { ArrowUp } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Dictionary } from "@/data/dictionaries";
import { site, socialLinks } from "@/data/site";
import { externalLinkProps } from "@/lib/utils";

export function Footer({ t }: { t: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="text-sm">
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-subtle">{t.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const isMail = link.icon === "mail";
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={isMail ? link.label : `${link.label} ${t.a11y.opensInNewTab}`}
                    className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-hover hover:text-fg"
                    {...(isMail ? {} : externalLinkProps)}
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#top"
            className="ml-2 grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
            aria-label={t.footer.backToTop}
          >
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
