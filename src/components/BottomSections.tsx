import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import agilowA from "@/assets/agilow-a.png";

const steps = [
  {
    num: "Step 1",
    title: "Connect your tools",
    desc: "Slack, Jira, Gmail, Zoom — connect in one click. Agilow starts learning your project in the background.",
    visual: (
      <div className="bg-primary/90 rounded-xl p-4 space-y-2">
        {["Slack", "Jira", "Gmail", "Zoom"].map((t) => (
          <div key={t} className="bg-primary-foreground/5 rounded-lg px-4 py-2.5 flex items-center justify-between">
            <span className="text-xs text-primary-foreground/70">{t}</span>
            <span className="w-2 h-2 rounded-full bg-success" />
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "Step 2",
    title: "Context builds itself",
    desc: "Agilow automatically connects related conversations, tickets, and decisions across tools — no manual tagging needed.",
    visual: (
      <div className="bg-primary/90 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-1 flex-1 rounded-full bg-accent/40" />
          <div className="h-1 flex-1 rounded-full bg-accent/60" />
          <div className="h-1 flex-1 rounded-full bg-accent/80" />
          <div className="h-1 flex-1 rounded-full bg-accent" />
        </div>
        <p className="text-[10px] text-primary-foreground/40 text-center">Indexing 2,340 messages…</p>
      </div>
    ),
  },
  {
    num: "Step 3",
    title: "Ask, don't search",
    desc: "Ask questions in plain English and get answers sourced from your team's real conversations — with links to verify.",
    visual: (
      <div className="bg-primary/90 rounded-xl p-4 space-y-2">
        <div className="bg-accent/20 rounded-lg px-3 py-2 text-[10px] text-primary-foreground/60 ml-auto max-w-[75%]">What's blocking the API?</div>
        <div className="bg-primary-foreground/5 rounded-lg px-3 py-2 text-[10px] text-primary-foreground/60 max-w-[85%]">
          Vendor delay flagged in Slack #eng 2d ago. See JIRA-512.
        </div>
      </div>
    ),
  },
  {
    num: "Step 4",
    title: "Decide with evidence",
    desc: "Visual dashboards and decision history replace status meetings — so you allocate resources based on data, not gut feel.",
    visual: (
      <div className="bg-primary/90 rounded-xl p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-success/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold text-success">On Track</p>
            <p className="text-[9px] text-primary-foreground/40">8 projects</p>
          </div>
          <div className="bg-warning/10 rounded-lg p-2 text-center">
            <p className="text-xs font-bold text-warning">At Risk</p>
            <p className="text-[9px] text-primary-foreground/40">2 projects</p>
          </div>
        </div>
      </div>
    ),
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mt-3 mb-4">
          Our Simple, Smart &<br />Scalable Process
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From chaos to clarity in four steps — no data entry, no busywork.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.04 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">{step.num}</span>
            <h3 className="text-xl font-bold font-display text-foreground mt-2 mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.desc}</p>
            {step.visual}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-28 bg-gradient-hero relative overflow-hidden">
    {/* Glowing orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
      <div className="absolute inset-0 rounded-full bg-brand-orange/15 blur-[80px]" />
      <div className="absolute inset-[20%] rounded-full bg-accent/20 blur-[60px]" />
    </div>
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }} />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
