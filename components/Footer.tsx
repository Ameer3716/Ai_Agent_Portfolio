"use client";

import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "@/data/projects";

const QUICK_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <a href="/" className="font-mono text-sm font-semibold">
              <span className="gradient-text">{profile.name.toLowerCase()}</span>
            </a>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Full Stack AI Engineer · Agent Systems · RAG · Automation
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {QUICK_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="highlight-line text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <s.icon className="h-[17px] w-[17px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            Built with <span className="text-primary">Next.js</span> +{" "}
            <span className="text-primary">Tailwind</span> +{" "}
            <span className="text-primary">shadcn/ui</span>
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
          >
            <ArrowUp className="h-[15px] w-[15px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
