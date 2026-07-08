import { Circle } from "lucide-react";
import type { Milestone } from "@/data/projects";

export default function MilestoneList({
  milestones,
}: {
  milestones: Milestone[];
}) {
  return (
    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2" aria-label="Build roadmap">
      {milestones.map((m) => (
        <li
          key={m.label}
          className="group flex items-start gap-2 transition-colors"
        >
          <Circle
            className="mt-[3px] h-3 w-3 shrink-0 text-progress transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="font-mono text-[11px] uppercase leading-snug tracking-wide text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
            {m.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
