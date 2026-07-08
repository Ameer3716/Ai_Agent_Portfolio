"use client";

import { useMemo, useState } from "react";
import { projects, type Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";
import { cn } from "@/lib/utils";

const FILTERS: Array<Category | "All"> = ["All", "AI Agents", "Automation", "SaaS"];

export default function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <RevealOnScroll>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                My recent <span className="gradient-text-animate">work</span>
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-all duration-200",
                    active === f
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.6)]"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <RevealOnScroll key={project.id} delayMs={i * 60}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center font-mono text-sm text-muted-foreground">
            Nothing here yet - try a different filter.
          </p>
        )}
      </div>
    </section>
  );
}
