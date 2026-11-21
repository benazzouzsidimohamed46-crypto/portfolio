import { Briefcase, MapPin, Wrench } from "lucide-react";
import { experience } from "../data/experience";
import Section from "./Section";

export default function Experience() {
  const internships = experience.filter((e) => e.kind === "internship");
  const independent = experience.filter((e) => e.kind === "independent");

  return (
    <Section id="experience" title="Professional Experience">
      <ol className="relative ml-3 space-y-8 border-l border-white/15 pl-8">
        {internships.map((e) => (
          <li key={e.id} className="relative">
            <span className="absolute -left-[41px] top-6 grid h-5 w-5 place-items-center rounded-full border border-cyan-400/60 bg-navy-950" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <article className="glass lift p-6 sm:p-7">
              <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  {e.subtitle && <p className="mt-1 text-cyan-300">{e.subtitle}</p>}
                  {e.position && (
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                      <Briefcase className="h-4 w-4" aria-hidden="true" /> {e.position}
                    </p>
                  )}
                </div>
                <div className="text-sm text-slate-400 sm:text-right">
                  {e.date && <p className="font-medium text-white">{e.date}</p>}
                  {e.location && (
                    <p className="mt-1 flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {e.location}
                    </p>
                  )}
                </div>
              </header>
              <ul className="mt-5 space-y-2 text-slate-300">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      {independent.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-4 text-lg font-semibold text-slate-200">Beyond formal internships</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {independent.map((e) => (
              <article key={e.id} className="rounded-2xl border border-dashed border-cyan-400/30 bg-cyan-400/[0.04] p-6 md:col-span-2">
                <header className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Wrench className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-white">{e.title}</h4>
                    {e.subtitle && <p className="text-cyan-300">{e.subtitle}</p>}
                  </div>
                </header>
                <ul className="mt-5 grid gap-x-8 gap-y-2 text-slate-300 sm:grid-cols-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
