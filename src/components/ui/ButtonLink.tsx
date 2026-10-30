import type { ReactNode } from "react";
import { cn, externalLinkProps } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-fg text-bg hover:shadow-[0_0_0_4px_var(--glow),0_10px_40px_-10px_var(--glow)] hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-surface text-fg hover:bg-surface-hover hover:-translate-y-0.5",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-[transform,box-shadow,background-color] duration-200",
        variants[variant],
        className,
      )}
      {...(external ? externalLinkProps : {})}
    >
      {children}
    </a>
  );
}
