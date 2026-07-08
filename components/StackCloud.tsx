import { stack } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import RevealOnScroll from "./RevealOnScroll";

export default function StackCloud() {
  return (
    <section id="stack" className="scroll-mt-20 border-b border-border px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <RevealOnScroll>
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-mono text-sm text-muted-foreground">$</span>
            <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              cat toolbox.txt
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-wrap gap-2.5">
          {stack.map((tech, i) => (
            <RevealOnScroll key={tech} delayMs={i * 25}>
              <Badge
                variant="outline"
                className="font-mono text-xs font-normal text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
              >
                {tech}
              </Badge>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
