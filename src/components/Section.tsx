import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { id: string; title: string; intro?: string; children: ReactNode };

/** Shared section wrapper: semantic <section>, accessible heading, one gentle reveal of the heading. */
export default function Section({ id, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-brand-yellow to-brand-cyan" aria-hidden="true" />
          {intro && <p className="mt-4 text-slate-400">{intro}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
