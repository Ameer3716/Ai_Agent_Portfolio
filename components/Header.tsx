"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/projects";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#stack", label: "Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-mono text-sm text-foreground transition-opacity hover:opacity-80"
        >
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          <span className="gradient-text-animate font-semibold">
            {profile.name}
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isPage = link.href.startsWith("/") && !link.href.includes("#");
            const active = isPage && pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-1 font-mono text-[11px] uppercase tracking-widest transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
