import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { isConfigured } from "../lib/documents";
import { GithubIcon, iconMap } from "./icons";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Academic Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const Icon = iconMap[p.icon] ?? iconMap.code;
          const hasRepo = isConfigured(p.repoUrl);
          return (
            <li key={p.id} className="flex">
              <article className="glass lift flex w-full flex-col p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-yellow/25 to-brand-cyan/25 text-cyan-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug">{p.name}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{p.category}</p>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-slate-300">{p.description}</p>

                {p.features && (
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {p.technologies.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  {hasRepo ? (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                      <GithubIcon className="h-4 w-4" /> View <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <button type="button" disabled title="Add the repository URL in src/data/projects.ts" className="btn btn-sm btn-disabled">
                      <GithubIcon className="h-4 w-4" /> Repository link soon
                    </button>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
