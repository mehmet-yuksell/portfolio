"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Tag } from "@/components/ui/Tag";
import type { ProjectLink } from "@/data/projects";
import { externalLinkProps } from "@/lib/utils";

export interface ProjectCardProps {
  index: number;
  title: string;
  category: string;
  description: string;
  highlight: string;
  image: { src: string; alt: string; width: number; height: number };
  tags: string[];
  links: ProjectLink[];
  labels: { live: string; code: string; stack: string; newTab: string };
}

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({
  index,
  title,
  category,
  description,
  highlight,
  image,
  tags,
  links,
  labels,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,box-shadow] duration-300 hover:border-border-strong hover:shadow-[0_20px_60px_-20px_var(--glow)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 540px, (min-width: 640px) 50vw, 100vw"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="glass absolute top-3 left-3 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-fg uppercase">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <span className="font-mono text-xs text-subtle" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <p className="mt-3 flex gap-2 text-sm text-fg/90">
          <span aria-hidden="true" className="font-mono text-accent-strong">
            →
          </span>
          {highlight}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={labels.stack}>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {links.map((link) => {
            const isLive = link.kind === "live";
            const text = isLive ? labels.live : labels.code;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={`${title} — ${text} ${labels.newTab}`}
                className={
                  isLive
                    ? "inline-flex h-9 items-center gap-1.5 rounded-full bg-fg px-4 text-xs font-medium text-bg transition-opacity hover:opacity-85"
                    : "inline-flex h-9 items-center gap-1.5 rounded-full border border-border-strong px-4 text-xs font-medium text-fg transition-colors hover:bg-surface-hover"
                }
                {...externalLinkProps}
              >
                {isLive ? null : <GithubIcon size={14} />}
                {text}
                {isLive ? <ArrowUpRight size={14} aria-hidden="true" /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
