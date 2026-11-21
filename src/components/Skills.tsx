import { skillCategories } from "../data/skills";
import { iconMap } from "./icons";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((c) => {
          const Icon = iconMap[c.icon] ?? iconMap.code;
          return (
            <li key={c.id} className="flex">
              <article className="glass lift w-full p-6">
                <header className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </header>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.items.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
