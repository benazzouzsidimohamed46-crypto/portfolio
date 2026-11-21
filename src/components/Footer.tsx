import { Mail } from "lucide-react";
import { personal } from "../data/personal";
import { GithubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-white">{personal.name}</p>
          <p className="mt-1 text-sm text-slate-400">{personal.title}</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className="text-slate-300 hover:text-cyan-300">
            <GithubIcon />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className="text-slate-300 hover:text-cyan-300">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Send an email" className="text-slate-300 hover:text-cyan-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-sm text-slate-500 sm:px-8">
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
