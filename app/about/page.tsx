import type { Metadata } from "next";
import { Download, Github, Mail } from "lucide-react";
import { profile } from "@/data/projects";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: `About - ${profile.name}`,
  description: profile.bio,
};

const TIMELINE = [
  {
    year: "2026",
    title: "Artificial Intelligence Intern",
    subtitle: "Decodelabs · Internship",
    desc: "Jun 2026 - Present · 2 mos · Pune District, Maharashtra, India · Remote",
  },
  {
    year: "2026",
    title: "Graduated - BS Software Engineering",
    subtitle: "FAST-NUCES",
    desc: "Capped off the degree while already shipping freelance AI products on the side.",
  },
  {
    year: "2026",
    title: "Machine Learning Internship",
    subtitle: "FlyRank AI",
    desc: "Jun 2026 - Jul 2026 · 2 mos · Australia · Remote · Currently interning at FlyRank AI as an AI intern, focusing on Machine Learning.",
  },
  {
    year: "2025",
    title: "Full Stack Web Developer",
    subtitle: "Vexed Solutions · Internship",
    desc: "Jun 2025 - Aug 2025 · 3 mos · Multan District, Punjab, Pakistan · On-site",
  },
];

const LOOKING_FOR = [
  "Onsite, remote, or freelance AI agent & automation work",
  "Junior AI / Full Stack AI Engineer roles",
  "Teams open to flexible engagement styles",
  "Problems worth building a real pipeline for",
];

export default function AboutPage() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-32 sm:px-10">
      <RevealOnScroll>
        <p className="section-label">Who I am</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name} <span className="gradient-text-animate">Sultan</span>
        </h1>
        <div className="section-divider" />
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.role} who ships real agent systems, not demos - RAG pipelines, multi-tenant SaaS,
          and multi-stage automation that runs in production.
        </p>
      </RevealOnScroll>

      <div className="mt-14 grid gap-8 md:grid-cols-5">
        {/* Left column */}
        <div className="space-y-6 md:col-span-3">
          <RevealOnScroll>
            <div className="card-glass p-7">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <span className="text-primary">//</span> About Me
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                I&apos;m a Software Engineering graduate from{" "}
                <span className="font-medium text-foreground">FAST-NUCES</span>, building AI systems that go beyond a single LLM call.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                My focus is on{" "}
                <span className="font-medium text-primary">multi-agent pipelines</span>,{" "}
                <span className="font-medium text-primary">retrieval-augmented generation (RAG)</span>, and{" "}
                <span className="font-medium text-primary">multi-tenant AI SaaS</span>-systems with a
                real research → draft → review → send lifecycle, not just a single prompt wrapper.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                I have hands-on experience building production AI systems, with a strong interest in designing scalable AI agents and intelligent automation for real-world business workflows.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <div className="card-glass p-7">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <span className="text-primary">//</span> Find Me
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                >
                  <Github className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-sm">github.com/Ameer3716</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground transition-all duration-200 hover:border-primary/30 hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-sm">{profile.email}</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {profile.resumeUrl && (
            <RevealOnScroll delayMs={120}>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.6)]"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </RevealOnScroll>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-5 md:col-span-2">
          <RevealOnScroll delayMs={60}>
            <div className="card-glass p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <span className="text-primary">//</span> Currently
              </h3>
              <div className="relative border-l border-primary/30 pl-4">
                <p className="text-sm font-semibold text-foreground">AI Intern</p>
                <p className="text-sm text-primary">DecodeLabs · Remote</p>
                <p className="mt-1 text-xs text-muted-foreground">Jun 2026 - Present</p>
                <p className="text-xs text-muted-foreground">Focus: production AI agent systems</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={100}>
            <div className="card-glass p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
                <span className="text-primary">//</span> I&apos;m Looking For
              </h3>
              <ul className="space-y-2.5">
                {LOOKING_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 shrink-0 text-primary">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={140}>
            <div className="card-glass p-6">
              <h3 className="mb-5 flex items-center gap-2 font-semibold text-foreground">
                <span className="text-primary">//</span> Timeline
              </h3>
              <div className="space-y-5">
                {TIMELINE.map((item, i) => (
                  <div key={`${item.year}-${item.title}`} className="relative pl-5">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
                    {i < TIMELINE.length - 1 && (
                      <div className="absolute left-[3.5px] top-4 h-full w-0.5 bg-primary/20" />
                    )}
                    <span className="font-mono text-[10px] tracking-wider text-primary">
                      {item.year}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-[11px] text-primary/80">{item.subtitle}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
