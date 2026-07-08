import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { profile } from "@/data/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact - ${profile.name}`,
  description: `Get in touch with ${profile.name} about onsite, remote, or freelance AI and engineering roles.`,
};

const SOCIALS = [
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email", value: profile.email },
  { href: `tel:${profile.phone}`, icon: Phone, label: "Phone", value: profile.phone },
  { href: profile.github, icon: Github, label: "GitHub", value: "github.com/Ameer3716" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn", value: "LinkedIn" },
];

const EXPECTATIONS = [
  "Response within 24 hours",
  "Open to async communication",
  "Can start immediately",
  "Open to onsite, remote, and freelance roles",
];

export default function ContactPage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-32 sm:px-10">
      <RevealOnScroll>
        <p className="section-label">Let&apos;s connect</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Get In <span className="gradient-text-animate">Touch</span>
        </h1>
        <div className="section-divider" />
        <p className="mt-2 max-w-lg text-muted-foreground">
          Open to onsite, remote, and freelance AI agent or engineering roles. I reply within 24 hours.
        </p>
      </RevealOnScroll>

      <div className="mt-14 grid gap-8 md:grid-cols-5">
        <RevealOnScroll delayMs={60} className="md:col-span-3">
          <ContactForm />
        </RevealOnScroll>

        <div className="space-y-5 md:col-span-2">
          <RevealOnScroll delayMs={100}>
            <div className="card-glass p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="available-dot" />
                <span className="text-sm font-semibold text-foreground">Currently Available</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open to onsite, remote, and freelance AI agent projects and junior AI / Full Stack AI Engineer roles.
                Flexible across location and engagement type, and can start right away.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={140}>
            <div className="card-glass p-6">
              <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Links</h3>
              <div className="space-y-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3.5 py-2.5 text-foreground transition-all duration-200 hover:border-primary/30"
                  >
                    <s.icon className="h-4 w-4 shrink-0 text-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] text-primary">{s.label}</p>
                      <p className="truncate text-xs">{s.value}</p>
                    </div>
                    <ArrowRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={180}>
            <div className="card-glass p-6">
              <h3 className="mb-3 text-sm font-semibold text-foreground">What to expect</h3>
              <ul className="space-y-2.5">
                {EXPECTATIONS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xs text-primary">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
