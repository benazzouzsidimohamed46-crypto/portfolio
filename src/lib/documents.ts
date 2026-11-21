import type { DocEntry } from "../data/documents";

export type ResolvedDoc = { href: string; external: boolean };

/** A value is "not configured" when empty or still a "[PLACEHOLDER]". */
export const isConfigured = (value?: string) => !!value && value.trim() !== "" && !value.trim().startsWith("[");

/**
 * Turns a documents.ts entry into a safe link, or null when it must not be shown
 * as a link (disabled / placeholder / empty). Local files are resolved against
 * Vite's BASE_URL so they work on GitHub Pages project sites.
 */
export function resolveDoc(entry?: Pick<DocEntry, "url" | "enabled">): ResolvedDoc | null {
  if (!entry || !entry.enabled || !isConfigured(entry.url)) return null;
  const url = entry.url.trim();
  if (/^https?:\/\//i.test(url)) return { href: url, external: true };
  return { href: import.meta.env.BASE_URL + url.replace(/^\/+/, ""), external: false };
}
