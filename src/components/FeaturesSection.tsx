import { motion } from "framer-motion";
import { Layers, BarChart3, MessageSquareText, History } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Channel Aggregation",
    description: "Automatically indexes Slack, Jira, email, and meeting transcripts. Entity resolution links 'the checkout bug' to JIRA-402 across all channels.",
    badge: "MCP Engine",
    mockup: <AggregationMockup />,
  },
  {
    icon: BarChart3,
    title: "Dynamic Dashboards",
    description: "Real-time effort distribution, risk heatmaps, and sentiment analysis. See where hours actually go — not just what's in the ticket tracker.",
    badge: "Visual Insights",
    mockup: <DashboardMockup />,
  },
  {
    icon: MessageSquareText,
    title: "Clarification Chat",
    description: "Ask 'Why did we choose X?' and get an answer synthesized from meeting notes and Slack threads — with direct source links.",
    badge: "AI Memory",
    mockup: <ChatMockup />,
  },
  {
    icon: History,
    title: "Decision Ledger",
    description: "Automated decision capture from threads. Flag past mistakes as lessons. Get proactive warnings when history is about to repeat.",
    badge: "Decision History",
    mockup: <LedgerMockup />,
  },
];

function AggregationMockup() {
  const channels = [
    { name: "Slack", icon: "💬", items: ["#eng-backend", "#product-sync"] },
    { name: "Jira", icon: "📋", items: ["JIRA-402", "JIRA-318"] },
    { name: "Gmail", icon: "📧", items: ["Re: API contract"] },
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
      <div className="text-center text-[10px] text-primary-foreground/30 pt-1">Entity resolution active</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-primary/90 rounded-xl p-5">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Active", value: "12", color: "bg-accent" },
          { label: "At Risk", value: "2", color: "bg-warning" },
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
        <p className="text-[10px] text-primary-foreground/40 mb-2">Effort Distribution</p>
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
        Why did we choose Redis over Memcached?
      </div>
      <div className="bg-primary-foreground/5 rounded-lg px-4 py-3 text-xs text-primary-foreground/70 max-w-[90%] space-y-2">
        <p>The team chose Redis for its persistence and pub/sub support during the Feb 12 arch meeting.</p>
        <div className="flex gap-2">
          <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">📋 Meeting Notes</span>
          <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">💬 Slack #eng</span>
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
    { date: "Feb 12", text: "Chose Redis over Memcached", flag: "✅" },
    { date: "Jan 28", text: "Custom auth library adopted", flag: "⚠️" },
    { date: "Jan 15", text: "Monorepo migration approved", flag: "✅" },
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
      <div className="text-center text-[10px] text-primary-foreground/30 pt-1">3 decisions this sprint</div>
    </div>
  );
}

const FeaturesSection = () => (
  <section id="features" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
          AI Solutions That Power<br />Your Project Intelligence
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We design, connect, and deploy context engines that help your team work smarter, not harder.
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
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
