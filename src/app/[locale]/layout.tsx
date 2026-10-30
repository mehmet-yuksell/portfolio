import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Navbar } from "@/components/layout/Navbar";
import { getDictionary } from "@/data/dictionaries";
import { site } from "@/data/site";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { isLocale, locales } from "@/lib/i18n";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0c16" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7fb" },
  ],
  colorScheme: "dark light",
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: `%s — ${site.name}` },
    description: t.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    keywords: [
      "Mehmet Yüksel",
      "Python developer",
      "Management Information Systems",
      "Kafkas University",
      "data engineering",
      "portfolio",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", tr: "/tr", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Blocking on purpose: a tiny same-origin script that sets the theme before first paint. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/theme-init.js" nonce={nonce} suppressHydrationWarning />
      </head>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-transform focus:translate-y-0"
        >
          {t.a11y.skipToContent}
        </a>
        <MotionProvider>
          <Navbar locale={locale} t={{ nav: t.nav, a11y: t.a11y }} />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer t={t} />
        </MotionProvider>
      </body>
    </html>
  );
}
