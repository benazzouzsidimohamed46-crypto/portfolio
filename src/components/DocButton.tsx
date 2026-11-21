import type { ReactNode } from "react";
import type { ResolvedDoc } from "../lib/documents";

type Props = {
  doc: ResolvedDoc | null; // null => rendered disabled (never a broken link)
  mode: "view" | "download";
  label: string;
  icon?: ReactNode;
  fileName?: string;
  variant?: "primary" | "ghost";
  small?: boolean;
  disabledHint?: string;
  className?: string;
};

/** Link-style button for CV / certificate documents. Handles the disabled state. */
export default function DocButton({ doc, mode, label, icon, fileName, variant = "ghost", small, disabledHint, className = "" }: Props) {
  const size = small ? "btn-sm" : "";
  if (!doc) {
    return (
      <button type="button" disabled title={disabledHint ?? "Not available yet"} className={`btn ${size} btn-disabled ${className}`}>
        {icon}
        {label}
      </button>
    );
  }
  // Browsers ignore the `download` attribute for cross-origin links, so external files just open in a new tab.
  const download = mode === "download" && !doc.external;
  return (
    <a
      href={doc.href}
      {...(download ? { download: fileName ?? true } : { target: "_blank", rel: "noopener noreferrer" })}
      className={`btn ${size} ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
    >
      {icon}
      {label}
    </a>
  );
}
