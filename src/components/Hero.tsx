import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Download, FolderGit2, Mail, MapPin } from "lucide-react";
import { personal } from "../data/personal";
import { documents } from "../data/documents";
import { resolveDoc } from "../lib/documents";
import DocButton from "./DocButton";
import { GithubIcon, LinkedInIcon } from "./icons";
import portrait from "../data/Vector.png";

export default function Hero() {
  const cv = resolveDoc(documents.cv);
  const prefersReducedMotion = useReducedMotion();
  const iconLink = "grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:text-white";

  return (
    <section id="home" aria-labelledby="home-title" className="flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3.5 py-1.5 text-sm text-brand-yellow">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" aria-hidden="true" />
            {personal.availability}
          </p>

          <h1 id="home-title" className="mt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="gradient-text mt-4 font-display text-xl font-medium sm:text-2xl">{personal.title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{personal.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 className="h-4 w-4" /> View My Projects
            </a>
            <DocButton doc={cv} mode="download" fileName={documents.cv.fileName} label="Download My CV" icon={<Download className="h-4 w-4" />} disabledHint="CV not uploaded yet" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-slate-400">
            <div className="flex gap-2">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub profile (opens in a new tab)">
                <GithubIcon />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn profile (opens in a new tab)">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${personal.email}`} className={iconLink} aria-label={`Send an email to ${personal.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {personal.location}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-cyan-300" aria-hidden="true" /> Expected graduation: {personal.graduation}
            </span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="glass p-4 sm:p-8">
          <motion.img
            src={portrait}
            alt={`Portrait of ${personal.name}`}
            className="mx-auto h-auto w-full max-w-[460px] object-contain"
            animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 4, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
