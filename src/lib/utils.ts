/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Props every external link must carry. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
