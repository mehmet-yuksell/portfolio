"use client";

import { motion } from "motion/react";

interface TerminalCardProps {
  title: string;
  label: string;
  skills: { name: string; level: number }[];
}

const ease = [0.22, 1, 0.36, 1] as const;

export function TerminalCard({ title, label, skills }: TerminalCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease }}
      className="relative"
      aria-label={label}
    >
      <div
        aria-hidden="true"
        className="glow-accent absolute -inset-10 -z-10 opacity-70 blur-2xl"
      />
      <div className="overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated/80 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <figcaption className="ml-3 truncate font-mono text-xs text-subtle">{title}</figcaption>
        </div>

        <div className="space-y-5 p-5 font-mono text-[13px] sm:p-6">
          <p>
            <span className="text-accent-strong">$</span> python skills.py --profile
          </p>
          <p className="text-subtle">
            <span className="text-success">✓</span> loaded {skills.length} modules
          </p>

          <ul className="space-y-4">
            {skills.map((skill, i) => (
              <li key={skill.name}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-fg">{skill.name}</span>
                  <span className="text-subtle">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-hover">
                  <motion.div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-accent-2 to-accent-strong"
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.1, delay: 0.7 + i * 0.12, ease }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <p>
            <span className="text-accent-strong">$</span>{" "}
            <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-accent-strong" />
          </p>
        </div>
      </div>
    </motion.figure>
  );
}
