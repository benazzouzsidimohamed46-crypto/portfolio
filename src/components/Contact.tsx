import { useState, type FormEvent } from "react";
import { Download, ExternalLink, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal } from "../data/personal";
import { documents } from "../data/documents";
import { resolveDoc } from "../lib/documents";
import DocButton from "./DocButton";
import { GithubIcon, LinkedInIcon } from "./icons";
import Section from "./Section";

const field = "mt-2 w-full rounded-xl border border-white/15 bg-navy-900/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none";

export default function Contact() {
  const cv = resolveDoc(documents.cv);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const rows = [
    { icon: Mail, label: "Email", text: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", text: personal.phone, href: `tel:${personal.phoneHref}` },
    { icon: MapPin, label: "Location", text: personal.location },
    { icon: GithubIcon, label: "GitHub", text: personal.github.replace("https://", ""), href: personal.github, external: true },
    { icon: LinkedInIcon, label: "LinkedIn", text: personal.linkedin.replace("https://", ""), href: personal.linkedin, external: true },
  ];

  return (
    <Section id="contact" title="Let's Connect" intro={personal.contactIntro}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <ul className="glass divide-y divide-white/10">
            {rows.map(({ icon: Icon, label, text, href, external }) => (
              <li key={label} className="flex items-center gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">{label}</p>
                  {href ? (
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-words text-white underline-offset-4 hover:text-cyan-300 hover:underline">
                      {text}
                    </a>
                  ) : (
                    <p className="text-white">{text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="glass p-5">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{documents.cv.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <DocButton doc={cv} mode="view" label="View CV" small variant="primary" icon={<ExternalLink className="h-4 w-4" />} disabledHint="CV not uploaded yet" />
              <DocButton doc={cv} mode="download" fileName={documents.cv.fileName} label="Download CV" small icon={<Download className="h-4 w-4" />} disabledHint="CV not uploaded yet" />
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass p-6 sm:p-7">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <label className="mt-5 block text-sm text-slate-300">
            Your name
            <input required type="text" name="name" autoComplete="name" value={form.name} onChange={set("name")} className={field} placeholder="Your full name" />
          </label>
          <label className="mt-4 block text-sm text-slate-300">
            Your email
            <input required type="email" name="email" autoComplete="email" value={form.email} onChange={set("email")} className={field} placeholder="you@example.com" />
          </label>
          <label className="mt-4 block text-sm text-slate-300">
            Message
            <textarea required name="message" rows={5} value={form.message} onChange={set("message")} className={field} placeholder="How can I help?" />
          </label>
          <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send by email
          </button>
          <p className="mt-3 text-sm text-slate-400">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  );
}
