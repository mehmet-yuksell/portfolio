import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/data/dictionaries";
import { projects } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

export function Projects({ locale, t }: { locale: Locale; t: Dictionary }) {
  const labels = {
    live: t.projects.live,
    code: t.projects.code,
    stack: t.projects.stack,
    newTab: t.a11y.opensInNewTab,
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        id="projects"
        label={t.projects.label}
        title={t.projects.title}
        intro={t.projects.intro}
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard
              index={index}
              title={project.title[locale]}
              category={project.category[locale]}
              description={project.description[locale]}
              highlight={project.highlight[locale]}
              image={{ ...project.image, alt: project.image.alt[locale] }}
              tags={project.tags}
              links={project.links}
              labels={labels}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
