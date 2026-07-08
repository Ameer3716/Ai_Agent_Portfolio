"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/projects";
import { cn } from "@/lib/utils";

function FloatingField({
  label,
  as = "input",
  type = "text",
  value,
  onChange,
  required,
  rows,
}: {
  label: string;
  as?: "input" | "textarea";
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = as;

  return (
    <div className="relative">
      <label
        className={cn(
          "pointer-events-none absolute left-4 z-10 transition-all duration-200",
          active
            ? "top-2 font-mono text-[10px] tracking-wider text-primary"
            : rows
              ? "top-4 text-sm text-muted-foreground"
              : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      <Tag
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={cn(
          "w-full resize-none rounded-xl border border-border bg-background px-4 pb-2.5 pt-6 text-sm text-foreground transition-all duration-200 focus:border-primary/60 focus:outline-none",
          rows && "pt-7"
        )}
      />
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n-\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass space-y-5 p-8">
      <FloatingField
        label="Your Name"
        value={form.name}
        onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        required
      />
      <FloatingField
        label="Email Address"
        type="email"
        value={form.email}
        onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        required
      />
      <FloatingField
        label="Message"
        as="textarea"
        rows={5}
        value={form.message}
        onChange={(v) => setForm((f) => ({ ...f, message: v }))}
        required
      />

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.6)]"
      >
        <Send className="h-4 w-4" /> Send Message
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Opens your email client with this filled in - this site has no backend to send it for you.
      </p>

      {sent && (
        <p className="text-center text-sm text-live">
          Your email client should be open now. If nothing happened, just email{" "}
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
