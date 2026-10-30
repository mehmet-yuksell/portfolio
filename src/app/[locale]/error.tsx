"use client";

import { RotateCcw } from "lucide-react";
import { useParams } from "next/navigation";
import { StatusPage } from "@/components/layout/StatusPage";
import { getDictionary } from "@/data/dictionaries";
import { defaultLocale, isLocale } from "@/lib/i18n";

// Error details are intentionally never rendered, so stack traces cannot leak.
export default function ErrorBoundary({ reset }: { error: Error; reset: () => void }) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const t = getDictionary(locale).error;

  return (
    <StatusPage code="500" title={t.title} body={t.body}>
      <button
        type="button"
        onClick={reset}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        <RotateCcw size={16} aria-hidden="true" />
        {t.retry}
      </button>
    </StatusPage>
  );
}
