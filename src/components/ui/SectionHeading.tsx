import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ id, label, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent-strong uppercase">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {label}
      </p>
      <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
