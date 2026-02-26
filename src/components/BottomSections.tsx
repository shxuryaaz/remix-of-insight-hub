import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import agilowA from "@/assets/agilow-a.png";

const HowItWorksSection = () => {
  const steps = [
    { num: "01", title: "Connect your tools", desc: "Slack, Jira, Gmail, Zoom — one-click integrations. The MCP indexes everything in the background." },
    { num: "02", title: "Context builds itself", desc: "Entity resolution links conversations, tickets, and decisions. No data entry required." },
    { num: "03", title: "Ask, don't search", desc: "Query your project's memory through the Agilow Chat. Every answer cites its source." },
    { num: "04", title: "Decide with evidence", desc: "Dashboards, risk heatmaps, and decision history replace gut-check status meetings." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
            From chaos to clarity in 4 steps
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6 items-start bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <span className="text-3xl font-bold font-display text-brand-orange/30 shrink-0">{step.num}</span>
              <div>
                <h3 className="text-lg font-bold font-display text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }} />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={agilowA} alt="" className="w-16 h-16 mx-auto mb-6 animate-float" />
        <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
          Ready to stop routing<br />and start leading?
        </h2>
        <p className="text-lg text-primary-foreground/60 mb-10 max-w-lg mx-auto">
          Join the waitlist for the Project Context Engine that gives your team self-serve intelligence.
        </p>
        <Button variant="hero" size="xl">
          Request Early Access
          <ArrowRight className="ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-primary-foreground/50 text-sm">© 2026 Agilow. All rights reserved.</span>
      <div className="flex gap-6 text-primary-foreground/40 text-sm">
        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms</a>
        <a href="#" className="hover:text-primary-foreground/70 transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export { HowItWorksSection, CTASection, Footer };
