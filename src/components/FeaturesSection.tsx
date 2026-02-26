import { motion } from "framer-motion";
import { Layers, BarChart3, MessageSquareText, History } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Channel Aggregation",
    description: "Automatically indexes Slack, Jira, email, and meeting transcripts. Entity resolution links 'the checkout bug' to JIRA-402 across all channels.",
    badge: "MCP Engine",
  },
  {
    icon: BarChart3,
    title: "Dynamic Dashboards",
    description: "Real-time effort distribution, risk heatmaps, and sentiment analysis. See where hours actually go — not just what's in the ticket tracker.",
    badge: "Visual Insights",
  },
  {
    icon: MessageSquareText,
    title: "Clarification Chat",
    description: "Ask 'Why did we choose X?' and get an answer synthesized from meeting notes and Slack threads — with direct source links.",
    badge: "AI Memory",
  },
  {
    icon: History,
    title: "Decision Ledger",
    description: "Automated decision capture from threads. Flag past mistakes as lessons. Get proactive warnings when history is about to repeat.",
    badge: "Decision History",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Core Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
          Your team's context, structured
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Four engines working together to eliminate information decay and make project intelligence self-serve.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-accent/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-orange">{f.badge}</span>
                <h3 className="text-xl font-bold font-display text-foreground mt-1 mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
