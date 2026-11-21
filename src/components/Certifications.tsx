import { Award, Download, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";
import { documents } from "../data/documents";
import { resolveDoc } from "../lib/documents";
import DocButton from "./DocButton";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-6 md:grid-cols-3">
        {certifications.map((c) => {
          const entry = documents.certificates[c.id];
          const doc = resolveDoc(entry);
          return (
            <li key={c.id} className="flex">
              <article className="glass lift flex w-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-yellow/25 to-brand-cyan/25 text-cyan-300">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.provider}</p>

                {(c.level || c.score || c.issueDate) && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.level && <li className="chip">Level {c.level}</li>}
                    {c.score && <li className="chip">Score {c.score}</li>}
                    {c.issueDate && <li className="chip">Issued {c.issueDate}</li>}
                  </ul>
                )}

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <DocButton doc={doc} mode="view" label="View Certificate" small variant="primary" icon={<ExternalLink className="h-4 w-4" />} disabledHint="Certificate link not added yet" />
                  {doc && !doc.external && (
                    <DocButton doc={doc} mode="download" fileName={entry?.fileName} label="Download PDF" small icon={<Download className="h-4 w-4" />} />
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
