import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";
import { Button } from "@/components/ui/button";

const SOCIALS = [
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <RevealOnScroll>
          <div className="card-glass relative overflow-hidden p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
                <span className="available-dot" aria-hidden="true" />
                Currently available for freelance work
              </div>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Got a project in <span className="gradient-text-animate">mind?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
                Open to freelance AI agent work and junior AI engineering roles. I reply within
                24 hours.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
                <Button asChild size="lg" className="group font-mono">
                  <a href="/contact">
                    Send a message
                    <ArrowRight
                      className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </Button>

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
                      <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
