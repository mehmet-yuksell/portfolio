"use client";

import { House } from "lucide-react";
import { useParams } from "next/navigation";
import { StatusPage } from "@/components/layout/StatusPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getDictionary } from "@/data/dictionaries";
import { defaultLocale, isLocale } from "@/lib/i18n";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const t = getDictionary(locale).notFound;

  return (
    <StatusPage code="404" title={t.title} body={t.body}>
      <ButtonLink href={`/${locale}`}>
        <House size={16} aria-hidden="true" />
        {t.home}
      </ButtonLink>
    </StatusPage>
  );
}
