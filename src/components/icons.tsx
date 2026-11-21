import { Car, Code2, Database, Gamepad2, Lock, Network, Radio, Router, ScanSearch, Wrench, type LucideIcon } from "lucide-react";

/** Icon names usable in the data files (`icon: "network"` etc.). */
export const iconMap: Record<string, LucideIcon> = {
  network: Network,
  radio: Radio,
  router: Router,
  code: Code2,
  database: Database,
  wrench: Wrench,
  scan: ScanSearch,
  car: Car,
  gamepad: Gamepad2,
  lock: Lock,
};

/** GitHub mark (inline SVG: brand icons are not shipped in recent lucide versions). */
export function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center justify-center rounded-sm bg-current text-[.62rem] font-extrabold leading-none text-navy-950 ${className}`}>
      in
    </span>
  );
}
