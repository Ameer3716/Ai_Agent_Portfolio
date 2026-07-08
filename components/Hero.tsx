import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile, projects } from "@/data/projects";
import Typewriter from "./Typewriter";
import PipelineStrip from "./PipelineStrip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const shipped = projects.filter((p) => p.status === "live").length;
  const building = projects.filter((p) => p.status === "in-progress").length;
  const flagship = projects.find((p) => p.id === "b2b-research-outreach-agent") ?? projects[0];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:pt-44">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/3 animate-glow-pulse rounded-full bg-primary/20 blur-[120px] sm:h-[38rem] sm:w-[38rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left column - copy */}
        <div>
          <div
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="available-dot" aria-hidden="true" />
            Available for freelance work
          </div>

          <h1
            className="mt-6 animate-fade-up font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-[4rem]"
            style={{ animationDelay: "90ms" }}
          >
            Building <span className="gradient-text-animate">AI agent</span>{" "}
            systems that ship.
          </h1>

          <p
            className="mt-6 max-w-lg animate-fade-up text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            {profile.bio}
          </p>

          <div
            className="mt-7 flex animate-fade-up flex-wrap items-center gap-2.5"
            style={{ animationDelay: "260ms" }}
          >
            <StatusBadge dotClassName="bg-live">{shipped} shipped</StatusBadge>
            <StatusBadge dotClassName="bg-progress">{building} in progress</StatusBadge>
          </div>

          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
            style={{ animationDelay: "340ms" }}
          >
            <Button asChild size="lg" className="group font-mono">
              <a href="#projects">
                View projects{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-mono">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div
            className="mt-9 flex animate-fade-up items-center gap-5"
            style={{ animationDelay: "410ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column - signature visual: a live-looking terminal running the flagship pipeline */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-card/70 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-border/80 bg-secondary/40 px-4 py-2.5 sm:px-5">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {profile.name.toLowerCase()}@portfolio:~
              </span>
            </div>

            <div className="space-y-7 px-6 py-8 sm:px-8 sm:py-9">
              <div>
                <p className="font-mono text-xs text-muted-foreground">$ whoami</p>
                <p className="mt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
                  <Typewriter text={`${profile.name} - ${profile.role}`} />
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <p className="mb-3 font-mono text-xs text-muted-foreground">
                  $ run {flagship.id}.sh
                </p>
                <PipelineStrip stages={flagship.stages ?? []} />
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wide">
                <span className="flex items-center gap-1.5 text-live">
                  <span className="h-1.5 w-1.5 rounded-full bg-live" /> {shipped} shipped
                </span>
                <span className="flex items-center gap-1.5 text-progress">
                  <span className="h-1.5 w-1.5 rounded-full bg-progress" /> {building} building
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 flex justify-center sm:mt-24">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function StatusBadge({
  children,
  dotClassName,
}: {
  children: React.ReactNode;
  dotClassName: string;
}) {
  return (
    <Badge variant="outline" className="gap-1.5 py-1.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${dotClassName}`} aria-hidden="true" />
      {children}
    </Badge>
  );
}
