# Ameer — AI Agent Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio for AI agent
projects. No CMS, no backend — content lives in one data file, plus a couple
of static pages for About and Contact.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Hero, project list (`ls ./projects`), stack cloud (`cat toolbox.txt`).
- `/about` — bio, education, current role, "looking for," and a timeline.
- `/contact` — a form that composes a pre-filled `mailto:` link (there's no
  backend here to send it for you), plus direct contact links.

## Before you deploy — edit `data/projects.ts`

That's the file to touch for content. It has three things:

1. **`profile`** — email and GitHub are filled in; **LinkedIn and `resumeUrl`
   are still `TODO` placeholders.** Set `resumeUrl` to a path in `/public`
   (e.g. `/CV.pdf`) once you've dropped your latest CV there — the Download
   CV button on `/about` only renders once this is set.
2. **`stack`** — the toolbox strip at the bottom of the home page.
3. **`projects`** — one object per project. `liveUrl`/`githubUrl` that are
   `null` render as no link / "Follow the build" instead. Fill in the real
   ones as you have them.

To add another project, copy one of the existing objects in `projects`, give
it a new `id` and `index`, and either a `stages` array (if it's shipped —
shows the runtime pipeline) or a `milestones` array (if it's still being
built — shows a roadmap checklist instead).

## Deploy

Push to GitHub, then import the repo on [vercel.com/new](https://vercel.com/new).
Zero config needed — it's already a standard Next.js app.

```bash
git init
git add .
git commit -m "AI agent portfolio"
git remote add origin <your-repo-url>
git push -u origin main
```

## Stack

Next.js 14 · TypeScript · Tailwind CSS · lucide-react — no other dependencies.

## Design notes

Restyled to match the black-and-gold design system from the general
portfolio (`/mnt/user-data/uploads/portfolio.zip`), so the two sites read as
one visual identity:

- **Black-and-gold canvas.** Pure near-black surfaces (`--background`,
  `--card`) with a single gold accent (`--primary`, `#FACC15` family) used
  everywhere — buttons, focus rings, gradients, section labels. `live`
  (green) and `progress` (blue) stay as separate, deliberately distinct
  status colors so they don't get lost against the gold.
- **Shared utility classes** ported into `globals.css`: `.gradient-text` /
  `.gradient-text-animate` (animated gold gradient text), `.card-glass`
  (blurred glass card with a gold hover glow — used on About/Contact),
  `.section-label` (the `// LABEL` mono eyebrow with flanking rules),
  `.skill-badge`, `.available-dot` (pulsing availability indicator),
  `.highlight-line`, and a subtle `.noise` grain overlay on `<body>`.
- Kept the **terminal/systems-dashboard framing** from the original AI
  portfolio (the `whoami`/`ls`/`cat` command motif, pipeline strips,
  milestone checklists) rather than replacing it — the gold theme sits on
  top of that structure instead of overwriting it.
- Type system unchanged: **Space Grotesk** (display), **Manrope** (body),
  **JetBrains Mono** (terminal chrome). These already read close enough to
  the general portfolio's DM Sans/DM Mono pairing that a font swap wasn't
  necessary to feel consistent.
- Custom cursor from the general portfolio was **intentionally not**
  ported — it hides the OS cursor everywhere, which is more of a flourish
  than a design token, and isn't a great fit for a page recruiters may be
  scanning quickly.
- Header nav now covers `Projects` / `Stack` (anchors back to the home
  page) plus real `About` and `Contact` routes, with a static active-page
  underline (no framer-motion — kept the project dependency-free as noted
  below).
- `/contact`'s form has nowhere to POST to (this is a static site), so
  submitting it opens the visitor's email client with the message
  pre-filled instead of silently failing.
- Respects `prefers-reduced-motion` throughout (typewriter, scroll-reveal,
  hover states, ambient glow, pipeline pulse all degrade to instant/static).

## Projects added from the general portfolio

Four AI-agent-flavored projects were ported over from the general
portfolio's project list (`portfolio.zip`), reshaped to fit this project's
`stages`/`milestones` schema:

- **Instagram AI Chatbot Backend** (live) — GPT-4o-mini DM automation.
- **AI Voice Agent Platform** (live) — white-label voice agent SaaS.
- **Multi-Agent Research Assistant** (in progress) — LangGraph research
  pipeline with specialist sub-agents.
- **Agentic Data Analyst** (in progress) — ReAct agent that writes and runs
  its own Pandas code against an uploaded CSV.
