"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

interface CopyEmailButtonProps {
  email: string;
  labels: { copy: string; copied: string; failed: string };
}

export function CopyEmailButton({ email, labels }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const text =
    status === "copied" ? labels.copied : status === "failed" ? labels.failed : labels.copy;

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2"
        >
          {status === "copied" ? (
            <Check size={16} aria-hidden="true" className="text-success" />
          ) : (
            <Copy size={16} aria-hidden="true" />
          )}
          {text}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only" role="status" aria-live="polite">
        {status === "idle" ? "" : text}
      </span>
    </button>
  );
}
