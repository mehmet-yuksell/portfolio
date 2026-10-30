import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { getDictionary } from "@/data/dictionaries";
import { site } from "@/data/site";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}/${locale}`,
    email: `mailto:${site.email}`,
    jobTitle: "Python Developer",
    description: t.meta.description,
    address: { "@type": "PostalAddress", addressLocality: "Adana", addressCountry: "TR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: site.university },
    knowsAbout: ["Python", "Data Analysis", "Web Development", "Machine Learning", "Git"],
    sameAs: [site.github, site.linkedin],
  };

  return (
    <>
      {/* JSON-LD is a data block (never executed); "<" is escaped so it cannot close the tag. */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema).replace(/</g, "\\u003c")}
      </script>
      <Hero locale={locale} t={t} />
      <Projects locale={locale} t={t} />
      <Skills locale={locale} t={t} />
      <About locale={locale} t={t} />
      <Contact t={t} />
    </>
  );
}
