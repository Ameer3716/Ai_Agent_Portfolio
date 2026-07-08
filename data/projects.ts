// ─────────────────────────────────────────────────────────────
// Edit everything here. This is the only file you should need
// to touch to update content, links, or add a new project.
// Fields marked TODO are placeholders - swap in your real links.
// ─────────────────────────────────────────────────────────────

export type Stage = { label: string };

export type Milestone = { label: string; done: boolean };

export type Category = "AI Agents" | "Automation" | "SaaS";

export type Project = {
  id: string;
  index: string; // "01", "02" ...
  name: string;
  status: "live" | "in-progress";
  category: Category[];
  oneLiner: string;
  description: string;
  stack: string[];
  liveUrl: string | null; // TODO: replace with real deployment URL
  githubUrl: string | null; // TODO: replace with real repo URL
  // A shipped project shows its runtime pipeline (what happens when it runs).
  stages?: Stage[];
  // An in-progress project shows its build roadmap instead.
  milestones?: Milestone[];
};

export const profile = {
  name: "Ameer",
  role: "Full Stack AI Engineer",
  bio: "Software Engineering graduate from FAST-NUCES with hands-on experience in AI engineering, full-stack development, and cloud technologies. Passionate about building production-ready AI systems that solve real-world problems.",
  email: "ameersultan0310@gmail.com",
  github: "https://github.com/Ameer3716",
  linkedin: "https://www.linkedin.com/in/ameer-sultan",
  // TODO: drop your latest CV in /public and point this at it (e.g. "/CV.pdf")
  resumeUrl: null as string | null,
  location: "Pakistan · Remote-first",
};

export const stack = [
  "Python",
  "TypeScript",
  "Next.js",
  "FastAPI",
  "Express",
  "LangChain",
  "LangGraph",
  "Gemini",
  "Chroma",
  "Qdrant",
  "PostgreSQL",
  "SQLite",
  "Docker",
  "Twilio",
  "AWS",
  "OpenAI",
  "Stripe",
  "Socket.io",
  "Pandas",
];

export const projects: Project[] = [
  {
    id: "speed-to-lead",
    index: "01",
    name: "Speed-to-Lead Automation",
    status: "live",
    category: ["Automation"],
    oneLiner:
      "Responds to a new lead the moment it lands - texts, books, and escalates if no one follows up in 10 minutes.",
    description:
      "Most businesses take hours to answer a new lead; this fires inside seconds. It watches the intake channel, auto-texts or emails a booking link, logs the lead, and pings the owner directly if it isn't booked within 10 minutes.",
    stack: ["FastAPI", "Twilio", "SendGrid", "SQLite"],
    liveUrl: "https://speedtoleadautomation.onrender.com",
    githubUrl: "https://github.com/Ameer3716/SpeedToLead_Automation.git",
    stages: [
      { label: "Lead In" },
      { label: "Auto-Text / Email" },
      { label: "Book" },
      { label: "Escalate (10m)" },
    ],
  },
  {
    id: "b2b-research-outreach-agent",
    index: "02",
    name: "B2B Research Outreach Agent",
    status: "live",
    category: ["AI Agents", "Automation"],
    oneLiner:
      "Multi-tenant outreach agent that researches a lead, drafts a personalized email, and waits for a human OK before sending.",
    description:
      "A six-stage agent pipeline behind a Next.js dashboard: it researches each prospect, pulls context through RAG, drafts outreach copy, holds at a review gate for approval, sends, and tracks replies - all scoped per tenant.",
    stack: ["Next.js", "Express", "SQLite", "Chroma", "Gemini"],
    liveUrl: "https://b2-b-research-outreach-agent.vercel.app/login?from=%2F",
    githubUrl: "https://github.com/Ameer3716/B2B_Research_Outreach_Agent.git",
    stages: [
      { label: "Research" },
      { label: "RAG" },
      { label: "Draft" },
      { label: "Review Gate" },
      { label: "Send" },
      { label: "Track" },
    ],
  },
  {
    id: "ai-support-agent",
    index: "03",
    name: "AI Support Agent",
    status: "live",
    category: ["AI Agents", "SaaS"],
    oneLiner:
      "A support chatbot trained on a business's own docs - embedded on their site, and live on WhatsApp and Instagram.",
    description:
      "Multi-tenant RAG chatbot SaaS with an embeddable widget, an admin dashboard, per-client usage quotas, and pluggable LLM providers (Groq, Gemini, Ollama, OpenAI, Anthropic) so cost scales with the client, not the platform.",
    stack: ["Node.js", "Express", "SQLite", "Next.js", "Twilio", "Meta API"],
    liveUrl: "https://ai-support-agent-mu.vercel.app/",
    githubUrl: "https://github.com/Ameer3716/Ai_Support_Agent.git",
    stages: [
      { label: "Ingest Docs" },
      { label: "Embed" },
      { label: "Retrieve" },
      { label: "Respond" },
      { label: "Route (Web / WhatsApp / IG)" },
    ],
  },
  {
    id: "instagram-ai-chatbot",
    index: "05",
    name: "Instagram AI Chatbot Backend",
    status: "live",
    category: ["AI Agents", "Automation"],
    oneLiner:
      "Replies to Instagram DMs like a human would - real webhook automation, not a canned auto-responder.",
    description:
      "A production Instagram DM backend that integrates GPT-4o-mini for natural conversational replies. Processes Meta webhooks in real time, simulates a human typing delay before sending, and keeps per-conversation session memory so replies stay in context.",
    stack: ["Python", "FastAPI", "OpenAI GPT-4o-mini", "Instagram API", "asyncio"],
    liveUrl: "https://insta-chatbot.vercel.app/",
    githubUrl: "https://github.com/Ameer3716/instachatbot_backend.git",
    stages: [
      { label: "Webhook In" },
      { label: "Typing Delay" },
      { label: "GPT-4o-mini Reply" },
      { label: "Session Memory" },
      { label: "Send" },
    ],
  },
  {
    id: "ai-voice-agent-platform",
    index: "06",
    name: "AI Voice Agent Platform",
    status: "live",
    category: ["SaaS", "Automation"],
    oneLiner:
      "White-label SaaS for managing AI voice agents - CRM-synced, billed, and logged in real time.",
    description:
      "A white-label platform for running AI voice agents at agency scale: GoHighLevel CRM integration, real-time call logging over Socket.io, and Stripe-metered subscriptions, split across a dual Node.js + FastAPI backend.",
    stack: ["Node.js", "FastAPI", "PostgreSQL", "Stripe", "Socket.io"],
    liveUrl: "https://frontend-eight-mu-75.vercel.app/",
    githubUrl: "https://github.com/Ameer3716/frontend.git",
    stages: [
      { label: "Call In" },
      { label: "CRM Sync" },
      { label: "Log (Socket.io)" },
      { label: "Bill (Stripe)" },
    ],
  },
  {
    id: "enterprise-ai-agent-platform",
    index: "04",
    name: "Enterprise AI Agent Platform",
    status: "in-progress",
    category: ["AI Agents", "SaaS"],
    oneLiner:
      "A production-grade multi-agent platform - supervisor, planner, and retrieval agents coordinated through LangGraph, with real multi-tenancy and audit logs.",
    description:
      "The next build: a full enterprise stack demonstrating multi-agent orchestration, hybrid RAG, MCP tool registries, long-term memory, human-in-the-loop review, and a monitored production deployment - not just a demo repo.",
    stack: ["Vue 3", "FastAPI", "LangGraph", "LangChain", "PostgreSQL", "Qdrant"],
    liveUrl: null,
    githubUrl: null, // TODO
    milestones: [
      { label: "Foundation - auth, RBAC, dashboard shell", done: false },
      { label: "RAG Engine - chunking, embeddings, hybrid search", done: false },
      { label: "Multi-Agent - supervisor, planner, retriever, reflection", done: false },
      { label: "Memory & MCP - long-term memory, tool registry", done: false },
      { label: "Tool Calling - SQL, Python, GitHub, Calendar, Email", done: false },
      { label: "Production Dashboard - chat, agent graph, logs", done: false },
      { label: "Enterprise Features - orgs, API keys, rate limits, audit logs", done: false },
      { label: "Deployment - Docker, CI/CD, monitoring", done: false },
    ],
  },
];
