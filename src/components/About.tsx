import { GraduationCap, Landmark, Layers } from "lucide-react";
import { personal } from "../data/personal";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { languages } from "../data/skills";
import Section from "./Section";

export default function About() {
  // Numbers are computed from the data files, so they stay correct when you add items.
  const stats = [
    { value: "5th", label: "Year Engineering Student" },
    { value: String(experience.filter((e) => e.kind === "internship").length), label: "Professional Internships" },
    { value: String(projects.length), label: "Academic Projects" },
    { value: String(languages.length), label: "Languages" },
  ];
  const facts = [
    { icon: Landmark, label: "Institution", value: personal.institution },
    { icon: Layers, label: "Specialization", value: personal.specialization },
    { icon: GraduationCap, label: "Expected graduation", value: personal.graduationFull },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          {personal.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="space-y-4">
          <dl className="glass divide-y divide-white/10">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 p-5">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-slate-400">{label}</dt>
                  <dd className="mt-1 text-sm text-white">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass p-5">
            <dd className="order-1 font-display text-4xl font-bold text-white">{s.value}</dd>
            <dt className="mt-1 text-sm text-slate-400">{s.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}
