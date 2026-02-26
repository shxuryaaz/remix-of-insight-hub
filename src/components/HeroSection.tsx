import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import agilowLogoWhite from "@/assets/agilow-logo-white.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-sidebar-border">
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <img src={agilowLogoWhite} alt="Agilow" className="h-8" />
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">Features</a>
        <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">How It Works</a>
        <a href="#personas" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">For Teams</a>
        <Button variant="hero" size="sm">Get Early Access</Button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] bg-gradient-hero flex items-center overflow-hidden pt-16">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "40px 40px"
    }} />
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-soft" />
          <span className="text-primary-foreground/80 text-sm font-medium">Project Context Engine</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6 font-display">
          Stop being your team's{" "}
          <span className="text-brand-orange">human router.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl">
          Agilow aggregates context from Slack, Jira, email, and meetings into one intelligent platform — so your team finds answers, not you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="xl">
            Request Early Access
            <ArrowRight className="ml-1" />
          </Button>
          <Button variant="hero-outline" size="xl">
            See How It Works
          </Button>
        </div>
        
        <div className="mt-12 flex items-center gap-6 text-primary-foreground/50 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Save 6–10 hrs/week
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Zero data entry
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full" />
            Source-cited AI
          </span>
        </div>
      </motion.div>
    </div>

    {/* Dashboard mockup floating */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%]"
    >
      <DashboardPreview />
    </motion.div>
  </section>
);

const DashboardPreview = () => (
  <div className="bg-card rounded-2xl shadow-card-hover p-6 mr-8 border border-border">
    <div className="flex items-center gap-3 mb-5">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-danger/60" />
        <div className="w-3 h-3 rounded-full bg-warning/60" />
        <div className="w-3 h-3 rounded-full bg-success/60" />
      </div>
      <span className="text-xs text-muted-foreground font-medium">Project Health Dashboard</span>
    </div>
    
    {/* Mini cards */}
    <div className="grid grid-cols-3 gap-3 mb-4">
      {[
        { label: "Active Projects", value: "12", color: "bg-accent" },
        { label: "At Risk", value: "2", color: "bg-warning" },
        { label: "Hours Saved", value: "47", color: "bg-success" },
      ].map((stat) => (
        <div key={stat.label} className="bg-secondary rounded-lg p-3">
          <div className={`w-2 h-2 rounded-full ${stat.color} mb-2`} />
          <p className="text-xl font-bold font-display text-foreground">{stat.value}</p>
          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Fake chart */}
    <div className="bg-secondary rounded-lg p-4 mb-3">
      <p className="text-xs text-muted-foreground mb-3 font-medium">Team Effort Distribution</p>
      <div className="flex items-end gap-1.5 h-16">
        {[40, 65, 30, 80, 55, 70, 45, 90, 60, 35, 75, 50].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-accent/70 transition-all" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>

    {/* Activity feed */}
    <div className="space-y-2">
      {[
        { icon: "🔗", text: "Decision captured: Auth architecture pivot", source: "Slack" },
        { icon: "⚡", text: "Risk flagged: API vendor delay detected", source: "Jira" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
          <span className="text-sm">{item.icon}</span>
          <span className="text-xs text-foreground flex-1">{item.text}</span>
          <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">{item.source}</span>
        </div>
      ))}
    </div>
  </div>
);

export { Navbar, HeroSection };
