import { Languages as LanguagesIcon } from "lucide-react";
import { languages } from "../data/skills";
import Section from "./Section";

export default function Languages() {
  return (
    <Section id="languages" title="Languages">
      <ul className="grid gap-6 sm:grid-cols-3">
        {languages.map((l) => (
          <li key={l.name} className="glass p-6">
            <div className="flex items-center gap-3 text-slate-400">
              <LanguagesIcon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              <h3 className="text-base font-medium text-slate-200">{l.name}</h3>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-white">{l.level}</p>
            {l.detail && <p className="mt-1 text-sm text-slate-400">{l.detail}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
