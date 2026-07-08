import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { profile } from "@/data/projects";
import PipelineStrip from "./PipelineStrip";
import MilestoneList from "./MilestoneList";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "live";

  return (
    <Card className="group flex h-full flex-col border-border/80 bg-card/60 backdrop-blur-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.35)]">
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-4 space-y-0">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted-foreground">
            {project.index}
          </span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.name}
          </h3>
        </div>

        <Badge
          variant="outline"
          className={
            "gap-1.5 font-mono text-[11px] uppercase tracking-wide " +
            (isLive ? "border-live/30 text-live" : "border-progress/30 text-progress")
          }
        >
          <span
            className={"h-1.5 w-1.5 rounded-full " + (isLive ? "bg-live" : "bg-progress")}
            aria-hidden="true"
          />
          {isLive ? "Live" : "In progress"}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/90">
            {project.oneLiner}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {project.stages ? (
          <PipelineStrip stages={project.stages} />
        ) : project.milestones ? (
          <MilestoneList milestones={project.milestones} />
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-[11px] font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex-wrap gap-2 border-t border-border pt-5">
        {project.liveUrl && (
          <Button asChild variant="link" size="sm" className="group/link h-auto p-0 gap-1.5">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Visit live{" "}
              <ExternalLink
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="link" size="sm" className="group/link h-auto p-0 gap-1.5 text-muted-foreground">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5" aria-hidden="true" /> View code
            </a>
          </Button>
        )}
        {!isLive && !project.githubUrl && (
          <Button asChild variant="link" size="sm" className="group/link h-auto p-0 gap-1.5 text-muted-foreground">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              Follow the build{" "}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
