import { ArrowRight } from "lucide-react";
import { profile, projects, stack } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

export default function AboutPreview() {
  const shipped = projects.filter((p) => p.status === "live").length;
  const building = projects.filter((p) => p.status === "in-progress").length;

  const stats = [
    { label: "Shipped Projects", value: String(shipped) },
    { label: "Currently Building", value: String(building) },
    { label: "Tools In Stack", value: String(stack.length) },
  ];

  return (
    <section id="about" className="scroll-mt-20 border-b border-border px-6 py-24 sm:px-10">
      <div className="mx-auto grid w-full max-w-4xl gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
        <RevealOnScroll className="lg:col-span-3">
          <p className="section-label">Who I am</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About <span className="gradient-text-animate">me</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            My focus is multi-agent pipelines, retrieval-augmented generation, and multi-tenant
            AI SaaS - systems with a real research → draft → review → send lifecycle, not a
            single prompt wrapper.
          </p>

          <a
            href="/about"
            className="group mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-primary"
          >
            Read more
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-glass p-5">
                <p className="gradient-text font-display text-3xl font-semibold">{s.value}</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
            <div className="card-glass flex flex-col justify-center p-5">
              <div className="flex items-center gap-2">
                <span className="available-dot" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  Status
                </span>
              </div>
              <p className="mt-1.5 font-display text-lg font-semibold text-foreground">
                Available
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
