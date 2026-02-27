import { motion } from "framer-motion";
import { User, Code2, LineChart } from "lucide-react";

const personas = [
  {
    icon: User,
    role: "Product Managers",
    name: "Sarah",
    pain: "I spend half my day answering the same questions over and over.",
    solution: "Her team queries Agilow's Chat instead of pinging Sarah. She reclaims 6 hours a week for actual product work.",
    metric: "–30% direct PM pings",
  },
  {
    icon: Code2,
    role: "Engineers",
    name: "Leo",
    pain: "The ticket says what to build, but never why. I'm afraid to ask.",
    solution: "The Decision Ledger shows him the reasoning behind past choices — with links to the original conversation. Full context, zero awkwardness.",
    metric: "Zero onboarding anxiety",
  },
  {
    icon: LineChart,
    role: "Executives",
    name: "Elena",
    pain: "I hear 'everything is on track' — then it slips two weeks later.",
    solution: "Agilow's risk dashboard spots rising frustration and bottlenecks in team conversations before they become full-blown crises.",
    metric: "2-week risk lead time",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const PersonasSection = () => (
  <section id="personas" className="py-24 bg-secondary/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Who It's For</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
          Every role, one source of truth
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {personas.map((p) => (
          <motion.div
            key={p.role}
            variants={item}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <p.icon className="w-5 h-5 text-accent" />
            </div>
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">{p.role}</span>
            <h3 className="text-lg font-bold font-display text-foreground mt-1 mb-3">{p.name}'s Story</h3>
            <p className="text-sm text-muted-foreground mb-3 italic">"{p.pain}"</p>
            <p className="text-sm text-foreground/80 mb-4">{p.solution}</p>
            <div className="bg-success/10 text-success rounded-lg px-3 py-2 text-xs font-semibold inline-block">
              {p.metric}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PersonasSection;
