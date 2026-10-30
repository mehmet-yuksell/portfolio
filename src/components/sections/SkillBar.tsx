"use client";

import { motion } from "motion/react";

export function SkillBar({ level, label }: { level: number; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 overflow-hidden rounded-full bg-surface-hover"
    >
      <motion.div
        className="h-full origin-left rounded-full bg-gradient-to-r from-accent-2 to-accent-strong"
        style={{ width: `${level}%` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
