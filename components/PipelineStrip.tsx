import { ChevronRight } from "lucide-react";
import type { Stage } from "@/data/projects";

export default function PipelineStrip({ stages }: { stages: Stage[] }) {
  return (
    <div
      className="flex flex-wrap items-center gap-y-2"
      aria-label="Pipeline stages, in order"
    >
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center">
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 transition-colors duration-300 ease-out group-hover:border-primary/30">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-0 group-hover:animate-ping group-hover:opacity-75"
                style={{ animationDelay: `${i * 110}ms` }}
                aria-hidden="true"
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full bg-muted-foreground/50 transition-colors duration-300 ease-out group-hover:bg-primary"
                style={{ transitionDelay: `${i * 110}ms` }}
                aria-hidden="true"
              />
            </span>
            <span
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide text-muted-foreground transition-colors duration-300 ease-out group-hover:text-foreground"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {stage.label}
            </span>
          </div>
          {i < stages.length - 1 && (
            <ChevronRight
              className="mx-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-colors duration-300 ease-out group-hover:text-primary/70"
              style={{ transitionDelay: `${i * 110 + 55}ms` }}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
