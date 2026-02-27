import { motion } from "framer-motion";
import { Layers, BarChart3, MessageSquareText, History } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Channel Aggregation",
    description: "Pulls context from Slack, Jira, email, and meetings into one place — so your team stops hunting across five tabs to find the answer they need.",
    badge: "MCP Engine",
    mockup: <AggregationMockup />,
  },
  {
    icon: BarChart3,
    title: "Dynamic Dashboards",
    description: "See where your team's time actually goes — not just what's logged in a ticket. Effort breakdowns, risk flags, and trend lines updated in real time.",
    badge: "Visual Insights",
    mockup: <DashboardMockup />,
  },
  {
    icon: MessageSquareText,
    title: "Clarification Chat",
    description: "Ask plain-English questions like 'Why did we pick this approach?' and get answers pulled from real conversations — with links to the original source.",
    badge: "AI Memory",
    mockup: <ChatMockup />,
  },
  {
    icon: History,
    title: "Decision Ledger",
    description: "Every key decision is captured automatically from your team's discussions. Flag past missteps as lessons learned and get early warnings before you repeat them.",
    badge: "Decision History",
    mockup: <LedgerMockup />,
  },
];

function AggregationMockup() {
  const channels = [
    { name: "Slack", icon: "💬", items: ["#platform-team", "#design-reviews"] },
    { name: "Jira", icon: "📋", items: ["PLAT-217 · API migration", "PLAT-198 · Auth flow"] },
    { name: "Gmail", icon: "📧", items: ["Re: Q3 roadmap sign-off"] },
  ];
  return (
    <div className="bg-primary/90 rounded-xl p-5 space-y-3">
      {channels.map((ch) => (
        <div key={ch.name} className="bg-primary-foreground/5 rounded-lg px-4 py-3 flex items-center gap-3">
          <span className="text-lg">{ch.icon}</span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-primary-foreground/80">{ch.name}</p>
            <p className="text-[10px] text-primary-foreground/40">{ch.items.join(" · ")}</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
        </div>
      ))}
      <div className="text-center text-[10px] text-primary-foreground/30 pt-1">3 sources synced · 12 threads linked</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-primary/90 rounded-xl p-5">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "In Progress", value: "12", color: "bg-accent" },
          { label: "At Risk", value: "3", color: "bg-warning" },
          { label: "Hrs Saved", value: "47", color: "bg-success" },
        ].map((s) => (
          <div key={s.label} className="bg-primary-foreground/5 rounded-lg p-3 text-center">
            <div className={`w-2 h-2 rounded-full ${s.color} mx-auto mb-1.5`} />
            <p className="text-lg font-bold font-display text-primary-foreground">{s.value}</p>
            <p className="text-[9px] text-primary-foreground/40">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary-foreground/5 rounded-lg p-3">
        <p className="text-[10px] text-primary-foreground/40 mb-2">Weekly Effort by Team</p>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 30, 80, 55, 70, 45, 90, 60, 35, 75, 50].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-accent/60" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="bg-primary/90 rounded-xl p-5 space-y-3">
      <div className="bg-accent/20 rounded-lg px-4 py-2.5 text-xs text-primary-foreground/70 self-end ml-auto max-w-[80%]">
        Why did we switch from REST to GraphQL?
      </div>
      <div className="bg-primary-foreground/5 rounded-lg px-4 py-3 text-xs text-primary-foreground/70 max-w-[90%] space-y-2">
        <p>The team decided on GraphQL for flexibility with mobile clients — discussed in the March 5 architecture sync.</p>
        <div className="flex gap-2">
          <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">📋 Arch Sync Notes</span>
          <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">💬 #platform-team</span>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-primary-foreground/5 rounded-lg px-3 py-2">
        <span className="text-[10px] text-primary-foreground/30 flex-1">Ask a follow-up…</span>
        <span className="text-primary-foreground/20 text-xs">↵</span>
      </div>
    </div>
  );
}

function LedgerMockup() {
  const decisions = [
    { date: "Mar 5", text: "Switched to GraphQL for mobile flexibility", flag: "✅" },
    { date: "Feb 18", text: "Skipped load testing before launch", flag: "⚠️" },
    { date: "Jan 30", text: "Adopted monorepo for shared components", flag: "✅" },
  ];
  return (
    <div className="bg-primary/90 rounded-xl p-5 space-y-2">
      {decisions.map((d, i) => (
        <div key={i} className="bg-primary-foreground/5 rounded-lg px-4 py-3 flex items-center gap-3">
          <span className="text-sm">{d.flag}</span>
          <div className="flex-1">
            <p className="text-xs text-primary-foreground/70">{d.text}</p>
            <p className="text-[9px] text-primary-foreground/30">{d.date}</p>
          </div>
        </div>
      ))}
      <div className="text-center text-[10px] text-primary-foreground/30 pt-1">1 flagged for review · 3 this sprint</div>
    </div>
  );
}

const FeaturesSection = () => (
  <section id="features" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Core Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
          Everything Your Team Needs,<br />In One Place
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Four integrated capabilities that turn scattered conversations into actionable project intelligence.
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.04 }}
            className={`grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all p-8 md:p-10 ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-orange">{f.badge}</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              {f.mockup}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
