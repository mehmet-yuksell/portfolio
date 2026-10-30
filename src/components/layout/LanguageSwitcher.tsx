import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-border p-0.5">
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            aria-current={active ? "page" : undefined}
            title={localeNames[code]}
            className={cn(
              "rounded-full px-2.5 py-1 font-mono text-xs tracking-wider uppercase transition-colors",
              active ? "bg-surface-hover text-fg" : "text-subtle hover:text-fg",
            )}
          >
            {code}
          </Link>
        );
      })}
    </nav>
  );
}
