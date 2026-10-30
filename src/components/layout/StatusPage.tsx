import type { ReactNode } from "react";

interface StatusPageProps {
  code: string;
  title: string;
  body: string;
  children: ReactNode;
}

/** Shared layout for the 404 and error pages. */
export function StatusPage({ code, title, body, children }: StatusPageProps) {
  return (
    <section className="relative isolate mx-auto flex min-h-[80svh] max-w-2xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-accent absolute top-1/4 left-1/2 h-96 w-[36rem] -translate-x-1/2 opacity-60" />
      </div>
      <p className="font-mono text-sm tracking-[0.3em] text-accent-strong">{code}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
      <p className="mt-4 text-lg text-muted">{body}</p>
      <div className="mt-10">{children}</div>
    </section>
  );
}
