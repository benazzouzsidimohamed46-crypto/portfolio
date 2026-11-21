import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, personal } from "../data/personal";
import { documents } from "../data/documents";
import { resolveDoc } from "../lib/documents";
import DocButton from "./DocButton";

export default function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cv = resolveDoc(documents.cv);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const cvButton = (
    <DocButton doc={cv} mode="download" fileName={documents.cv.fileName} label="Download CV" variant="primary" small icon={<Download className="h-4 w-4" />} disabledHint="CV not uploaded yet" />
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? "border-white/10 bg-navy-950/85 backdrop-blur-lg" : "border-transparent"}`}>
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight sm:text-2xl" aria-label={`${personal.name}, back to top`}>
          <span className="text-brand-yellow">M</span><span className="text-white">ohamed</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active === l.id ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                {l.label}
                {active === l.id && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-brand-yellow to-brand-cyan" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">{cvButton}</div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? "location" : undefined}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${active === l.id ? "bg-white/5 text-cyan-300" : "text-slate-300"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:hidden">{cvButton}</div>
        </div>
      )}
    </header>
  );
}
