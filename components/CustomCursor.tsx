"use client";

import { useCursor } from "@/hooks/useCursor";

export default function CustomCursor() {
  const { dotRef, ringRef, isMobile } = useCursor();

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[59] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/70 transition-[transform,opacity,background-color,box-shadow] duration-200 ease-out [&.hovering]:scale-150 [&.hovering]:bg-primary/15 [&.hovering]:shadow-[0_0_0_12px_hsl(var(--primary)/0.08)]"
        aria-hidden="true"
      />
    </>
  );
}