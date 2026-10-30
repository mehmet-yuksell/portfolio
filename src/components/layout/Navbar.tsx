"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = ["projects", "skills", "about", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

interface NavbarProps {
  locale: Locale;
  t: Pick<Dictionary, "nav" | "a11y">;
}

export function Navbar({ locale, t }: NavbarProps) {
  const [active, setActive] = useState<SectionId | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          // The hero ("top") has no nav item, so nothing is highlighted there.
          setActive(id === "top" ? null : (id as SectionId));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...sectionIds]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        open ? "border-border bg-bg" : scrolled ? "glass border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-2.5 font-mono text-sm font-medium"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-xs font-semibold text-accent-fg transition-transform group-hover:-rotate-6">
            MY
          </span>
          <span className="hidden sm:inline">mehmet.yuksel</span>
        </Link>

        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    active === id ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-border bg-surface-hover"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitcher locale={locale} label={t.a11y.switchLanguage} />
          <ThemeToggle label={t.a11y.toggleTheme} />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-muted hover:bg-surface-hover hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t.a11y.mainNav}
            className="md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pt-2 pb-5">
              {sectionIds.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.2 }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base",
                      active === id ? "bg-surface-hover text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {t.nav[id]}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
